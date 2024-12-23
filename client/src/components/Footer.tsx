import React from 'react';
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {new Date().getFullYear()} Travel Guide. All Rights Reserved.</p>
        <ul className={styles.links}>
          <li>
            <a href="/privacy-policy" className={styles.link}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className={styles.link}>
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" className={styles.link}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
