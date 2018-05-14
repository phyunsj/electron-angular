const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 500, 
    height: 700,
    minWidth: 500, 
    minHeight: 500,
    maxWidth: 500, 
    maxHeight: 800,
    maximizable : false,
    //frame: false, // remove menu bar. 
    backgroundColor: '#ffffff'
  })

  //win.loadURL(`file://${__dirname}/dist/index.html`)
  win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }))

  //win.webContents.openDevTools() // to open the DevTools.

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') { // macOS specific close
    app.quit()
  }
})

app.on('activate', function () {
  if (win === null) { // macOS specific close
    createWindow()
  }
})