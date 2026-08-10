import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card testimonial-card">
      <div className="testimonial-rating">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>

      <p className="testimonial-quote">"{testimonial.quote}"</p>

      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
        <div className="author-info">
          <span className="author-name">{testimonial.name}</span>
          <span className="author-role">{testimonial.role} • {testimonial.service}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
