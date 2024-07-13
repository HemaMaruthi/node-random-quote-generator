import React from 'react';
import dmartLogo from './dmart.webp';
import './Home.css'

function Home() {
  return (
    <div className="home">
        <img src={dmartLogo} className="dmart-logo"/>
        <h1>Welcome to Dmart</h1>
        <p>Your onestep shop for all need</p>
    </div>
  )
}

export default Home