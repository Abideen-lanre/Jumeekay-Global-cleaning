import React from 'react';
import PageHero from '../components/common/PageHero';
import ServiceBenefits from '../components/services/ServiceBenefits';
import ServiceProcess from '../components/services/ServiceProcess';
import RelatedServices from '../components/services/RelatedServices';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { Check, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/pages/service-detail.css';

const PostConstructionCleaning = () => {
  const service = servicesData.find((s) => s.slug === 'post-construction-cleaning');
  if (!service) return null;

  return (
    <div className="service-detail-page">
      <PageHero
        title={service.title}
        subtitle="Specialized removal of drywall dust, paint overspray, mortar drips, and construction debris to make renovated spaces move-in ready."
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
                <h2>Multi-Stage Post-Renovation & Construction Final Clean</h2>
                <p>{service.fullDesc}</p>
              </div>

              <div className="checklist-container">
                <h3 className="checklist-title">What Is Included in Post-Construction Cleanup</h3>
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
                  Who Needs Post-Construction Cleanup
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
                <h3>Book Post-Construction Cleanup</h3>
                <p>Contractors and property owners receive guaranteed turnaround times for site handovers.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Button to="/get-a-quote" variant="cta" fullWidth>
                    Request Contractor Quote <ArrowRight size={18} />
                  </Button>
                  <Button to="/booking" variant="outline-white" fullWidth>
                    Book Site Cleanup
                  </Button>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={18} style={{ color: 'var(--color-primary)' }} />
                  <span>HEPA Vacuum & Dust Safety Compliant</span>
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

export default PostConstructionCleaning;
