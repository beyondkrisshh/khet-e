import React from "react";
import styles from './AuthenticationForm.module.css';
import Logo from './Logo';
import ProgressIndicator from './ProgressIndicator';
import GSTDetails from './GSTDetails';
import InputField from './InputField';
import ContinueButton from './ContinueButton';

function AuthenticationForm() {
  return (
    <main className={styles.authenticationContainer}>
      <Logo />
      <ProgressIndicator />
      <GSTDetails />
      <form className={styles.gstForm}>
        <InputField />
        <InputField />
        <InputField />
        <InputField />
      </form>
      <ContinueButton />
    </main>
  );
}

export default AuthenticationForm;