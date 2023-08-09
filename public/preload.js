const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInIsolatedWorld('api', {
    title: 'The Upload App'
})