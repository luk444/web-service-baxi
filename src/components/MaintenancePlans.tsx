import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Gauge, Lock } from 'lucide-react';
import mantenimiento from '../assets/imagenreparacionbaxi.webp';
import { useNavigate } from 'react-router-dom';

const MaintenancePlans = () => {
  const navigate = useNavigate();
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">PLANES DE MANTENIMIENTO BAXI</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Un mantenimiento adecuado te permitirá prolongar la vida útil de tu equipo, mejorar su rendimiento y ahorrar en tu factura energética.
          </p>
          <motion.button
            onClick={() => {
              navigate('/contact');
              window.scrollTo(0, 0);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Contratar plan
          </motion.button>
                      
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Se especifican las dimensiones de la imagen */}
            <img
              src={mantenimiento}
              alt="Planes de mantenimiento BAXI"
              className="rounded-2xl shadow-xl w-full"
              width={600}  // Añadido width
              height={400} // Añadido height
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8">¿Por qué es importante contratar un plan de mantenimiento BAXI?</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Un profesional BAXI pondrá a punto tu caldera cada año</h4>
                  <p className="text-gray-600">
                    Dentro de la normativa RITE se recoge que los usuarios deben realizar revisiones periódicas obligatorias de sus equipos térmicos. Todos los planes de mantenimiento BAXI incluyen la revisión y puesta a punto del equipo de forma anual por parte de nuestro Servicio Oficial.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Prolonga la vida de tu equipo</h4>
                  <p className="text-gray-600">
                    Todos los productos, debido al uso y al tiempo, están expuestos al desgaste. Un buen mantenimiento de tu equipo prolongará su vida útil consiguiendo una durabilidad de entre cinco y siete años más que un equipo sin mantener.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Gauge className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Ahorra en tu factura</h4>
                  <p className="text-gray-600">
                    A medida que los equipos se ensucian, van necesitando cada vez más energía para obtener el mismo rendimiento que un equipo nuevo. Con los planes de mantenimiento BAXI nos aseguramos de mantener tu equipo en las mejores condiciones para asegurar un correcto consumo energético.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Mayor seguridad</h4>
                  <p className="text-gray-600">
                    Un correcto mantenimiento también mejora la seguridad de tu equipo, ayudando a detectar posibles riesgos de seguridad (fugas de gas, una incorrecta evacuación de los residuos de combustión, componentes en mal estado, etc.).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePlans;
