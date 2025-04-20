import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Cobertura = () => {
  const areas = [
    {
      title: "Capital Federal",
      neighborhoods: "Agronomía - Almagro - Balvanera - Barracas - Barrio Norte - Belgrano - Boedo - Caballito - Centro - Chacarita - Coghlan - Colegiales - Congreso - Constitución - Flores - Floresta - La Boca - Liniers - Mataderos - Nuñez - Once - Palermo - Parque Centenario - Parque Chacabuco - Parque Chas - Parque Patricios - Paternal - Pompeya - Puerto Madero - Recoleta - Retiro - Saavedra - San Cristóbal - San Telmo - Tribunales - Versailles - Villa Crespo - Villa Devoto - Villa Lugano - Villa Luro - Villa Ortuzar - Villa Pueyrredón - Villa Soldati - Villa Urquiza - Villa Del Parque"
    },
    {
      title: "GBA Zona Norte",
      neighborhoods: "Acassuso - Beccar - Bella Vista - Benavidez - Boulogne - Carapachay - Caseros - Ciudad Jardín - Del Viso - Don Torcuato - El Talar - Escobar - Florida - Garin - General Pacheco - Gran Bourg - Jose Leon Suarez - Ingeniero Maschwitz - La Lucila - Martinez - Munro - Nordelta - Olivos - Pilar - Puertos - Saenz Peña - San Andrés - San Fernando - San Isidro - San Martin - San Miguel - Santos Lugares - Santa Bárbara - Santa Catalina - Tigre - Toruguitas - Vicente López - Victoria - Villa Adelina - Villa Ballester - Villa Bosch - Villa Martelli - Villanueva"
    },
    {
      title: "GBA Zona Oeste",
      neighborhoods: "3 de Febrero - Aldo Bonzi - Castelar - Castelar Norte - Ciudad Evita - Ciudadela - El Palomar - Francisco Álvarez - General Rodríguez - Gonzalez Catan - Haedo - Hurlingham - Isidro Casanova - Ituzaingo - Ituzaingo Norte - Jose Ingenieros - La Tablada - Laferrere - Lomas del Mirador - Malvinas Argentinas - Merlo - Monte Grande - Moreno - Morón - Parque Leloir - Paso del Rey - Rafael Castillo - Ramos Mejía - San Antonio de Padua - San Justo - Tapiales - Terravista - Tristan Suarez - Villa Celina - Villa Insuperable - Villa Madero"
    },
    {
      title: "GBA Zona Sur",
      neighborhoods: "Adrogué - Alejandro Korn - Avellaneda - Banfield - Berazategui - Berisso - Bernal - Burzaco - Canning - Claypole - Dock Sud - Don Bosco - Ensenada - Esteban Echeverria - Ezeiza - Ezpeleta - Florencio Varela - Gerli - Glew - Guernica - Hudson - La Plata - Lanús - Lavallol - Lomas de Zamora - Longchamps - Monte Chingolo - Piñeyro - Quilmes - Ranelagh - Remedios de Escalada - San Vicente - San Eliseo - Sarandí - Spegazzini - Temperley - Valentín Alsina - Villa Dominico - Wilde"
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Área de cobertura - Caldera Baxi Service Oficial
          </h2>
          <p className="text-lg text-gray-600">
            Servicio Técnico Oficial calderas Baxi en el día
          </p>

          {/* Call Now Button */}
          <motion.a
            href="tel:+5491128462184"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            <Phone className="h-5 w-5" />
            Llamar Ahora
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {area.neighborhoods}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Service Oficial Calderas Baxi www.baxi-service.com | Servicio Técnico Oficial calderas Baxi en el día, atención en Capital Federal, GBA zona norte, zona oeste, zona sur.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Cobertura;
