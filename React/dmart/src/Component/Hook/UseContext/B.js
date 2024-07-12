import React from 'react';
import C from './C.js'

function B(props) {
    console.log(props.data)
  return (
    <div>
        <h2>B Component </h2>
        
    <C />
    </div>
  )
}

export default B