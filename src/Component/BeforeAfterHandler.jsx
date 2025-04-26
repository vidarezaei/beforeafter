
import { useState,useEffect } from "react";



function BeforeAfterHandler(containerRef) {
  const [borderValue, setBorderValue] = useState(50);
  const [draggingState, setDraggingState] = useState(false);
  


  function updateBorderValue(e) {
    const containerWidth = containerRef.current.offsetWidth;
    const containerLeft = containerRef.current.getBoundingClientRect().left;

    const newValue = Math.min(
      Math.max(((e.clientX - containerLeft) / containerWidth) * 100, 0),
      100
    );
    setBorderValue(newValue);
  }


  

  function draggingStart(e) {
    setDraggingState(true);
    updateBorderValue(e);
  }

  function draggingStop() {
    setDraggingState(false);
  }

  useEffect(() => {
    if (draggingState) {
      window.addEventListener("mousemove", updateBorderValue);
      window.addEventListener("mouseup", draggingStop);
    } else {
      window.removeEventListener("mousemove", updateBorderValue);
      window.removeEventListener("mouseup", draggingStop);
    }

    return () => {
      window.removeEventListener("mousemove", updateBorderValue);
      window.removeEventListener("mouseup", draggingStop);
    };
  }, [draggingState]);



  return {borderValue, draggingStart , setBorderValue}

}


export default BeforeAfterHandler;