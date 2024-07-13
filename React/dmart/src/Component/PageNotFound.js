import React,{useEffect} from 'react'
import './Home.css'

function PageNotFound() {

    useEffect(()=>{
        document.title="Page Not Found";
        return()=>{
            document.title="React App"
        }
    },[])
  return (
    <div className="home" >
        
        <h1>PageNotFound</h1>
        </div>
  )
}

export default PageNotFound