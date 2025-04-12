import  {useState}  from "react";
import "./BeforeAfter.css"


function BeforeAfter({beforeimg , afterimg}){
const [borderValue, setBorderValue]=useState(50);


function handleBorderValue(e){
    setBorderValue(e.target.value);
};
return(
    <div className="container">
        <div className="beforeImgcs" >
            <img src={beforeimg} alt="beforeimg" style={{width: `${borderValue}%`,overflow:"hidden"}} />
        </div>

        <div className="beforeImgcs" >
            <img src={afterimg} alt="afterimg" />
        </div>

        <input type="range" min="0" max="100" value={borderValue} onChange={handleBorderValue} className="bordervalue" />
    </div>
)

}

export default BeforeAfter;