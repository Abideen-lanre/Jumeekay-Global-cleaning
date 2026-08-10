import React from 'react';
import { FileText, Calendar, Sparkles, CheckCircle } from 'lucide-react';

const ServiceProcess = () => {
  const steps = [
    { icon: FileText, title: "1. Request Quote", desc: "Submit your details or call our team." },
    { icon: Calendar, title: "2. Schedule Visit", desc: "Pick a date and time slot that suits you." },
    { icon: Sparkles, title: "3. Professional Clean", desc: "Our vetted experts perform deep cleaning." },
    { icon: CheckCircle, title: "4. Final Inspection", desc: "Walk through and enjoy spotless results." }
  ];

  return (
    <div style={{ backgroundColor: 'var(--color-bg-light)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--color-border)' }}>
      <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: 'var(--color-navy-dark)' }}>
        Our Standard Service Execution Process
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
        {steps.map((step, idx) => {
          const IconComp = step.icon;
          return (
            <div key={idx} style={{ background: 'var(--color-bg-white)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
              <IconComp size={24} style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }} />
              <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--color-navy-dark)' }}>{step.title}</h4>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceProcess;
