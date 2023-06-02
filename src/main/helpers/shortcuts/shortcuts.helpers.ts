import { BrowserWindow, app } from 'electron'

export type ShortcutOptions = {
  /** Use `ESC` key to close window, default `false`. */
  escToQuit?: boolean

  /** Zoom in (`Minus + CommandOrControl`) or zoom out(`Equal + Shift + CommandOrControl`), default `false`. */
  enableZoom?: boolean
}

/**
 * Default open or close DevTools by `F12` in development and
 * ignore `CommandOrControl + R` in production.
 *
 * Use `options` to control more shortcuts.

* @linkcode https://github.com/alex8088/electron-toolkit/blob/master/packages/utils/src/optimizer.ts
 */
export const watchWindowShortcuts = (
  window: BrowserWindow,
  options: ShortcutOptions = {}
): void => {
  const { webContents } = window
  const { escToQuit, enableZoom } = options

  webContents.on('before-input-event', (event, input) => {
    if (input.type !== 'keyDown') return
    const isCommandOrControl = input.control || input.meta

    if (!app.isPackaged && input.key === 'r' && isCommandOrControl) {
      event.preventDefault()
    }

    if (!app.isPackaged && input.code === 'F12') {
      if (webContents.isDevToolsOpened()) {
        webContents.closeDevTools()
      } else {
        webContents.openDevTools({ mode: 'undocked' })
      }
    }

    if (escToQuit && input.code === 'Escape' && input.key !== 'Process') {
      window.close
      event.preventDefault()
    }

    if (!enableZoom && isCommandOrControl) {
      if (input.code === 'Minus') event.preventDefault()
      if (input.code === 'Equal' && input.shift) event.preventDefault()
    }
  })
}
