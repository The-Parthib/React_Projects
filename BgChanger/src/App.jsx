import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen duration-700" style={{ backgroundColor: color }}>
        <div className="flex flex-wrap justify-center inset-x-0 px-2 h-13 bg-white">
          <button
            className="bg-red-600 p-2 m-3 text-white rounded-3xl"
            onClick={() => setColor("red")}
          >
            Click me
          </button>
          <button
            className="bg-yellow-600 p-2 m-3 text-white rounded-3xl"
            onClick={() => setColor("yellow")}
          >
            Click me
          </button>
          <button
            className="bg-green-600 p-2 m-3 text-white rounded-3xl"
            onClick={() => setColor("green")}
          >
            Click me
          </button>
          <button
            className="bg-violet-600 p-2 m-3 text-white rounded-3xl animate-spin"
            onClick={() => setColor("violet")}
          >
            Click me
          </button>
          <button
            className="bg-blue-600 p-2 m-3 text-white rounded-3xl animate-bounce"
            onClick={() => setColor("blue")}
          >
            Click me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
