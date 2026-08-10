import React from 'react';
import PageHero from '../components/common/PageHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceProcess from '../components/services/ServiceProcess';
import RelatedServices from '../components/services/RelatedServices';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { Check, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/pages/service-detail.css';

const DeepCleaning = () => {
  const service = servicesData.find((s) => s.slug === 'deep-cleaning');
  if (!service) return null;

  return (
    <div className="service-detail-page">
      <PageHero
        title={service.title}
        subtitle="An intensive top-to-bottom detail clean that targets hidden dirt, stubborn grime, and neglected corners."
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
                <h2>Top-To-Bottom Intensive Deep Cleaning Restoration</h2>
                <p>{service.fullDesc}</p>
              </div>

              <div className="checklist-container">
                <h3 className="checklist-title">What Is Included in Deep Cleaning</h3>
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
                  Who Needs Deep Cleaning
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
                <h3>Schedule Your Deep Clean</h3>
                <p>Give your property a complete hygienic reset. Book your deep cleaning appointment online.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Button to={`/booking?service=${service.slug}`} variant="cta" fullWidth>
                    Book Deep Clean Now <ArrowRight size={18} />
                  </Button>
                  <Button to="/get-a-quote" variant="outline-white" fullWidth>
                    Request Free Estimate
                  </Button>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>100% Satisfaction Guaranteed</span>
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

export default DeepCleaning;
