import React from 'react';
import styles from './info.module.scss';

export default function InfoAboutMe() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About me</h1>
      <p className={styles.paragraph}>
        Good time of day! I am a prospective programmer with a strong passion for learning and exploring new
        technologies. I have hands-on experience in building my own projects.
      </p>
      <p className={styles.paragraph}>
        I have over two years of self-study, during which I became proficient in HTML, CSS, SCSS, and JavaScript
        (ES6+), focusing on front-end web development with the BEM methodology. While I initially worked using a
        mobile-last approach, I am equally comfortable with mobile-first design. I started with Angular, where I
        completed several test tasks and built a small application, but I eventually transitioned to React. Since then,
        I've developed a small marketplace (without transactions) using React, NodeJS, and MongoDB.
      </p>
      <p className={styles.paragraph}>
        In recent projects, I have expanded my skill set to include additional front-end and back-end technologies:
      </p>
      <h3 className={styles.sectionTitle}>Frontend:</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>React with TypeScript</li>
        <li className={styles.listItem}>MobX for state management</li>
        <li className={styles.listItem}>Axios for API requests</li>
        <li className={styles.listItem}>Experience with creating PDF documents in the front end</li>
        <li className={styles.listItem}>React Native</li>
      </ul>
      <h3 className={styles.sectionTitle}>Backend:</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>JSON Web Tokens (JWT) for user authentication</li>
        <li className={styles.listItem}>Socket.IO for real-time communication</li>
      </ul>
    </div>
  );
}
