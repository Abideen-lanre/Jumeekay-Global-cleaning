import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import BookingForm from '../components/forms/BookingForm';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';
import '../styles/pages/booking.css';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning,%20I%20want%20to%20book%20a%20cleaning!`;

  return (
    <div className="booking-page">
      <PageHero
        title="Book a Cleaning Service"
        subtitle="Schedule your residential, commercial, or deep cleaning in under 2 minutes."
        breadcrumb={[{ label: 'Book a Cleaning' }]}
      />

      <section className="section">
        <div className="container">
          <div className="booking-page-grid">
            {/* Form */}
            <div>
              <BookingForm preselectedService={preselectedService} />
            </div>

            {/* Sidebar Info */}
            <div className="booking-sidebar-info">
              <div className="info-card-box">
                <h3>What Happens After You Book?</h3>
                <div className="steps-list">
                  <div className="step-item-mini">
                    <div className="step-mini-num">1</div>
                    <div className="step-mini-text">
                      <h5>Instant Confirmation</h5>
                      <p>We log your preferred date, time, and service details immediately.</p>
                    </div>
                  </div>

                  <div className="step-item-mini">
                    <div className="step-mini-num">2</div>
                    <div className="step-mini-text">
                      <h5>Team Assignment</h5>
                      <p>Our dispatch manager assigns certified cleaning specialists to your location.</p>
                    </div>
                  </div>

                  <div className="step-item-mini">
                    <div className="step-mini-num">3</div>
                    <div className="step-mini-text">
                      <h5>Punctual Service</h5>
                      <p>Our team arrives equipped with eco-safe products ready to clean.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Options */}
              <div className="info-card-box" style={{ backgroundColor: 'var(--color-navy-dark)', color: 'var(--color-text-white)' }}>
                <h3 style={{ color: 'var(--color-text-white)' }}>Need Urgent Assistance?</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Have custom requirements or need same-day emergency cleaning? Speak with our scheduling coordinators right now:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <a
                    href={`tel:${companyData.phone}`}
                    className="btn btn-outline-white btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <Phone size={16} /> Call {companyData.phoneFormatted || companyData.phone}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MessageSquare size={16} /> WhatsApp Booking Support
                  </a>
                </div>
              </div>

              {/* Trust Callout */}
              <div className="info-card-box" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <ShieldCheck size={24} style={{ color: 'var(--color-primary)' }} />
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--color-navy-dark)' }}>
                    Satisfaction Guaranteed
                  </h4>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Not 100% satisfied? Let us know within 24 hours and we will re-clean any specific areas free of charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
