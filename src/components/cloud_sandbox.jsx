export default function CloudSandbox(){
  return (
    <>
      <div>
      <h2>Cloud Sandbox</h2>
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
        src="https://codesandbox.io/p/sandbox/determined-violet-e2k82k?embed=1"
      ></iframe>
      </div>
    </>
  )
}