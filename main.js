const { app, BrowserWindow } = require ('electron')

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 300,
        resizable: false
    })

    win.loadURL(`file:${__dirname}/dist/password-generator/index.html`)

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