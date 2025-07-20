import React, { useRef, useState } from "react";
import useBeforeAfterInteraction from "./useBeforeAfterInteraction.jsx";
import BeforeImagecomponent from "./BeforeImagecomponent.jsx";
import AfterImageComponent from "./AfterImageComponent.jsx";
import Borderhandler from "./Borderhandler.jsx";
import * as SC from "../styled/BeforeAfter.styled.js";
import calculateSliderPosition from "./calculateSliderPosition.jsx";
function BeforeAfter({ beforeimg, afterimg, isVertical, isHoverEnabled }) {
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
        <BeforeImagecomponent
          src={beforeimg}
          borderValue={borderValue}
          isVertical={isVertical}
        />
        <AfterImageComponent src={afterimg} />
        <Borderhandler
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
