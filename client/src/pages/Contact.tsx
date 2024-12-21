import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Contact Us</h5>
          <p className="card-text text-center">Fill out the form below to get in touch with us.</p>
          {submitted ? (
            <div className="alert alert-success text-center" role="alert">
              Thank you for reaching out! We'll contact you soon.
            </div>
          ) : (
            <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows={4} required></textarea>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#thankYouModal">
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      {/* Thank You Modal */}
      <div
        className="modal fade"
        id="thankYouModal"
        tabIndex={-1}
        aria-labelledby="thankYouModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="thankYouModalLabel">Thank You!</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Thank you for reaching out! We'll contact you soon.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;