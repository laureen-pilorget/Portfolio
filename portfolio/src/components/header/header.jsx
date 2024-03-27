import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import { NavLink } from 'react-router-dom';

// const element = <FontAwesomeIcon icon={faCoffee} />
const Header = () => {
    return(
        <header className='header'>
            <FontAwesomeIcon icon={faChevronUp} className='header__icon'/>
            <nav className='menu'>
                <NavLink to='/About'className='header__link'>About</NavLink>
                <NavLink to='/Skills'className='header__link'>Skills</NavLink>
                <NavLink to='/Projects'className='header__link'>Projects</NavLink>
                <NavLink to='/Networks'className='header__link'>Networks and contact</NavLink>
            </nav>
        </header>
    )
}

export default Header