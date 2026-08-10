import React from 'react';
import ServiceCard from './ServiceCard';
import SectionHeading from '../common/SectionHeading';
import { servicesData } from '../../data/servicesData';

const RelatedServices = ({ currentServiceId }) => {
  const filtered = servicesData.filter((s) => s.id !== currentServiceId).slice(0, 3);

  return (
    <div style={{ marginTop: '5rem' }}>
      <SectionHeading
        badge="Explore More Solutions"
        title="Related Cleaning Services"
        subtitle="Need additional specialized cleaning? Check out our other professional offerings."
      />
      <div className="services-grid">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default RelatedServices;
