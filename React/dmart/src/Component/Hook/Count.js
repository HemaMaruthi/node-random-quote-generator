import React, { useState, useEffect } from "react";
import "../../Component/ClassBased.css";

function Count() {
    let stopCount;
    console.log(stopCount)
  let [count, setCount] = useState(0);
  let handleCount = () => {
  stopCount =  setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log(count);
    }, 1000);
    console.log(`This is set interval ${stopCount}`)
  };
  let handleStop = ()=>{
    console.log(`Stopped ${stopCount}`)
    clearInterval(stopCount)
  }
//   useEffect(() => {
//     document.title = `This is count value = ${count}`;
//     console.log(`This is useEffect value ${count}`);
//   });
  return (
    <div className="train-info">
      <div>This is Count Value:</div>
      <div>{count}</div>

      <button onClick={handleCount}>Count</button>
      <button onClick={handleStop}>Stop</button>

    </div>
  );
}

export default Count;
