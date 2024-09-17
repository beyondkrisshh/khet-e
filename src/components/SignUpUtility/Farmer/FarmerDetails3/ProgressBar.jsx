import React from 'react';
import styles from './KycForm.module.css';

const ProgressBar = ({ steps }) => {
  return (
    <div className={styles.progressBar}>
      {[...Array(steps)].map((_, index) => (
        <div key={index} className={styles.progressStep}>
          <div className={styles.progressIndicator} />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;