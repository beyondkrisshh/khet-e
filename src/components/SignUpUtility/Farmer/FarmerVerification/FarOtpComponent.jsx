import React from 'react';
import styles from './FarOtpComponent.module.css';

const FarOtpComponent = () => {
  return (
    <main className={styles.container}>
      <header className={styles.logoWrapper}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" 
          className={styles.logoIcon} 
          alt="Khet-E logo" 
        />
        <h1 className={styles.logoText}>khet-E</h1>
      </header>
      
      <section className={styles.otpHeader}>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" 
          className={styles.arrowIcon} 
          alt="" 
        />
        <h2 className={styles.otpLabel}>Enter OTP</h2>
      </section>
      
      <form className={styles.otpInputWrapper}>
        <label htmlFor="otpInput" className={styles.visually-hidden}>Enter OTP</label>
        <input 
          type="text" 
          id="otpInput" 
          className={styles.otpInput} 
          aria-label="Enter OTP" 
        />
      </form>
      
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/878d556b5ebdc27bdc75ddfd44f0d8f2205da5a90a3cf53714120ad6d54f8a05?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" 
        className={styles.decorativeImage} 
        alt="" 
      />
      
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>
          <span className={styles.buttonText}>Continue</span>
        </button>
      </div>
    </main>
  );
};

export default FarOtpComponent;