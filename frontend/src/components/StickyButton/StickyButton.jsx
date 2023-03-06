import React from 'react';
import styles from './StickyButton.module.css';

const StickyButton = (props) => {
  return <div className={styles.icon} onClick={props.handleOpen} />;
};

export default StickyButton;
