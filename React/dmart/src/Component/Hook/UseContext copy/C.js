import React from 'react';
import D from './D.js';
function C(props) {
  return (
    <div>
        <h2>C Component age: {props.info.age}</h2>
    <D value={props.info}/>
    </div>
  )
}

export default C