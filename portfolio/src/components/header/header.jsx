import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

const Header = () => {
  return(
    <header className='header'>
        <a href='#top'><FontAwesomeIcon icon={faChevronUp} className='header__icon'/></a>
        <nav className='menu'>
          <a href='#about' className='header__link'>About</a>
          <a href='#skills' className='header__link'>Skills</a>
          <a href='#projects' className='header__link'>Projects</a>
          <a href='#networks' className='header__link'>Networks and contact</a>
        </nav>
    </header>
  )
}

export default Header