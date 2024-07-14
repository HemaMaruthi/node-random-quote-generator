import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Device.css";
function Device() {
  return (
    <div>
      <div className='dev-container'>
        <Link to="electronics" className='dev-link'>Electronics</Link>
        <Link to="computor-accessories" className='dev-link'>ComputorAccessories</Link>
      </div>
      <div className='outlet-container'> 
        <Outlet />
      </div>
    </div>
  );
}

export default Device;
