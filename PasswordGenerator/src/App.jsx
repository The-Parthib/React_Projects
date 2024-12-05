import { useCallback, useState, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}[]`~";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

const copyToClip = useCallback(()=>{
  passRef.current?.select()
  window.navigator.clipboard.writeText(password)
  alert("copied to clipboard")
},[password])

  return (
    <>
      <h1 className="text-4xl my-4 text-center text-yellow-300 underline">
        Password Generator
      </h1>

      <div className="w-full max-w-md flex justify-center  mx-auto rounded-xl p-3 bg-gray-900">
        <input
          type="text"
          placeholder="generate password"
          value={password}
          className="w-full max-w-md rounded-lg p-2 text-blue-600 text-lg"
          readOnly
          ref={passRef}
        />
      </div>
      <div>
        <button
          className="flex justify-center w-full max-w-44 mx-auto rounded-xl p-2 m-6 shadow-2xl text-white text-xl bg-green-700"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
        <button className="flex justify-center w-full max-w-40 mx-auto rounded-xl p-2 m-4 text-white text-xl bg-red-700" onClick={copyToClip}>
          COPY
        </button>

        <div className="flex flex-col sm:flex-row sm:gap-x-4 gap-y-4 sm:gap-y-0 w-full max-w-52 mx-auto">
          <div className="mx-6 flex items-center max-w-sm gap-x-2 w-full">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer w-full"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label className="text-xl text-orange-300">Length:{length}</label>
          </div>
        </div>
        <div className="mx-6 flex items-center gap-x-2 w-full">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            className="cursor-pointer"
          />
          <label className="text-xl text-orange-300">Add Numbers</label>
        </div>

        <div className="mx-6 flex items-center gap-x-2 w-full">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            className="cursor-pointer"
          />
          <label className="text-xl text-orange-300">
            Add Special Characters
          </label>
        </div>
      </div>
      <footer className="flex justify-center  m-2  text-white">TheParthib || Devs 2024</footer>
    </>
  );
}

export default App;
