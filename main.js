const {
  app,
  BrowserWindow,
} = require('electron')

const path = require('path')
const ChildProcess = require('child_process')

let win
let frmWidth = 600
let frmHeight = 600
let url = 'https://www.youtube.com/'

if (handleSquirrelEvent()) {
  return;
}

initialWeb()

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

/**
 * Initial from argv
 */
function initialWeb() {
  const argv = process.argv
  argv.forEach((arg) => {
    arg = arg.split('=')
    console.log(arg)
    switch (arg[0]) {
      case 'url':
        url = arg[1]
        break
      case 'w':
        frmWidth = Number(arg[1])
        break
      case 'h':
        frmHeight = Number(arg[1])
        break
    }
  });
}

/**
 * Create the browser window.
 */
function createWindow() {
  win = new BrowserWindow({
    width: frmWidth,
    height: frmHeight,
  })

  win.setMenu(null)

  win.loadURL(url)

  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, '/app/index.html'),
  //   protocol: 'file:',
  //   slashes: true,
  // }))

  // Open DevTools.
  // win.webContents.openDevTools()

  // When Window Close.
  win.on('closed', () => {
    win = null
  })
}

/**
 * Create Link
 * @return {boolean}
 */
function handleSquirrelEvent() {
  if (process.argv.length === 1) {
    return false;
  }

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = (command, args) => {
    let spawnedProcess;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {
        detached: true,
      });
    } catch (error) {
      console.error(error)
    }

    return spawnedProcess;
  };

  const spawnUpdate = (args) => {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      spawnUpdate(['--createShortcut', exeName]);
      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':

      spawnUpdate(['--removeShortcut', exeName]);
      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      app.quit();
      return true;
  }
}
