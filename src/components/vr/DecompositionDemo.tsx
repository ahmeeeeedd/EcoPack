import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DecompositionDemo: React.FC = () => {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showingBio, setShowingBio] = useState(true);

  const togglePlay = () => {
    if (!playing) {
      setPlaying(true);
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setPlaying(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    } else {
      setPlaying(false);
    }
  };

  const reset = () => {
    setPlaying(false);
    setProgress(0);
  };

  const togglePackaging = () => {
    setShowingBio(!showingBio);
    setProgress(0);
    setPlaying(false);
  };

  const getBioImageUrl = (progress: number) => {
    // In a real application, we would have different images showing decomposition stages
    if (progress < 25) {
      return 'https://images.pexels.com/photos/1389103/pexels-photo-1389103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    } else if (progress < 50) {
      return 'https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    } else if (progress < 75) {
      return 'https://images.pexels.com/photos/772429/pexels-photo-772429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    } else {
      return 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    }
  };

  const getPlasticImageUrl = () => {
    // Plastic doesn't really change over the demo timeframe
    return 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  };

  const getTimeLabel = () => {
    const maxMonths = showingBio ? 3 : 450 * 12; // Convert 450 years to months
    const currentTime = Math.floor((progress / 100) * maxMonths);
    
    if (showingBio) {
      // For biodegradable packaging: show in months
      return `${currentTime} mois`;
    } else {
      // For plastic: show in years if >= 1 year, otherwise in months
      if (currentTime >= 12) {
        const years = Math.floor(currentTime / 12);
        return `${years} ans`;
      } else {
        return `${currentTime} mois`;
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        {t('vrTitle')}
      </h2>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-gray-700">
            {t('vrDesc')}
          </p>
        </div>
        
        <div className="relative h-64 rounded-md overflow-hidden bg-black">
          <img 
            src={showingBio ? getBioImageUrl(progress) : getPlasticImageUrl()} 
            alt="Décomposition" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 rounded-md p-2">
            <span className="text-white flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {getTimeLabel()}
            </span>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 rounded-md p-2">
            <span className="text-white text-sm block mb-1">
              {showingBio ? 'Emballage biodégradable (fibres de palmier-dattier)' : 'Emballage plastique traditionnel'}
            </span>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className={`h-2.5 rounded-full ${showingBio ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button 
            onClick={togglePlay}
            className="flex-1 flex items-center justify-center py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition-colors"
          >
            {playing ? (
              <>
                <Pause className="h-5 w-5 mr-2" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-5 w-5 mr-2" />
                <span>{t('startExperience')}</span>
              </>
            )}
          </button>
          
          <button 
            onClick={reset}
            className="p-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={togglePackaging}
            className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors"
          >
            {showingBio ? 'Voir décomposition plastique' : 'Voir décomposition biodégradable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DecompositionDemo;