import React, { useState } from 'react';
import { Camera, Check, QrCode } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { qrProducts } from '../../data/mockData';

interface ScanResultProps {
  product: typeof qrProducts[0] | null;
  onScanAgain: () => void;
}

const QrScanner: React.FC = () => {
  const { t } = useLanguage();
  const [scanning, setScanning] = useState(false);
  const [scannedProduct, setScannedProduct] = useState<typeof qrProducts[0] | null>(null);

  const startScan = () => {
    setScanning(true);
    
    // Simulate scanning process
    setTimeout(() => {
      // Randomly select a product for demo purposes
      const randomProduct = qrProducts[Math.floor(Math.random() * qrProducts.length)];
      setScannedProduct(randomProduct);
      setScanning(false);
    }, 2000);
  };

  const resetScan = () => {
    setScannedProduct(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <div className="inline-flex justify-center items-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <QrCode className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-green-800">{t('scanTitle')}</h2>
        <p className="text-gray-600 mt-2">{t('scanInstructions')}</p>
      </div>

      {!scannedProduct ? (
        <div className="mb-6">
          {scanning ? (
            <div className="text-center py-10">
              <div className="w-32 h-32 bg-gray-200 rounded-lg mx-auto mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="h-16 w-16 text-gray-400 animate-pulse" />
                </div>
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-green-500 animate-scanline"></div>
              </div>
              <p className="text-gray-600">Scannez le code QR...</p>
            </div>
          ) : (
            <button
              onClick={startScan}
              className="w-full bg-green-600 text-white font-medium py-3 px-4 rounded-md hover:bg-green-500 transition-colors flex items-center justify-center"
            >
              <Camera className="h-5 w-5 mr-2" />
              <span>Scanner un QR code</span>
            </button>
          )}
        </div>
      ) : (
        <ScanResult product={scannedProduct} onScanAgain={resetScan} />
      )}
      
      <div className="text-center text-sm text-gray-500 mt-6">
        <p>Chaque scan vous permet de gagner des points et de suivre votre impact environnemental.</p>
      </div>
    </div>
  );
};

const ScanResult: React.FC<ScanResultProps> = ({ product, onScanAgain }) => {
  const { t } = useLanguage();
  
  return (
    <div className="border border-green-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-center bg-green-100 text-green-600 w-12 h-12 rounded-full mx-auto mb-4">
        <Check className="h-6 w-6" />
      </div>
      
      <h3 className="text-xl font-semibold text-center text-green-700 mb-2">
        Scan réussi !
      </h3>
      
      <div className="mb-4">
        <div className="bg-gray-100 p-4 rounded-md">
          <h4 className="font-medium text-lg">{product?.name}</h4>
          <p className="text-gray-600">Producteur: {product?.producer}</p>
          <p className="text-gray-600">Emballage: {product?.packaging}</p>
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="text-gray-600">{t('pointsEarned')}:</span>
        </div>
        <div className="text-2xl font-bold text-green-600">+{product?.points}</div>
      </div>
      
      <div className="bg-green-50 p-3 rounded-md mb-4">
        <h4 className="font-medium text-green-700 mb-2">Impact environnemental:</h4>
        <ul className="space-y-1 text-sm">
          <li className="flex justify-between">
            <span>Bouteilles sauvées:</span>
            <span className="font-medium">+{product?.impactBottles}</span>
          </li>
          <li className="flex justify-between">
            <span>Arbres préservés:</span>
            <span className="font-medium">+{product?.impactTrees}</span>
          </li>
          <li className="flex justify-between">
            <span>CO₂ évité (kg):</span>
            <span className="font-medium">+{product?.impactCO2}</span>
          </li>
          <li className="flex justify-between">
            <span>Plastique évité (kg):</span>
            <span className="font-medium">+{product?.impactPlastic}</span>
          </li>
        </ul>
      </div>
      
      <button
        onClick={onScanAgain}
        className="w-full bg-green-600 text-white font-medium py-2 px-4 rounded-md hover:bg-green-500 transition-colors"
      >
        {t('scanAgain')}
      </button>
    </div>
  );
};

export default QrScanner;