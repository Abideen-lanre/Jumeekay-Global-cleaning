import React from 'react';
import { companyData } from '../../data/companyData';

const Statistics = () => {
  const statsList = [
    { number: companyData.stats.happyClients, label: "Happy Clients Served" },
    { number: companyData.stats.spacesCleaned, label: "Spaces Cleaned" },
    { number: companyData.stats.yearsExperience, label: "Years of Industry Experience" },
    { number: companyData.stats.satisfactionRate, label: "Client Satisfaction Rate" }
  ];

  return (
    <section className="section section-dark">
      <div className="container">
        <div className="stats-grid">
          {statsList.map((stat, idx) => (
            <div key={idx} className="stat-box">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
