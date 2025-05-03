import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { sponsors } from '../../data/mockData';

const SponsorShowcase: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            {t('sponsorsTitle')}
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.slice(0, 3).map((sponsor) => (
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

        <div className="text-center mt-12">
          <Link
            to="/sponsors"
            className="inline-block px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-500 transition-colors"
          >
            Voir tous nos sponsors
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SponsorShowcase;