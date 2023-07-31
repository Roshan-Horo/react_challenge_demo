import { SandpackProvider, 
  SandpackLayout, 
  SandpackCodeEditor, 
  SandpackPreview,
  SandpackFileExplorer,
  SandpackTests,
  SandpackCodeViewer
} from "@codesandbox/sandpack-react"

const filesForSandpack = {
  "/newFile.js": {
    code: `impro `
  },
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

export default function ViteReactComponent(){
  return (
    <>
      <div>
      <h2>Sandpack with Composition Layout</h2>

      <SandpackProvider template="node" theme="dark" files={filesForSandpack}>
        <SandpackLayout>
          <SandpackFileExplorer />
          {/* <SandpackCodeEditor /> */}
          <SandpackCodeViewer />
          <SandpackPreview />
          <SandpackTests />
        </SandpackLayout>
      </SandpackProvider>


      </div>
    </>
  )
}