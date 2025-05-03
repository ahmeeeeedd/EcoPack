import React from 'react';
import { Award, Star, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { currentUser } from '../../data/mockData';

const UserStats: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        {t('dashboardTitle')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-50 rounded-md p-4 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <Star className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">{t('totalPoints')}</p>
            <p className="text-2xl font-bold text-green-600">{currentUser.points}</p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-md p-4 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <Award className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">{t('ranking')}</p>
            <p className="text-2xl font-bold text-green-600">#{currentUser.rank}</p>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-md p-4 flex items-center">
          <div className="rounded-full bg-green-100 p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Scans totaux</p>
            <p className="text-2xl font-bold text-green-600">{currentUser.pointsHistory.length}</p>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3">Historique des points</h3>
        <div className="bg-gray-50 rounded-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Produit
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Points
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentUser.pointsHistory.slice(0, 5).map((history, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-600">
                    {history.date}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">
                    {history.product}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-right font-medium text-green-600">
                    +{history.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 transition-colors">
          {t('redeemPoints')}
        </button>
      </div>
    </div>
  );
};

export default UserStats;