const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { spawn, exec } = require('child_process');

let mainWindow;
let pesProcess = null;
let memoryPollingInterval = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1360,
    height: 860,
    minWidth: 1100,
    minHeight: 720,
    frame: true,
    backgroundColor: '#0f1117',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.loadFile('index.html');
  // mainWindow.webContents.openDevTools(); // Uncomment to debug if needed
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (memoryPollingInterval) clearInterval(memoryPollingInterval);
  if (process.platform !== 'darwin') app.quit();
});

// File Browser for Game Executable
ipcMain.handle('select-file', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: 'Locate pes6.exe',
    properties: ['openFile'],
    filters: [{ name: 'PES 6 Executable', extensions: ['exe'] }]
  });

  if (result.canceled || result.filePaths.length === 0) return null;
  return result.filePaths[0];
});

// Native Win32 Memory Reader Script (PowerShell API Wrapper)
function inspectPes6Memory(pid, callback) {
  // Win32 ReadProcessMemory inspection for standard PES 6 patch signatures
  // Offsets cover 1.0 vanilla and modern widescreen / community executables
  const psScript = `
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

    public static int[] ReadMatchData(int pid) {
        IntPtr hProc = OpenProcess(0x0010, false, pid); // PROCESS_VM_READ (0x0010)
        if (hProc == IntPtr.Zero) return new int[] { -1, -1 };

        byte[] buf = new byte[8];
        int read;

        // Primary match status & goal offsets
        IntPtr[] testOffsets = new IntPtr[] { 
            (IntPtr)0x0111A3E0, 
            (IntPtr)0x00B64ABC, 
            (IntPtr)0x010FA2C4, 
            (IntPtr)0x00FB4240 
        };

        foreach (IntPtr baseAddr in testOffsets) {
            bool ok = ReadProcessMemory(hProc, baseAddr, buf, 8, out read);
            if (ok && read >= 2) {
                int home = (int)buf[0];
                int away = (int)buf[1];
                // Sanity check: valid match scores under normal play
                if (home >= 0 && home <= 25 && away >= 0 && away <= 25) {
                    CloseHandle(hProc);
                    return new int[] { home, away };
                }
            }
        }

        CloseHandle(hProc);
        return new int[] { -1, -1 };
    }
}
"@
Add-Type -TypeDefinition $code -Language CSharp
$res = [MemoryReader]::ReadMatchData(${pid})
Write-Output "$($res[0]),$($res[1])"
  `;

  exec(`powershell -NoProfile -NonInteractive -Command "${psScript.replace(/\r?\n/g, ' ')}"`, (err, stdout) => {
    if (err || !stdout) {
      callback(null);
      return;
    }
    const clean = stdout.trim();
    const parts = clean.split(',');
    if (parts.length === 2) {
      const h = parseInt(parts[0]);
      const a = parseInt(parts[1]);
      if (h >= 0 && a >= 0) {
        callback({ home: h, away: a });
        return;
      }
    }
    callback(null);
  });
}

// Launch PES 6 Process and Monitor RAM
ipcMain.handle('launch-pes', async (event, exePath) => {
  if (!exePath) return { success: false, error: 'No executable path provided.' };

  try {
    const gameDir = path.dirname(exePath);
    pesProcess = spawn(exePath, [], {
      cwd: gameDir,
      detached: false
    });

    let detectedFinalScore = null;

    // Background RAM Poller (Scrapes every 2 seconds while match is live)
    if (pesProcess.pid) {
      memoryPollingInterval = setInterval(() => {
        if (!pesProcess || pesProcess.killed) {
          clearInterval(memoryPollingInterval);
          return;
        }

        inspectPes6Memory(pesProcess.pid, (scoreData) => {
          if (scoreData) {
            detectedFinalScore = scoreData;
          }
        });
      }, 2000);
    }

    pesProcess.on('error', (err) => {
      if (memoryPollingInterval) clearInterval(memoryPollingInterval);
      mainWindow.webContents.send('pes-error', err.message);
    });

    pesProcess.on('close', () => {
      if (memoryPollingInterval) clearInterval(memoryPollingInterval);
      pesProcess = null;

      // If RAM scan caught a verified final score, automatically sync it
      if (detectedFinalScore) {
        mainWindow.webContents.send('match-result-detected', detectedFinalScore);
      } else {
        // Fallback to manual score validator modal
        mainWindow.webContents.send('pes-closed');
      }
    });

    return { success: true };
  } catch (error) {
    if (memoryPollingInterval) clearInterval(memoryPollingInterval);
    return { success: false, error: error.message };
  }
});