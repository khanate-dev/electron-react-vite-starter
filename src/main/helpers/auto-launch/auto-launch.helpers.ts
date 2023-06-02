import { app } from 'electron'

/**
 * Set the app open at login or not.
 *
 *  **Note:** `false` always on Linux.
 * @platform — darwin, win32
 *
 * @linkcode https://github.com/alex8088/electron-toolkit/blob/master/packages/utils/src/app.ts
 */
export const setAutoLaunch = (auto: boolean): boolean => {
  if (process.platform === 'linux') return false
  const isOpenAtLogin = (): boolean => {
    return app.getLoginItemSettings().openAtLogin
  }
  if (isOpenAtLogin() === auto) return true
  app.setLoginItemSettings({
    openAtLogin: auto,
    path: process.execPath
  })
  return isOpenAtLogin() === auto
}
