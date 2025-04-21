import React, { useRef } from "react";
import "./BeforeAfter.css";
import BeforeAfterHandler from "./BeforeAfterHandler.jsx";
import BeforeImg from "./BeforeImg.jsx";
import AfterImg from "./AfterImg.jsx";
import Borderhandler from "./Borderhandler.jsx";
import styled from "styled-components";
const Container=styled.div`
position: relative;
    width: 500px;
    height: 500px;
    overflow: hidden;
    cursor: pointer;
  user-select: none;
    margin-left:100px;
`;

 

function BeforeAfter({beforeimg , afterimg}) {
  const containerRef = useRef(null);
  const {borderValue, draggingStart}=BeforeAfterHandler(containerRef);


  return (
    <Container className="container" ref={containerRef}>
     
        
      
        <BeforeImg src={beforeimg}  borderValue={borderValue} />
        <AfterImg src={afterimg} />
        <Borderhandler borderValue={borderValue}  draggingStart={draggingStart} />
        
      
</Container>
      
  );
}

export default BeforeAfter;