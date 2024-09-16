import React from 'react';
import styles from './ContinueButton.module.css';

function ContinueButton() {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.continueButton}>
        <span className={styles.buttonText}>Continue</span>
      </button>
    </div>
  );
}

export default ContinueButton;