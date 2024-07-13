import React from 'react'
import {Link,Outlet} from 'react-router-dom';
function Device() {
  return (
    <div>
        
        <Link to="electronics">Electronics</Link>
        <Link to="computor-accessories">ComputorAccessories</Link>

        <Outlet/>
    </div>
  )
}

export default Device