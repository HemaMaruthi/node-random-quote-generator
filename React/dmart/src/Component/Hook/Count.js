import React, { useState, useEffect,useRef } from "react";
import "../../Component/ClassBased.css";

function Count() {
 
  //  let obj =  useRef(null)
  //  console.log(obj)
    let stopCount = useRef();
    console.log(stopCount)
  let [count, setCount] = useState(0);
  let handleCount = () => {
  stopCount.current =  setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log(count);
    }, 1000);
    console.log(`This is set interval ${stopCount.current}`)
  };
  let handleStop = ()=>{
    console.log(`Stopped ${stopCount.current}`)
    clearInterval(stopCount.current)
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
