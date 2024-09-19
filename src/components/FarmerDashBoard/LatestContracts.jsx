import React from 'react';
import styles from './LatestContracts.module.css';

function LatestContracts() {
  return (
    <section className={styles.latestContracts}>
      <h2 className={styles.title}>Latest contracts</h2>
      <ul className={styles.contractList}>
        {[...Array(5)].map((_, index) => (
          <li key={index} className={styles.contractItem}></li>
        ))}
      </ul>
    </section>
  );
}

export default LatestContracts;