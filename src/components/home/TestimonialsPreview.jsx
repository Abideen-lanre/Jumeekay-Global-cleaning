import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import TestimonialCard from '../testimonials/TestimonialCard';
import Button from '../common/Button';
import { testimonialsData } from '../../data/testimonialsData';

const TestimonialsPreview = () => {
  // Show first 3 testimonials on Home page
  const previewList = testimonialsData.slice(0, 3);

  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeading
          badge="Verified Client Reviews"
          title="What Our Clients Say About Jumeekay"
          subtitle="Read honest feedback from homeowners, property managers, and business owners who rely on our cleaning services."
        />

        <div className="testimonials-grid-all">
          {previewList.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <Button to="/testimonials" variant="outline" size="lg">
            View All Testimonials <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
