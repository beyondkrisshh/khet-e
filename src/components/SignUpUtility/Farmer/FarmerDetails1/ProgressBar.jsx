import React from 'react';
import styles from './FarmerRegistration.module.css';

function ProgressBar({ steps, activeSteps }) {
  return (
    <div className={styles.progressBar}>
      {[...Array(steps)].map((_, index) => (
        <div key={index} className={styles.progressStep}>
          <div className={index < activeSteps ? styles.progressStepActive : styles.progressStepInactive} />
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;