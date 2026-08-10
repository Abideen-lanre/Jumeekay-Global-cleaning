import React from 'react';
import PageHero from '../components/common/PageHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceProcess from '../components/services/ServiceProcess';
import RelatedServices from '../components/services/RelatedServices';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { Check, Users, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';
import '../styles/pages/service-detail.css';

const ResidentialCleaning = () => {
  const service = servicesData.find((s) => s.slug === 'residential-cleaning');

  if (!service) return null;

  return (
    <div className="service-detail-page">
      <PageHero
        title={service.title}
        subtitle="Keep your living space pristine, healthy, and comfortable without lifting a finger."
        breadcrumb={[
          { label: 'Services', link: '/services' },
          { label: service.title }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            {/* Main Content */}
            <div className="service-main-content">
              <div className="service-hero-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-description">
                <h2>Comprehensive Home Cleaning Built Around Your Lifestyle</h2>
                <p>{service.fullDesc}</p>
              </div>

              {/* Checklist */}
              <div className="checklist-container">
                <h3 className="checklist-title">What Is Included in Standard Residential Cleaning</h3>
                <div className="checklist-grid">
                  {service.checklist.map((item, idx) => (
                    <div key={idx} className="checklist-item">
                      <Check size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <ServiceBenefits benefits={service.benefits} />

              {/* Who This Is For */}
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--color-navy-dark)' }}>
                  Who This Service Is Designed For
                </h3>
                <div className="audience-list">
                  {service.targetAudience.map((item, idx) => (
                    <div key={idx} className="audience-item">
                      <Users size={20} style={{ color: 'var(--color-primary)' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <ServiceProcess />
            </div>

            {/* Sticky Sidebar CTA */}
            <div className="service-sidebar">
              <div className="sidebar-cta-card">
                <h3>Request Residential Cleaning</h3>
                <p>Get an instant price estimate or schedule a professional cleaning visit today.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Button to={`/booking?service=${service.slug}`} variant="cta" fullWidth>
                    Book This Service <ArrowRight size={18} />
                  </Button>
                  <Button to="/get-a-quote" variant="outline-white" fullWidth>
                    Request Free Quote
                  </Button>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Services */}
          <RelatedServices currentServiceId={service.id} />
        </div>
      </section>
    </div>
  );
};

export default ResidentialCleaning;
