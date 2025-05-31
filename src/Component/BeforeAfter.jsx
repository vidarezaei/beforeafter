import React, { useRef, useState } from "react";
import BeforeAfterHandler from "./BeforeAfterHandler.jsx";
import BeforeImg from "./BeforeImg.jsx";
import AfterImg from "./AfterImg.jsx";
import Borderhandler from "./Borderhandler.jsx";
import * as styled from "../styled/BeforeAfter.styled.js";
import updateBorderValue from "./updateBorderValue.jsx";


function BeforeAfter({ beforeimg, afterimg }) {
  const [hover, sethover] = useState(false);
  const containerRef = useRef(null);
  const [direction, setdirection] = useState(true);
  const { borderValue, draggingStart, setBorderValue } = BeforeAfterHandler(
    containerRef,
    direction,
    hover,
  );

  return (
    <styled.ComponnentBody>
      <styled.Container
        ref={containerRef}
        onClick={(e) => {
          updateBorderValue(e, containerRef, setBorderValue, direction);
        }}
        onMouseMove={
          hover
            ? (e) => {
                updateBorderValue(e, containerRef, setBorderValue, direction);
              }
            : () => {}
        }
      >
        {" "}
        {/*onclick: Click on the slider bar to jump to a position */}
        <BeforeImg
          src={beforeimg}
          borderValue={borderValue}
          direction={direction}
        />
        <AfterImg src={afterimg} />
        <Borderhandler
          borderValue={borderValue}
          draggingStart={draggingStart}
          direction={direction}
        />{" "}
        {/* use draggingstart for mouse down event  */}
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
            setdirection(!direction);
          }}
        >
          change direction
        </styled.Btn>
        <styled.Btn
          onClick={() => {
            sethover(!hover);
          }}
        >
          active/deactive hover
        </styled.Btn>
      </styled.BtnContainer>
    </styled.ComponnentBody>
  );
}

export default BeforeAfter;
