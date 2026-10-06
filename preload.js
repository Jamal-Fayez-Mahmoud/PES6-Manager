const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('pesBridge', {
  selectFile: () => ipcRenderer.invoke('select-file'),
  launchPes: (exePath) => ipcRenderer.invoke('launch-pes', exePath),
  onMatchResultDetected: (callback) => ipcRenderer.on('match-result-detected', (event, data) => callback(data)),
  onGameClosed: (callback) => ipcRenderer.on('pes-closed', () => callback()),
  onError: (callback) => ipcRenderer.on('pes-error', (event, err) => callback(err))
});