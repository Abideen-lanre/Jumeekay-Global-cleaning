import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServiceBenefits = ({ benefits = [] }) => {
  if (!benefits || benefits.length === 0) return null;

  return (
    <div>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--color-navy-dark)' }}>
        Key Service Benefits
      </h3>
      <div className="benefits-box-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-mini-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
              <CheckCircle2 size={20} />
              <h4 style={{ margin: 0 }}>Benefit {index + 1}</h4>
            </div>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBenefits;
