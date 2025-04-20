function updateBorderValue(setBorderValue) {
    return function (e){
        const target = document.querySelector(".container");
        const rect = target.getBoundingClientRect();
    
      const newValue =Math.min(
        Math.max(((e.clientX - rect.left) / rect.width) * 100, 0),
        100
      );
    
      setBorderValue(newValue);
    }
    
    
  }

  export default updateBorderValue;