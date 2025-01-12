import React from 'react';
import styles from './styles.module.css'; // Custom CSS for styling the section

export default function VerificationSection() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.imageContainer}>
        <img src="/img/verification-step1.png" alt="Step 1" />
        <p>Follow simple instructions for successful verification</p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/img/verification-step2.png" alt="Step 2" />
        <p>Take a clear and proper photo to get verified</p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/img/verification-step3.png" alt="Step 3" />
        <p>Fully Automated Identity Verification with NFC</p>
      </div>
      <div className={styles.imageContainer}>
        <img src="/img/verification-step4.png" alt="Step 4" />
        <p>Enhance customer experience with swift verification</p>
      </div>
    </div>
  );
}
