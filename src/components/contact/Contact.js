// src/components/contact/Contact.js
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Row } from 'react-bootstrap';
import data from '../../data/contact.json';
import './Contact.css';

const Contact = () => {
  const formspreeFormId = data.contact.formspree;
  const [state, handleSubmit] = useForm(formspreeFormId);
  return (
    <div className="contact-container">
      <Row>
        <div className="contact-form">
          <h1>Contact me</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" required />
            
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
            
            <button type="submit" disabled={state.submitting}>Submit</button>
          </form>
          {state.succeeded && <p className="success-message">Thank you for your message! We'll get back to you soon.</p>}
        </div>
        <div className="contact-info">
          <h1>Connect with me</h1>
          <p>Feel free to connect with me on any of these platforms.</p>
          <div className="social-icons">
            <a href={data.contact.github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href={data.contact.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </div>
          <div className="info-details">
            <p><strong>📍 </strong> {data.contact.location}</p>
            <p><strong>📞 </strong> {data.contact.phone}</p>
            <p><strong>✉️ </strong> {data.contact.email}</p>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Contact;