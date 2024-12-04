import { useState } from 'react'

function App() {
 const [color , setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen text-white" style={{ backgroundColor: color }}>
        <p>This is the background that will be change via Buttons</p>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          text
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black text-white">
            test
          </div>
        </div>
      </div>
    </>
  );
}

export default App
