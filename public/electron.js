const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');

// process.env.NODE_ENV = 'production';

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`); // Correção aqui
});

// Handling the file upload process
ipcMain.on('upload-file', async (event) => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile'],
    filters: [
      { name: 'Images', extensions: ['jpg', 'jpeg', 'png', 'gif'] }
    ],
    defaultPath: path.join(app.getPath('pictures'), 'Caneca') // Caminho para a subpasta "Caneca"
  });

  if (!result.canceled) {
    const filePath = result.filePaths[0];
    event.sender.send('uploaded-file-path', filePath);
  }
});

