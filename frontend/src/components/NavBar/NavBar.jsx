import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ isTable, handleIsTable }) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li
          className={isTable ? styles.active : ''}
          onClick={() => {
            handleIsTable(true);
          }}>
          Table
        </li>
        <li
          className={!isTable ? styles.active : ''}
          onClick={() => {
            handleIsTable(false);
          }}>
          Stats
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
