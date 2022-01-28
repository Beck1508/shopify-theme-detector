import React from "react";
import OutSell from './OutSell.png'; // with import



function Rectangle2(){

    return (
    
    <div className='Rectangle1' style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, 25%)'
    }}>
    <div className = "ImageText">
    <img src={OutSell} style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, 25%)'


    }} width={234} height={150}/>
    <p className="OutsellFont">
        Create beautiful popup offers on the product page that are too good for your customers to pass up!
    </p>
    </div>
    </div>);

}


export default Rectangle2;