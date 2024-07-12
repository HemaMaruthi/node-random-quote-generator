import React from 'react';
import C from './C.js'

function B(props) {
    console.log(props.data)
  return (
    <div>
        <h2>B Component name: {props.data.name}</h2>
        
    <C info={props.data}/>
    </div>
  )
}

export default B