import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BaxiService</h3>
            <p className="text-gray-400">
              Expertos en reparación y mantenimiento de calderas. Servicio profesional y confiable.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+5491177213649" className="hover:text-blue-400">
                  +54 9 11 7721 3649
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@calderapro.com" className="hover:text-blue-400">
                oficialbaxiservice@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <p className="text-gray-400">
              Lunes a Viernes: 8:00 - 18:00<br />
              Sábados: 9:00 - 13:00<br />
              Emergencias: 24/7
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BaxiService. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
