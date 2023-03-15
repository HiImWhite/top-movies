import { useState } from 'react';
import { addMovie, updateMovie } from '../../services/movieServices';
import styles from './Form.module.css';

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

const Form = ({ isAdding, movieData }) => {
  const [formValues, setFormValues] = useState(movieData);

  const handleInput = (e, key) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    try {
      const formData = {};
      Object.keys(movieSchema).forEach((key) => {
        formData[key] = e.target.elements[key].value;
      });

      if (
        isNaN(formData?.year) ||
        isNaN(formData?.rating) ||
        isNaN(formData?.budget) ||
        isNaN(formData?.box_office)
      )
        return;

      if (isAdding) {
        addMovie(formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        updateMovie(movieData._id, formData)
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
                value={formValues?.[key] || ''}
                onChange={(e) => handleInput(e, key)}
                required={true}
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
