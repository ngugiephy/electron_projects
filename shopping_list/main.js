const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// listen for the app to be ready
app.on("ready", function(){
    // create new window
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "mainWindow.html"),
        protocol : "file",
        slashes: true
    }));

    // quit app when closed
    mainWindow.on("closed", function(){
        app.quit();
    })

    // build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

    // insert manu
    Menu.setApplicationMenu(mainMenu)
})

// Create menu template
const mainMenuTemplate = [
    {
        label:'File',
        submenu: [
            {
                label: "Add Item"
            },
            {
                label: "Clear Items"
            },
            {
                label: "Quit",
                accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
                click(){
                    app.quit();
                }
            }
        ]
    }
];