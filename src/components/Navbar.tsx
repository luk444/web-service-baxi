import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoBaxi from '../assets/BAXI.svg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const phoneNumber = "+5491112345678";
  const location = useLocation();
  const navigate = useNavigate();

  // Función para manejar navegación hacia una sección
  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/') {
      // Navegá al home y esperá un momento para hacer scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo que lleva a home */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src={logoBaxi}
              alt="BAXI"
              className="h-8"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-600"></span>
              <span className="text-sm text-gray-600 hidden sm:block">Técnicos Certificados</span>
            </div>
          </Link>

          {/* Teléfono y menú mobile */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center text-blue-600 font-semibold md:hidden"
            >
              <Phone size={20} className="mr-1" />
              <span className="text-sm">{phoneNumber}</span>
            </a>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2"
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600">Sobre Nosotros</Link>
            <button onClick={() => handleScrollTo('services')} className="text-gray-700 hover:text-blue-600">
              Servicios
            </button>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contacto</Link>
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center text-blue-600 font-semibold bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Phone size={20} className="mr-2" />
              {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600">Sobre Nosotros</Link>
            <button
              onClick={() => {
                handleScrollTo('services');
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Servicios
            </button>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-700 hover:text-blue-600">Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
