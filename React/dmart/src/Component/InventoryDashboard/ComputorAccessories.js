import React, { useState,useEffect } from "react";
import "../../Component/ClassBased.css";

function ComputorAccessories() {
  let [state, setState] = useState(
    "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXRlZC0xMDIxNl8xLnBuZw.png"
  );
  useEffect(()=>{
    console.log("This is useEffect and Auto calling")

    return (()=>{
        console.log("This is Un Mount  or clear Phase");
        alert("This is un mount Phase")
    })

  }, [])
  return (
    <div className="train-info">
      <img src={state} width="200px" height="200px" />
      <button
        onClick={() => {
          setState(
            "https://static.vecteezy.com/system/resources/previews/011/765/916/original/gold-smartphone-model-apple-iphone-14-pro-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg"
          );
        }}
      >
        Mobile
      </button>
    </div>
  );
}

export default ComputorAccessories;
