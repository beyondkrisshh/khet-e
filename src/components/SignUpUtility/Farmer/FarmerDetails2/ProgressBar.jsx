import React from 'react';
import styles from './LandCropDetails.module.css';

const ProgressBar = () => {
  const steps = [true, true, true, false];

  return (
    <div className={styles.progressBar}>
      {steps.map((isActive, index) => (
        <div key={index} className={styles.progressStep}>
          <div className={`${styles.progressIndicator} ${!isActive && styles.progressIndicatorInactive}`} />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;