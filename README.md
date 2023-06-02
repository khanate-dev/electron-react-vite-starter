# electron-app

An Electron application with React and TypeScript

## Building Blocks

- `ESLint` + `Prettier` to better lint and style your code, help you to write high-quality code.
- Use `electron-vite`, a fast build tooling integrated with Vite 3, support for HMR, hot reloading, debugging and source code protection.
- Use `electron-toolkit` to help you develop. For example: TSconfig extends, easily expose Electron APIs to renderers in preload scripts, etc.
- Use `electron-builder` and pre-configured to pack your app.
- Use `electron-updater` for auto-update, based on electron-builder.

## Project Setup

### Install

```bash
$ pnpm install
```

### Development

```bash
$ pnpm dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```
