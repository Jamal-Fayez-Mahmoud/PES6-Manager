const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('pesBridge', {
  selectFile: () => ipcRenderer.invoke('select-pes-file'),
  launchPes: (exePath) => ipcRenderer.invoke('launch-pes6', exePath),
  onGameClosed: (callback) => ipcRenderer.on('pes-game-closed', (_event, value) => callback(value)),
  onMatchResultDetected: (callback) => ipcRenderer.on('pes-match-result-detected', (_event, value) => callback(value))
});