import React from 'react';
import { PenTool as Tool, Thermometer, Wrench, Settings, AlertCircle, FileCheck, Shield } from 'lucide-react';
import logoBaxi from '../assets/BAXI.svg';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



const Services = () => {
  const navigate = useNavigate();
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <img 
              src={logoBaxi}
              alt="Especialistas en calderas BAXI"
              className="h-12 mr-4"
            />
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Servicio Técnico Especializado
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Servicio técnico independiente especializado en calderas BAXI y multimarca, ofreciendo soluciones integrales con garantía de nuestro servicio
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-lg p-3">
                  <Tool className="h-8 w-8 text-white" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Reparación de Calderas
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Servicio técnico especializado en calderas BAXI:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-3" />
                    Garantía de nuestro servicio
                  </li>
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    Repuestos de calidad compatibles
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-3" />
                    Técnicos con más de 15 años de experiencia
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
              className="bg-gray-50 px-8 py-4 cursor-pointer"
            >
              <span className="text-blue-600 font-medium hover:text-blue-500" aria-label="Solicitar servicio técnico">
                Solicitar servicio →
              </span>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-lg p-3">
                  <Thermometer className="h-8 w-8 text-white" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Mantenimiento Preventivo
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Programas de mantenimiento profesional:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    Revisión completa del equipo
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                    Optimización y eficiencia energética
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-3" />
                    Informe técnico detallado
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
              className="bg-gray-50 px-8 py-4 cursor-pointer"
            >
              <span className="text-blue-600 font-medium hover:text-blue-500" aria-label="Programar mantenimiento">
              Programar mantenimiento →
              </span>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-lg p-3">
                  <Wrench className="h-8 w-8 text-white" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Instalación Certificada
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Instalación profesional de calderas:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    Asesoramiento técnico personalizado
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                    Instalación profesional
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-3" />
                    Garantía de mano de obra
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
              className="bg-gray-50 px-8 py-4 cursor-pointer"
            >
              <span className="text-blue-600 font-medium hover:text-blue-500" aria-label="Consultar instalación">
              Consultar instalación →
              </span>
            </motion.div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-lg p-3">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold text-gray-900">
                  Servicios Multimarca
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Además de especializarnos en BAXI, trabajamos con todas las marcas:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    Reparación de todas las marcas
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                    Mantenimiento integral
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-3" />
                    Servicio profesional
                  </li>
                </ul>
              </div>
            </div>
            <motion.div
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
              className="bg-gray-50 px-8 py-4 cursor-pointer"
            >
              <span className="text-blue-600 font-medium hover:text-blue-500" aria-label="Solicitar servicio multimarca">
              Solicitar servicio →
              </span>
            </motion.div>
          </div>
        </div>

        {/* Additional Services Info */}
        <div className="mt-20 bg-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Servicio Integral de Calefacción</h3>
            <p className="mt-2 text-white">
              Servicio técnico independiente especializado en calderas BAXI y todas las marcas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-4 inline-block">
                <Thermometer className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Calderas BAXI</h4>
              <p className="text-white">
                Técnicos con amplia experiencia en toda la gama BAXI
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-4 inline-block">
                <Settings className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Otras Marcas</h4>
              <p className="text-white">
                Servicio profesional para todas las marcas del mercado
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-4 inline-block">
                <Tool className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Sistemas Completos</h4>
              <p className="text-white">
                Soluciones integrales de calefacción
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
