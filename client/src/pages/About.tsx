import React from 'react';
import SeasideImage from '../assets/Seaside Heights.jpg'; // Adjust the path as necessary

const About: React.FC = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background for readability
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for better distinction
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

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${SeasideImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <p style={paragraphStyle}>
          Welcome to the New Jersey Travel Guide! Our mission is to help you explore the best
          destinations across the Garden State, from serene beaches to breathtaking state parks.
          Whether you're planning a weekend getaway or a family vacation, we've got you covered with
          recommendations, travel tips, and local insights.
        </p>
        <h2 style={headingStyle}>Our Vision</h2>
        <p style={paragraphStyle}>
          We aim to showcase the unique charm and diverse attractions that make New Jersey a top travel
          destination. From Cape May’s historic streets to the adventure-filled trails of High Point, our
          guide connects you with the experiences that matter most.
        </p>
      </div>
    </div>
  );
};

export default About;
