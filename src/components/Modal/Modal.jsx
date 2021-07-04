import React from 'react';

import style from './Modal.module.css';

const Modal = ({ isOpend, onModalClose, ...props }) => (
  <div className={`${style.modal_wrapper} ${isOpend ? style.open : style.close}`}>
    <div className={style.modal_body}>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className={style.modal_close} onClick={onModalClose}>
        ×
      </div>
      {props.children}
    </div>
  </div>
);

export default Modal;
