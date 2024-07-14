import React,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";

function DeviceDetails() {
    let [state, setState] =  useState({})
  let paramsId =   useParams()
  console.log(paramsId)

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${paramsId.id}`).then(res=>res.json()).then((data)=>{
    console.log(data)
    setState(data)
    })
  },[])

  return (
    <div style={{textAlign:'center'}}>
        <img src={state.image} width="200px" height="200px" />
        <h2>{state.title}</h2>
        <p>{state.description}</p>

    </div>
  )
}

export default DeviceDetails