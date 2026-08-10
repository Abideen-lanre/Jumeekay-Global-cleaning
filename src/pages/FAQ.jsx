import React, { useState } from 'react';
import PageHero from '../components/common/PageHero';
import Button from '../components/common/Button';
import { ChevronDown, MessageSquare, HelpCircle } from 'lucide-react';
import { faqData, faqCategories } from '../data/faqData';
import { companyData } from '../data/companyData';
import '../styles/pages/faq.css';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState([1]); // First FAQ open by default

  const toggleAccordion = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'all'
    ? faqData
    : faqData.filter((item) => item.category === activeCategory);

  const whatsappUrl = `https://wa.me/${companyData.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Jumeekay%20Global%20Cleaning,%20I%20have%20a%20question!`;

  return (
    <div className="faq-page">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our cleaning processes, booking, pricing, and safety guarantee."
        breadcrumb={[{ label: 'FAQ' }]}
      />

      <section className="section">
        <div className="container">
          {/* Category Filters */}
          <div className="faq-category-filters" role="tablist" aria-label="FAQ Categories">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`faq-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion Container */}
          <div className="faq-accordion-container">
            {filteredFaqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              return (
                <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={20} />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-content animate-fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Have More Questions Banner */}
          <div className="service-banner-cta">
            <div className="banner-content">
              <h3>Still Have Questions?</h3>
              <p>Our team is ready to help you with custom cleaning queries or special requests.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Button to="/contact" variant="cta" size="lg">
                Contact Support Desk
              </Button>
              <Button href={whatsappUrl} variant="whatsapp" size="lg">
                <MessageSquare size={20} /> Ask on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
