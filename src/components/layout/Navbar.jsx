import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Sparkles, ChevronDown, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import Button from '../common/Button';
import { servicesData } from '../../data/servicesData';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const closeMobileNav = useCallback(() => {
    setIsMobileOpen(false);
    setIsServicesMobileOpen(false);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    closeMobileNav();
  }, [location, closeMobileNav]);

  // Handle scroll shadow transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // While the drawer is open: lock page scroll and allow Escape to close
  useEffect(() => {
    if (!isMobileOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeMobileNav();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.documentElement.classList.add('nav-drawer-open');
    document.body.classList.add('nav-drawer-open');

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.documentElement.classList.remove('nav-drawer-open');
      document.body.classList.remove('nav-drawer-open');
    };
  }, [isMobileOpen, closeMobileNav]);

  /*
   * The drawer is portalled to <body> on purpose: .site-header uses backdrop-filter,
   * which makes it the containing block for position: fixed descendants. Rendered
   * inside the header, the drawer gets clipped to the header's height instead of
   * filling the viewport.
   */
  const mobileDrawer = (
    <div
      className={`mobile-nav-overlay ${isMobileOpen ? 'open' : ''}`}
      onClick={closeMobileNav}
    >
      <div
        id="mobile-nav-drawer"
        className="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-drawer-header">
          <Link to="/" className="brand-logo" onClick={closeMobileNav}>
            <div className="logo-icon-wrapper">
              <Sparkles size={20} />
            </div>
            <div className="logo-text">
              <span className="logo-title">JUMEEKAY</span>
              <span className="logo-subtitle">GLOBAL CLEANING</span>
            </div>
          </Link>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeMobileNav}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mobile-nav-list" aria-label="Mobile Navigation">
          <NavLink to="/" className="mobile-nav-link" onClick={closeMobileNav}>
            Home
          </NavLink>
          <NavLink to="/about" className="mobile-nav-link" onClick={closeMobileNav}>
            About Us
          </NavLink>

          <div className="mobile-dropdown">
            <button
              type="button"
              className="mobile-dropdown-header"
              onClick={() => setIsServicesMobileOpen((open) => !open)}
              aria-expanded={isServicesMobileOpen}
              aria-controls="mobile-services-list"
            >
              <span>Services</span>
              <ChevronDown
                size={18}
                className={`mobile-dropdown-chevron ${isServicesMobileOpen ? 'open' : ''}`}
              />
            </button>

            {isServicesMobileOpen && (
              <div className="mobile-dropdown-list" id="mobile-services-list">
                <Link to="/services" className="mobile-sublink all-services" onClick={closeMobileNav}>
                  All Services Overview <ArrowRight size={14} />
                </Link>
                {servicesData.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className={`mobile-sublink ${location.pathname === `/services/${service.slug}` ? 'active' : ''}`}
                    onClick={closeMobileNav}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/booking" className="mobile-nav-link" onClick={closeMobileNav}>
            Book a Cleaning
          </NavLink>
          <NavLink to="/testimonials" className="mobile-nav-link" onClick={closeMobileNav}>
            Testimonials
          </NavLink>
          <NavLink to="/faq" className="mobile-nav-link" onClick={closeMobileNav}>
            FAQ
          </NavLink>
          <NavLink to="/contact" className="mobile-nav-link" onClick={closeMobileNav}>
            Contact Us
          </NavLink>
        </nav>

        <div className="mobile-drawer-footer">
          <Button to="/get-a-quote" variant="cta" fullWidth onClick={closeMobileNav}>
            Request Free Quote
          </Button>
          <Button to="/booking" variant="outline" fullWidth onClick={closeMobileNav}>
            Book Service Now
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
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
                  <div className="dropdown-divider" />
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

            {/* Header Actions */}
            <div className="header-actions">
              <Button to="/get-a-quote" variant="cta" size="sm" className="header-quote-btn">
                Get a Free Quote
              </Button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="mobile-toggle"
                onClick={() => setIsMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileOpen}
                aria-controls="mobile-nav-drawer"
              >
                <Menu size={26} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {createPortal(mobileDrawer, document.body)}
    </>
  );
};

export default Navbar;
