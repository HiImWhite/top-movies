import React from 'react';
import AddIcon from '../Icons/AddIcon';
import styles from './StickyButton.module.css';

const StickyButton = (props) => {
  return (
    <div className={styles.icon} onClick={props.handleOpen}>
      <AddIcon />
    </div>
  );
};

export default StickyButton;
