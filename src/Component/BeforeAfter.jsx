import React, { useState, useRef, useEffect } from "react";
import "./BeforeAfter.css";
import BeforeAfterHandler from "./BeforeAfterHandler.jsx";
import BeforeImg from "./BeforeImg.jsx";

function BeforeAfter({beforeimg , afterimg}) {
  const containerRef = useRef(null);
  const {borderValue, draggingStart}=BeforeAfterHandler(containerRef);


  return (
    <div className="container" ref={containerRef}>
     
        {/* <img src={beforeimg} alt="beforeimg" className="beforeImgcs" style={{ clipPath: `polygon(0 0 ,  ${borderValue}%  0 , ${borderValue}%  100% , 0 100% )`}} /> */}
      
<BeforeImg src={beforeimg}  borderValue={borderValue} />
     
        <img src={afterimg} alt="afterimg" className="afterImgcs"/>
      

      <div className="border" style={{ left: `${borderValue}%` }} onMouseDown={draggingStart}>
        <div className="borderBubble" />
      </div>
    </div>
  );
}

export default BeforeAfter;