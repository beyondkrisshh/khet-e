import React from 'react';
import styles from './PaymentSchedule.module.css';

function PaymentSchedule() {
  const payments = [
    { name: '1st Installment', date: '12 July' },
    { name: '2nd Installment', date: '1 Aug' },
    { name: '3rd Installment', date: '7 Nov' },
    { name: '4th Installment', date: '20 Nov' }
  ];

  return (
    <section className={styles.paymentSchedule}>
      <h2 className={styles.title}>Payments</h2>
      <ul className={styles.paymentList}>
        {payments.map((payment, index) => (
          <li key={index} className={styles.paymentItem}>
            <span className={styles.paymentName}>{payment.name}</span>
            <span className={styles.paymentDate}>{payment.date}</span>
          </li>
        ))}
      </ul>
      {/* <img src="http://b.io/ext_26-" alt="Payment graph" className={styles.paymentGraph} /> */}
    </section>
  );
}

export default PaymentSchedule;