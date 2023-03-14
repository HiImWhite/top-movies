import React, { useState } from 'react';
import Form from '../Form/Form';
import EditIcon from '../Icons/EditIcon';
import AddIcon from '../Icons/AddIcon';
import Modal from '../Modal/Modal';
import styles from './ActionButton.module.css';

const ActionButton = ({ isAdding = false, movieData }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div
        className={isAdding ? styles['icon-add'] : styles['icon-edit']}
        onClick={() => setOpenModal(true)}>
        {isAdding ? <AddIcon /> : <EditIcon />}
      </div>
      <Modal
        title={isAdding ? 'Add data' : 'Edit data'}
        open={openModal}
        handleClose={() => setOpenModal(false)}>
        <Form isAdding={isAdding} movieData={movieData} />
      </Modal>
    </>
  );
};

export default ActionButton;
