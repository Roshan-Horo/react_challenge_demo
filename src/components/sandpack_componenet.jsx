import { SandpackProvider, 
  SandpackLayout, 
  SandpackCodeEditor, 
  SandpackPreview,
  SandpackFileExplorer,
  SandpackTests,
  SandpackCodeViewer
} from "@codesandbox/sandpack-react"

export default function SandpackComponent(){
  return (
    <>
      <div>
      <h2>Sandpack with Composition Layout</h2>

      <SandpackProvider template="react" theme="dark">
        <SandpackLayout>
          <SandpackFileExplorer />
          {/* <SandpackCodeEditor /> */}
          <SandpackCodeViewer />
          <SandpackPreview />
          {/* <SandpackTests /> */}
        </SandpackLayout>
      </SandpackProvider>


      </div>
    </>
  )
}