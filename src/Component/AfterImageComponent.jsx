import styled from "styled-components";
const AfterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  z-index: 1;
`;
function AfterImageComponent({ src }) {
  return <AfterImage src={src} alt="afterimg" />;
}
export default AfterImageComponent;
