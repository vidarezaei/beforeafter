import { useState, useEffect, useCallback } from 'react';
import calculateSliderPosition from '../helpers/calculateSliderPosition';

function useBeforeAfterInteraction(containerRef, isVertical, onChange) {
   //function for handle mouse movement when user drag border or bubble
   const [draggingState, setDraggingState] = useState(false);

   function calculatePosition(e) {
      if (containerRef.current) {
         const position = calculateSliderPosition(e, containerRef, isVertical);
         onChange(position);
      }
   }

   function startDragging(e) {
      setDraggingState(true);
      const position = calculateSliderPosition(e, containerRef, isVertical);
      onChange(position);
   }

   function draggingStop() {
      setDraggingState(false);
   }

   const handleMouseMove = useCallback(
      (e) => {
         if (draggingState) {
            const position = calculateSliderPosition(e, containerRef, isVertical);
            onChange(position);
         }
      },
      [draggingState, containerRef, isVertical, onChange]
   );

   useEffect(() => {
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
   }, [draggingState, containerRef, isVertical, onChange, handleMouseMove]);

   return { startDragging, calculatePosition };
}

export default useBeforeAfterInteraction;
