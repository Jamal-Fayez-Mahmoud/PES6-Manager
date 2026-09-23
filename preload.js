const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('pesBridge', {
  selectFile: () => ipcRenderer.invoke('select-pes-file'),
  launchPes: (exePath) => ipcRenderer.invoke('launch-pes6', exePath)
});