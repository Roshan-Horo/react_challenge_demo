import { Sandpack } from "@codesandbox/sandpack-react"

export default function SandpackComp(){
  return (
    <>
      <div>
      <h2>Sandpack</h2>
      <Sandpack
       theme="dark"
       template="react"
       files={{ "/button.js": `export default () => <button />` }}
      options={{
        showNavigator: true,
        showLineNumbers: true,
        editorWidthPercentage: 60,
        editorHeight: 600,
        resizablePanels: true,
        layout: "preview",
        visibleFiles: ["/App.js", "/button.js", "/index.js"],
        activeFile: "/button.js",
      }}
      />
      {/* <Sandpack /> */}

      </div>
    </>
  )
}