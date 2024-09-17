import React from 'react';
import styles from './KycForm.module.css';

const FormField = ({ fieldName }) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={fieldName} className={styles['visually-hidden']}>{fieldName}</label>
      <input type="text" id={fieldName} name={fieldName} aria-label={fieldName} />
    </div>
  );
};

export default FormField;