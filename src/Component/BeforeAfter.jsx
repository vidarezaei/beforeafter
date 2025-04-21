import React, { useRef } from "react";
import "./BeforeAfter.css";
import BeforeAfterHandler from "./BeforeAfterHandler.jsx";
import BeforeImg from "./BeforeImg.jsx";
import AfterImg from "./AfterImg.jsx";

function BeforeAfter({beforeimg , afterimg}) {
  const containerRef = useRef(null);
  const {borderValue, draggingStart}=BeforeAfterHandler(containerRef);


  return (
    <div className="container" ref={containerRef}>
     
        
      
        <BeforeImg src={beforeimg}  borderValue={borderValue} />
        <AfterImg src={afterimg} />
        
      

      <div className="border" style={{ left: `${borderValue}%` }} onMouseDown={draggingStart}>
        <div className="borderBubble" />
      </div>
    </div>
  );
}

export default BeforeAfter;