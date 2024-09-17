import React from 'react';
import styles from './FarmerRegistration.module.css';

function FormInput({ label, type, placeholder }) {
  const id = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <>
      <label htmlFor={id} className={styles.formLabel}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={styles.formInput}
        aria-label={label}
      />
    </>
  );
}

export default FormInput;