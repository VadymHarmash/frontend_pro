import React, { useEffect, useState } from 'react';
import { loadData } from "../../utils/api";
import styles from './todosList.module.scss';

export default function TodosList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Main</h1>
      {data.length ? (
        <ul className={styles.list}>
          {data.map(item => (
            <li key={item.id} className={styles.listItem}>
              {item.title}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.loading}>Loading...</p>
      )}
    </div>
  );
}
