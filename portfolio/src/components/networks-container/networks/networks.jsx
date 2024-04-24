import React from "react";
import './networks.scss';


const Networks = ({networksIcon, networksText}) => {
    return(
        <div className="allNetworks">
            <div className="allNetworks__icon">{networksIcon}</div>
            <p className="allNetworks__text">{networksText}</p>
        </div>
    )
}



export default Networks