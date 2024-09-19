import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="http://b.io/ext_21-" alt="Logo" className={styles.logoImage} />
        <div className={styles.logoText}>
          <img src="http://b.io/ext_22-" alt="" className={styles.logoIcon} />
          <h1 className={styles.logoTitle}>khet-E</h1>
        </div>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li><a href="#dashboard" className={styles.navItem}>Dashboard</a></li>
          <li><a href="#schemes" className={styles.navItem}>Schemes</a></li>
          <li><a href="#about" className={styles.navItem}>About</a></li>
          <li><a href="#support" className={styles.navItem}>Support</a></li>
        </ul>
      </nav>
      <div className={styles.userInitials}>FM</div>
    </header>
  );
}

export default Header;