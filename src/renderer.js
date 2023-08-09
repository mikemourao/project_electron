const { ipcRenderer } = require('electron');

const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', () => {
  ipcRenderer.send('upload-file');
});

ipcRenderer.on('uploaded-file-path', (event, filePath) => {
  // Use the filePath as needed
  console.log('Uploaded file path:', filePath);
});
