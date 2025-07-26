import styled from 'styled-components';
const StyledAfterImage = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   overflow: hidden;
   object-fit: cover;
   z-index: 1;
`;
function AfterImage({ src }) {
   return <StyledAfterImage src={src} alt="afterImg" />;
}
export default AfterImage;
