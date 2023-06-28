export default function BrowserSandbox(){
  return (
    <>
      <div>
      <h2>Browser Sandbox</h2>
      {/* <iframe
  src="https://codesandbox.io/embed/new?codemirror=1&highlights=6,7,8,9"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> */}

<iframe
        style={{
          width: "100%",
          height: "85vh",
          outline: "1px solid #252525",
          border: 0,
          borderRadius: 8,
          marginBottom: 16,
          zIndex: 100
        }}
        src="https://codesandbox.io/embed/n9m2w9q8x0?fontsize=14&hidenavigation=1&theme=dark"
      ></iframe>
      </div>
    </>
  )
}