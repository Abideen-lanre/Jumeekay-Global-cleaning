import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import Button from '../components/common/Button';
import { testimonialsData } from '../data/testimonialsData';
import { ArrowRight } from 'lucide-react';
import '../styles/pages/testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-page">
      <PageHero
        title="Client Testimonials & Feedback"
        subtitle="Discover why homeowners, property managers, and business owners trust Jumeekay Global Cleaning Services."
        breadcrumb={[{ label: 'Testimonials' }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            badge="Real Customer Reviews"
            title="Stories of Cleanliness & Peace of Mind"
            subtitle="Explore honest experiences shared by our clients across residential and commercial cleaning projects."
          />

          <div className="testimonials-grid-all">
            {testimonialsData.map((item) => (
              <TestimonialCard key={item.id} testimonial={item} />
            ))}
          </div>

          {/* Testimonials End CTA */}
          <div className="service-banner-cta">
            <div className="banner-content">
              <h3>Experience the Jumeekay Difference Today</h3>
              <p>Join thousands of satisfied clients who enjoy cleaner, fresher, and healthier spaces.</p>
            </div>
            <div>
              <Button to="/booking" variant="cta" size="lg">
                Book Your Cleaning Today <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
