import React from 'react';
import styles from './WeatherWidget.module.css';

function WeatherWidget() {
  return (
    <section className={styles.weatherWidget}>
      <div className={styles.currentWeather}>
        <img src="http://b.io/ext_27-" alt="Weather icon" className={styles.weatherIcon} />
        <div className={styles.weatherInfo}>
          <h3 className={styles.location}>Raisen, Madhya Pradesh</h3>
          <p className={styles.condition}>Cloudy</p>
          <p className={styles.time}>02:30 PM</p>
        </div>
      </div>
      <div className={styles.temperature}>
        <span className={styles.temperatureValue}>25</span>
        <span className={styles.temperatureUnit}>°C</span>
      </div>
      <div className={styles.additionalInfo}>
        <img src="http://b.io/ext_28-" alt="Humidity" className={styles.infoIcon} />
        <img src="http://b.io/ext_29-" alt="Wind" className={styles.infoIcon} />
      </div>
      <div className={styles.forecast}>
        <div className={styles.forecastItem}>
          <span className={styles.forecastTime}>Now</span>
          <span className={styles.forecastTemp}>24°</span>
        </div>
        <div className={styles.forecastItem}>
          <span className={styles.forecastTime}>3 PM</span>
          <span className={styles.forecastTemp}>23°</span>
        </div>
        <div className={styles.forecastItem}>
          <span className={styles.forecastTime}>4 PM</span>
          <span className={styles.forecastTemp}>25°</span>
        </div>
        <div className={styles.forecastItem}>
          <span className={styles.forecastTime}>5 PM</span>
          <span className={styles.forecastTemp}>24°</span>
        </div>
      </div>
    </section>
  );
}

export default WeatherWidget;