import React from 'react';
import styles from './LandCropDetails.module.css';
import ProgressBar from './ProgressBar';
import CropOption from './CropOption';

const LandCropDetails = () => {
  return (
    <main className={styles.landWrapper}>
      <header className={styles.logoContainer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f395b72863cf1e4815bfd0e3b57518982b85aefd0b86eafd2ce712ea2d6986a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.logoImage} alt="Khet-E logo" />
        <div className={styles.logoText}>khet-E</div>
      </header>

      <ProgressBar />

      <section className={styles.sectionTitle}>
        {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.sectionIcon} alt="" /> */}
        <h1>Land and crop details</h1>
      </section>

      <form className={styles.formContainer}>
        <div className={styles.formRow}>
          <div className={styles.formColumn}>
            <label htmlFor="landArea" className={styles.formLabel}>Land Area</label>
            <input id="landArea" type="text" className={styles.formInput} value="20" readOnly />
          </div>
          <div className={styles.formColumn}>
            <label htmlFor="unit" className={styles.formLabel}>Unit</label>
            <select id="unit" className={styles.formInput}>
              <option>In acres, hectare</option>
            </select>
          </div>
        </div>

        <label className={styles.cropType}>Type of crop</label>
        <CropOption name="Wheat" />
        <CropOption name="Rice" isSpaced />
        <CropOption name="Maize" isSpaced />
      </form>

      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30c34303-94e4-497f-8046-9e0baf115694?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.avatarContainer} alt="User avatar" />

      <div className={styles.buttonWrapper}>
        <div className={styles.buttonBackground} >
        <button className={styles.continueButton}>Continue</button>
        </div>
      </div>
      
    </main>
  );
};

export default LandCropDetails;