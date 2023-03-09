import React, { useState } from 'react';
import EditIcon from '../Icons/EditIcon';
import Modal from '../Modal/Modal';
import styles from './EditButton.module.css';

const EditButton = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.icon} onClick={() => setOpenModal(true)}>
        <EditIcon />
      </div>
      <Modal
        title='Edit data'
        open={openModal}
        handleClose={() => setOpenModal(false)}>
        Formularz
      </Modal>
    </>
  );
};

export default EditButton;
