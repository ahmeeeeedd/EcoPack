import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { currentUser } from '../../data/mockData';

const ImpactVisual: React.FC = () => {
  const { t } = useLanguage();

  // Calculate percentages for visualization
  const bottlesPercent = Math.min(100, (currentUser.impact.bottlesSaved / 200) * 100);
  const treesPercent = Math.min(100, (currentUser.impact.treesPreserved / 15) * 100);
  const co2Percent = Math.min(100, (currentUser.impact.co2Reduced / 50) * 100);
  const plasticPercent = Math.min(100, (currentUser.impact.plasticWaste / 30) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        {t('impactStats')}
      </h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{t('bottlesSaved')}</span>
            <span className="text-sm font-medium text-green-600">{currentUser.impact.bottlesSaved}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-500 h-2.5 rounded-full" 
              style={{ width: `${bottlesPercent}%` }}
            ></div>
          </div>
          <p className="mt-1 text-xs text-gray-500">Objectif: 200 bouteilles</p>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{t('treesPreserved')}</span>
            <span className="text-sm font-medium text-green-600">{currentUser.impact.treesPreserved}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-500 h-2.5 rounded-full" 
              style={{ width: `${treesPercent}%` }}
            ></div>
          </div>
          <p className="mt-1 text-xs text-gray-500">Objectif: 15 arbres</p>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{t('co2Reduced')}</span>
            <span className="text-sm font-medium text-green-600">{currentUser.impact.co2Reduced} kg</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-amber-500 h-2.5 rounded-full" 
              style={{ width: `${co2Percent}%` }}
            ></div>
          </div>
          <p className="mt-1 text-xs text-gray-500">Objectif: 50 kg</p>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">{t('plasticWaste')}</span>
            <span className="text-sm font-medium text-green-600">{currentUser.impact.plasticWaste} kg</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-teal-500 h-2.5 rounded-full" 
              style={{ width: `${plasticPercent}%` }}
            ></div>
          </div>
          <p className="mt-1 text-xs text-gray-500">Objectif: 30 kg</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-green-50 rounded-md">
        <p className="text-sm text-center text-green-700">
          Votre impact est équivalent à la plantation de {Math.round(currentUser.impact.treesPreserved * 1.5)} arbres !
        </p>
      </div>
    </div>
  );
};

export default ImpactVisual;