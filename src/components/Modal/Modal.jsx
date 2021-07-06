import React from 'react';

import style from './Modal.module.css';

const Modal = ({ isModalOpen, onModalClose, ...props }) => {
  if (!isModalOpen) return null;
  return (
    <div className={`${style.modal_wrapper} ${isModalOpen ? style.open : style.close}`}>
      <div className={style.modal_body}>
        <button type="button" className={style.modal_close} onClick={onModalClose}>
          ×
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
