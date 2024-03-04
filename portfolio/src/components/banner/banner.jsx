import React from 'react';
import './banner.scss';


const Banner = ({bannerText}) => {
    return(
        <div className='bannerBox'>
            <p className='bannerBox__text'>{bannerText}</p>
        </div>
    )
}

export default Banner