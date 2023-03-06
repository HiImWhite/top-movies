import React from 'react';
import { getMovies } from '../services/movieServices';
import './TableHead.css';

const TableHead = (props) => {
  const { title, handleState } = props;

  const handleFilter = async (e) => {
    try {
      if (!e.target.value) {
        const res = await getMovies();
        handleState(res.data);
        return;
      }

      const params = {};
      params[title.toLowerCase()] = e.target.value;
      const res = await getMovies(params);
      handleState(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClear = async (e) => {
    e.target.value = '';
    const res = await getMovies();
    handleState(res.data);
  };

  return (
    <th>
      <div>
        {title}
        <input
          type='text'
          onKeyUp={handleFilter}
          onBlur={handleClear}
          placeholder='Filter...'
          title={`Type in a ${title}`}></input>
      </div>
    </th>
  );
};

export default TableHead;
