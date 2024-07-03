import './ClassBased.css';
import {useState} from 'react';

let FunctionBased =()=>{

    let [state, setState] = useState("Morning Function Express at 09:00")
    // let state = "Morning Function Express at 09:00";
    let handleClick =()=>{
        // state="Evening function Express at 19:00";
        // console.log(state)
        // document.getElementById('train').innerHTML = state;
        setState("Evening function Express at 19:00")
    }
    return(
        <div className = 'train-info'>
            <h1>Welcome to functional Component</h1>
            <h2 id="train">{state}</h2>
            <button onClick ={handleClick}>Train Status</button>
        </div>
    )
}

export default FunctionBased






  

