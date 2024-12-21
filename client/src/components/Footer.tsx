import React from 'react';
import styles from './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} Travel Guide. All Rights Reserved.</p>
        <ul style={styles.links}>
          <li>
            <a href="/privacy-policy" style={styles.link}>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" style={styles.link}>
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" style={styles.link}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
