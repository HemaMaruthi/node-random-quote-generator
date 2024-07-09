import React,{useRef} from 'react';
import "../../Component/ClassBased.css";


function RefObject() {
    let h2Ref = useRef()
    let getRef =()=>{
        console.log("Ref");
        // document.getElementById('text').style.backgroundColor = "yellow";
        h2Ref.current.style.backgroundColor = "green";
    }
  return (
    <div className="train-info">
        <h2 id="text" ref={h2Ref}>This is Use Ref</h2>
        <button onClick={getRef}>Change</button>
    </div>
  )
}

export default RefObject