import React from 'react';
import SectionHeading from '../common/SectionHeading';

const transformations = [
  {
    beforeImg: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    title: "Kitchen Deep Clean & Degreasing",
    subtitle: "Heavy grease buildup & tile grout restored to pristine shine"
  },
  {
    beforeImg: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    title: "Commercial Office Renovation Clean",
    subtitle: "Post-construction drywall dust removed completely"
  }
];

const BeforeAfter = () => {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          badge="Real Transformations"
          title="See The Jumeekay Difference"
          subtitle="A glimpse into the quality and detail our professional team delivers across residential and commercial spaces."
        />

        <div className="transformation-grid">
          {transformations.map((item, index) => (
            <div key={index} className="transformation-card card">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ position: 'relative' }}>
                  <span className="transformation-badge">Before</span>
                  <img src={item.beforeImg} alt={`${item.title} Before`} />
                </div>
                <div style={{ position: 'relative' }}>
                  <span className="transformation-badge after">After</span>
                  <img src={item.afterImg} alt={`${item.title} After`} />
                </div>
              </div>
              <div className="transformation-caption">
                <h3 className="transformation-title">{item.title}</h3>
                <p className="transformation-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
