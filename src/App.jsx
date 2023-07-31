import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CloudSandbox from './components/cloud_sandbox'
import BrowserSandbox from './components/browser_sandbox'
import SandpackComp from './components/sandpack'
import SandpackComponent from './components/sandpack_componenet'
import SandpackViteReact from './components/sandpack_vite_react'
import ViteReactComponent from './components/vite_react_comp'
import SandpackTestComponent from './components/sandpack_test'
import ReactComponent from './components/react_comp'
import MonacoSandpack from './components/monaco_sandpack'

function App() {

  return (
    <>
      {/* <CloudSandbox /> */}
      {/* <BrowserSandbox /> */}
      {/* <SandpackComp /> */}
      {/* <SandpackComponent /> */}
      {/* <SandpackViteReact /> */}
      {/* <ViteReactComponent /> */}
      {/* <SandpackTestComponent /> */}

      {/* <ReactComponent /> */}

      <MonacoSandpack />
      
    </>
  )
}

export default App
