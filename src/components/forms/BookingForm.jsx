import React, { useState } from 'react';
import { CheckCircle2, Send, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { servicesData } from '../../data/servicesData';

const BookingForm = ({ preselectedService = '' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceId: preselectedService || 'residential-cleaning',
    propertyType: 'Residential Home',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    bedrooms: '2-3 Bedrooms',
    propertySize: '',
    address: '',
    area: '',
    specialInstructions: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.preferredDate) newErrors.preferredDate = 'Preferred Date is required';
    if (!formData.address.trim()) newErrors.address = 'Street Address is required';
    if (!formData.consent) newErrors.consent = 'You must agree to the privacy & booking terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate backend submission API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  if (isSubmitted) {
    return (
      <div className="form-container form-success-card animate-fade-in">
        <div className="success-icon-wrapper">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="success-title">Booking Request Received!</h3>
        <p className="success-text">
          Thank you, <strong>{formData.fullName}</strong>. We have received your booking request for{' '}
          <strong>{servicesData.find((s) => s.id === formData.serviceId)?.title || 'Cleaning Service'}</strong> on{' '}
          <strong>{formData.preferredDate}</strong>.
          <br /><br />
          Our dispatch team will contact you shortly at <strong>{formData.phone}</strong> to confirm scheduling and final details.
        </p>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              serviceId: 'residential-cleaning',
              propertyType: 'Residential Home',
              preferredDate: '',
              preferredTime: 'Morning (8:00 AM - 12:00 PM)',
              bedrooms: '2-3 Bedrooms',
              propertySize: '',
              address: '',
              area: '',
              specialInstructions: '',
              consent: false
            });
          }}
          variant="outline"
        >
          Book Another Cleaning
        </Button>
      </div>
    );
  }

  return (
    <form className="form-container" onSubmit={handleSubmit} noValidate>
      <div className="form-header">
        <h2 className="form-title">Book Your Cleaning Service</h2>
        <p className="form-subtitle">Fill in your details below to schedule your cleaning appointment.</p>
      </div>

      <div className="form-grid form-grid-2">
        {/* Personal Details */}
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            Full Name <span className="required">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            className={`form-control ${errors.fullName ? 'error' : ''}`}
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <span className="error-message">{errors.fullName}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            Phone Number <span className="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className={`form-control ${errors.phone ? 'error' : ''}`}
            placeholder="+1 (555) 000-0000"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="email">
            Email Address <span className="required">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={`form-control ${errors.email ? 'error' : ''}`}
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        {/* Service Details */}
        <div className="form-group">
          <label className="form-label" htmlFor="serviceId">
            Select Cleaning Service <span className="required">*</span>
          </label>
          <select
            id="serviceId"
            name="serviceId"
            className="form-control"
            value={formData.serviceId}
            onChange={handleChange}
          >
            {servicesData.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="propertyType">
            Property Type
          </label>
          <select
            id="propertyType"
            name="propertyType"
            className="form-control"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="Residential Home">Residential Home / Villa</option>
            <option value="Apartment / Condo">Apartment / Condo</option>
            <option value="Corporate Office">Corporate Office</option>
            <option value="Commercial Facility">Commercial Facility / Retail</option>
            <option value="Renovation Site">Post-Renovation Site</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="preferredDate">
            Preferred Date <span className="required">*</span>
          </label>
          <input
            id="preferredDate"
            type="date"
            name="preferredDate"
            className={`form-control ${errors.preferredDate ? 'error' : ''}`}
            value={formData.preferredDate}
            onChange={handleChange}
          />
          {errors.preferredDate && <span className="error-message">{errors.preferredDate}</span>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="preferredTime">
            Preferred Time Slot
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            className="form-control"
            value={formData.preferredTime}
            onChange={handleChange}
          >
            <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
            <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
            <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bedrooms">
            Bedrooms / Rooms
          </label>
          <select
            id="bedrooms"
            name="bedrooms"
            className="form-control"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            <option value="1 Bedroom / Studio">1 Bedroom / Studio</option>
            <option value="2-3 Bedrooms">2-3 Bedrooms</option>
            <option value="4-5 Bedrooms">4-5 Bedrooms</option>
            <option value="Commercial Open Space">Commercial / Open Space</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="propertySize">
            Est. Property Size (Sq Ft)
          </label>
          <input
            id="propertySize"
            type="text"
            name="propertySize"
            className="form-control"
            placeholder="e.g. 1,500 sq ft"
            value={formData.propertySize}
            onChange={handleChange}
          />
        </div>

        {/* Location Details */}
        <div className="form-group full-width">
          <label className="form-label" htmlFor="address">
            Street Address <span className="required">*</span>
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className={`form-control ${errors.address ? 'error' : ''}`}
            placeholder="123 Main Street, Apt 4B"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error-message">{errors.address}</span>}
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="area">
            City / Neighborhood Area
          </label>
          <input
            id="area"
            type="text"
            name="area"
            className="form-control"
            placeholder="e.g. Downtown Metro Area"
            value={formData.area}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label className="form-label" htmlFor="specialInstructions">
            Special Instructions / Cleaning Notes
          </label>
          <textarea
            id="specialInstructions"
            name="specialInstructions"
            className="form-control"
            placeholder="Mention key codes, pet details, or specific rooms needing extra attention..."
            value={formData.specialInstructions}
            onChange={handleChange}
          />
        </div>

        {/* Consent Checkbox */}
        <div className="form-group full-width">
          <div className="checkbox-group">
            <input
              id="consentBooking"
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
            />
            <label className="checkbox-label" htmlFor="consentBooking">
              I agree to allow Jumeekay Global Cleaning Services to contact me regarding this booking request.
            </label>
          </div>
          {errors.consent && <span className="error-message">{errors.consent}</span>}
        </div>

        <div className="form-group full-width" style={{ marginTop: '1rem' }}>
          <Button type="submit" variant="cta" size="lg" fullWidth disabled={isSubmitting}>
            {isSubmitting ? 'Processing Booking Request...' : 'Request Booking Now'} <Send size={18} />
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
