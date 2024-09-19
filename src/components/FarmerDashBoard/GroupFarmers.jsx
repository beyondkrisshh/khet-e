import React from 'react';
import styles from './GroupFarmers.module.css';

function GroupFarmers() {
  return (
    <section className={styles.groupFarmers}>
      <h2 className={styles.title}>Group farmers</h2>
      <div className={styles.actions}>
        <button className={styles.createButton}>
          <img src="http://b.io/ext_24-" alt="" className={styles.buttonIcon} />
          Create
        </button>
        <span className={styles.orText}>or</span>
        <button className={styles.joinButton}>
          <img src="http://b.io/ext_25-" alt="" className={styles.buttonIcon} />
          Join
        </button>
      </div>
    </section>
  );
}

export default GroupFarmers;