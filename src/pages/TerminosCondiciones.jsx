import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, AlertTriangle, Mail, Phone } from 'lucide-react';

const TerminosCondiciones = () => (
  <>
    <Helmet>
      <title>Términos y Condiciones | BaxiService</title>
      <meta
        name="description"
        content="Términos y condiciones de uso de BaxiService. Información sobre servicios, garantías, responsabilidades y condiciones de contratación."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://baxi-service.com/terminos-condiciones" />
    </Helmet>

    <Navbar />
    
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center mb-8">
            <FileText className="h-10 w-10 text-blue-600 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Términos y Condiciones</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Última actualización: Marzo 2026
          </p>

          {/* Aviso importante */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-bold text-amber-800 mb-2">Aviso Importante - Servicio Independiente</h2>
                <p className="text-amber-700">
                  BaxiService es un <strong>servicio técnico independiente</strong>. No somos servicio oficial, 
                  no estamos afiliados, autorizados, ni representamos a BAXI ni a ninguna otra marca de calderas 
                  mencionada en este sitio. Las marcas se utilizan únicamente con fines descriptivos para indicar 
                  compatibilidad de nuestros servicios.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información General</h2>
              <p>
                Los presentes Términos y Condiciones regulan el uso del sitio web baxi-service.com y la 
                contratación de servicios técnicos ofrecidos por BaxiService.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Nombre comercial:</strong> BaxiService</li>
                <li><strong>Actividad:</strong> Servicio técnico independiente especializado en reparación, 
                  mantenimiento e instalación de calderas</li>
                <li><strong>Domicilio:</strong> Capital Federal, Buenos Aires, Argentina</li>
                <li><strong>Zona de servicio:</strong> Capital Federal y Gran Buenos Aires (Zona Norte, Oeste y Sur)</li>
                <li><strong>Teléfono:</strong> +54 9 11 2846 2184</li>
                <li><strong>Email:</strong> contacto@baxi-service.com</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Naturaleza del Servicio</h2>
              <p>
                BaxiService es una empresa de servicios técnicos <strong>independiente</strong> que ofrece:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reparación de calderas de todas las marcas, con especialización en equipos BAXI</li>
                <li>Mantenimiento preventivo y correctivo de sistemas de calefacción</li>
                <li>Instalación de calderas nuevas</li>
                <li>Puesta en marcha de equipos</li>
                <li>Asesoramiento técnico</li>
              </ul>
              <p className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <strong>Aclaración:</strong> Nuestros servicios no incluyen garantías del fabricante. 
                Las garantías que ofrecemos son exclusivamente sobre nuestra mano de obra y los repuestos 
                que instalamos, según las condiciones especificadas en cada presupuesto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Alcance del Servicio</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.1. Servicios incluidos:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Diagnóstico del equipo</li>
                <li>Reparación de averías</li>
                <li>Sustitución de piezas defectuosas</li>
                <li>Limpieza y mantenimiento</li>
                <li>Puesta en funcionamiento</li>
                <li>Asesoramiento técnico</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">3.2. Servicios no incluidos (salvo acuerdo expreso):</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instalaciones de gas (requieren gasista matriculado)</li>
                <li>Modificaciones estructurales</li>
                <li>Reparaciones fuera de la zona de cobertura</li>
                <li>Servicios de emergencia fuera del horario acordado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Presupuestos</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Todos los presupuestos son <strong>sin compromiso</strong> hasta su aceptación por el cliente</li>
                <li>Los presupuestos tienen una validez de <strong>15 días</strong> desde su emisión, salvo 
                  indicación contraria</li>
                <li>El presupuesto incluye el detalle de los trabajos a realizar, materiales necesarios 
                  y precio final</li>
                <li>Los precios pueden variar si durante la reparación se detectan averías adicionales 
                  no previstas en el diagnóstico inicial. En tal caso, se informará al cliente antes de proceder</li>
                <li>La visita de diagnóstico puede tener un costo asociado, que será informado previamente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Garantías del Servicio</h2>
              <p className="mb-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
                <strong>Importante:</strong> Las garantías ofrecidas por BaxiService son garantías propias 
                de nuestro servicio técnico. <strong>No son garantías del fabricante</strong> ni sustituyen 
                la garantía oficial de la marca.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">5.1. Garantía de mano de obra:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ofrecemos garantía de <strong>3 meses</strong> sobre la mano de obra realizada</li>
                <li>La garantía cubre defectos en la reparación realizada por nuestros técnicos</li>
                <li>No cubre averías en otras partes del equipo no intervenidas</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">5.2. Garantía de repuestos:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Los repuestos instalados tienen la garantía del proveedor correspondiente</li>
                <li>El plazo de garantía depende de cada repuesto y será informado en el presupuesto</li>
                <li>La garantía no cubre daños por mal uso, sobretensión o causas externas</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">5.3. Exclusiones de garantía:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Daños causados por mal uso del equipo</li>
                <li>Averías por falta de mantenimiento</li>
                <li>Daños por sobretensiones eléctricas o problemas en la instalación de gas</li>
                <li>Intervenciones de terceros no autorizados</li>
                <li>Desgaste natural de componentes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Condiciones de Visitas Técnicas</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Las visitas se programan según disponibilidad y en coordinación con el cliente</li>
                <li>El cliente debe garantizar acceso al equipo y condiciones de trabajo adecuadas</li>
                <li>Se requiere la presencia de una persona mayor de edad durante la visita</li>
                <li>Los horarios de visita son de lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 13:00</li>
                <li>Las visitas de emergencia fuera de horario pueden tener un cargo adicional</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancelaciones y Reprogramaciones</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Las cancelaciones deben comunicarse con al menos <strong>24 horas de anticipación</strong></li>
                <li>Las reprogramaciones están sujetas a disponibilidad</li>
                <li>Cancelaciones con menos de 24 horas de anticipación pueden generar un cargo por gastos de movilización</li>
                <li>Si el técnico no puede acceder al domicilio en la fecha acordada por causas imputables 
                  al cliente, se considerará visita realizada a efectos de cobro</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Formas de Pago</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Efectivo</li>
                <li>Transferencia bancaria</li>
                <li>Mercado Pago</li>
                <li>Tarjetas de débito/crédito (consultar disponibilidad)</li>
              </ul>
              <p className="mt-4">
                El pago se realiza una vez completado el servicio, salvo acuerdo de seña para trabajos 
                que requieran adquisición previa de repuestos costosos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Responsabilidad Limitada</h2>
              <p>
                BaxiService no será responsable por:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Daños preexistentes en el equipo no comunicados al técnico</li>
                <li>Averías causadas por problemas en la instalación de gas, eléctrica o de agua no 
                  relacionados con nuestra intervención</li>
                <li>Pérdidas indirectas o consecuentes derivadas de la avería del equipo</li>
                <li>Demoras en la prestación del servicio por causas de fuerza mayor</li>
                <li>Disponibilidad de repuestos del fabricante</li>
              </ul>
              <p className="mt-4">
                Nuestra responsabilidad máxima estará limitada al importe del servicio contratado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Uso del Sitio Web</h2>
              <p>
                Al utilizar este sitio web, el usuario acepta:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>No utilizar el sitio para fines ilegales o no autorizados</li>
                <li>Proporcionar información veraz en los formularios de contacto</li>
                <li>Respetar los derechos de propiedad intelectual del sitio</li>
                <li>No intentar acceder a áreas restringidas del sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos del sitio web (textos, imágenes, logos, diseño) son propiedad de 
                BaxiService o se utilizan con autorización. Las marcas de terceros mencionadas 
                (BAXI y otras) son propiedad de sus respectivos titulares y se utilizan únicamente 
                con fines descriptivos de compatibilidad de servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modificaciones</h2>
              <p>
                BaxiService se reserva el derecho de modificar estos Términos y Condiciones en cualquier 
                momento. Los cambios serán publicados en esta página con la fecha de actualización. 
                El uso continuado del sitio tras las modificaciones implica la aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Legislación Aplicable</h2>
              <p>
                Estos Términos y Condiciones se rigen por las leyes de la República Argentina. 
                Para cualquier controversia derivada de estos términos o de los servicios contratados, 
                las partes se someten a la jurisdicción de los tribunales ordinarios de la Ciudad 
                Autónoma de Buenos Aires.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contacto</h2>
              <p>
                Para cualquier consulta sobre estos Términos y Condiciones, puede contactarnos:
              </p>
              <div className="bg-gray-100 p-6 rounded-lg mt-4">
                <p><strong>BaxiService</strong></p>
                <p>Servicio Técnico Independiente de Calderas</p>
                <p className="flex items-center mt-2">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  contacto@baxi-service.com
                </p>
                <p className="flex items-center mt-1">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  +54 9 11 2846 2184
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>

    <Footer />
  </>
);

export default TerminosCondiciones;
