import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4207693/pexels-photo-4207693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] mix-blend-overlay bg-fixed bg-center bg-cover opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="text-center md:text-left md:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="mt-6 text-xl text-green-100 max-w-3xl">
            {t('heroSubtitle')}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-3 bg-white text-green-700 font-medium rounded-md hover:bg-green-50 transition-colors"
            >
              {t('learnMore')}
            </Link>
            <Link
              to="/scanner"
              className="w-full sm:w-auto px-8 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-400 transition-colors"
            >
              {t('scanNow')}
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="fill-current text-sand-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;