import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ResidentialCleaning from './pages/ResidentialCleaning';
import CommercialCleaning from './pages/CommercialCleaning';
import DeepCleaning from './pages/DeepCleaning';
import PostConstructionCleaning from './pages/PostConstructionCleaning';
import MoveInMoveOutCleaning from './pages/MoveInMoveOutCleaning';
import OfficeCleaning from './pages/OfficeCleaning';
import Booking from './pages/Booking';
import GetQuote from './pages/GetQuote';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Testimonials from './pages/Testimonials';
import NotFound from './pages/NotFound';

// Stylesheets
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/forms.css';
import './styles/responsive.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/residential-cleaning" element={<ResidentialCleaning />} />
          <Route path="/services/commercial-cleaning" element={<CommercialCleaning />} />
          <Route path="/services/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/services/post-construction-cleaning" element={<PostConstructionCleaning />} />
          <Route path="/services/move-in-move-out-cleaning" element={<MoveInMoveOutCleaning />} />
          <Route path="/services/office-cleaning" element={<OfficeCleaning />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/get-a-quote" element={<GetQuote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
