import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { Target, Eye, ShieldCheck, Heart, Award, Sparkles, UserCheck } from 'lucide-react';
import '../styles/pages/about.css';

const coreValues = [
  { icon: ShieldCheck, title: "Professionalism", desc: "Uniformed, trained, and courteous team committed to excellence on every job." },
  { icon: Award, title: "Reliability", desc: "Punctual arrival times, consistent high quality, and dependability you can count on." },
  { icon: Sparkles, title: "Uncompromising Quality", desc: "Meticulous sanitization protocols and deep cleaning standards for ultimate hygiene." },
  { icon: Heart, title: "Integrity", desc: "Transparent pricing, honest advice, and respectful treatment of your space." },
  { icon: UserCheck, title: "Customer Satisfaction", desc: "Your happiness is our primary benchmark. We go above and beyond to exceed expectations." },
  { icon: Target, title: "Attention to Detail", desc: "No corner left uncleaned. We focus on baseboards, handles, and hidden dust." }
];

const About = () => {
  return (
    <div className="about-page">
      <PageHero
        title="About Jumeekay Global Cleaning Services"
        subtitle="Dedicated to transforming environments through trusted, thorough, and professional cleaning services."
        breadcrumb={[{ label: 'About Us' }]}
      />

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <div className="about-intro-grid">
            <div>
              <span className="section-badge">Our Story & Commitment</span>
              <h2 className="section-title">Your Space Is Safe In Professional Hands</h2>
              <p>
                Founded on the belief that a clean environment inspires health, productivity, and happiness, Jumeekay Global Cleaning Services has grown into a trusted leader in residential and commercial cleaning.
              </p>
              <p>
                We understand that inviting cleaners into your home or corporate office requires immense trust. That is why every member of our team is thoroughly vetted, background-checked, and rigorously trained in modern sanitization standards.
              </p>
              <p>
                Whether servicing a cozy studio apartment or a multi-floor corporate headquarters, we bring the same relentless passion for quality, safety, and hygiene.
              </p>
            </div>

            <div className="about-intro-image">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80"
                alt="Jumeekay Cleaning Specialists Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-alt">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-navy-dark)' }}>Our Mission</h3>
              <p>
                To deliver premium, health-conscious, and reliable cleaning solutions that elevate living and working spaces, giving our clients total peace of mind and more time to focus on what matters most.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-navy-dark)' }}>Our Vision</h3>
              <p>
                To be the most recommended and trusted cleaning service brand, renowned for operational excellence, customer care, innovation, and environmental responsibility across all regions we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Our Guiding Principles"
            title="Core Values That Drive Our Service"
            subtitle="The fundamental beliefs that guide every cleaning visit, customer interaction, and quality inspection."
          />

          <div className="values-grid">
            {coreValues.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <div key={idx} className="value-card">
                  <div style={{ color: 'var(--color-primary)', marginBottom: '0.75rem' }}>
                    <IconComponent size={26} />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            badge="Dedicated Professionals"
            title="Meet the Team Behind Jumeekay"
            subtitle="Our trained cleaning specialists, site supervisors, and customer support representatives."
          />

          <div className="team-grid">
            {[1, 2, 3].map((num) => (
              <div key={num} className="card team-card">
                <div className="team-avatar-placeholder">
                  <UserCheck size={48} />
                </div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem', color: 'var(--color-navy-dark)' }}>
                  Cleaning Specialist Team #{num}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: '600' }}>
                  Vetted & Certified Cleaner
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  Specializes in residential deep cleaning, sanitization protocols, and detailed surface care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final About CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--color-text-white)' }}>
            Let's Make Your Space Shine
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', maxWidth: '650px', margin: '0 auto 2rem' }}>
            Experience the difference of a professional cleaning team dedicated to your health, comfort, and satisfaction.
          </p>
          <Button to="/get-a-quote" variant="cta" size="lg">
            Get a Free Quote Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
