import React, { useState } from 'react';
import Form from '../Form/Form';
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
        <Form />
      </Modal>
    </>
  );
};

export default StickyButton;
