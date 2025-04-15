import React, { useState, useRef, useEffect } from "react";
import "./BeforeAfter.css";

function BeforeAfter({ beforeimg, afterimg }) {
  const [borderValue, setBorderValue] = useState(50);
  const [draggingState, setDraggingState] = useState(false);
  const containerRef = useRef(null);

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

  return (
    <div className="container" ref={containerRef}>
      <div className="beforeImgcs" style={{ width: `${borderValue}%` }}>
        <img src={beforeimg} alt="beforeimg" />
      </div>

      <div className="afterImgcs">
        <img src={afterimg} alt="afterimg" />
      </div>

      <div className="border" style={{ left: `${borderValue}%` }} onMouseDown={draggingStart}>
        <div className="borderBubble" />
      </div>
    </div>
  );
}

export default BeforeAfter;