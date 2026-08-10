import React from 'react';
import { Phone, Clock, MapPin, MessageSquare } from 'lucide-react';
import { companyData } from '../../data/companyData';

const TopBar = () => {
  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning!`;

  return (
    <div className="topbar">
      <div className="container topbar-content">
        <div className="topbar-info">
          <div className="topbar-item">
            <Phone size={14} />
            <span>Call Us: <strong>{companyData.phoneFormatted || companyData.phone}</strong></span>
          </div>
          <div className="topbar-item">
            <Clock size={14} />
            <span>{companyData.openingHours}</span>
          </div>
          <div className="topbar-item">
            <MapPin size={14} />
            <span>Serving: {companyData.serviceArea}</span>
          </div>
        </div>

        <div className="topbar-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="topbar-link whatsapp-link"
          >
            <MessageSquare size={14} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
