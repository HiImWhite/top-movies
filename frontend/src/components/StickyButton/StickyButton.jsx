import React, { useState } from 'react';
import AddIcon from '../Icons/AddIcon';
import Modal from '../Modal/Modal';
import styles from './StickyButton.module.css';

const StickyButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.icon} onClick={() => setOpenModal(true)}>
        <AddIcon />
      </div>
      <Modal
        title='Add data'
        open={openModal}
        handleClose={() => setOpenModal(false)}>
        Formularz
      </Modal>
    </>
  );
};

export default StickyButton;
