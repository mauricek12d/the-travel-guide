import React, { useState } from 'react';

const About: React.FC = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  };

  const headingStyle = {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
  };

  const [hover, setHover] = useState(false);

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>
      <p style={paragraphStyle}>
        Welcome to the New Jersey Travel Guide! Our mission is to help you explore the best destinations
        across the Garden State, from serene beaches to breathtaking state parks. Whether you're planning
        a weekend getaway or a family vacation, we've got you covered with recommendations, travel tips,
        and local insights.
      </p>
      <h2 style={headingStyle}>Our Vision</h2>
      <p style={paragraphStyle}>
        We aim to showcase the unique charm and diverse attractions that make New Jersey a top travel
        destination. From Cape May’s historic streets to the adventure-filled trails of High Point, our
        guide connects you with the experiences that matter most.
      </p>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={paragraphStyle}>
        Have questions or suggestions? Reach out to us at{' '}
        <a
          href="mailto:info@njtravelguide.com"
          style={{ ...linkStyle, textDecoration: hover ? 'underline' : 'none' }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          info@njtravelguide.com
        </a>
        . We’d love to hear from you!
      </p>
    </div>
  );
};

export default About;