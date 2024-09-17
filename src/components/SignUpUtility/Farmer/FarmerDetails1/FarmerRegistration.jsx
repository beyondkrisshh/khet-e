import React from 'react';
import styles from './FarmerRegistration.module.css';
import ProgressBar from './ProgressBar';
import FormInput from './FormInput';

function FarmerRegistration() {
  return (
    <main className={styles.container}>
      <header className={styles.logo}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoIcon} alt="" />
        <div className={styles.logoText}>khet-E</div>
      </header>

      <ProgressBar steps={4} activeSteps={2} />

      <section className={styles.formHeader}>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.formHeaderIcon} alt="" /> */}
        <h1 className={styles.formHeaderText}>Enter your details below</h1>
      </section>

      <form>
        <FormInput label="Phone number" type="tel" placeholder="9999999999" />
        <FormInput label="Email" type="email" placeholder="example@gmail.com" />
        <FormInput label="Pin code" type="text" />
        <FormInput label="City/Village" type="text" />

        <div className={styles.submitButtonWrapper}>
          <button type="submit" className={styles.submitButton}>
            <span className={styles.submitButtonText}>Continue</span>
          </button>
        </div>
      </form>
    </main>
  );
}

export default FarmerRegistration;