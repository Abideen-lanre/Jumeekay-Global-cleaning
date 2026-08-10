import React from 'react';
import Hero from '../components/home/Hero';
import TrustBar from '../components/home/TrustBar';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import HowItWorks from '../components/home/HowItWorks';
import BeforeAfter from '../components/home/BeforeAfter';
import Statistics from '../components/home/Statistics';
import TestimonialsPreview from '../components/home/TestimonialsPreview';
import ServiceAreas from '../components/home/ServiceAreas';
import FinalCTA from '../components/home/FinalCTA';
import '../styles/pages/home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <WhyChooseUs />
      <HowItWorks />
      <BeforeAfter />
      <Statistics />
      <TestimonialsPreview />
      <ServiceAreas />
      <FinalCTA />
    </div>
  );
};

export default Home;
