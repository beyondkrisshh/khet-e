import React from 'react';
import Header from "./Header";
import Hero from "./Hero";
import FarmingBenefits from "./FarmingBenefits";
import CropWasteManagement from "./CropWasteManagement";
import Footer from "./Footer";
import ImageComponent from './ImageComponent';
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main>
        <Hero />
        <FarmingBenefits />
        <ImageComponent />
        <CropWasteManagement />
        </main>
        <Footer />
    </div>
  );
};

export default Home;