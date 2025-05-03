import React from 'react';
import DecompositionDemo from '../components/vr/DecompositionDemo';

const VrDemoPage: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-green-800 mb-6">Expérience de décomposition en VR</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <DecompositionDemo />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Comprendre la différence
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-green-600 mb-2">Nos emballages biodégradables:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Se dégradent naturellement en <strong>2-3 mois seulement</strong></li>
                  <li>Fabriqués à partir de ressources renouvelables tunisiennes</li>
                  <li>Ne libèrent aucune substance toxique dans l'environnement</li>
                  <li>Nourrissent le sol en se décomposant</li>
                  <li>Réduisent l'empreinte carbone de 75% par rapport au plastique</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-red-600 mb-2">Emballages plastiques traditionnels:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Prennent <strong>450 ans ou plus</strong> pour se dégrader</li>
                  <li>Fabriqués à partir de pétrole, une ressource non renouvelable</li>
                  <li>Libèrent des microplastiques toxiques dans l'environnement</li>
                  <li>Polluent les océans et nuisent à la faune marine</li>
                  <li>Contribuent significativement aux émissions de gaz à effet de serre</li>
                </ul>
              </div>
              
              <div className="p-4 bg-amber-50 rounded-md border border-amber-200">
                <h3 className="font-medium text-amber-700 mb-2">Le saviez-vous?</h3>
                <p className="text-gray-700">
                  Chaque minute, l'équivalent d'un camion-poubelle de plastique est déversé dans nos océans. 
                  En choisissant nos emballages biodégradables, vous contribuez directement à réduire cette pollution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VrDemoPage;