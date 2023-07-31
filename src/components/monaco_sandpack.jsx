import { SandpackProvider, 
  SandpackLayout, 
  SandpackCodeEditor, 
  SandpackPreview,
  SandpackFileExplorer,
  SandpackTests,
  SandpackCodeViewer,
  SandpackConsole,

  useActiveCode,
  SandpackStack,
  FileTabs,
  useSandpack,
} from "@codesandbox/sandpack-react"
import { Editor } from "@monaco-editor/react";
import Split from "react-split";

const filesForSandpack = {
  "/styles.css": {
    code: `body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

h1 {
  font-size: 1.5rem;
}`,
  },
  "/App.jsx": {
    code: `export default function App() {
const data = "world"

return (
     <div>
      <h1>It works and you found me!</h1>
     </div>
)
}
`,
  },
  "/index.jsx": {
    code: `import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
<StrictMode>
  <App />
</StrictMode>
);`,
  },
  "/index.html": {
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite App</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/index.jsx"></script>
</body>
</html>
`,
  },
  "/tests/setup.js": {
    code: `
    import {expect, afterEach} from 'vitest'
    import {cleanup} from '@testing-library/react'
    import matchers from '@testing-library/jest-dom/matchers'

    expect.extend(matchers)

    afterEach(() => {
      cleanup();
    })
    `,
  },
  "/tests/App.test.jsx": {
    code: `
    import {render, screen} from '@testing-library/react'
    import App from '../src/App'
    import { describe } from 'vitest'

    describe('App should render with content', () => {
      it('renders headline', () => {
        render(<App />);
        const headline = screen.getByText(/It works and you found me!/i);
        expect(headline).toBeInTheDocument()
      })
    })
    `,
  },
  "/package.json": {
    code: JSON.stringify({
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
        test: "vitest"
      },
      dependencies: {
        react: "^18.2.0",
        "react-dom": "^18.2.0",
      },
      devDependencies: {
        "@vitejs/plugin-react": "3.1.0",
        vite: "4.1.4",
        "esbuild-wasm": "0.17.12",
        "@testing-library/jest-dom": "^5.17.0",
        "@testing-library/react": "^14.0.0",
        "jsdom": "^22.1.0",
        "vitest": "^0.33.0"
      },
    }),
    readOnly: true
  },
  "/vite.config.js": {
    code: `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
test: {
  environment: 'jsdom',
  setupFiles: ['./tests/setup.js'],
  testMatch: ['./tests/**/*.test.jsx'],
  globals: true
}
});
`,
  },
}

const filesWithTests = {
    "/styles.css": {
      code: `body {
    font-family: sans-serif;
    -webkit-font-smoothing: auto;
    -moz-font-smoothing: auto;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: auto;
    text-rendering: optimizeLegibility;
    font-smooth: always;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  
  h1 {
    font-size: 1.5rem;
  }`,
    },
    "/App.js": {
      code: `export default function App() {
  return <h1>Doggy Directory</h1>
}
`,
    },
    "/index.js": {
      code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
    },
    "/public/index.html": {
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
    },
    "/tests/setup.js": {
      code: `
      import {expect, afterEach} from 'vitest'
      import {cleanup} from '@testing-library/react'
      import matchers from '@testing-library/jest-dom/matchers'
  
      expect.extend(matchers)
  
      afterEach(() => {
        cleanup();
      })
      `,
    },
    "/tests/App.test.jsx": {
      code: `
      import {render, screen} from '@testing-library/react'
      import App from '../App.js'
      import '@testing-library/jest-dom/extend-expect';

        test('renders headline', () => {
          render(<App />);
        
          expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
        })
      
      `,
    },
    "/add.ts": {
      code: `export const add = (a,b) => a + b;`,
    },
    "/package.json": {
      code: JSON.stringify({
        scripts: {
          start: "react-scripts start"
        },
        dependencies: {
          react: "^18.0.0",
          "react-dom": "^18.0.0",
          "react-scripts": "^5.0.0",
          "@testing-library/jest-dom": "^5.17.0",
          "@testing-library/react": "^14.0.0",
          "jsdom": "^22.1.0",
          "vitest": "^0.33.0",
        },
        main: "/index.js",
      }),
    },

};

function MonacoEditor(){
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
 
  return (
    <SandpackStack style={{ height: "100vh", margin: 0 }}>
      <FileTabs />
      <div style={{ flex: 1, paddingTop: 8, background: "#1e1e1e" }}>
        <Editor
          width="100%"
          height="100%"
          language="javascript"
          theme="vs-dark"
          key={sandpack.activeFile}
          defaultValue={code}
          onChange={(value) => updateCode(value || "")}
        />
      </div>
    </SandpackStack>
  );
}

function SplitContainer(){
  return (
    <SandpackProvider template="react" 
    theme="dark" 
    files={filesWithTests}
    options={{ 
      visibleFiles: [""],
      activeFile: "/App.js",
      readOnly: true
    }}
  >
    <SandpackLayout>
    <Split
      className="container"
      sizes={[50,50]}
      minSize={0}
      expandToMin={false}
      gutterSize={3}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      <div>Problem</div>
      <Split
        sizes={[70,30]}   
        minSize={0}
        direction="vertical"
        gutterSize={3}
    >
        <div><MonacoEditor /></div>
        <div><SandpackTests showNavigator style={{height: '100%', padding: '5px'}} /></div>
    </Split> 
    </Split>
    </SandpackLayout>
    </SandpackProvider>
  )
}

export default function MonacoSandpack() {

  return (
    <>
    <div className="headerFlex">
        <div className="repoInfoDiv">
          Header
        </div>
        <div className="closeBtnDiv">
          End
        </div>

      </div>
      <SplitContainer />
    </>
  )



  return (
    <SandpackProvider template="react" 
      theme="dark" 
      files={filesWithTests}
      options={{ 
        visibleFiles: [""],
        activeFile: "/App.js",
        readOnly: true,
      }}
    >
      <SandpackLayout>
        {/* <SandpackFileExplorer style={{ height: "100vh", margin: 0 }} /> */}
        <MonacoEditor />
        {/* <SandpackPreview style={{ height: "100vh" }} /> */}
        <SandpackTests style={{ height: "100vh" }} />
      </SandpackLayout>
    </SandpackProvider>
  );
}