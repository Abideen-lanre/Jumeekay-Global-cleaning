import React from 'react';

const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = ''
}) => {
  return (
    <div className={`section-heading ${centered ? 'text-center' : ''} ${className}`}>
      {badge && (
        <span className={`section-badge ${dark ? 'section-badge-alt' : ''}`}>
          {badge}
        </span>
      )}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
