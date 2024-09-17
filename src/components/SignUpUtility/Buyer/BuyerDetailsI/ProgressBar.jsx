import React from 'react';
import styles from './BuyerRegistration.module.css';

function ProgressBar({ steps, activeStep }) {
  return (
    <div className={styles.progressBar}>
      {[...Array(steps)].map((_, index) => (
        <div key={index} className={styles.progressStep}>
          <div className={index < activeStep ? styles.progressStepActive : styles.progressStepInactive} />
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;