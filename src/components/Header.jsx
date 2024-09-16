import React from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom'

function Header() {
  return (

    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e4582a155473c36221357ea994099ee7f00eb1fb557766d9c3940287aeb34ec?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="Company logo" className={styles.logo} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/98c7db616e64fdc08751e34dff904a58243766a4af6cf311c465a02f3235662f?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="Company name" className={styles.companyName} />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navLink}><Link to="/" >Home</Link></li>
          <li className={styles.navLink}><Link to="/schemes" >Schemes</Link></li>
          <li className={styles.navLink}><Link to="/about" >About</Link></li>
          <li className={styles.navLink}><Link to="/support" >Support</Link></li>
        </ul>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/53365f6ad3fa5d3a2e29be6bde61dabe55d2f517b2f203a771f54fcf8b6bafb2?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.decorativeIcon} />
        <button className={styles.loginButton}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7547ad68b09ebd457a261c4679292745689e004559566104345397edf6cca4d?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.loginIcon} />
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;