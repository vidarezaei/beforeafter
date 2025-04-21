function Borderhandler({borderValue,draggingStart}){
return(
    <div className="border" style={{ left: `${borderValue}%` }} onMouseDown={draggingStart}>
        <div className="borderBubble" />
      </div>
)
    
}
export default Borderhandler;