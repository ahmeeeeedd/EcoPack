import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { leaderboard, currentUser } from '../../data/mockData';

const Leaderboard: React.FC = () => {
  const { t } = useLanguage();

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Award className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />;
      default:
        return <span className="text-gray-500">#{rank}</span>;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        {t('ranking')}
      </h2>
      
      <div className="space-y-4">
        {leaderboard.slice(0, 5).map((user) => (
          <div 
            key={user.id}
            className={`flex items-center justify-between p-3 rounded-md ${
              user.id === currentUser.id ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 mr-3">
                {getRankIcon(user.rank)}
              </div>
              <span className="font-medium">{user.name}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-green-600">{user.points}</span>
              <span className="text-gray-500 text-sm ml-1">pts</span>
            </div>
          </div>
        ))}
      </div>
      
      {currentUser.rank > 5 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between p-3 rounded-md bg-green-50 border border-green-200">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 mr-3">
                <span className="text-gray-500">#{currentUser.rank}</span>
              </div>
              <span className="font-medium">{currentUser.name}</span>
            </div>
            <div className="flex items-center">
              <span className="font-bold text-green-600">{currentUser.points}</span>
              <span className="text-gray-500 text-sm ml-1">pts</span>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Montez dans le classement en scannant plus de produits avec nos emballages biodégradables !
        </p>
      </div>
    </div>
  );
};

export default Leaderboard;