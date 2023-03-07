import React, { useState, useEffect } from 'react';
import TableHead from './TableHead';
import { getMovies } from '../../services/movieServices';
import styles from './Table.module.css';
import EditButton from '../EditButton/EditButton';

const HeadTitles = [
  'Rank',
  'Name',
  'Year',
  'Rating',
  'Genre',
  'Certificate',
  'Run Time',
  'Tagline',
  'Budget',
  'Box Office',
  'Casts',
  'Directors',
  'Writers',
];

const Table = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovies();
      setMovies(response.data);
    };

    fetchData();
  }, []);

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            {HeadTitles.map((title) => (
              <TableHead
                key={title}
                title={title}
                handleMovies={setMovies}
                input={input}
                handleInput={setInput}
              />
            ))}
            <TableHead title='Actions' filterDisabled={true} />
          </tr>
        </thead>
        {movies.length > 0 && (
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.rank}>
                <td>{movie.rank}</td>
                <td>{movie.name}</td>
                <td>{movie.year}</td>
                <td>{movie.rating}</td>
                <td>{movie.genre}</td>
                <td>{movie.certificate}</td>
                <td>{movie.run_time}</td>
                <td>{movie.tagline}</td>
                <td>{movie.budget}</td>
                <td>{movie.box_office}</td>
                <td>{movie.casts}</td>
                <td>{movie.directors}</td>
                <td>{movie.writers}</td>
                <td>
                  <EditButton />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {movies.length === 0 && <div className={styles.info}>No data found</div>}
    </>
  );
};

export default Table;
