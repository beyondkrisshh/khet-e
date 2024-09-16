import React from 'react';
import styles from './Hero.module.css';
import {useNavigate} from "react-router-dom"
function Hero() {

  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <section className={styles.hero}>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e9d4c1c502b85e4ab25486c6aa9e716bb3a07459c501a8eddb559c8b4e91d34?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="Farm landscape" className={styles.heroBackground} />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Unlock, <br />
          The Potential of <br />
          Contract Farming
        </h1>
        <p className={styles.heroDescription}>
          Grow specific crops with the security of a guaranteed buyer and price. Risk-free way to boost profits and ensure a steady, high-quality supply.
        </p>
        <h2 className={styles.heroCallToAction}>
          Explore contract farming now
        </h2>
        {/* <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33f17d33d4078f82de28f260e3b14b8334a36af77adb52beb41b4df5f7e42d?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="Contract farming illustration" className={styles.heroImage} /> */}
        <button className={styles.loginButton} 
         onClick={handleSignupClick}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7547ad68b09ebd457a261c4679292745689e004559566104345397edf6cca4d?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.loginIcon} />
          Sign Up
        </button>
      </div>
    </section>
  );
}

export default Hero;