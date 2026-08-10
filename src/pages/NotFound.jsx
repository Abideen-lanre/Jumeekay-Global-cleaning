import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import { Sparkles, Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{ padding: '6rem 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'var(--color-primary-light)',
          color: 'var(--color-primary)',
          borderRadius: 'var(--radius-full)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.5rem'
        }}>
          <Sparkles size={40} />
        </div>

        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-navy-dark)', marginBottom: '0.5rem' }}>404</h1>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--color-text-main)' }}>Page Not Found</h2>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.05rem' }}>
          Sorry, the page you are looking for might have been moved, removed, or doesn't exist.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Button to="/" variant="primary" size="lg">
            <Home size={18} /> Return to Home
          </Button>
          <Button to="/services" variant="outline" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
