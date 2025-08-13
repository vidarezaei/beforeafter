import { RefObject } from 'react';
// interface CalculateSliderPositionParams {
//    e: MouseEvent;
//    containerRef: RefObject<HTMLDivElement>;
//    isVertical: boolean;
// }
function calculateSliderPosition(
   e: React.MouseEvent<HTMLDivElement> | MouseEvent,
   containerRef: RefObject<HTMLDivElement>,
   isVertical: boolean
): number {
   const containerWidth = containerRef.current.offsetWidth;
   const containerLeft = containerRef.current.getBoundingClientRect().left;
   const containerHeight = containerRef.current.offsetHeight;
   const containerTop = containerRef.current.getBoundingClientRect().top;

   return isVertical
      ? Math.max(Math.min(((e.clientX - containerLeft) / containerWidth) * 100, 100), 0)
      : Math.max(Math.min(((e.clientY - containerTop) / containerHeight) * 100, 100), 0);
}

export default calculateSliderPosition;
