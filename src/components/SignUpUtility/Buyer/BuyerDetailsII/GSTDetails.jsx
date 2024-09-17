import React from "react";
import styles from './AuthenticationForm.module.css';

function GSTDetails() {
  return (
    <section className={styles.gstDetailsContainer}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b967c776703dc6b468bb2875af47003fa5718e90ada92922ae9cfdd687e580a?placeholderIfAbsent=true&apiKey=219f75cafecb4ac4a0c58e2a8188f372" className={styles.gstIcon} alt="" />
      <h2 className={styles.gstTitle}>GST details</h2>
    </section>
  );
}

export default GSTDetails;