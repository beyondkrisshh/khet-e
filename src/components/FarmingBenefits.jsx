import React from 'react';
import styles from './FarmingBenefits.module.css';

function FarmingBenefits() {
  return (
    <section className={styles.farmingBenefits}>
      <div className={styles.benefitsContainer}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/83d837311f66d93b406009eb1e0e596806221ae094586c1d9ae6570448a62572?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="Farmer in the field" className={styles.farmerImage} />
        <div className={styles.benefitsContent}>
          <h2 className={styles.benefitsTitle}>Empower Your Farming Future</h2>
          <p className={styles.benefitsDescription}>
            Contract farming empowers farmers with guaranteed markets, stable income, and premium resources, all while minimizing risks.
          </p>
          <h3 className={styles.supplyChainTitle}>Secure Your Supply Chain</h3>
          <p className={styles.supplyChainDescription}>
            Contract farming provides a stable supply of premium crops, reducing risks and improving planning and efficiency.
          </p>
        </div>
      </div>
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d2efaa6ff34f35afecbf3ef2d3d3e2234b7be14b95469e23544d2848dccf7ff?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" alt="" className={styles.decorativeDivider} />
    </section>
  );
}

export default FarmingBenefits;