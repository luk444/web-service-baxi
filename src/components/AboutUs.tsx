import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Award, Users, PenTool as Tool, Thermometer, Radiation as Radiator, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import logoBaxi from '../../dist/assets/BAXI.svg';


const certifications = [
  {
    title: "Instalador Oficial Certificado",
    description: "Autorizado para realizar instalaciones con garantía oficial del fabricante",
    icon: CheckCircle
  },
  {
    title: "Servicio Técnico Autorizado",
    description: "Capacitados para realizar mantenimiento y reparaciones oficiales",
    icon: Award
  },
  {
    title: "Especialista en Calderas de Condensación",
    description: "Expertos en la última tecnología de calderas eficientes",
    icon: Thermometer
  },
  {
    title: "Centro de Formación Continua",
    description: "Actualización constante en las últimas tecnologías BAXI",
    icon: Users
  }
];

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex >= certifications.length) newIndex = 0;
      if (newIndex < 0) newIndex = certifications.length - 1;
      return newIndex;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sección Empresa */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center items-center mb-6">
              <img 
                src={logoBaxi}
                alt="BAXILOGO-HOME"
                className="h-12 mr-4"
              />
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                Servicio Técnico Oficial
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Sobre Nosotros</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Servicio técnico oficial BAXI con más de una década de experiencia, especializados en soluciones integrales de calefacción
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Building2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Servicio Oficial BAXI</h3>
            <p className="text-gray-600">
              Certificados y autorizados por BAXI para realizar instalaciones, mantenimiento y reparaciones con garantía oficial.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">15 Años de Experiencia</h3>
            <p className="text-gray-600">
              Especialistas certificados en calderas BAXI y amplia experiencia con todas las marcas líderes del mercado.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Equipo Certificado</h3>
            <p className="text-gray-600">
              Técnicos formados directamente por BAXI y en constante actualización con las últimas tecnologías.
            </p>
          </motion.div>
        </div>

        {/* Certificaciones BAXI - Nueva versión con slider */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Certificaciones Oficiales BAXI</h3>
          
          <div className="relative h-64 overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <button 
                onClick={() => paginate(-1)}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" />
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <button 
                onClick={() => paginate(1)}
                className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" />
              </button>
            </div>

            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full flex flex-col items-center justify-center px-4"
              >
                {React.createElement(certifications[currentIndex].icon, {
                  className: "h-16 w-16 text-blue-600 mb-6"
                })}
                <h4 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {certifications[currentIndex].title}
                </h4>
                <p className="text-gray-600 text-center max-w-2xl">
                  {certifications[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sección Técnica */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center mb-16">Especialización Técnica</h3>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Tool className="h-8 w-8 text-blue-600 mr-4" />
                <h4 className="text-2xl font-semibold">Calderas BAXI</h4>
              </div>
              <p className="text-gray-600">
                Especialistas certificados en toda la gama de calderas BAXI:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Calderas de condensación BAXI</li>
                <li>Calderas de baja temperatura</li>
                <li>Sistemas híbridos BAXI</li>
                <li>Calderas de biomasa</li>
              </ul>
              <p className="text-gray-600">
                Servicio integral con repuestos originales BAXI y garantía oficial del fabricante.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Thermometer className="h-8 w-8 text-blue-600 mr-4" />
                <h4 className="text-2xl font-semibold">Sistemas de Calefacción</h4>
              </div>
              <p className="text-gray-600">
                Expertos en sistemas de calefacción BAXI y otras marcas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Sistemas de control inteligente BAXI</li>
                <li>Instalación de termostatos</li>
                <li>Optimización energética</li>
                <li>Soluciones conectadas</li>
              </ul>
              <p className="text-gray-600">
                Diseñamos e instalamos sistemas adaptados a sus necesidades específicas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center mb-4">
                <Radiator className="h-8 w-8 text-blue-600 mr-4" />
                <h4 className="text-2xl font-semibold">Servicios Integrales</h4>
              </div>
              <p className="text-gray-600">
                Soluciones completas para su confort:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Mantenimiento preventivo oficial</li>
                <li>Reparación con garantía BAXI</li>
                <li>Instalaciones certificadas</li>
                <li>Asesoramiento especializado</li>
              </ul>
              <p className="text-gray-600">
                Servicio técnico multimarca con especialización BAXI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;