import React from 'react';
import { Droplets, Clock, Leaf, Recycle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Clock className="h-12 w-12 text-green-500" />,
      title: t('feature1Title'),
      description: t('feature1Desc'),
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-500" />,
      title: t('feature2Title'),
      description: t('feature2Desc'),
    },
    {
      icon: <Droplets className="h-12 w-12 text-green-500" />,
      title: t('feature3Title'),
      description: t('feature3Desc'),
    },
    {
      icon: <Recycle className="h-12 w-12 text-green-500" />,
      title: t('feature4Title'),
      description: t('feature4Desc'),
    },
  ];

  return (
    <section className="py-16 bg-sand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800">
            {t('featuresTitle')}
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-700 text-center mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;