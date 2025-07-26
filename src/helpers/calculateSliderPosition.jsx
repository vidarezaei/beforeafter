function calculateSliderPosition(e, containerRef, setBorderValue, isVertical) {
   const containerWidth = containerRef.current.offsetWidth;
   const containerLeft = containerRef.current.getBoundingClientRect().left;
   const containerHeight = containerRef.current.offsetHeight;
   const containerTop = containerRef.current.getBoundingClientRect().top;

   setBorderValue(
      isVertical
         ? Math.max(Math.min(((e.clientX - containerLeft) / containerWidth) * 100, 100), 0)
         : Math.max(Math.min(((e.clientY - containerTop) / containerHeight) * 100, 100), 0)
   );
}

export default calculateSliderPosition;
