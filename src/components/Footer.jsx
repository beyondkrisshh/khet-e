import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c151f27580ba001d0b775b5d2d318dc991cd347e71bef891f3cf74433e0cf706?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.footerBackground} />
      <div className={styles.footerContent}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1241bdbb4713574cfefecda72a35493b779a78d07bd1306854f8c2b370abadc7?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.footerLogo} />
        <h2 className={styles.footerTitle}>khet-E</h2>
      </div>
    </footer>
  );
}

export default Footer;
