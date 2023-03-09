import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '../Icons/CloseIcon';
import styles from './Modal.module.css';

const Modal = (props) => {
  if (!props.open) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={props.handleClose}></div>
      <div className={styles.dialog}>
        <div className={styles.content}>
          <div className={styles.nav}>
            <h2>{props.title}</h2>
            <button className={styles.icon} onClick={props.handleClose}>
              <CloseIcon />
            </button>
          </div>
          {props.children}
        </div>
      </div>
    </div>,
    document.getElementById('portal'),
  );
};

export default Modal;
