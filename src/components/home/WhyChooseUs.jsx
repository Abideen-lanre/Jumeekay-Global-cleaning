import React from 'react';
import { Award, Eye, Clock, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const whyBenefits = [
  {
    icon: Award,
    title: "Vetted & Trained Specialists",
    desc: "Every team member passes background checks and receives continuous quality assurance training."
  },
  {
    icon: Eye,
    title: "Meticulous Attention to Detail",
    desc: "We don't just sweep surface dirt — we clean light fixtures, baseboards, and forgotten crevices."
  },
  {
    icon: Clock,
    title: "Flexible Scheduling Options",
    desc: "Same-day, weekly, bi-weekly, monthly, or customized visits designed around your routine."
  },
  {
    icon: ShieldCheck,
    title: "100% Satisfaction Guarantee",
    desc: "If you're not entirely satisfied with any area we cleaned, notify us within 24 hours for a free re-clean."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          badge="Why Jumeekay"
          title="Why Homeowners & Businesses Trust Jumeekay"
          subtitle="We combine industry-leading equipment with trained specialists to create safe, clean, and refreshing spaces."
        />

        <div className="why-grid">
          {whyBenefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="card why-card">
                <div className="why-icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
