import React, { useState, useRef, useEffect } from "react";
import "./BeforeAfter.css";

function BeforeAfter({ beforeimg, afterimg }) {
  const [borderValue, setBorderValue] = useState(50);
  const [draggingState, setDraggingState] = useState(false);
 


  function updateBorderValue(e) {
    const target = document.querySelector(".container");
    const rect = target.getBoundingClientRect();

  const newValue =Math.min(
    Math.max(((e.clientX - rect.left) / rect.width) * 100, 0),
    100
  );

  setBorderValue(newValue);
    
  }


  

  function draggingStart() {
   
    window.addEventListener("mousemove", updateBorderValue);
    window.addEventListener("mouseup", draggingStop);
    
  }

  function draggingStop() {
   
    window.removeEventListener("mousedown",draggingStart);
    window.removeEventListener("mousemove",updateBorderValue)

  }
 
 
  
  




  return (
    <div className="container" >
      
      <img src={beforeimg} alt="beforeimg" className="beforeImgcs" style={{ clipPath: `polygon(0 0 ,  ${borderValue}%  0 , ${borderValue}%  100% , 0 100% )`}} />
      
      <img src={afterimg} alt="afterimg" className="afterImgcs"/>
      
      <div className="border" style={{ left: `${borderValue}%` }}   >
        <div className="borderBubble"  onMouseDown={draggingStart} />
      </div>
    </div>
  );
}

export default BeforeAfter;