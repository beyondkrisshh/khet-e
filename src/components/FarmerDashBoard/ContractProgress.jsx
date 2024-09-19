import React from 'react';
import styles from './ContractProgress.module.css';

function ContractProgress() {
  const milestones = [
    { name: 'Contract signed', date: '12 July', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/36ab0b1c1acd15121c294f5249adc5884a4ee76b0bf9ed93bac6f36a73aaea9d?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372' },
    { name: 'Sowing', date: '30 July', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/560fa78e20e2d61f9e712231dfc163cc625e95d7c658b39c0494c721993e4b0d?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372' },
    { name: 'Harvesting', date: '10 Nov', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ece85bd9e828ac07f3887ae543f73cfde5456e09a24eec925e4b61c502b2849?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372' },
    { name: 'Full payment', date: '20 Nov', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/63aae335727173fd785d644677eddfdf685e1fcc51d92fb56bd21724d76b99cd?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372' }
  ];

  return (
    <section className={styles.contractProgress}>
      <h2 className={styles.title}>Contract Progress</h2>
      <ul className={styles.milestoneList}>
        {milestones.map((milestone, index) => (
          <li key={index} className={styles.milestone}>
            <span className={styles.milestoneName}>{milestone.name}</span>
            <img src={milestone.icon} alt="" className={styles.milestoneIcon} />
            <span className={styles.milestoneDate}>{milestone.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ContractProgress;