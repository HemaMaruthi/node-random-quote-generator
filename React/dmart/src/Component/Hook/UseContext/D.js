import React,{useContext} from 'react';
import myContext from './Context.js'


function D() {
    let data= useContext(myContext)
    console.log(data)
  return (
    <div>
        <h2>D Component email : {data.email} </h2>
    </div>
  )
}

export default D