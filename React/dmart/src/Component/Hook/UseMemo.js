import React, { useState, useMemo } from "react";
import "../../Component/ClassBased.css";

function UseMemo() {
  let [number, setNumber] = useState(0);
  let [count, setCount] = useState(0);

let isEven = useMemo(() => {
    for(let i = 0; i<10000;i++){ console.log(i)}
  
    return number % 2 === 0;
  },[number])

//   let isEven = () => {
//     for(let i = 0; i<10000;i++){ console.log(i)}
  
//     return number % 2 === 0;
//   };
  console.log(isEven)
  return (
    <div className="train-info">
      <h1>number  {number} is : {isEven ? 'Even' : 'Odd'}</h1>
      <button onClick={() => setNumber(number + 1)}>Number</button>
      <h2> Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default UseMemo;
