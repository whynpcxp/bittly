import BrowserWindow from './BrowserWindow.js'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { ipcMain } from 'electron'
const path = require('path')
export default class WindowManager {
    /**
     * 构造函数
     */
    constructor() {
        this.windows = [];

        let $this = this;
        ipcMain.on("WindowClose", (event, data) => {
            console.log(event, data);
        });
    }

    /**
     * 创建窗口
     * @param {*} options 
     */
    async createWindow( uri, options ) {
        let windowOptions = {
            title : "Bittly",
            width: options.width || 800,
            height: options.height || 600,
            frame : (undefined===options.frame) ? false : options.frame,
            icon:path.join(__dirname, 'icon.ico'),
            autoHideMenuBar: (undefined===options.autoHideMenuBar) ? true : options.autoHideMenuBar,
            webPreferences: {
                spellcheck: false,
                webSecurity : false,
                enableRemoteModule:true,
                nodeIntegration: true,
                contextIsolation: false,
                preload: path.join(__dirname, 'preload.js')
            }
        };

        // @link https://stackoverflow.com/questions/57543680/electron-linux-appimage-is-not-showing-the-icon-while-deb-is
        if (process.platform === "linux") {
            // 图标文件一定要放到 public 文件夹下面
            windowOptions.icon = path.join(__dirname, 'icon-linux.png');
        }
    
        let win = new BrowserWindow(windowOptions);
        require("@electron/remote/main").enable(win.webContents)
        
        if ( 'file://' == uri.substring(0,7) ) {
            await win.loadURL(uri);
        } else if (process.env.WEBPACK_DEV_SERVER_URL) {
            await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + uri);
        } else {
            createProtocol('app')
            win.loadURL(`app://.${uri}`);
        }

        return win;
    }
} 