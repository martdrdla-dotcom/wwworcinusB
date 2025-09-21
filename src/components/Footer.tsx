import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/Orcinus logo bílé.png" 
              alt="ORCINUS s.r.o." 
              className="h-10 w-auto mb-6 filter brightness-0 invert"
            />
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>ORCINUS s.r.o.</p>
                  <p>Kubelíkova 1224/42, Žižkov</p>
                  <p>130 00 Praha</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <a href="tel:+420228226013" className="hover:text-amber-400 transition-colors">
                  +420 228 226 013
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <a href="mailto:orcinus@orcinus.cz" className="hover:text-amber-400 transition-colors">
                  orcinus@orcinus.cz
                </a>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <p>IČ: 25953265 | DIČ: CZ25953265</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigace</h3>
            <div className="space-y-2">
              <Link to="/o-nas" className="block text-gray-300 hover:text-amber-400 transition-colors">O nás</Link>
              <Link to="/investicni-pristup" className="block text-gray-300 hover:text-amber-400 transition-colors">Investiční přístup</Link>
              <Link to="/portfolio" className="block text-gray-300 hover:text-amber-400 transition-colors">Portfolio</Link>
              <Link to="/pro-partnery" className="block text-gray-300 hover:text-amber-400 transition-colors">Pro partnery</Link>
              <Link to="/kontakt" className="block text-gray-300 hover:text-amber-400 transition-colors">Kontakt</Link>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Právní informace</h3>
            <div className="space-y-2">
              <Link to="/gdpr" className="block text-gray-300 hover:text-amber-400 transition-colors">Ochrana osobních údajů</Link>
              <Link to="/cookies" className="block text-gray-300 hover:text-amber-400 transition-colors">Cookies</Link>
              <Link to="/pravni-upozorneni" className="block text-gray-300 hover:text-amber-400 transition-colors">Právní upozornění</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ORCINUS s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;