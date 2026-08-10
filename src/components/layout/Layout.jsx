import React from 'react';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import FloatingWhatsApp from '../common/FloatingWhatsApp';
import StickyMobileCTA from '../common/StickyMobileCTA';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <main id="main-content" tabIndex="-1">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </div>
  );
};

export default Layout;
