import styles from './Form.module.css';

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
    console.log('submit');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {Object.keys(movieSchema).map((key, i) => (
        <div key={key} className={styles.textInputs}>
          <input
            className={styles.input}
            type='text'
            placeholder={key}
            title={`Type in a ${key}`}></input>
        </div>
      ))}
      <div className={styles.submitButton}>
        <input className={styles.input} type='submit' value='Submit' />
      </div>
    </form>
  );
};

export default Form;
