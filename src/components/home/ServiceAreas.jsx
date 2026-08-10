import React from 'react';
import { MapPin, PhoneCall } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { companyData } from '../../data/companyData';

const ServiceAreas = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          badge="Service Coverage"
          title="Areas We Serve"
          subtitle="Providing prompt, professional residential and commercial cleaning services across your region."
        />

        <div className="areas-grid">
          {companyData.serviceAreasList.map((area, idx) => (
            <div key={idx} className="area-pill">
              <MapPin size={20} />
              <span>{area}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlignment: 'center', textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
            Not sure if we serve your specific neighborhood or business location? Contact us to find out!
          </p>
          <Button to="/contact" variant="outline">
            <PhoneCall size={18} /> Contact Coverage Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
