import React, { useRef, useState } from "react";
import useBeforeAfterInteraction from "./useBeforeAfterInteraction.jsx";
import BeforeImagecomponent from "./BeforeImagecomponent.jsx";
import AfterImageComponent from "./AfterImageComponent.jsx";
import Borderhandler from "./Borderhandler.jsx";
import * as styled from "../styled/BeforeAfter.styled.js";
import calculateSliderPosition from "./calculateSliderPosition.jsx";
function BeforeAfter({ beforeimg, afterimg }) {
  const [isHoverEnabled, setisHoverEnabled] = useState(false);
  const containerRef = useRef(null);
  const [isVertical, setisVertical] = useState(true);
  const { borderValue, startDragging, setBorderValue } =
    useBeforeAfterInteraction(containerRef, isVertical, isHoverEnabled);
  const updatePosition = (e) => {
    calculateSliderPosition(e, containerRef, setBorderValue, isVertical);
  };

  return (
    <styled.ComponnentBody>
      <styled.Container
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
      </styled.Container>

      <styled.BtnContainer>
        <styled.Btn
          onClick={() => {
            setBorderValue(100);
          }}
        >
          Before
        </styled.Btn>
        <styled.Btn
          onClick={() => {
            setBorderValue(0);
          }}
        >
          after
        </styled.Btn>
        <styled.Btn
          onClick={() => {
            setisVertical(!isVertical);
          }}
        >
          change direction
        </styled.Btn>
        <styled.Btn
          onClick={() => {
            setisHoverEnabled(!isHoverEnabled);
          }}
        >
          active/deactive hover
        </styled.Btn>
      </styled.BtnContainer>
    </styled.ComponnentBody>
  );
}

export default BeforeAfter;
