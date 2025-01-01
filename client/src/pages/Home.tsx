import React from 'react';
import './Home.css'; // Imported CSS file for styling
import { Link } from 'react-router-dom';

// Type definition for testimonials
type Testimonial = {
  text: string;
  author: string;
};

// Testimonials data
const testimonials: Testimonial[] = [
  {
    text: "We have been going to Cape May, NJ for over 30 years or more. We love the Victorian Motel which is just at the end of the Victorian Mall (across from Congress Hall). It is close to the beautiful homes which we take walks to see.",
    author: "Bev P",
  },
  {
    text: "High Point has Gorgeous scenery with a Lovely little spot to picnic when it’s a quiet day. We picnicked by the beach. Water was clear and cool!",
    author: "Jane Martians",
  },
];

const Home: React.FC = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image-caption">
          Picture of the Long Beach Island Bridge
        </div>
        <h1 className="hero-heading">Explore New Jersey's Shores and Camping Grounds</h1>
        <p className="hero-paragraph">
          New Jersey is home to some of the most beautiful beaches and shore towns. Explore the best destinations to visit in the
          Garden State.
        </p>
        <Link to="/destinations" className="hero-button">
          Explore Destinations
        </Link>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial">
        <h2 className="testimonial-heading">What Travelers Are Saying</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-item">
            <blockquote className="blockquote">
              <p>{testimonial.text}</p>
            </blockquote>
            <cite className="cite">{testimonial.author}</cite>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
