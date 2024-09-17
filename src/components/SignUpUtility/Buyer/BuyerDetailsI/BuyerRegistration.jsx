import React from 'react';
import styles from './BuyerRegistration.module.css';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';

function BuyerRegistration() {
  const formFields = [
    { label: 'Name of the organisation', type: 'text', placeholder: 'Enter' },
    { label: 'Contact number', type: 'tel', placeholder: '9999999999' },
    { label: 'Email', type: 'email', placeholder: 'example@gmail.com' },
    { label: 'Size of Organisation', type: 'text', placeholder: 'Small, Medium or Large' },
    { label: 'Type of company', type: 'text', placeholder: 'Crop buyer, Residue buyer' },
  ];

  return (
    <main className={styles.container}>
      <header className={styles.logo}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoImage} alt="" />
        <div className={styles.logoText}>khet-E</div>
      </header>
      
      <ProgressBar steps={3} activeStep={1} />
      
      <section className={styles.formHeader}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.formHeaderIcon} alt="" />
        <h2>Enter your details below</h2>
      </section>
      
      <form>
        {formFields.map((field, index) => (
          <FormInput key={index} {...field} />
        ))}
        
        <div className={styles.submitButtonWrapper}>
          <button type="submit" className={styles.submitButton}>
            <span className={styles.submitButtonText}>Continue</span>
          </button>
        </div>
      </form>
    </main>
  );
}

export default BuyerRegistration;