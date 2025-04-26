function updateBorderValue(e, containerRef, setBorderValue,direction) {
 


  const containerWidth = containerRef.current.offsetWidth;
  const containerLeft = containerRef.current.getBoundingClientRect().left;
  const containerHeight = containerRef.current.offsetHeight;
  const containertop = containerRef.current.getBoundingClientRect().top;


 



  setBorderValue((direction)? Math.max(Math.min(((e.clientX - containerLeft) / containerWidth) * 100, 100),0) : Math.max(Math.min(((e.clientY - containertop) / containerHeight) * 100, 100),0));

  



}

export default updateBorderValue;