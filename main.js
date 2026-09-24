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

// Launch and monitor PES 6 Process Exit
ipcMain.handle('launch-pes6', async (event, exePath) => {
  return new Promise((resolve) => {
    if (!exePath || !fs.existsSync(exePath)) {
      return resolve({ success: false, error: 'Executable not found on disk.' });
    }

    const gameDir = path.dirname(exePath);

    // Spawn native child process to track lifecycle
    const pesProcess = spawn(exePath, [], { cwd: gameDir, detached: false });

    pesProcess.on('error', (err) => {
      resolve({ success: false, error: err.message });
    });

    // Notify frontend game has started
    resolve({ success: true });

    // Catch the exact millisecond the user quits PES 6
    pesProcess.on('close', (code) => {
      if (mainWindow && !mainWindow.isDestroyed()) {
        mainWindow.webContents.send('pes-game-closed', { exitCode: code });
      }
    });
  });
});