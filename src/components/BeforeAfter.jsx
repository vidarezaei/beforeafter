import { useRef } from 'react';
import useBeforeAfterInteraction from '../hooks/useBeforeAfterInteraction.jsx';
import CreateImage from './CreateImage.jsx';
import BorderHandler from './BorderHandler.jsx';
import * as SC from '../styled/BeforeAfter.styled.js';
import calculateSliderPosition from '../helpers/calculateSliderPosition.jsx';

function BeforeAfter({ beforeImg, afterImg, isVertical, isHoverEnabled }) {
   const containerRef = useRef(null);
   const { borderValue, startDragging, setBorderValue } = useBeforeAfterInteraction(
      containerRef,
      isVertical,
      isHoverEnabled
   );
   const updatePosition = (e) => {
      calculateSliderPosition(e, containerRef, setBorderValue, isVertical);
   };

   return (
      <SC.ComponentBody>
         <SC.Container ref={containerRef} onClick={updatePosition} onMouseMove={isHoverEnabled ? updatePosition : null}>
            {/*onclick: Click on the slider bar to jump to a position */}
            <CreateImage src={beforeImg} borderValue={borderValue} isVertical={isVertical} isBefore={true} />
            <CreateImage src={afterImg} />
            <BorderHandler
               borderValue={borderValue}
               startDragging={startDragging}
               isVertical={isVertical}
               style={{ zIndex: 1 }}
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
      </SC.ComponentBody>
   );
}

export default BeforeAfter;
