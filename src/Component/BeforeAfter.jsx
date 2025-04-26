import React, { useRef ,useState} from "react";
import BeforeAfterHandler from "./BeforeAfterHandler.jsx";
import BeforeImg from "./BeforeImg.jsx";
import AfterImg from "./AfterImg.jsx";
import Borderhandler from "./Borderhandler.jsx";
import * as styled from "../styled/BeforeAfter.styled.js";
import updateBorderValue from "./updateBorderValue.jsx";




 

function BeforeAfter({beforeimg , afterimg}) {
  const containerRef = useRef(null);
  const {borderValue, draggingStart,setBorderValue}=BeforeAfterHandler(containerRef);


  return (
  <styled.ComponnentBody>
    <styled.Container className="container" ref={containerRef} onClick={(e)=>{updateBorderValue(e, containerRef, setBorderValue)}}>
     
        
      
        <BeforeImg src={beforeimg}  borderValue={borderValue} />
        <AfterImg src={afterimg} />
        <Borderhandler borderValue={borderValue}  draggingStart={draggingStart} />    
    </styled.Container>


    <styled.BtnContainer>

      <styled.Btn onClick={()=>{setBorderValue(100)}}>Before</styled.Btn>
      <styled.Btn onClick={()=>{setBorderValue(0)}} >after</styled.Btn>

    </styled.BtnContainer>


</styled.ComponnentBody>
      
  );
}

export default BeforeAfter;