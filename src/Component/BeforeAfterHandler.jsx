import { useState, useEffect } from "react";
import updateBorderValue from "./updateBorderValue"; 

function BeforeAfterHandler(containerRef) {
  const [borderValue, setBorderValue] = useState(50);
  const [draggingState, setDraggingState] = useState(false);



  function draggingStart(e) {
    setDraggingState(true);
    updateBorderValue(e, containerRef, setBorderValue);
  }

  function draggingStop() {
    setDraggingState(false);
  }

  useEffect(() => {
    function handleMouseMove(e) {
      updateBorderValue(e, containerRef, setBorderValue);
    }

    if (draggingState) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", draggingStop);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", draggingStop);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", draggingStop);
    };
  }, [draggingState]);



  

  return { borderValue, draggingStart, setBorderValue, draggingState };
}

export default BeforeAfterHandler;