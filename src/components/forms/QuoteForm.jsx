import React, { useState } from 'react';
import { CheckCircle2, FileText, Send, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import { servicesData } from '../../data/servicesData';
import { companyData } from '../../data/companyData';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceNeeded: 'residential-cleaning',
    propertyType: 'Residential Home',
    location: '',
    propertySize: '',
    preferredDate: '',
    additionalDetails: ''
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
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone Number is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.location.trim()) errs.location = 'Location / City area is required';

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

  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning,%20I%20would%20like%20an%20instant%20quote!`;

  if (isSubmitted) {
    return (
      <div className="form-container form-success-card animate-fade-in">
        <div className="success-icon-wrapper">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="success-title">Free Quote Request Submitted!</h3>
        <p className="success-text">
          Thank you, <strong>{formData.fullName}</strong>. We have received your request for an estimate on{' '}
          <strong>{servicesData.find((s) => s.id === formData.serviceNeeded)?.title || 'Cleaning Service'}</strong>.
          <br /><br />
          Our estimator will review your details and send a personalized quote to <strong>{formData.email}</strong> or call you at <strong>{formData.phone}</strong> within 1-2 hours.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              serviceNeeded: 'residential-cleaning',
              propertyType: 'Residential Home',
              location: '',
              propertySize: '',
              preferredDate: '',
              additionalDetails: ''
            });
          }}
          variant="primary"
        >
          Submit Another Quote Request
        </Button>
      </div>
    );
  }

  return (
    <div className="quote-form-wrapper">
      <form className="form-container" onSubmit={handleSubmit} noValidate>
        <div className="form-header">
          <h2 className="form-title">Request Your Free Instant Quote</h2>
          <p className="form-subtitle">No obligations. Transparent pricing tailored to your property.</p>
        </div>

        <div className="form-grid form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="quoteFullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              id="quoteFullName"
              type="text"
              name="fullName"
              className={`form-control ${errors.fullName ? 'error' : ''}`}
              placeholder="Jane Smith"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <span className="error-message">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quotePhone">
              Phone Number <span className="required">*</span>
            </label>
            <input
              id="quotePhone"
              type="tel"
              name="phone"
              className={`form-control ${errors.phone ? 'error' : ''}`}
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group full-width">
            <label className="form-label" htmlFor="quoteEmail">
              Email Address <span className="required">*</span>
            </label>
            <input
              id="quoteEmail"
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              placeholder="jane@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quoteServiceNeeded">
              Service Needed
            </label>
            <select
              id="quoteServiceNeeded"
              name="serviceNeeded"
              className="form-control"
              value={formData.serviceNeeded}
              onChange={handleChange}
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quotePropertyType">
              Property Type
            </label>
            <select
              id="quotePropertyType"
              name="propertyType"
              className="form-control"
              value={formData.propertyType}
              onChange={handleChange}
            >
              <option value="Residential Home">Residential Home</option>
              <option value="Apartment">Apartment / Flat</option>
              <option value="Commercial Office">Commercial Office</option>
              <option value="Retail Facility">Retail Facility</option>
              <option value="Post-Construction Site">Post-Construction Site</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quoteLocation">
              Property Location / City <span className="required">*</span>
            </label>
            <input
              id="quoteLocation"
              type="text"
              name="location"
              className={`form-control ${errors.location ? 'error' : ''}`}
              placeholder="e.g. City Downtown District"
              value={formData.location}
              onChange={handleChange}
            />
            {errors.location && <span className="error-message">{errors.location}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="quotePropertySize">
              Est. Property Size (Sq Ft / Rooms)
            </label>
            <input
              id="quotePropertySize"
              type="text"
              name="propertySize"
              className="form-control"
              placeholder="e.g. 2,000 sq ft or 3 bedrooms"
              value={formData.propertySize}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label className="form-label" htmlFor="quotePreferredDate">
              Target Cleaning Date
            </label>
            <input
              id="quotePreferredDate"
              type="date"
              name="preferredDate"
              className="form-control"
              value={formData.preferredDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label className="form-label" htmlFor="quoteAdditionalDetails">
              Additional Property & Requirement Details
            </label>
            <textarea
              id="quoteAdditionalDetails"
              name="additionalDetails"
              className="form-control"
              placeholder="Describe condition, special requests, stains, or specific areas..."
              value={formData.additionalDetails}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width" style={{ marginTop: '1rem' }}>
            <Button type="submit" variant="cta" size="lg" fullWidth disabled={isSubmitting}>
              {isSubmitting ? 'Calculating Quote Estimate...' : 'Request My Free Quote'} <Send size={18} />
            </Button>
          </div>
        </div>
      </form>

      {/* Immediate WhatsApp Option */}
      <div style={{ marginTop: '1.5rem', textAlign: 'center', backgroundColor: '#F0FDF4', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid #BBF7D0' }}>
        <p style={{ margin: 0, fontWeight: '600', color: '#166534', fontSize: '0.95rem' }}>
          Prefer immediate communication? Chat directly with our estimator on WhatsApp:
        </p>
        <div style={{ marginTop: '0.75rem' }}>
          <Button href={whatsappUrl} variant="whatsapp" size="sm">
            <MessageSquare size={16} /> Instant WhatsApp Quote Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
