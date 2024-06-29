const { app, BrowserWindow } = require ('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 700,
        height: 500,
    })

    win.loadURL(`file:${__dirname}/dist/password-generator/browser/index.html`)

    // include DevToolsnpm 
    win.webContents.openDevTools()

    win.on('closed', function() {
        win=null
    })
}

app.on(`ready`, createWindow)

// for macOS, keeping the app on for window close and for others, app quits.
app.on('window-all-closed', function() {
    if(process.platform !=='darwin') {
        app.quit()
    }
})

app.on('activate', function() {
    if(win === null) {
        createWindow()
    }
})