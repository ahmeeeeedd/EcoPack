import React from 'react';
import QrScanner from '../components/scanner/QrScanner';

const QrScannerPage: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Scanner un QR code</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <QrScanner />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Comment ça marche ?
            </h2>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold mr-3">
                  1
                </div>
                <div>
                  <p className="text-gray-700">
                    Achetez un produit avec notre emballage biodégradable
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold mr-3">
                  2
                </div>
                <div>
                  <p className="text-gray-700">
                    Scannez le QR code présent sur l'emballage
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold mr-3">
                  3
                </div>
                <div>
                  <p className="text-gray-700">
                    Gagnez des points et visualisez votre impact positif sur l'environnement
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-bold mr-3">
                  4
                </div>
                <div>
                  <p className="text-gray-700">
                    Échangez vos points contre des récompenses offertes par nos sponsors
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-md">
              <p className="text-sm text-center text-green-700">
                Chaque scan compte pour la planète ! Vous contribuez directement à réduire les déchets plastiques en Tunisie.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrScannerPage;