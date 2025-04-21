
function BeforeImg({src,borderValue}){
    return(
        <img src={src} alt="beforeimg" className="beforeImgcs" style={{ clipPath: `polygon(0 0 ,  ${borderValue}%  0 , ${borderValue}%  100% , 0 100% )`}} />
    )

}

export default  BeforeImg;