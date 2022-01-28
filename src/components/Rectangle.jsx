import React from "react";
import AfterSell from './AfterSell.png'; // with import



function Rectangle(){

    return (
    
    <div className='Rectangle1' style={{
        position: 'absolute', left: '50%', 
        transform: 'translate(-50%, 25%)'
    }}>
    <div className = "ImageText">
    <img src={AfterSell} style={{
        position: 'absolute', left: '50%',
        transform: 'translate(-50%, 25%)'


    }} width={234} height={150}/>
    <p className="AftersellFont">
        AfterSell helps boost revenue by 20% with high converting post purchase funnels and 1-click upsells
    </p>
    </div>
    
    </div>);
}


export default Rectangle;