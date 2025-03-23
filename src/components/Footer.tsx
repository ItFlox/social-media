import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Salix Socials</h3>
            <p className="text-gray-400">
              Votre partenaire de confiance pour la croissance sur les réseaux
              sociaux
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contactez-nous</h3>
            <p className="text-gray-400">WhatsApp: +225 07 18 22 63 79</p>
            <p className="text-gray-400">Email: contact@salixsocials.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/salixsocials"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://facebook.com/salixsocials"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com/salixsocials"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Salix Socials. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
