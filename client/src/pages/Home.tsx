import React from 'react';
import Destinations from './Destinations';
import './Home.css'; // Imported CSS file for styling
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-heading">Explore New Jersey's Shores and Camping Grounds</h1>
        <p className="hero-paragraph">
          New Jersey is home to some of the most beautiful beaches and camping
          grounds in the country. Explore the best destinations to visit in the
          Garden State.
        </p>
        <Link to="/destinations" className="hero-button">
          Explore Destinations
        </Link>
      </section>

      {/* Featured Destinations Section */}
      <section className="featured">
        <h2>Featured Destinations</h2>
        <Destinations />
      </section>

      {/* Testimonials Section */}
      <section className="testimonial">
        <h2 className="testimonial-heading">What Travelers Are Saying</h2>
        <div>
          <blockquote className="blockquote">
            <p>
              We have been going to Cape May, NJ for over 30 years or more. We
              love the Victorian Motel which is just at the end of the
              Victorian Mall (across from Congress Hall). It is close to the
              beautiful homes which we take walks to see.
            </p>
          </blockquote>
          <cite className="cite">Bev P</cite>
        </div>
        <div>
          <blockquote className="blockquote">
            <p>
              High Point has Gorgeous scenery with a Lovely little spot to
              picnic when it’s a quiet day. We picnicked by the beach. Water was
              clear and cool!
            </p>
          </blockquote>
          <cite className="cite">Jane Martians</cite>
        </div>
      </section>
    </main>
  );
};

export default Home;
