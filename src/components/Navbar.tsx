import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import logoBaxi from '../assets/BAXI.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const phoneNumber = "+5491177213649";
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'instant' });
      }
    }
  }, [location]);

  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  const handleCoverageClick = () => {
    navigate('/cobertura');
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button
            onClick={() => handleScrollTo('hero')}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <img 
              src={logoBaxi}
              alt="BAXI"
              className="h-8"
            />
            <div className="flex flex-col text-left">
              <span className="text-xl font-bold text-blue-600"></span>
              <span className="text-sm text-gray-600 hidden sm:block">Técnicos Certificados</span>
            </div>
          </button>

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

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={handleAboutClick} className="text-gray-700 hover:text-blue-600">
              Sobre Nosotros
            </button>
            <button onClick={() => handleScrollTo('services')} className="text-gray-700 hover:text-blue-600">
              Servicios
            </button>
            <button onClick={handleCoverageClick} className="text-gray-700 hover:text-blue-600">
              Cobertura
            </button>
            <button onClick={handleContactClick} className="text-gray-700 hover:text-blue-600">
              Contacto
            </button>
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

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => {
                handleAboutClick();
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => {
                handleScrollTo('services');
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Servicios
            </button>
            <button 
              onClick={() => {
                handleCoverageClick();
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Cobertura
            </button>
            <button 
              onClick={() => {
                handleContactClick();
                setIsMenuOpen(false);
              }} 
              className="block py-2 text-gray-700 hover:text-blue-600 w-full text-left"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
