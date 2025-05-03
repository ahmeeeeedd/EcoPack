import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { currentUser } from '../../data/mockData';

const ImpactCounter: React.FC = () => {
  const { t } = useLanguage();
  const [counts, setCounts] = useState({
    bottlesSaved: 0,
    treesPreserved: 0,
    co2Reduced: 0,
    plasticWaste: 0,
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds for the count animation
    const steps = 60;
    const interval = duration / steps;
    
    const incrementCounter = (step: number) => {
      setCounts({
        bottlesSaved: Math.ceil((currentUser.impact.bottlesSaved * step) / steps),
        treesPreserved: Math.ceil((currentUser.impact.treesPreserved * step) / steps),
        co2Reduced: Math.ceil((currentUser.impact.co2Reduced * step) / steps),
        plasticWaste: Math.ceil((currentUser.impact.plasticWaste * step) / steps),
      });
    };
    
    let step = 0;
    const timer = setInterval(() => {
      step += 1;
      incrementCounter(step);
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            {t('impactCounterTitle')}
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-green-600 mb-2">{counts.bottlesSaved}</div>
            <div className="text-gray-600">{t('bottlesSaved')}</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-green-600 mb-2">{counts.treesPreserved}</div>
            <div className="text-gray-600">{t('treesPreserved')}</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-green-600 mb-2">{counts.co2Reduced}</div>
            <div className="text-gray-600">{t('co2Reduced')}</div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-transform duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-green-600 mb-2">{counts.plasticWaste}</div>
            <div className="text-gray-600">{t('plasticWaste')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;