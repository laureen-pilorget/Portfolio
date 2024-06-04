import React from 'react';
import './modal.scss';


const Modal = ({ modalImg, modalTitle, modalText, close }) => {
    return (
      <div className="modal">
        <div className='modal__overlay' onClick={close}></div>
        <div className="modal__content">
          <span className="modal__close" onClick={close}>&times;</span>
          <img className='modal__img' src={modalImg} alt={modalTitle} />
          <h2 className='modal__title'>{modalTitle}</h2>
          <p className='modal__text'>blabla</p>
          {/* <p className='modal__text'>{modalText}</p> */}
        </div>
      </div>
    );
  };

export default Modal