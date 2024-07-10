import React,{useState,useReducer} from 'react';
import '../../Component/ClassBased.css'


function UseReducer() {
let intialValue = 0

// let [state, setState] = useState(intialValue);
// let [state, setState] = useState(intialValue);

let reducer = (state, action)=>{
  console.log(action) // action =  {type:'inc'}
  console.log(action.type) // inc

  // if(action.type == 'Inc'){
  //   return state + 1;
  // }
  switch(action.type){
    case 'Inc' :
      return state + 1;
      case 'Sub' :
      return state - 1;
      case 'Mul' :
      return state * 2;
      case 'Div' :
      return state / 2;
  }

}

let[state, dispatch] = useReducer(reducer, intialValue)

  return (
    <div className="train-info">
      <h1>{state}</h1>
    {/* <button onClick={()=>setState(prevState=>prevState + 1)}>Count ++</button>
    <button onClick={()=>setState(prevState=>prevState - 1)}>Count --</button>
    <button onClick={()=>setState(prevState=>prevState * 2)}>Count **</button>
    <button onClick={()=>setState(prevState=>prevState / 2)}>Count /</button> */}

    <button onClick={()=>dispatch({type:'Inc'})}>Count ++ </button>
    <button onClick={()=>dispatch({type:'Sub'})}>Count -- </button>
    <button onClick={()=>dispatch({type:'Mul'})}>Count ** </button>
    <button onClick={()=>dispatch({type:'Div'})}>Count  / </button>

    </div>
  )
}

export default UseReducer;




