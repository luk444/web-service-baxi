import React from 'react';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Aviso legal importante */}
      <div className="bg-amber-600 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white">
            <Shield className="h-4 w-4 inline mr-2" />
            <strong>Aviso:</strong> Este sitio pertenece a un servicio técnico independiente. No somos servicio oficial ni estamos afiliados, autorizados ni representamos a las marcas mencionadas. Las marcas se utilizan únicamente con fines descriptivos de compatibilidad.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BaxiService</h3>
            <p className="text-gray-400 mb-4">
              Servicio técnico independiente especializado en reparación y mantenimiento de calderas BAXI y multimarca.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p><strong>Nombre comercial:</strong> BaxiService</p>
              <p><strong>Responsable:</strong> Servicios Técnicos de Calefacción</p>
              <p><strong>CUIT:</strong> Consultar</p>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <a href="tel:+5491128462184" className="hover:text-blue-400">
                  +54 9 11 2846 2184
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:contacto@baxi-service.com" className="hover:text-blue-400">
                  contacto@baxi-service.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-blue-400" />
                <span className="text-gray-400">
                  Capital Federal y Gran Buenos Aires<br />
                  Buenos Aires, Argentina
                </span>
              </li>
            </ul>
          </div>

          {/* Horarios y Zona */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios de Atención</h4>
            <ul className="text-gray-400 space-y-2">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-400" />
                Lunes a Viernes: 8:00 - 18:00
              </li>
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-blue-400" />
                Sábados: 9:00 - 13:00
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                Emergencias: 24/7
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Zona de Servicio</h5>
              <p className="text-gray-400 text-sm">
                Capital Federal, GBA Norte, GBA Oeste y GBA Sur
              </p>
            </div>
          </div>

          {/* Enlaces Legales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Información Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/politica-privacidad" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos-condiciones" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea separadora y copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="text-center text-gray-400 text-sm space-y-4">
            <p>
              &copy; {new Date().getFullYear()} BaxiService - Servicio Técnico Independiente. Todos los derechos reservados.
            </p>
            <p className="text-xs max-w-4xl mx-auto">
              BaxiService es un servicio técnico independiente no afiliado a ningún fabricante. 
              Las marcas BAXI y otras mencionadas son propiedad de sus respectivos titulares y se utilizan 
              únicamente para identificar los productos con los que trabajamos. No representamos, 
              ni estamos autorizados, ni avalados por ninguna de las marcas mencionadas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
