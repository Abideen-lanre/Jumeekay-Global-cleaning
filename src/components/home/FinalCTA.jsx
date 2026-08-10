import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Button from '../common/Button';
import { companyData } from '../../data/companyData';

const FinalCTA = () => {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning,%20I%20am%20ready%20for%20a%20cleaner%20space!`;

  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-box animate-fade-in">
          <h2 className="final-cta-title">Ready for a Cleaner, Fresher Space?</h2>
          <p className="final-cta-subtitle">
            Get your instant free quote today or connect with our friendly customer team on WhatsApp for fast scheduling.
          </p>

          <div className="final-cta-buttons">
            <Button to="/get-a-quote" variant="cta" size="lg">
              Get a Free Quote <ArrowRight size={20} />
            </Button>

            <Button href={whatsappUrl} variant="whatsapp" size="lg">
              <MessageSquare size={20} /> Contact Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
