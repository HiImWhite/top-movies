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
  return (
    <form className={styles.form}>
      {Object.keys(movieSchema).map((key, i) => (
        <div>
            <input
            className={styles.input}
            type='text'
            placeholder={key}
            title={`Type in a ${key}`}></input>
        </div>
      ))}
    </form>
  );
};

export default Form;
