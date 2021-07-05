import React from 'react';

import style from './Modal.module.css';

const Modal = ({ isOpend, onModalClose, ...props }) => (
  <div className={`${style.modal_wrapper} ${isOpend ? style.open : style.close}`}>
    <div className={style.modal_body}>
      <button type="button" className={style.modal_close} onClick={onModalClose}>
        ×
      </button>
      {props.children}
    </div>
  </div>
);

export default Modal;
