import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import logoBaxi from '../assets/BAXI.svg';


const StartupService = () => {
  return (
    <section aria-labelledby="startup-title" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BAXI Logo and Service Badge */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center"
          >
            <img 
              src={logoBaxi}
              alt="BAXI"
              className="h-16 mb-4"
            />
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl inline-block transform hover:scale-105 transition-transform"
            >
              Servicio Técnico Oficial
            </motion.div>
          </motion.div>
        </div>

        {/* Startup Service Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="text-white">
              <h2 id="startup-title" className="text-3xl font-bold mb-4">PUESTA EN MARCHA CALDERA</h2>
              <p className="text-lg mb-6">
                Solicita ahora la verificación de puesta en marcha y asegúrate de que tu equipo funciona correctamente. 
                ¡Intervención gratuita para calderas murales y aerotermia!*
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                aria-label="Solicitar puesta en marcha"
              >
                Solicítala ahora
              </motion.a>
              <p className="mt-4 text-sm text-blue-100">
                *Consulta con tu Servicio Oficial para la puesta en marcha de otros productos BAXI como calderas de gasóleo, equipos solares y aire acondicionado.
              </p>
            </div>
            <div>
              {/* List of Benefits */}
              <ul className="space-y-4">
                {[
                  "Te aseguraremos que el equipo funciona correctamente",
                  "Resolveremos cualquier posible incidencia",
                  "Ayudaremos a minimizar riesgos de futuras averías",
                  "Efectuaremos el registro de tu garantía"
                ].map((text, index) => (
                  <li 
                    key={index}
                    className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center space-x-4"
                  >
                    <CheckCircle className="h-8 w-8 text-white flex-shrink-0" aria-hidden="true" />
                    <span className="text-white">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* What is Startup Service */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6">¿Qué es la puesta en marcha y por qué es importante?</h3>
          <div className="space-y-4 text-gray-600">
            <p>
              La verificación de puesta en marcha es un proceso esencial para garantizar que tu nuevo equipo funciona correctamente y de forma segura. Durante esta intervención, nuestros expertos del Servicio Técnico Oficial realizarán una serie de comprobaciones para asegurar que el equipo ha sido correctamente instalado y que cumple con todos los requisitos y recomendaciones del fabricante.
            </p>
            <p>
              Al completar esta verificación, el equipo técnico te proporcionará un informe detallado en el que describirá las pruebas realizadas, sus resultados y si se ha aplicado algún método correctivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupService;
