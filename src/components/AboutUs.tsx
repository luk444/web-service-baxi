import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, Wrench, Shield, Clock, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <div id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre Nosotros</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Somos un servicio técnico independiente especializado en sistemas de calefacción y calderas domiciliarias, 
              con más de 15 años de experiencia brindando soluciones de instalación, mantenimiento y reparación 
              en Capital Federal y Gran Buenos Aires.
            </p>
          </motion.div>
        </div>

        {/* Descripción extendida */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>
              Nuestro objetivo es ofrecer un servicio profesional, transparente y confiable, ayudando a cada cliente 
              a mantener su sistema de calefacción funcionando de forma segura y eficiente durante todo el año.
            </p>
            <p>
              Trabajamos diariamente con equipos de distintas marcas del mercado, incluyendo <strong>BAXI, Peisa, Ariston, 
              Caldaia, Euterma</strong> y otras, lo que nos permite diagnosticar y resolver fallas en una amplia variedad 
              de modelos y tecnologías.
            </p>
            <p>
              Contamos con técnicos con amplia experiencia práctica en sistemas de calefacción residencial, enfocados 
              en brindar soluciones reales, asesoramiento claro y atención personalizada en cada visita.
            </p>
          </div>
        </div>

        {/* Aviso de servicio independiente - DESTACADO */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6 mb-12">
          <div className="flex items-start">
            <Shield className="h-8 w-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-3">Servicio técnico independiente</h3>
              <p className="text-amber-700 leading-relaxed">
                Somos una empresa independiente dedicada al mantenimiento y reparación de calderas. 
                <strong> No somos servicio oficial ni estamos afiliados, autorizados o representamos a los fabricantes 
                de las marcas mencionadas.</strong> Las marcas se nombran únicamente con fines informativos y de compatibilidad técnica.
              </p>
            </div>
          </div>
        </div>

        {/* Tres columnas de características */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Building2 className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Empresa Independiente</h3>
            <p className="text-gray-600">
              Servicio técnico propio sin afiliación a fabricantes. Trabajamos con todas las marcas del mercado 
              ofreciendo soluciones imparciales y adaptadas a cada necesidad.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Más de 15 Años de Experiencia</h3>
            <p className="text-gray-600">
              Amplia trayectoria trabajando con equipos BAXI, Peisa, Ariston y otras marcas líderes del mercado argentino.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Técnicos con Experiencia</h3>
            <p className="text-gray-600">
              Equipo de profesionales con experiencia práctica comprobable en sistemas de calefacción residencial.
            </p>
          </motion.div>
        </div>

        {/* Nuestra experiencia */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestra Experiencia</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Más de 15 años trabajando en sistemas de calefacción residencial",
              "Diagnóstico y reparación multimarca",
              "Instalación y puesta en marcha de equipos",
              "Optimización de rendimiento energético",
              "Mantenimiento preventivo y correctivo",
              "Atención en Capital Federal y GBA"
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nuestro compromiso */}
        <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="flex items-start">
            <Clock className="h-10 w-10 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestro Compromiso</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Priorizamos la seguridad, la transparencia y la correcta información al cliente, 
                ofreciendo presupuestos claros y soluciones adaptadas a cada necesidad. 
                Brindamos garantía sobre el trabajo realizado y utilizamos repuestos compatibles de calidad.
              </p>
            </div>
          </div>
        </div>

        {/* Marcas con las que trabajamos */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Marcas con las que trabajamos</h3>
          <p className="text-gray-500 text-sm mb-4">
            (Las marcas se mencionan únicamente con fines de compatibilidad técnica, sin afiliación comercial)
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["BAXI", "Peisa", "Ariston", "Caldaia", "Euterma", "Otras marcas"].map((marca, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
