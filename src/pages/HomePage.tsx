import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import ImpactCounter from '../components/home/ImpactCounter';
import SponsorShowcase from '../components/home/SponsorShowcase';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ImpactCounter />
      <SponsorShowcase />
    </div>
  );
};

export default HomePage;