import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ÉcoPack</h3>
            <p className="text-green-200 mb-4">
              Solutions d'emballage biodégradables à base de fibres de
              palmier-dattier et d'algues tunisiennes pour un avenir plus
              durable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-green-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t("contactUs")}</h3>
            <div className="space-y-2">
              <p className="flex items-center text-green-200">
                <Mail className="h-5 w-5 mr-2" />
                <span>contact@ecopack-tunisie.com</span>
              </p>
              <p className="flex items-center text-green-200">
                <Phone className="h-5 w-5 mr-2" />
                <span>+216 56 100 172</span>
              </p>
              <p className="flex items-center text-green-200">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Insat , Ariana, Tunisie</span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Liens</h3>
            <ul className="space-y-2 text-green-200">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/sponsors"
                  className="hover:text-white transition-colors"
                >
                  {t("sponsors")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-300">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
