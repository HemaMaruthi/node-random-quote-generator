import React,{useState} from 'react';
import "../../../Component/ClassBased.css";
import B from './B.js';


function A() {

    let [state, setState] = useState({
        name:'Hema',
        age:20,
        email:'hema@gmail.com'
    })
  return (
    <div className="train-info">
        <h2>A Component</h2>
        <B data={state}/>
    </div>
  )
}

export default A