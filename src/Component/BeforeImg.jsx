import styled from "styled-components";
const BeforeIm=styled.img`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
overflow: hidden;
object-fit: cover;
 z-index: 2;
`;
function BeforeImg({src,borderValue}){
 
    return(
        <BeforeIm src={src} alt="beforeimg"  style={{ clipPath: `polygon(0 0 ,  ${borderValue}%  0 , ${borderValue}%  100% , 0 100% )`}} />
        
    )

}

export default  BeforeImg;