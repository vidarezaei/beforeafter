import React, { useState, useRef, useEffect } from "react";
import "./BeforeAfter.css";

function BeforeAfter({ beforeimg, afterimg }) {
  const [borderValue, setBorderValue] = useState(50);
  const [draggingState, setDraggingState] = useState(false);


  function updateBorderValue(e) {

  const target = document.querySelector(".container");
  const rect = target.getBoundingClientRect();

    const newValue = Math.min(
      Math.max(((e.clientX - rect.left) / target.offsetWidth) * 100, 0),
      100
    );

   
    if (draggingState){
      setBorderValue(newValue);
    } 


 
  }


  window.addEventListener("mouseup", draggingStop);
  window.addEventListener("mousedown", draggingStart);

  function draggingStart() {
    setDraggingState(true);
    window.addEventListener("mousemove", updateBorderValue);
    
  }

  function draggingStop() {
    setDraggingState(false);
    window.removeEventListener("mousedown",draggingStart);
    window.removeEventListener("mousemove",updateBorderValue)

  }
 
 
  
  




  return (
    <div className="container" >
      <div className="beforeImgcs" style={{ clipPath: `polygon(0 0 ,  ${borderValue}%  0 , ${borderValue}%  100% , 0 100% )`}}  >
        <img src={beforeimg} alt="beforeimg" />
      </div>

      <div className="afterImgcs">
        <img src={afterimg} alt="afterimg" />
      </div>

      <div className="border" style={{ left: `${borderValue}%` }} onMouseDown={draggingStart} onMouseUp={draggingStop}>
        <div className="borderBubble" />
      </div>
    </div>
  );
}

export default BeforeAfter;