import React from 'react';
import styles from './KycForm.module.css';
import ProgressBar from './ProgressBar';
import FormField from './FormField';

const KycForm = () => {
  const formFields = ['Field1', 'Field2', 'Field3', 'Field4'];

  return (
    <main className={styles.container}>
      <header className={styles.logo}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoIcon} alt="" />
        <h1 className={styles.logoText}>khet-E</h1>
      </header>

      <ProgressBar steps={4} />

      <section className={styles.formTitle}>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.titleIcon} alt="" /> */}
        <h2>KYC details</h2>
      </section>

      <form>
        {formFields.map((field, index) => (
          <FormField key={index} fieldName={field} />
        ))}

        <div className={styles.submitButton}>
          <div className={styles.buttonBackground} >
          <button type="submit" className={styles.buttonText}>Continue</button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default KycForm;