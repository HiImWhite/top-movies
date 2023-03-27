import axios from 'axios';
// const apiUrl = "http://localhost:8000";
const apiUrl = import.meta.env.VITE_API_URL;

export function getMovies(params = null) {
  if (params)
    return axios.get(apiUrl + '/movies', {
      params: params,
    });

  return axios.get(apiUrl + '/movies');
}

export function addMovie(movie) {
  return axios.post(apiUrl + '/movies', movie);
}

export function updateMovie(id, movie) {
  return axios.put(apiUrl + '/movies/' + id, movie);
}

export function getStats(stat) {
  return axios.get(apiUrl + '/stats/' + stat);
}
