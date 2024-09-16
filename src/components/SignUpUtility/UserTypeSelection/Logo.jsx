import React from 'react';
import styles from './Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoImage} alt="Khet-E logo" />
      <span className={styles.logoText}>khet-E</span>
    </div>
  );
}

export default Logo;