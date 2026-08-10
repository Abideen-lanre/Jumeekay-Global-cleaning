import React from 'react';
import PageHero from '../components/common/PageHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceProcess from '../components/services/ServiceProcess';
import RelatedServices from '../components/services/RelatedServices';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { Check, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/pages/service-detail.css';

const MoveInMoveOutCleaning = () => {
  const service = servicesData.find((s) => s.slug === 'move-in-move-out-cleaning');
  if (!service) return null;

  return (
    <div className="service-detail-page">
      <PageHero
        title={service.title}
        subtitle="Deposit-guarantee cleaning for tenants, property managers, and buyers relocating into new homes."
        breadcrumb={[
          { label: 'Services', link: '/services' },
          { label: service.title }
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="service-detail-grid">
            <div className="service-main-content">
              <div className="service-hero-image">
                <img src={service.image} alt={service.title} />
              </div>

              <div className="service-description">
                <h2>Turnkey Move-In / Move-Out Property Sanitization</h2>
                <p>{service.fullDesc}</p>
              </div>

              <div className="checklist-container">
                <h3 className="checklist-title">What Is Included in Move-In / Move-Out Cleaning</h3>
                <div className="checklist-grid">
                  {service.checklist.map((item, idx) => (
                    <div key={idx} className="checklist-item">
                      <Check size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <ServiceBenefits benefits={service.benefits} />

              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--color-navy-dark)' }}>
                  Who This Service Is For
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

              <ServiceProcess />
            </div>

            <div className="service-sidebar">
              <div className="sidebar-cta-card">
                <h3>Secure Your Move Cleaning</h3>
                <p>Ensure a hassle-free lease handover or welcome your family into a pristine new home.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Button to={`/booking?service=${service.slug}`} variant="cta" fullWidth>
                    Book Move Cleaning <ArrowRight size={18} />
                  </Button>
                  <Button to="/get-a-quote" variant="outline-white" fullWidth>
                    Request Instant Quote
                  </Button>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>100% Security Deposit Return Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          <RelatedServices currentServiceId={service.id} />
        </div>
      </section>
    </div>
  );
};

export default MoveInMoveOutCleaning;
