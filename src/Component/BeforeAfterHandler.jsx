import { useState, useEffect } from "react";
import updateBorderValue from "./updateBorderValue"; 

function BeforeAfterHandler(containerRef, direction) { //function for handle mouse movement when user drag border or bubble
  const [borderValue, setBorderValue] = useState(50);
  const [draggingState, setDraggingState] = useState(false);


  useEffect(() => {
    function handleMouseMove(e) {

      if ( draggingState) {
        updateBorderValue(e, containerRef, setBorderValue,direction);
      }
     
    }



    if (draggingState) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", draggingStop);
    }
    else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", draggingStop);
    }



    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", draggingStop);
    };
  }, [draggingState]);



  

  function draggingStart(e) {
    setDraggingState(true);
    updateBorderValue(e, containerRef, setBorderValue,direction);
  }

  function draggingStop() {
    setDraggingState(false);
  }

  return { borderValue, draggingStart, setBorderValue };
}

export default BeforeAfterHandler;