import styles from './Form.module.css';
import { addMovie } from '../../services/movieServices';

const movieSchema = {
  rank: String,
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

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {};
    Object.keys(movieSchema).forEach((key) => {
      formData[key] = e.target.elements[key].value;
    });
    console.log(formData);

    addMovie(formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Object.keys(movieSchema).map((key, i) => (
        <div key={key} className={styles.textInputs}>
          <input
            className={styles.input}
            type='text'
            placeholder={key === 'rank' ? '>250' : key}
            title={`Type in a ${key}`}
            disabled={key === 'rank' ? true : false}
            name={key}></input>
        </div>
      ))}
      <div className={styles.submitButton}>
        <input className={styles.input} type='submit' value='Submit' />
      </div>
    </form>
  );
};

export default Form;
