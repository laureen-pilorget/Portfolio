import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {aboutID, skillsID, projectsID, networksID} from './anchors/anchors';
import './header.scss';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return(
        <header className='header'>
            <FontAwesomeIcon icon={faChevronUp} className='header__icon'/>
            <nav className='menu'>
                <NavLink className='header__link'>About</NavLink>
                <NavLink className='header__link'>Skills</NavLink>
                <NavLink className='header__link'>Projects</NavLink>
                <NavLink className='header__link'>Networks and contact</NavLink>
            </nav>
        </header>
    )
}
  
    
//   }

export default Header