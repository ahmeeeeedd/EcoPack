import React from "react";
import { Leaf, ThumbsUp, ShieldCheck, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-green-800">
            {t("aboutTitle")}
          </h1>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Notre histoire
            </h2>
            <p className="text-gray-700 mb-4">
              Nous avons créé ÉcoPack en 2025 avec une vision claire :
              transformer les ressources naturelles abondantes en Tunisie en
              solutions d'emballage durables qui protègent notre environnement.
            </p>
            <p className="text-gray-700 mb-4">
              Face à la pollution plastique grandissante sur nos plages et dans
              nos villes, nous avons développé une technologie innovante
              utilisant des fibres de palmier-dattier et des algues tunisiennes
              pour créer des emballages 100% biodégradables et imperméables.
            </p>
            <p className="text-gray-700">
              Notre démarche soutient l'économie circulaire en valorisant des
              ressources locales tout en offrant une alternative viable au
              plastique qui met 450 ans à se décomposer.
            </p>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden shadow-md">
            <img
              src="https://levert.ma/wp-content/uploads/2023/06/la-pollution-plastique.jpg"
              alt="Matières premières"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="md:order-2">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Nos matières premières innovantes
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-green-600 mb-2">
                  Fibres de palmier-dattier
                </h3>
                <p className="text-gray-700">
                  Les fibres de palmier-dattier sont abondantes en Tunisie et
                  traditionnellement considérées comme des déchets. Nous les
                  transformons en une matière première précieuse qui se
                  biodégrade en seulement 2 mois dans des conditions naturelles.
                </p>
              </div>

              <div className="bg-white p-4 rounded-md shadow-sm">
                <h3 className="font-medium text-green-600 mb-2">
                  Algues tunisiennes (Ulva lactuca)
                </h3>
                <p className="text-gray-700">
                  Récoltées à Djerba, Sousse et Monastir, ces algues
                  naturellement imperméables confèrent à nos emballages une
                  résistance à l'eau sans avoir recours à des produits
                  chimiques. Elles sont récoltées de manière durable, préservant
                  les écosystèmes marins.
                </p>
              </div>
            </div>
          </div>

          <div className="md:order-1 grid grid-cols-2 gap-4">
            <div className="h-40 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://pinktropical.fr/wp-content/uploads/2022/09/wp-1662304602518-scaled.jpg"
                alt="Fibres de palmier"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Algues tunisiennes"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://www.lecourrierdelatlas.com/wp-content/uploads/2022/05/Posidonia_en_la_Cala_La_Higuerica_Paraje_Protegido_Las_Cuatro_Calas-1-copy-2.jpg"
                alt="Djerba"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-40 rounded-lg overflow-hidden shadow-sm">
              <img
                src="https://t3.ftcdn.net/jpg/00/65/29/88/360_F_65298819_ErK4ATXyoSqGqRRtt0RsyCUyAoxjIoUN.jpg"
                alt="Production d'emballages"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-semibold text-green-700 mb-8 text-center">
            Nos valeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-green-700 mb-2">
                Durabilité
              </h3>
              <p className="text-gray-600">
                Chaque décision que nous prenons est guidée par notre engagement
                envers la protection de l'environnement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <ThumbsUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-green-700 mb-2">
                Qualité
              </h3>
              <p className="text-gray-600">
                Nous ne faisons aucun compromis sur la qualité de nos produits,
                offrant des alternatives aussi fonctionnelles que le plastique.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-green-700 mb-2">
                Communauté
              </h3>
              <p className="text-gray-600">
                Nous soutenons les producteurs locaux et créons des emplois
                durables dans les communautés tunisiennes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <ShieldCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-green-700 mb-2">
                Transparence
              </h3>
              <p className="text-gray-600">
                Nous partageons ouvertement notre processus de fabrication et
                l'impact environnemental de nos produits.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold text-green-700 mb-4">
            Rejoignez notre mouvement
          </h2>
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            Ensemble, nous pouvons créer un avenir sans plastique pour la
            Tunisie. Chaque achat avec un emballage biodégradable est un pas
            vers un environnement plus propre et plus sain pour les générations
            futures.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-500 transition-colors">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
