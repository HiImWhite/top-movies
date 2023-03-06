import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';

const Table = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:8000/movies');
      setMovies(response.data);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Year</th>
          <th>Rating</th>
          <th>Genre</th>
          <th>Certificate</th>
          <th>Run Time</th>
          <th>Tagline</th>
          <th>Budget</th>
          <th>Box Office</th>
          <th>Casts</th>
          <th>Directors</th>
          <th>Writers</th>
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
