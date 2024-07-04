
import '../../Component/ClassBased.css'
import {useState} from 'react';

let StateManage = () => {

let [state, setState] =  useState(0);
    console.log(state)
    console.log("This is re-rendering")
    let handleClick =()=>{

        // setState(state + 1) // 1 => 1
        // setState(state + 1) // 2 => 1
        // setState(state + 5) // 3 => 1
        // setState(state + 1) // 1 =>  1
        // setState(state + 2) // 2 =>  3
        // setState(state + 3) // 3 =>  6
        // setState((prevState)=>{
        //         return prevState + 1
        // })
        setState(prevState=>prevState + 1) // 1 => 1 => 3 + 1  => 1  => 6 +1 => 7
        // setState(prevState=>prevState + 2) // 1 => 2 =>  4+1 =>  5 => 3 => 7 +2 => 9
        // setState(prevState=>prevState + 3) // 3 => 3 => 5 + 1 => 6 => 6 => 9 + 3 => 12


    }
  return (
    <div className='train-info'>
      <div>This is React Hook</div>
      <div>{state}</div>
      <button onClick ={handleClick}>Count++</button>

    </div>
  );
};

export default StateManage;