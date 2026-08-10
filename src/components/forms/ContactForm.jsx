import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import Button from '../common/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message content is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="form-container form-success-card animate-fade-in">
        <div className="success-icon-wrapper">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="success-title">Message Sent Successfully!</h3>
        <p className="success-text">
          Thank you, <strong>{formData.name}</strong>. Your message has been routed to our customer support desk.
          We will get back to you at <strong>{formData.email}</strong> as soon as possible.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className="form-container" onSubmit={handleSubmit} noValidate>
      <div className="form-header">
        <h2 className="form-title">Send Us a Direct Message</h2>
        <p className="form-subtitle">Have questions or custom inquiries? Fill out the form below.</p>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor="contactName">
            Your Name <span className="required">*</span>
          </label>
          <input
            id="contactName"
            type="text"
            name="name"
            className={`form-control ${errors.name ? 'error' : ''}`}
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactEmail">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="contactEmail"
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'error' : ''}`}
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactPhone">
            Phone Number
          </label>
          <input
            id="contactPhone"
            type="tel"
            name="phone"
            className="form-control"
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactSubject">
            Subject
          </label>
          <input
            id="contactSubject"
            type="text"
            name="subject"
            className="form-control"
            placeholder="Inquiry regarding cleaning services"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactMessage">
            Message <span className="required">*</span>
          </label>
          <textarea
            id="contactMessage"
            name="message"
            className={`form-control ${errors.message ? 'error' : ''}`}
            placeholder="How can we assist you today?"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <div className="form-group" style={{ marginTop: '1rem' }}>
          <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Sending Message...' : 'Send Message Now'} <Send size={18} />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
