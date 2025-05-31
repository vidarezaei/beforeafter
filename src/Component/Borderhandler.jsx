import styled from "styled-components";

const Border = styled.div`
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  background: white;
  cursor: ew-resize;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BorderBubble = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: #ffffff;
  border: 2px solid #000;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

function Borderhandler({ borderValue, draggingStart, direction }) {
  const borderstyle = !direction
    ? {
        top: `${borderValue}%`,
        width: "100%",
        height: "2px",
        left: "0",
      }
    : {
        left: `${borderValue}%`,
        width: "2px",
        height: "100%",
        top: "0",
      };

  return (
    <Border style={borderstyle} onMouseDown={draggingStart} className="">
      <BorderBubble />
    </Border>
  );
}
export default Borderhandler;
