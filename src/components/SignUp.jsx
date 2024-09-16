import React from 'react';
import styles from './SignUp.module.css';
import Logo from './SignUpUtility/UserTypeSelection/Logo';
import ProgressBar from './SignUpUtility/UserTypeSelection/ProgressBar';
import AccountTypeSelector from './SignUpUtility/UserTypeSelection/AccountTypeSelector';
import ContinueButton from './SignUpUtility/UserTypeSelection/ContinueButton';

function Signup() {
  return (
    <main className={styles.signupContainer}>
      <section className={styles.contentWrapper}>
        <Logo />
        <ProgressBar />
        <h1 className={styles.title}>Create your account</h1>
        <AccountTypeSelector />
        <ContinueButton />
      </section>
    </main>
  );
}

export default Signup;