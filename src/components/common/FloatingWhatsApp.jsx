import React from 'react';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../../data/companyData';

const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning,%20I%20would%20like%20to%20inquire%20about%20your%20cleaning%20services.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat with Jumeekay Global Cleaning on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageSquare size={28} />
    </a>
  );
};

export default FloatingWhatsApp;
