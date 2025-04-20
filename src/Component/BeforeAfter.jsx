import React, { useState, useRef, useEffect } from "react";
import "./BeforeAfter.css";
import updateBorderValue from "./functions/UpdateBorderValue";

function BeforeAfter({ beforeimg, afterimg }) {
  const [borderValue, setBorderValue] = useState(50);
  let moveHandler = null;

  function draggingStart() {
    moveHandler = updateBorderValue(setBorderValue);
    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("mouseup", draggingStop);
  }

  function draggingStop() {
    if (moveHandler) {
      window.removeEventListener("mousemove", moveHandler);
    }
    window.removeEventListener("mouseup", draggingStop);
  }
  




  return (
    <div className="container" >
      
      <img src={beforeimg} alt="beforeimg" className="beforeImgcs" style={{ clipPath: `polygon(0 0 ,  ${borderValue}%  0 , ${borderValue}%  100% , 0 100% )`}} />
      
      <img src={afterimg} alt="afterimg" className="afterImgcs"/>
      
      <div className="border" style={{ left: `${borderValue}%` }}   >
        <div className="borderBubble"  onMouseDown={draggingStart} onMouseUp={draggingStop} />
      </div>
    </div>
  );
}

export default BeforeAfter;