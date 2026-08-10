import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sparkles, ChevronDown, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import { servicesData } from '../../data/servicesData';
import { companyData } from '../../data/companyData';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  // Handle scroll shadow transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          {/* Logo */}
          <Link to="/" className="brand-logo" aria-label="Jumeekay Global Cleaning Services Home">
            <div className="logo-icon-wrapper">
              <Sparkles size={24} />
            </div>
            <div className="logo-text">
              <span className="logo-title">JUMEEKAY</span>
              <span className="logo-subtitle">GLOBAL CLEANING</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links-desktop">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About Us
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item-dropdown">
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link dropdown-toggle ${isActive ? 'active' : ''}`}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </NavLink>
              <div className="dropdown-menu" role="menu">
                <Link to="/services" className="dropdown-item" role="menuitem">
                  <ShieldCheck size={16} />
                  <strong>View All Services</strong>
                </Link>
                <div style={{ height: '1px', backgroundColor: 'var(--color-border)', margin: '0.4rem 0' }} />
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className={`dropdown-item ${location.pathname === `/services/${service.slug}` ? 'active' : ''}`}
                    role="menuitem"
                  >
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <NavLink to="/testimonials" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Testimonials
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Header Action Button */}
          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Button to="/get-a-quote" variant="cta" size="sm">
              Get a Free Quote
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${isMobileOpen ? 'open' : ''}`} onClick={() => setIsMobileOpen(false)}>
        <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-drawer-header">
            <div className="brand-logo">
              <div className="logo-icon-wrapper">
                <Sparkles size={20} />
              </div>
              <div className="logo-text">
                <span className="logo-title" style={{ fontSize: '1.05rem' }}>JUMEEKAY</span>
                <span className="logo-subtitle">GLOBAL CLEANING</span>
              </div>
            </div>
            <button
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close mobile menu"
              style={{ padding: '0.4rem', color: 'var(--color-navy-dark)' }}
            >
              <X size={26} />
            </button>
          </div>

          <nav className="mobile-nav-list">
            <NavLink to="/" className="mobile-nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="mobile-nav-link">
              About Us
            </NavLink>

            <div>
              <div
                className="mobile-dropdown-header"
                onClick={() => setIsServicesMobileOpen(!isServicesMobileOpen)}
                style={{ cursor: 'pointer', padding: '0.35rem 0' }}
              >
                <span>Services</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: isServicesMobileOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform var(--transition-fast)'
                  }}
                />
              </div>

              {isServicesMobileOpen && (
                <div className="mobile-dropdown-list">
                  <Link to="/services" className="mobile-sublink" style={{ fontWeight: '700', color: 'var(--color-primary)' }}>
                    All Services Overview <ArrowRight size={14} />
                  </Link>
                  {servicesData.map((service) => (
                    <Link key={service.id} to={`/services/${service.slug}`} className="mobile-sublink">
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/booking" className="mobile-nav-link">
              Book a Cleaning
            </NavLink>
            <NavLink to="/testimonials" className="mobile-nav-link">
              Testimonials
            </NavLink>
            <NavLink to="/faq" className="mobile-nav-link">
              FAQ
            </NavLink>
            <NavLink to="/contact" className="mobile-nav-link">
              Contact Us
            </NavLink>
          </nav>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Button to="/get-a-quote" variant="cta" fullWidth>
              Request Free Quote
            </Button>
            <Button to="/booking" variant="outline" fullWidth>
              Book Service Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
