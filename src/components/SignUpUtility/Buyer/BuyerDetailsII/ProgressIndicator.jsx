import React from "react";
import styles from './AuthenticationForm.module.css';

function ProgressIndicator() {
  return (
    <div className={styles.progressContainer}>
      {[1, 2, 3].map((step) => (
        <div key={step} className={styles.progressStep}>
          <div className={styles.progressBar} />
        </div>
      ))}
    </div>
  );
}

export default ProgressIndicator;