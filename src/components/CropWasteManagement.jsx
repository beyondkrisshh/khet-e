import React from 'react';
import styles from './CropWasteManagement.module.css';

function CropWasteManagement() {
  return (
    <section className={styles.cropWasteManagement}>
      <div className={styles.imageContainer}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/deb5a2b68bef96dc2ac4c2f7726caaf925856f31d24257d9a61843aa5c0bf9b0?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.backgroundImage} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/153244d3a0354d56db047b42ae3267ff3f21b935134e16e034b30b0035c495e3?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="Crop waste management illustration" className={styles.foregroundImage} />
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.innovationTitle}>Our Innovative Approach</h2>
        <h3 className={styles.wasteManagementTitle}>Revolutionising Crop Waste Management</h3>
        <p className={styles.revenueEnhancement}>
          Discover how to enhance your revenue by capitalising on crop by-products.
        </p>
        <p className={styles.opportunitiesDescription}>
          Explore diverse opportunities with contracts to turn surplus into profit and add value to your farming operations.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee1cfa93a6a5e93457e651f467d9acdfe8d06402217b69638afac8cb37acbbc6?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.backgroundImage} />
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/642e3913a354cbc446d19406bd68960f792e9c2b856553e4d6ab9a02fa3d52f8?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="Crop by-products utilization" className={styles.foregroundImage} />
      </div>
    </section>
  );
}

export default CropWasteManagement;