import React from 'react';
import PageHero from '../components/common/PageHero';
import ContactForm from '../components/forms/ContactForm';
import Button from '../components/common/Button';
import { Phone, Mail, MapPin, Clock, MessageSquare, Map } from 'lucide-react';
import { companyData } from '../data/companyData';
import '../styles/pages/contact.css';

const Contact = () => {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning,%20I%20have%20an%20inquiry.`;

  return (
    <div className="contact-page">
      <PageHero
        title="Contact Jumeekay Global Cleaning"
        subtitle="We're here to answer your questions, schedule visits, and provide instant cleaning assistance."
        breadcrumb={[{ label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Contact Info Panels */}
            <div className="contact-info-panel">
              <span className="section-badge">Get In Touch</span>
              <h2 className="section-title">We'd Love to Hear From You</h2>
              <p className="section-subtitle">
                Reach out via phone, email, or message. Our customer service support desk is available Mon - Sat.
              </p>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h4>Phone Number</h4>
                  <p>{companyData.phoneFormatted || companyData.phone}</p>
                  <a href={`tel:${companyData.phone}`} className="topbar-link">Call Direct Line</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box" style={{ backgroundColor: '#DCFCE7', color: '#15803D' }}>
                  <MessageSquare size={24} />
                </div>
                <div className="contact-details">
                  <h4>WhatsApp Support</h4>
                  <p>{companyData.whatsappFormatted || companyData.whatsapp}</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="topbar-link whatsapp-link">
                    Chat on WhatsApp Now
                  </a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h4>Email Address</h4>
                  <p>{companyData.email}</p>
                  <a href={`mailto:${companyData.email}`} className="topbar-link">Send Email</a>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h4>Office Address</h4>
                  <p>{companyData.address}</p>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                    Coverage: {companyData.serviceArea}
                  </span>
                </div>
              </div>

              <div className="contact-card-item">
                <div className="contact-icon-box">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h4>Opening Hours</h4>
                  <p>{companyData.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Direct Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* Map Area Placeholder */}
          <div className="map-placeholder-box">
            <Map size={48} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-navy-dark)' }}>
              Interactive Google Maps Location Embed
            </h3>
            <p style={{ maxWidth: '500px', margin: '0 auto', fontSize: '0.9rem' }}>
              Replace this placeholder block with your official Google Maps iframe embed code when deploying live business address details.
            </p>
          </div>

          {/* Quick CTA Banner */}
          <div className="service-banner-cta">
            <div className="banner-content">
              <h3>Need Cleaning Services Quickly?</h3>
              <p>Our emergency cleaners are available for rapid response bookings.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={`tel:${companyData.phone}`} className="btn btn-cta btn-lg">
                <Phone size={20} /> Call Now
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                <MessageSquare size={20} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
