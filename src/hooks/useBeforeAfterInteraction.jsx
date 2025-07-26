import { useState, useEffect } from 'react';
import calculateSliderPosition from '../helpers/calculateSliderPosition';

function useBeforeAfterInteraction(containerRef, isVertical) {
   //function for handle mouse movement when user drag border or bubble
   const [borderValue, setBorderValue] = useState(50);
   const [draggingState, setDraggingState] = useState(false);

   useEffect(() => {
      function handleMouseMove(e) {
         if (draggingState) {
            calculateSliderPosition(e, containerRef, setBorderValue, isVertical);
         }
      }

      if (draggingState) {
         window.addEventListener('mousemove', handleMouseMove);
         window.addEventListener('mouseup', draggingStop);
      } else {
         window.removeEventListener('mousemove', handleMouseMove);
         window.removeEventListener('mouseup', draggingStop);
      }

      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
         window.removeEventListener('mouseup', draggingStop);
      };
   }, [draggingState]);

   function startDragging(e) {
      setDraggingState(true);
      calculateSliderPosition(e, containerRef, setBorderValue, isVertical);
   }

   function draggingStop() {
      setDraggingState(false);
   }

   return { borderValue, startDragging, setBorderValue };
}

export default useBeforeAfterInteraction;
