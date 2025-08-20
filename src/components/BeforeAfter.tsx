import { useRef } from 'react';
import useBeforeAfterInteraction from '../hooks/useBeforeAfterInteraction';
import CreateImage from './CreateImage';
import BorderHandler from './BorderHandler';
import * as SC from '../styled/BeforeAfter.styled';
interface BeforeAfterProps {
   beforeImg: string;
   afterImg: string;
   isVertical: boolean;
   isHoverEnabled: boolean;
   value: number;
   onChange: (value: number) => void;
}
function BeforeAfter({ beforeImg, afterImg, isVertical, isHoverEnabled, value, onChange }: BeforeAfterProps) {
   const containerRef = useRef<HTMLDivElement>(null!);
   const { startDragging, calculatePosition } = useBeforeAfterInteraction({ containerRef, isVertical, onChange });

   const updatePosition = (e: React.MouseEvent<HTMLDivElement> | MouseEvent): void => {
      calculatePosition(e);
   };

   return (
      <SC.Container
         ref={containerRef}
         onClick={updatePosition}
         onMouseMove={isHoverEnabled ? updatePosition : undefined}
      >
         {/*onclick: Click on the slider bar to jump to a position */}
         <CreateImage src={beforeImg} borderValue={value} isVertical={isVertical} isBefore={true} />
         <CreateImage src={afterImg} borderValue={value} isVertical={isVertical} isBefore={false} />
         {/*???*/}
         <BorderHandler borderValue={value} startDragging={startDragging} isVertical={isVertical} />
         {/* use startDragging for mouse down event  */}
      </SC.Container>
   );
}

export default BeforeAfter;
