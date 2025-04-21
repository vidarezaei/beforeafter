import React, { useRef } from "react";
import "./BeforeAfter.css";
import BeforeAfterHandler from "./BeforeAfterHandler.jsx";
import BeforeImg from "./BeforeImg.jsx";
import AfterImg from "./AfterImg.jsx";
import Borderhandler from "./Borderhandler.jsx";

function BeforeAfter({beforeimg , afterimg}) {
  const containerRef = useRef(null);
  const {borderValue, draggingStart}=BeforeAfterHandler(containerRef);


  return (
    <div className="container" ref={containerRef}>
     
        
      
        <BeforeImg src={beforeimg}  borderValue={borderValue} />
        <AfterImg src={afterimg} />
        <Borderhandler borderValue={borderValue}  draggingStart={draggingStart} />
        
      
</div>
      
  );
}

export default BeforeAfter;