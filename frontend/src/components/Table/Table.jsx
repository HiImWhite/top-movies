import React, { useState, useEffect } from 'react';
import TableHead from './TableHead';
import { getMovies } from '../../services/movieServices';
import styles from './Table.module.css';

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovies();
      setMovies(response.data);
    };
    fetchData();
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {HeadTitles.map((title) => (
            <TableHead key={title} title={title} handleState={setMovies} />
          ))}
        </tr>
      </thead>
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
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
