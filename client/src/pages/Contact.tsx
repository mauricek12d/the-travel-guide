import React, { useState } from 'react';
import WildwoodImage from '../assets/wildwood.jpg'; // Adjust the path as needed
import './Contact.css';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${WildwoodImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          padding: '20px',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '800px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
        }}
      >
        <h1 className="mb-4" style={{ color: 'blue' }}>Contact Us</h1>
        
        {submitted ? (
          <div
            className="alert alert-success"
            role="alert"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#333' }}
          >
            Thank you for reaching out! We'll contact you soon.
          </div>
        ) : (
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            style={{ display: 'grid', gap: '20px' }}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label" style={{ color: 'white' }}>
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                required
                style={{ padding: '15px', fontSize: '1rem', background: 'rgba(255, 255, 255, 0.7)' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label" style={{ color: 'white' }}>
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                required
                style={{ padding: '15px', fontSize: '1rem', background: 'rgba(255, 255, 255, 0.7)' }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label" style={{ color: 'white' }}>
                Your Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows={6}
                placeholder="Write your message here"
                required
                style={{ padding: '15px', fontSize: '1rem', background: 'rgba(255, 255, 255, 0.7)' }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                padding: '15px',
                fontSize: '1.2rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
