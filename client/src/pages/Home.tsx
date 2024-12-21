import React from 'react';
import Destinations from './Destinations';

const Home: React.FC = () => {
  // Inline styles 
  const heroStyle = {
    background: "url('/images/hero-background.jpg') no-repeat center center",
    backgroundSize: 'cover',
    color: 'white',
    textAlign: 'center' as const,
    padding: '50px 20px',
  };

  const heroHeadingStyle = {
    fontSize: '2.5em',
    marginBottom: '10px',
  };

  const heroParagraphStyle = {
    fontSize: '1.2em',
    marginBottom: '20px',
  };

  const heroButtonStyle = {
    padding: '10px 20px',
    fontSize: '1em',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const featuredStyle = {
    padding: '40px 20px',
  };

  const testimonialStyle = {
    backgroundColor: '#f9f9f9',
    padding: '40px 20px',
    textAlign: 'center' as const,
  };

  const testimonialHeadingStyle = {
    fontSize: '2em',
    marginBottom: '20px',
  };

  const blockquoteStyle = {
    fontStyle: 'italic',
    marginBottom: '10px',
  };

  const citeStyle = {
    fontSize: '0.9em',
    color: '#555',
  };

  return (
    <main>
      <section style={heroStyle}>
        <h1 style={heroHeadingStyle}>Explore New Jersey's Shores and Camping Grounds</h1>
        <p style={heroParagraphStyle}>
          New Jersey is home to some of the most beautiful beaches and camping
          grounds in the country. Explore the best destinations to visit in the
          Garden State.
        </p>
        <button style={heroButtonStyle}>Explore Destinations</button>
      </section>

      <section style={featuredStyle}>
        <h2>Featured Destinations</h2>
        <Destinations />
      </section>

      <section style={testimonialStyle}>
        <h2 style={testimonialHeadingStyle}>What Travelers Are Saying</h2>
        <div>
          <blockquote style={blockquoteStyle}>
            <p>
              We have been going to Cape May, NJ for over 30 years or more. We
              love the Victorian Motel which is just at the end of the
              Victorian Mall (across from Congress Hall). It is close to the
              beautiful homes which we take walks to see.
            </p>
          </blockquote>
          <cite style={citeStyle}>Bev P</cite>
        </div>
        <div>
          <blockquote style={blockquoteStyle}>
            <p>
              High Point has Gorgeous scenery with a Lovely little spot to
              picnic when it’s a quiet day. We picnicked by the beach. Water was
              clear and cool!
            </p>
          </blockquote>
          <cite style={citeStyle}>Jane Martians</cite>
        </div>
      </section>
    </main>
  );
};

export default Home;