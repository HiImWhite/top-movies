import React, { useState } from 'react';
import Form from '../Form/Form';
import AddIcon from '../Icons/AddIcon';
import Modal from '../Modal/Modal';
import styles from './StickyButton.module.css';

const StickyButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isAdding, setIsAdding] = useState(true);

  const handleOpenModal = () => {
    setOpenModal(true);
    setIsAdding(true);
  };

  return (
    <>
      <div className={styles.icon} onClick={handleOpenModal}>
        <AddIcon />
      </div>
      <Modal
        title={isAdding ? 'Add data' : 'Edit data'}
        open={openModal}
        handleClose={() => setOpenModal(false)}>
        <Form isAdding={isAdding} />
      </Modal>
    </>
  );
};

export default StickyButton;
