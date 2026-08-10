import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../services/ServiceCard';
import Button from '../common/Button';
import { servicesData } from '../../data/servicesData';

const ServicesPreview = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          badge="Tailored Cleaning Solutions"
          title="Cleaning Services Tailored to Your Needs"
          subtitle="Whether you need routine home maintenance, detailed deep sanitization, or corporate office cleaning, we deliver immaculate results."
        />

        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Button to="/services" variant="primary" size="lg">
            View All Services <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
