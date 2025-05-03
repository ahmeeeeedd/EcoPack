import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sponsors, rewards } from '../data/mockData';

const SponsorsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-green-800 mb-6">{t('sponsorsTitle')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-700 mb-2">{sponsor.name}</h3>
                <p className="text-gray-600 mb-4">{sponsor.description}</p>
                <div className="bg-green-50 p-3 rounded-md text-green-700 text-sm mb-4">
                  {sponsor.impact}
                </div>
                <a 
                  href={sponsor.website} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-green-600 hover:text-green-500 font-medium"
                >
                  <span>Visiter le site</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <h2 className="text-xl font-bold text-green-800 mb-6">Récompenses disponibles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward) => (
            <div key={reward.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={reward.image} 
                  alt={reward.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-green-700">{reward.title}</h3>
                <p className="text-gray-500 text-sm mb-2">{reward.sponsor}</p>
                <p className="text-gray-600 text-sm mb-3">{reward.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-500">{reward.pointsCost} points</span>
                  <button className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-500 transition-colors">
                    Échanger
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block mx-auto bg-white rounded-lg shadow-md p-6 max-w-2xl">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Devenez Sponsor</h3>
            <p className="text-gray-600 mb-6">
              Rejoignez notre initiative pour un avenir sans plastique en Tunisie. 
              En tant que sponsor, vous aiderez à promouvoir des solutions d'emballage durables 
              tout en renforçant votre image de marque écologique.
            </p>
            <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-500 transition-colors">
              {t('becomeSponsors')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;