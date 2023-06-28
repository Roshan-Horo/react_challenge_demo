import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CloudSandbox from './components/cloud_sandbox'
import BrowserSandbox from './components/browser_sandbox'
import SandpackComp from './components/sandpack'
import SandpackComponent from './components/sandpack_componenet'

function App() {

  return (
    <>
      {/* <CloudSandbox /> */}
      {/* <BrowserSandbox /> */}
      {/* <SandpackComp /> */}
      <SandpackComponent />
      
    </>
  )
}

export default App
