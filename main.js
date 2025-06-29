const path = require('path');
const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile(path.join(__dirname, 'client', 'build', 'index.html'));
}

app.whenReady().then(() => {
  const serverPath = path.join(__dirname, 'server', 'index.js');
  exec(`node "${serverPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Backend start error: ${error}`);
      return;
    }
    console.log(`Backend stdout: ${stdout}`);
    console.error(`Backend stderr: ${stderr}`);
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
