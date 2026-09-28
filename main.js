const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { spawn, exec } = require('child_process');
const fs = require('fs');

app.commandLine.appendSwitch('disable-gpu-compositing');
app.commandLine.appendSwitch('disable-direct-composition');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1250,
    height: 820,
    minWidth: 1000,
    minHeight: 700,
    backgroundColor: '#0f1117',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('select-pes-file', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Select pes6.exe',
    properties: ['openFile'],
    filters: [{ name: 'Executable', extensions: ['exe'] }]
  });

  if (!result.canceled && result.filePaths.length > 0) {
    return result.filePaths[0];
  }
  return null;
});

// Function to scan PES 6 memory for match results via Windows Kernel32
function readPes6MatchMemory(pid, callback) {
  // In classic PES 6 (1.0 default exe), exhibition/cup scores are located around offset base pointers.
  // We execute a brief Win32 memory scan via PowerShell calling Kernel32 ReadProcessMemory.
  const psScript = `
    $ErrorActionPreference = 'SilentlyContinue'
    $code = @"
    using System;
    using System.Runtime.InteropServices;
    public class MemoryReader {
      [DllImport("kernel32.dll")]
      public static extern IntPtr OpenProcess(int dwDesiredAccess, bool bInheritHandle, int dwProcessId);
      [DllImport("kernel32.dll")]
      public static extern bool ReadProcessMemory(IntPtr hProcess, IntPtr lpBaseAddress, byte[] lpBuffer, int dwSize, out int lpNumberOfBytesRead);
      [DllImport("kernel32.dll")]
      public static extern bool CloseHandle(IntPtr hObject);
    }
"@
    Add-Type -TypeDefinition $code -Language CSharp
    $proc = Get-Process -Id ${pid} -ErrorAction SilentlyContinue
    if (-not $proc) { Write-Output "FAILED"; exit }

    $hProc = [MemoryReader]::OpenProcess(0x0010, $false, $proc.Id)
    if ($hProc -eq [IntPtr]::Zero) { Write-Output "FAILED"; exit }

    # PES 6 standard match score memory offsets (Base + Static Exhibition/League Match Block)
    # Common offsets for PES 6 1.0: 0x0111A3E0, 0x01127050 (Home: +0x0, Away: +0x4 or +0x2)
    $buffer = New-Object byte[] 4
    $bytesRead = 0
    
    # Read primary target address
    $addr = [IntPtr](0x0111A3E0)
    $success = [MemoryReader]::ReadProcessMemory($hProc, $addr, $buffer, 4, [ref]$bytesRead)
    [MemoryReader]::CloseHandle($hProc)

    if ($success) {
      $home = [int]$buffer[0]
      $away = [int]$buffer[2]
      if ($home -lt 25 -and $away -lt 25) {
        Write-Output "$home:$away"
      } else {
        Write-Output "INVALID"
      }
    } else {
      Write-Output "FAILED"
    }
  `;

  exec(`powershell -NoProfile -ExecutionPolicy Bypass -Command "${psScript.replace(/\n/g, ' ')}"`, (err, stdout) => {
    if (err || !stdout) return callback(null);
    const cleaned = stdout.trim();
    if (cleaned.includes(":") && !cleaned.includes("FAILED") && !cleaned.includes("INVALID")) {
      const [h, a] = cleaned.split(":").map(Number);
      return callback({ home: h, away: a });
    }
    return callback(null);
  });
}

// Launch PES 6 and hook memory poll loop
ipcMain.handle('launch-pes6', async (event, exePath) => {
  return new Promise((resolve) => {
    if (!exePath || !fs.existsSync(exePath)) {
      return resolve({ success: false, error: 'Executable not found on disk.' });
    }

    const gameDir = path.dirname(exePath);
    const pesProcess = spawn(exePath, [], { cwd: gameDir, detached: false });

    pesProcess.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });

    resolve({ success: true });

    let latestScore = null;

    // Background poller: Read memory every 2 seconds while match is running
    const pollInterval = setInterval(() => {
      if (pesProcess.killed || !pesProcess.pid) {
        clearInterval(pollInterval);
        return;
      }
      readPes6MatchMemory(pesProcess.pid, (result) => {
        if (result) latestScore = result;
      });
    }, 2000);

    // On game exit: dispatch final score or notify frontend
    pesProcess.on('close', (code) => {
      clearInterval(pollInterval);
      if (mainWindow && !mainWindow.isDestroyed()) {
        if (latestScore) {
          mainWindow.webContents.send('pes-match-result-detected', latestScore);
        } else {
          mainWindow.webContents.send('pes-game-closed', { exitCode: code });
        }
      }
    });
  });
});