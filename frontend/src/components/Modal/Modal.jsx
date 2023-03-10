import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../Icons/CloseIcon';
import styles from './Modal.module.css';

const Modal = ({ open, handleClose, title = '', children }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={handleClose}></div>
      <div className={styles.dialog}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <h2>{title}</h2>
            <button className={styles.icon} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;
