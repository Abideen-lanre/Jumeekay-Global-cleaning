import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import { companyData } from '../../data/companyData';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay" />
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Action */}
          <div className="hero-content animate-fade-in">
            <div className="hero-badge">
              <ShieldCheck size={16} />
              <span>Trusted Cleaning Specialists</span>
            </div>

            <h1 className="hero-title">
              Professional Cleaning Services for <span className="text-highlight">Homes & Businesses</span>
            </h1>

            <p className="hero-subtitle">
              From regular home cleaning to deep sanitization and commercial spaces, Jumeekay Global Cleaning Services delivers spotless, refreshing results you can see and feel.
            </p>

            <div className="hero-cta-group">
              <Button to="/get-a-quote" variant="cta" size="lg">
                Get a Free Quote <ArrowRight size={20} />
              </Button>
              <Button to="/booking" variant="outline-white" size="lg">
                Book a Cleaning
              </Button>
            </div>

            <div className="hero-trust-bullets">
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Vetted & Insured Cleaners</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="hero-trust-item">
                <CheckCircle2 size={18} />
                <span>Flexible Scheduling</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Image Frame */}
          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                alt="Professional Jumeekay Cleaning Specialist at work"
              />
            </div>
            <div className="hero-experience-badge">
              <div className="badge-number">{companyData.stats.yearsExperience}</div>
              <div className="badge-text">
                Years of Dedicated<br />Cleaning Excellence
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
