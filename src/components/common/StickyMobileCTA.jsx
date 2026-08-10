import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, FileText } from 'lucide-react';
import { companyData } from '../../data/companyData';

const StickyMobileCTA = () => {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning,%20I%20would%20like%20to%20get%20a%20free%20quote.`;

  return (
    <div className="sticky-mobile-cta" aria-label="Mobile quick actions">
      <div className="mobile-cta-grid">
        <a href={`tel:${companyData.phone}`} className="mobile-cta-btn call-btn">
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta-btn wa-btn"
        >
          <MessageSquare size={18} />
          <span>WhatsApp</span>
        </a>

        <Link to="/get-a-quote" className="mobile-cta-btn quote-btn">
          <FileText size={18} />
          <span>Get Quote</span>
        </Link>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
