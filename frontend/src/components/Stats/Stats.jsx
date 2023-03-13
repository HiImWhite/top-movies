import React, { useEffect, useState } from 'react';
import { getStats } from '../../services/movieServices';
import styles from './Stats.module.css';

export default function Stats() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getStats("avgbox");
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
        {
          Object.keys(stats).map((key) => (
            <div>
              {stats[key].movies > 1 && `${key}: ${stats[key].avgBox}$`}
            </div>
          ))
        }
    </div>
  );
};