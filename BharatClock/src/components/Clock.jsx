import { useEffect } from "react";
import { useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  function time() {
    let tim = date.toLocaleTimeString();
    return tim;
  }

  return (
    <>
      <center>
        <div className="flex justify-center items-center bg-gray">
          <div className="bg-blue shadow-md rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-blue-200 animate-pulse">
              Current Time: {time()}
            </p>
          </div>
        </div>
      </center>
    </>
  );
}

export default Clock;
