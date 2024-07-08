import React, { useState, useEffect } from "react";
import "../../Component/ClassBased.css";

function ComputorAccessories() {
  let [state, setState] = useState(
    "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtczczLXRlZC0xMDIxNl8xLnBuZw.png"
  );
  let [mouse,setMouse] = useState(
    "https://m.media-amazon.com/images/I/61KSceiLHwL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
  )
  let [headset, setHeadset] = useState(
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363",

  )
  useEffect(() => {
    console.log("This is useEffect and Auto calling");
    alert("re-rendered")
    return () => {
      localStorage.removeItem('name')
      // console.log("This is Un Mount  or clear Phase");
      // alert("This is un mount Phase");
    };
  },[mouse,headset]);

  let getLocalItem = () => {
    localStorage.setItem("name", "Hema");
    console.log("This is local item");
  };
  return (
    <div className="train-info">
      <img src={state} width="200px" height="200px" />
      <img src={mouse} width="200px" height="200px" />
      <img src={headset} width="200px" height="200px" />


      <button
        onClick={() => {
          setState(
            "https://static.vecteezy.com/system/resources/previews/011/765/916/original/gold-smartphone-model-apple-iphone-14-pro-new-it-industry-original-wallpaper-mockup-for-web-design-on-a-white-background-free-vector.jpg"
          );
        }}
      >
        Mobile
      </button>
      <button onClick={()=>setMouse(
        "https://www.daskeyboard.com/images/mactigr/MacTigr-thumb-top.jpeg"
      )}>keyboard</button>

<button onClick={()=>setHeadset(
      "https://assets.ajio.com/medias/sys_master/root/20230515/ISwc/6462579c42f9e729d7875241/-473Wx593H-4938418960-multi-MODEL.jpg",

)}>Headset</button>

      <button onClick={getLocalItem}>Set Local Item</button>
    </div>
  );
}

export default ComputorAccessories;
