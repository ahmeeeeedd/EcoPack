import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Leaf } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const { t, language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    changeLanguage(language === 'fr' ? 'tn' : 'fr');
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 mr-2 text-green-300" />
              <span className="font-bold text-xl">ÉcoPack</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
              {t('home')}
            </Link>
            <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
              {t('dashboard')}
            </Link>
            <Link to="/scanner" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
              {t('scanner')}
            </Link>
            <Link to="/sponsors" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
              {t('sponsors')}
            </Link>
            <Link to="/vr-demo" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
              {t('vrDemo')}
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
              {t('about')}
            </Link>
            
            <button 
              onClick={toggleLanguage}
              className="ml-4 flex items-center px-3 py-2 border border-green-400 rounded-md text-sm font-medium hover:bg-green-600 transition-colors"
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'fr' ? 'العربية' : 'Français'}
            </button>
            
            <Link to="/login" className="ml-2 bg-green-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-400 transition-colors">
              {t('login')}
            </Link>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleLanguage}
              className="mr-2 p-1 rounded-full hover:bg-green-600"
            >
              <Globe className="h-6 w-6" />
            </button>
            <button
              onClick={toggleMenu}
              className="p-1 rounded-full hover:bg-green-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-700">
            <Link 
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              {t('home')}
            </Link>
            <Link 
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              {t('dashboard')}
            </Link>
            <Link 
              to="/scanner"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              {t('scanner')}
            </Link>
            <Link 
              to="/sponsors"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              {t('sponsors')}
            </Link>
            <Link 
              to="/vr-demo"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              {t('vrDemo')}
            </Link>
            <Link 
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600"
              onClick={toggleMenu}
            >
              {t('about')}
            </Link>
            <Link 
              to="/login"
              className="block px-3 py-2 bg-green-500 rounded-md text-base font-medium hover:bg-green-400"
              onClick={toggleMenu}
            >
              {t('login')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;