import React from "react";
import styles from './AuthenticationForm.module.css';

function InputField() {
  return (
    <div className={styles.inputContainer}>
      <input type="text" className={styles.inputField} aria-label="GST detail input" />
    </div>
  );
}

export default InputField;