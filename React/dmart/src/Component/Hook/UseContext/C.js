import React,{useContext} from 'react';
import D from './D.js';
import myContext from './Context.js';
function C() {
    let data = useContext(myContext)
  return (
    <div>
        <h2>C Component age : {data.age} </h2>
    <D />
    </div>
  )
}

export default C