import styled from 'styled-components';
const StyledBeforeImage = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   overflow: hidden;
   object-fit: cover;
   z-index: 2;
`;
function BeforeImage({ src, borderValue, isVertical }) {
   return (
      <StyledBeforeImage
         src={src}
         alt="beforeImg"
         style={{
            clipPath: isVertical
               ? `polygon(0 0 ,  ${borderValue}%  0 , ${borderValue}%  100% , 0 100% )`
               : `polygon(0  0 ,100% 0, 100%  ${borderValue}%  ,0 ${borderValue}%   )`,
         }}
      />
   );
}

export default BeforeImage;
