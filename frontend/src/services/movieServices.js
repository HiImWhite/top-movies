import axios from 'axios';
const apiUrl = 'http://localhost:8000/movies';

export function getMovies(params = null) {
  if (params)
    return axios.get(apiUrl, {
      params: params,
    });

  return axios.get(apiUrl);
}

export function addMovie(movie) {
  return axios.post(apiUrl, movie);
}

export function updateTask(id, movie) {
  return axios.put(apiUrl + '/' + id, movie);
}
