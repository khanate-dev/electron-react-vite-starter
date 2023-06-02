export const Versions = () => {
  const { electron, chrome, node, v8 } = window.api.versions

  return (
    <ul className="versions">
      <li className="electron-version">Electrons v{electron}</li>
      <li className="chrome-version">Chromium v{chrome}</li>
      <li className="node-version">Node v{node}</li>
      <li className="v8-version">V8 v{v8}</li>
    </ul>
  )
}
