import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import GroupFarmers from './GroupFarmers';
import ContractProgress from './ContractProgress';
import LatestContracts from './LatestContracts';
import PaymentSchedule from './PaymentSchedule';
import WeatherWidget from './WeatherWidget';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <Header />
      {/* <img src="http://b.io/ext_20-" alt="" className={styles.heroImage} /> */}
      <SearchBar />
      <section className={styles.mainContent}>
        <div className={styles.leftColumn}>
          <GroupFarmers />
          <ContractProgress />
        </div>
        <div className={styles.rightColumn}>
          <LatestContracts />
          <PaymentSchedule />
          <WeatherWidget />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;