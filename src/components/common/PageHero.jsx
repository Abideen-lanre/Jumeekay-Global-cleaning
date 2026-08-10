import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle, breadcrumb = [] }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-overlay" />
      <div className="container">
        <div className="page-hero-content animate-fade-in">
          {breadcrumb.length > 0 && (
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <ChevronRight size={14} />
                  {item.link ? (
                    <Link to={item.link}>{item.label}</Link>
                  ) : (
                    <span className="current">{item.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <h1 className="page-hero-title">{title}</h1>
          {subtitle && <p className="page-hero-desc">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
