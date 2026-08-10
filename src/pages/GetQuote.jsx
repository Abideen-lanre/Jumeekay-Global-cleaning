import React from 'react';
import PageHero from '../components/common/PageHero';
import QuoteForm from '../components/forms/QuoteForm';
import { FileText, PhoneCall, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';
import '../styles/pages/booking.css';

const GetQuote = () => {
  return (
    <div className="get-quote-page">
      <PageHero
        title="Request a Free Quote"
        subtitle="Get a transparent, tailored price estimate for your home or commercial property in minutes."
        breadcrumb={[{ label: 'Request a Quote' }]}
      />

      <section className="section">
        <div className="container">
          <div className="booking-page-grid">
            <div>
              <QuoteForm />
            </div>

            {/* Sidebar Guide */}
            <div className="booking-sidebar-info">
              <div className="info-card-box">
                <h3>What Happens Next?</h3>
                <div className="steps-list">
                  <div className="step-item-mini">
                    <div className="step-mini-num">1</div>
                    <div className="step-mini-text">
                      <h5>We Review Your Request</h5>
                      <p>Our estimating team analyzes your property size, location, and cleaning requirements.</p>
                    </div>
                  </div>

                  <div className="step-item-mini">
                    <div className="step-mini-num">2</div>
                    <div className="step-mini-text">
                      <h5>We Contact You</h5>
                      <p>We reach out via phone or email within 1-2 hours with a clear, itemized proposal.</p>
                    </div>
                  </div>

                  <div className="step-item-mini">
                    <div className="step-mini-num">3</div>
                    <div className="step-mini-text">
                      <h5>Understand Your Needs</h5>
                      <p>We confirm specific requests, preferences, and key access instructions.</p>
                    </div>
                  </div>

                  <div className="step-item-mini">
                    <div className="step-mini-num">4</div>
                    <div className="step-mini-text">
                      <h5>Hassle-Free Cleaning</h5>
                      <p>Once approved, your date is locked in with our professional cleaning crew.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="info-card-box" style={{ backgroundColor: 'var(--color-bg-light)' }}>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-navy-dark)' }}>
                  Why Request a Quote from Jumeekay?
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>No hidden fees or unexpected surcharges</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>Customized packages built for your budget</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle2 size={16} style={{ color: 'var(--color-primary)' }} />
                    <span>100% free with zero obligation to proceed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
