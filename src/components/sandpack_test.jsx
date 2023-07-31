import { SandpackProvider, 
  SandpackLayout, 
  SandpackCodeEditor, 
  SandpackPreview,
  SandpackFileExplorer,
  SandpackTests,
  SandpackCodeViewer,
  SandpackConsole
} from "@codesandbox/sandpack-react"

export default function SandpackTestComponent(){
  return (
    <>
      <div>
      <h2>Sandpack with Composition Layout</h2>

      <SandpackProvider template="test-ts" theme="dark">
        <SandpackLayout>
          <SandpackFileExplorer />
          {/* <SandpackCodeEditor /> */}
          <SandpackCodeViewer />
          <SandpackPreview />
          <SandpackTests />
          <SandpackConsole />
        </SandpackLayout>
      </SandpackProvider>


      </div>
    </>
  )
}