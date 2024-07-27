import React,{useState} from 'react';
import '../ClassBased.css';
import reduxStore from './reduxStore.js';
import reduxAction from './reduxAction.js';

function Input() {
    const [state,setState] =  useState("")
    const handleChangeName = (e)=>{
        e.preventDefault()

        reduxAction(state)
        console.log(state ,"Input Component")

    }
  return (
    <div className="train-info">
        

        <form>
            <input type="text" placeholder = "Enter your name" onChange={(e)=>setState(e.target.value)} />
            <button onClick={handleChangeName}>Name Change</button>
        </form>
    </div>
  )
}

export default Input