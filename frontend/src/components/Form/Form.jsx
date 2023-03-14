import styles from './Form.module.css';
import { addMovie, updateMovie } from '../../services/movieServices';
import { useEffect } from 'react';

const movieSchema = {
  // rank: String,
  name: String,
  year: String,
  rating: String,
  genre: String,
  certificate: String,
  run_time: String,
  tagline: String,
  budget: String,
  box_office: String,
  casts: String,
  directors: String,
  writers: String,
};

const Form = ({ isAdding, movieId }) => {
  useEffect(() => {
    console.count();
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();

    try {
      const formData = {};
      Object.keys(movieSchema).forEach((key) => {
        formData[key] = e.target.elements[key].value;
      });
      // console.log(formData);

      if (isAdding) {
        addMovie(formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        updateMovie(movieId, formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.content}>
      <form id='form' className={styles.form} onSubmit={handleSubmit}>
        {Object.keys(movieSchema).map((key) => (
          <div key={key}>
            <label className={styles.input}>
              <input
                className={styles.field}
                type='text'
                placeholder=' '
                title={`Type in a ${key}`}
                name={key}
                autoComplete='off'
              />
              <span className={styles.label}>
                {key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}
              </span>
            </label>
          </div>
        ))}
      </form>
      <div className={styles.submit}>
        <button
          form='form'
          className={styles.button}
          type='submit'
          value='submit'>
          {isAdding ? 'Add data' : 'Edit data'}
        </button>
      </div>
    </div>
  );
};

export default Form;
