import React from 'react';
import PageHero from '../components/common/PageHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceProcess from '../components/services/ServiceProcess';
import RelatedServices from '../components/services/RelatedServices';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { Check, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/pages/service-detail.css';

const OfficeCleaning = () => {
  const service = servicesData.find((s) => s.slug === 'office-cleaning');
  if (!service) return null;

  return (
    <div className="service-detail-page">
      <PageHero
        title={service.title}
        subtitle="Reliable routine office cleaning services to ensure a healthy, hygienic, and productive workplace for your team."
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
                <h2>Productive & Hygienic Work Environments for Modern Businesses</h2>
                <p>{service.fullDesc}</p>
              </div>

              <div className="checklist-container">
                <h3 className="checklist-title">What Is Included in Office Cleaning</h3>
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
                  Target Workspaces & Offices
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
                <h3>Schedule Office Janitorial Care</h3>
                <p>Custom daily, weekly, or after-hours janitorial contracts designed around your team's workflow.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Button to="/get-a-quote" variant="cta" fullWidth>
                    Request Office Quote <ArrowRight size={18} />
                  </Button>
                  <Button to="/contact" variant="outline-white" fullWidth>
                    Speak to Contract Manager
                  </Button>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>After-Hours & Security Clearances Available</span>
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

export default OfficeCleaning;
