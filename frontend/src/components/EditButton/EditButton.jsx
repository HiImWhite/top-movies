import React, { useState } from 'react';
import Form from '../Form/Form';
import EditIcon from '../Icons/EditIcon';
import Modal from '../Modal/Modal';
import styles from './EditButton.module.css';

const EditButton = ({ movieId }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
    setIsAdding(false);
  };

  return (
    <>
      <div className={styles.icon} onClick={handleOpenModal}>
        <EditIcon />
      </div>
      <Modal
        title={isAdding ? 'Add data' : 'Edit data'}
        open={openModal}
        handleClose={() => setOpenModal(false)}>
        <Form isAdding={isAdding} movieId={movieId} />
      </Modal>
    </>
  );
};

export default EditButton;
