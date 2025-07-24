import { useRef } from "react";
import { useState } from "react";
import useBeforeAfterInteraction from "../hooks/useBeforeAfterInteraction.jsx";
import BeforeImage from "./BeforeImage.jsx";
import AfterImage from "./AfterImage.jsx";
import BorderHandler from "./BorderHandler.jsx";
import * as SC from "../styled/BeforeAfter.styled.js";
import calculateSliderPosition from "../helpers/calculateSliderPosition.jsx";

function BeforeAfter({ beforeImg, afterImg, isVertical, isHoverEnabled }) {
  const containerRef = useRef(null);
  const { borderValue, startDragging, setBorderValue } =
    useBeforeAfterInteraction(containerRef, isVertical, isHoverEnabled);
  const updatePosition = (e) => {
    calculateSliderPosition(e, containerRef, setBorderValue, isVertical);
  };

  return (
    <SC.ComponnentBody>
      <SC.Container
        ref={containerRef}
        onClick={updatePosition}
        onMouseMove={isHoverEnabled ? updatePosition : null}
      >
        {/*onclick: Click on the slider bar to jump to a position */}
        <BeforeImage
          src={beforeImg}
          borderValue={borderValue}
          isVertical={isVertical}
        />
        <AfterImage src={afterImg} />
        <BorderHandler
          borderValue={borderValue}
          startDragging={startDragging}
          isVertical={isVertical}
        />
        {/* use startDragging for mouse down event  */}
      </SC.Container>

      <SC.BtnContainer>
        <SC.Btn
          onClick={() => {
            setBorderValue(100);
          }}
        >
          Before
        </SC.Btn>
        <SC.Btn
          onClick={() => {
            setBorderValue(0);
          }}
        >
          after
        </SC.Btn>
      </SC.BtnContainer>
    </SC.ComponnentBody>
  );
}

export default BeforeAfter;
