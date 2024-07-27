import React from 'react';
import dmartLogo from './dmart.webp';
import './Home.css';
import {useSelector} from "react-redux"

function Home() {
 const data =  useSelector((storedDate)=>{
    return storedDate
  })
  return (
    <div className="home">
        <img src={dmartLogo} className="dmart-logo"/>
        <h1>Welcome to Dmart {data}</h1>
        <p>Your onestep shop for all need</p>
    </div>
  )
}

export default Home