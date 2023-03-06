import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './List.module.css';

const List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/movies');
      setMovies(response.data);
    };
    fetchData();
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Rank</th>
          <th className={styles.tableHeader}>Name</th>
          <th className={styles.tableHeader}>Year</th>
          <th className={styles.tableHeader}>Rating</th>
          <th className={styles.tableHeader}>Genre</th>
          <th className={styles.tableHeader}>Certificate</th>
          <th className={styles.tableHeader}>Run Time</th>
          <th className={styles.tableHeader}>Tagline</th>
          <th className={styles.tableHeader}>Budget</th>
          <th className={styles.tableHeader}>Box Office</th>
          <th className={styles.tableHeader}>Casts</th>
          <th className={styles.tableHeader}>Directors</th>
          <th className={styles.tableHeader}>Writers</th>
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
