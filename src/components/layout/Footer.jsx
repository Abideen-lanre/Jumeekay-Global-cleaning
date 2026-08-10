import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { companyData } from '../../data/companyData';
import { servicesData } from '../../data/servicesData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col-brand">
            <Link to="/" className="brand-logo" aria-label="Jumeekay Global Cleaning Services Home">
              <div className="logo-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <div className="logo-text">
                <span className="logo-title" style={{ color: 'var(--color-text-white)' }}>JUMEEKAY</span>
                <span className="logo-subtitle">GLOBAL CLEANING</span>
              </div>
            </Link>

            <p>
              Professional residential, commercial, deep cleaning, and post-construction sanitization services.
              Delivering spotless, healthy, and pristine spaces you can trust.
            </p>

            <div className="footer-socials">
              <a href={companyData.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href={companyData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href={companyData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href={companyData.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">All Services</Link></li>
              <li><Link to="/booking" className="footer-link">Book a Cleaning</Link></li>
              <li><Link to="/get-a-quote" className="footer-link">Request a Quote</Link></li>
              <li><Link to="/testimonials" className="footer-link">Client Reviews</Link></li>
              <li><Link to="/faq" className="footer-link">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="footer-link">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="footer-heading">Contact Information</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={18} />
                <span>{companyData.phoneFormatted || companyData.phone}</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <span>{companyData.email}</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>{companyData.address}</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} />
                <span>{companyData.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© {currentYear} Jumeekay Global Cleaning Services. All Rights Reserved.</p>
          <p style={{ fontSize: '0.8rem', color: '#475569' }}>
            Professional Cleaning. Reliable Service. A Space You'll Love.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
