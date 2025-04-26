function updateBorderValue(e, containerRef, setBorderValue) {
  const containerWidth = containerRef.current.offsetWidth;
  const containerLeft = containerRef.current.getBoundingClientRect().left;

  const newValue = Math.min(
    Math.max(((e.clientX - containerLeft) / containerWidth) * 100, 0),
    100
  );
  setBorderValue(newValue);
}

export default updateBorderValue;