import React from 'react';
import PageHero from '../components/common/PageHero';
import ServiceCard from '../components/services/ServiceCard';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { MessageSquare, PhoneCall } from 'lucide-react';
import '../styles/pages/services.css';

const Services = () => {
  return (
    <div className="services-page">
      <PageHero
        title="Professional Cleaning Services"
        subtitle="Explore our comprehensive range of residential, commercial, deep cleaning, and post-construction solutions."
        breadcrumb={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="container">
          <div className="services-overview-header text-center">
            <span className="section-badge">Complete Care</span>
            <h2 className="section-title">Spotless Solutions For Every Environment</h2>
            <p className="section-subtitle">
              Every cleaning service we offer is performed by vetted professionals using top-grade equipment and eco-friendly sanitization solutions.
            </p>
          </div>

          <div className="services-list-grid">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* Service Banner CTA */}
          <div className="service-banner-cta">
            <div className="banner-content">
              <h3>Not Sure Which Cleaning Service You Need?</h3>
              <p>Speak with our service consultants. We'll recommend the ideal package for your property and budget.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/contact" variant="cta" size="lg">
                <PhoneCall size={20} /> Talk to Us
              </Button>
              <Button to="/get-a-quote" variant="outline-white" size="lg">
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
