import React from 'react';
import { FileText, Calendar, Sparkles, Smile, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Request a Quote",
    desc: "Tell us about your property size, cleaning needs, and preferred timing via our fast online form or WhatsApp."
  },
  {
    num: "02",
    icon: Calendar,
    title: "Choose Your Schedule",
    desc: "Select a date and time slot that fits seamlessly into your work or personal routine."
  },
  {
    num: "03",
    icon: Sparkles,
    title: "We Clean Thoroughly",
    desc: "Our insured cleaning team arrives on schedule with commercial-grade eco-friendly equipment."
  },
  {
    num: "04",
    icon: Smile,
    title: "Enjoy Your Clean Space",
    desc: "Step into a spotless, fresh, and healthy environment with complete peace of mind."
  }
];

const HowItWorks = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          badge="Seamless Process"
          title="How Our Cleaning Process Works"
          subtitle="Getting your home or commercial space professionally cleaned is simple, transparent, and hassle-free."
        />

        <div className="process-grid">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="process-step-card">
                <span className="step-number">{step.num}</span>
                <div className="step-icon">
                  <IconComp size={24} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Button to="/booking" variant="cta" size="lg">
            Start Your Booking <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
