import React from 'react';
import './about.scss';


const About = ({aboutImg, aboutTitle, aboutAge, aboutText}) => {
    return(
        <div className='about'>
            <div className='about__imgBox'>
                <img src={aboutImg} alt='ma photo' className='about__img'/>
            </div>
            <div className='about__writings'>
                <p className='about__title'>{aboutTitle}</p>
                <p className='about__age'>{aboutAge}</p>
                <p className='about__text'>{aboutText}</p>
            </div>
        </div>
    )
}

export default About