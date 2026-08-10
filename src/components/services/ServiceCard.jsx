import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, Sparkles, HardHat, Truck, Briefcase } from 'lucide-react';

const iconMap = {
  Home: Home,
  Building2: Building2,
  Sparkles: Sparkles,
  HardHat: HardHat,
  Truck: Truck,
  Briefcase: Briefcase
};

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.iconName] || Sparkles;

  return (
    <div className="card service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.title} />
        <div className="service-card-badge">
          <IconComponent size={22} />
        </div>
      </div>
      <div className="service-card-body">
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-desc">{service.shortDesc}</p>
        <Link to={`/services/${service.slug}`} className="service-card-link">
          <span>Learn More</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
