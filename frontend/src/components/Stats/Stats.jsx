import React, { useEffect, useState } from 'react';
import { getStats } from '../../services/movieServices';
import styles from './Stats.module.css';

const Stats = () => {
  const [stats, setStats] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStats('avgbox');
        setStats(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Average box office of directors</h1>
      <input type="checkbox" checked={isChecked}
          onChange={handleOnChange} /> Only show average of more than one movie
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>
              <div className={styles.head}>
                Director
              </div>
            </th>
            <th className={styles.th}>
              <div className={styles.head}>
                Average Box Office
              </div>
            </th>
            <th className={styles.th}>
              <div className={styles.head}>
                Number of Movies
              </div>
            </th>
          </tr>
        </thead>
          <tbody>
            {
              Object.keys(stats).map((key) => (
                <tr key={key}>
                  {isChecked 
                  ? <>
                    {stats[key].movies > 1 && <>
                      <td>{key}</td>
                      <td>{stats[key].avgBox}</td>
                      <td>{stats[key].movies}</td>
                    </>}
                  </>  
                  : <>
                    <td>{key}</td>
                    <td>{stats[key].avgBox}</td>
                    <td>{stats[key].movies}</td>
                  </>}
                </tr>
            ))}
          </tbody>
      </table>
      {/* {
      Object.keys(stats).map((key) => (
        <div>{isChecked ? <>{stats[key].movies > 1 && `${key}: ${stats[key].avgBox}$ Average of ${stats[key].movies} movies`}
        </>  : `${key}: ${stats[key].avgBox}$ Average of ${stats[key].movies} movies`
          
          }</div>
      ))} */}
    </div>
  );
};

export default Stats;
