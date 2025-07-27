import { useRef } from 'react';
import useBeforeAfterInteraction from '../hooks/useBeforeAfterInteraction.jsx';
import CreateImage from './CreateImage.jsx';
import BorderHandler from './BorderHandler.jsx';
import * as SC from '../styled/BeforeAfter.styled.js';

function BeforeAfter({ beforeImg, afterImg, isVertical, isHoverEnabled, value, onChange }) {
   const containerRef = useRef(null);
   const { startDragging, calculatePosition } = useBeforeAfterInteraction(containerRef, isVertical, onChange);

   const updatePosition = (e) => {
      calculatePosition(e);
   };

   return (
      <SC.Container ref={containerRef} onClick={updatePosition} onMouseMove={isHoverEnabled ? updatePosition : null}>
         {/*onclick: Click on the slider bar to jump to a position */}
         <CreateImage src={beforeImg} borderValue={value} isVertical={isVertical} isBefore={true} />
         <CreateImage src={afterImg} />
         <BorderHandler
            borderValue={value}
            startDragging={startDragging}
            isVertical={isVertical}
            style={{ zIndex: 1 }}
         />
         {/* use startDragging for mouse down event  */}
      </SC.Container>
   );
}

export default BeforeAfter;
