import React from 'react';
import styles from './ProgressBar.module.css';

function ProgressBar() {
  const steps = [
    { isActive: true },
    { isActive: false },
    { isActive: false },
    { isActive: false }
  ];

  return (
    <div className={styles.progressBarWrapper}>
      {steps.map((step, index) => (
        <div key={index} className={styles.progressStep}>
          <div className={`${styles.progressIndicator} ${step.isActive ? styles.active : ''}`} />
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;