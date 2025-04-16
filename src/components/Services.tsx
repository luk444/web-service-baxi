import React from 'react';
import { PenTool as Tool, Thermometer, Wrench, Settings, AlertCircle, FileCheck, Shield } from 'lucide-react';
import logoBaxi from '/home/project/dist/assets/BAXI.svg';


const Services = () => {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <img 
              src={logoBaxi}
              alt="Logo de BAXI"
              className="h-12 mr-4"
            />
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Servicio Técnico Oficial
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Nuestros Servicios</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Servicio técnico oficial BAXI, ofreciendo soluciones integrales con la garantía del fabricante
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
                  Servicio Oficial BAXI
                </h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Servicio técnico autorizado por BAXI:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-3" />
                    Garantía oficial del fabricante
                  </li>
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    Repuestos originales BAXI
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-3" />
                    Técnicos certificados por BAXI
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-4">
              <a href="#contact" className="text-blue-600 font-medium hover:text-blue-500" aria-label="Solicitar servicio oficial">
                Solicitar servicio oficial →
              </a>
            </div>
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
                  Programas de mantenimiento oficial BAXI:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    Revisión según protocolo BAXI
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                    Optimización y eficiencia
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-3" />
                    Certificación oficial
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-4">
              <a href="#contact" className="text-blue-600 font-medium hover:text-blue-500" aria-label="Programar mantenimiento">
                Programar mantenimiento →
              </a>
            </div>
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
                  Instalación oficial de calderas BAXI:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Settings className="h-5 w-5 text-blue-600 mr-3" />
                    Asesoramiento especializado BAXI
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-blue-600 mr-3" />
                    Instalación certificada
                  </li>
                  <li className="flex items-center">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-3" />
                    Garantía extendida
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-4">
              <a href="#contact" className="text-blue-600 font-medium hover:text-blue-500" aria-label="Consultar instalación">
                Consultar instalación →
              </a>
            </div>
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
                  Además de ser servicio oficial BAXI, trabajamos con todas las marcas:
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
            <div className="bg-gray-50 px-8 py-4">
              <a href="#contact" className="text-blue-600 font-medium hover:text-blue-500" aria-label="Solicitar servicio">
                Solicitar servicio →
              </a>
            </div>
          </div>
        </div>

        {/* Additional Services Info */}
        <div className="mt-20 bg-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold">Servicio Integral de Calefacción</h3>
            <p className="mt-2 text-white">
              Servicio oficial BAXI y soluciones profesionales para todas las marcas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mb-4 inline-block">
                <Thermometer className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Calderas BAXI</h4>
              <p className="text-white">
                Especialistas certificados en toda la gama BAXI
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
