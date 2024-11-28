import React,{useRef} from 'react';
import "../../Component/ClassBased.css";

function SalesReport() {
        let nameRef = useRef("React");
        let reportRef = useRef(10);
    console.log(nameRef, reportRef)
    let getReport =(event)=>{
        event.preventDefault();
        console.log(`Custumer name ${nameRef.current.value} and report value ${reportRef.current.value}`)
    }
  return (
    <div className="train-info">
        <h1>Un Controlled Component</h1>
        <form>
            <div>
                <input type="text" placeholder="Enter Name" ref={nameRef}/>
            </div>
            <div>
                <input type="number" placeholder="Enter Report Value" ref={reportRef}/>
            </div>
            <button onClick={getReport}>Submit</button>
        </form>
    </div>
  )
}

export default SalesReport