import React from 'react';
import { Shield, Sparkles, Calendar, ThumbsUp } from 'lucide-react';
import { companyData } from '../../data/companyData';

const TrustBar = () => {
  return (
    <section className="trustbar-section">
      <div className="container">
        <div className="trustbar-grid">
          {companyData.trustBadges.map((badge, index) => {
            const icons = [<Shield size={24} />, <ThumbsUp size={24} />, <Calendar size={24} />, <Sparkles size={24} />];
            return (
              <div key={index} className="trustbar-item">
                <div className="trustbar-icon">
                  {icons[index % icons.length]}
                </div>
                <div>
                  <h3 className="trustbar-title">{badge.title}</h3>
                  <p className="trustbar-desc">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
