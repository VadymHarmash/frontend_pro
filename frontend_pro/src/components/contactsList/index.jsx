import React from 'react';
import styles from './contactsList.module.scss';

export default function ContactsList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contacts</h1>
      <div className={styles.contactsList}>
        <div className={styles.contactItem}>
          <span>Email:</span>
          <a href="mailto:vadimvlad20032002@gmail.com" className={styles.contactLink}>
            vadimvlad20032002@gmail.com
          </a>
        </div>
        <div className={styles.contactItem}>
          <span>Phone:</span>
          <a href="tel:+380955981258" className={styles.contactLink}>
            +380955981258
          </a>
        </div>
        <div className={styles.contactItem}>
          <span>LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/vadym-harmash-27b7a3237/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            Vadym Harmash
          </a>
        </div>
        <div className={styles.contactItem}>
          <span>GitHub:</span>
          <a
            href="https://github.com/VadymHarmash"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            Vadym Harmash
          </a>
        </div>
      </div>
    </div>
  );
}
