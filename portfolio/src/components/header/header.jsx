import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './header.scss';
import { NavLink } from 'react-router-dom';

// const element = <FontAwesomeIcon icon={faCoffee} />
const Header = () => {
    return(
        <header className='header'>
            <FontAwesomeIcon icon={faArrowUp} size='2x'/>
            <nav className='menu'>
                <NavLink to='/'className='header__link'>About</NavLink>
                <NavLink to='/About'className='header__link'>Skills</NavLink>
                <NavLink to='/About'className='header__link'>Projects</NavLink>
                <NavLink to='/About'className='header__link'>Networks and contact</NavLink>
            </nav>
        </header>
    )
}

export default Header