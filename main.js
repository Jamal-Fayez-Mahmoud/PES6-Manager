const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

// 1. Prevent Chromium DWM paint freezing on initial window launch
app.commandLine.appendSwitch('disable-gpu-compositing');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1250,
    height: 820,
    minWidth: 1000,
    minHeight: 700,
    backgroundColor: '#0f1117',
    show: false, // Don't show immediately until the DOM is painted and ready for input
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  mainWindow.loadFile('index.html');

  // 2. Only reveal and focus the window once it is fully ready to receive clicks
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// File picker dialog
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

// Windows Native Launch Command
ipcMain.handle('launch-pes6', async (event, exePath) => {
  return new Promise((resolve) => {
    if (!exePath || !fs.existsSync(exePath)) {
      return resolve({ success: false, error: 'File not found on disk. Re-select in Settings.' });
    }

    const gameDir = path.dirname(exePath);

    exec(`start "" "${exePath}"`, { cwd: gameDir }, (error, stdout, stderr) => {
      if (error) {
        return resolve({ success: false, error: error.message });
      }
      resolve({ success: true });
    });
  });
});