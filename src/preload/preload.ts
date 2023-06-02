import { contextBridge } from 'electron'

// Custom APIs for renderer
const api = {
  versions: process.versions
}

contextBridge.exposeInMainWorld('api', api)
