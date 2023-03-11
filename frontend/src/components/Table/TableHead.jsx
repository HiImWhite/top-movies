import React from 'react';
import { getMovies } from '../../services/movieServices';
import styles from './TableHead.module.css';

const TableHead = (props) => {
  const {
    title,
    handleMovies,
    input,
    handleInput,
    filterDisabled = false,
  } = props;

  const handleFilter = async (e) => {
    const value = e.target.value;
    console.log(title.replace(' ', '_').toLowerCase());
    handleInput({ [title]: value });

    try {
      if (!value) {
        const res = await getMovies();
        handleMovies(res.data);
        return;
      }
      const params = { [title.replace(' ', '_').toLowerCase()]: value };
      const res = await getMovies(params);
      handleMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <th className={styles.th}>
      <div className={styles.head}>
        {title}
        {!filterDisabled && (
          <input
            className={styles.input}
            type='text'
            onChange={handleFilter}
            placeholder='Filter...'
            value={input[title] || ''}
            title={`Type in a ${title}`}></input>
        )}
      </div>
    </th>
  );
};

export default TableHead;
