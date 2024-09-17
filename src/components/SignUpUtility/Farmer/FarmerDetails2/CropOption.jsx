import React from 'react';
import styles from './LandCropDetails.module.css';

const CropOption = ({ name, isSpaced }) => (
  <div className={`${styles.cropOption} ${isSpaced ? styles.cropOptionSpaced : ''}`}>
    {name}
  </div>
);

export default CropOption;