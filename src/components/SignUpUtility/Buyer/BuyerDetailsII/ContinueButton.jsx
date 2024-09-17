import React from "react";
import styles from './AuthenticationForm.module.css';

function ContinueButton() {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.continueButton}>Continue</button>
    </div>
  );
}

export default ContinueButton;