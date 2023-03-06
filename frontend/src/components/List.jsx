import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <ul>
      {movies.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
