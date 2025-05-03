import React from 'react';
import UserStats from '../components/dashboard/UserStats';
import Leaderboard from '../components/dashboard/Leaderboard';
import ImpactVisual from '../components/dashboard/ImpactVisual';

const DashboardPage: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Tableau de bord</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UserStats />
          </div>
          <div>
            <Leaderboard />
          </div>
          <div className="lg:col-span-3">
            <ImpactVisual />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;