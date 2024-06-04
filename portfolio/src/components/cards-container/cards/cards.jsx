import React from 'react';
import './cards.scss';
import Modal from '../../modal/modal';
import { useState } from 'react';


const Card = ({ cardImg, cardTitle, modalImg, modalTitle, modalText }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    return (
      <div className='center'>
        <div onClick={handleOpenModal} className='card'>
          <div className='card__filter'></div>
          <img src={cardImg} alt='projet' className='card__img'/>
          <h3 className='card__title'>{cardTitle}</h3>
        </div>
        {isModalOpen && (
          <Modal modalImg={modalImg} modalTitle={modalTitle} modalText={modalText}
          close={handleCloseModal}/>
        )}
      </div>
    );
  };

export default Card