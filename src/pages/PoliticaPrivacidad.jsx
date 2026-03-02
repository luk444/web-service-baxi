import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Mail, Phone } from 'lucide-react';

const PoliticaPrivacidad = () => (
  <>
    <Helmet>
      <title>Política de Privacidad | BaxiService</title>
      <meta
        name="description"
        content="Política de privacidad de BaxiService. Información sobre el tratamiento de datos personales, uso de cookies y derechos del usuario."
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://baxi-service.com/politica-privacidad" />
    </Helmet>

    <Navbar />
    
    <main className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex items-center mb-8">
            <Shield className="h-10 w-10 text-blue-600 mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Política de Privacidad</h1>
          </div>
          
          <p className="text-gray-600 mb-8">
            Última actualización: Marzo 2026
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información del Responsable</h2>
              <p>
                El responsable del tratamiento de los datos personales recogidos a través de este sitio web es:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Nombre comercial:</strong> BaxiService</li>
                <li><strong>Actividad:</strong> Servicio técnico independiente de calderas</li>
                <li><strong>Domicilio:</strong> Capital Federal, Buenos Aires, Argentina</li>
                <li><strong>Teléfono:</strong> +54 9 11 2846 2184</li>
                <li><strong>Email de contacto:</strong> contacto@baxi-service.com</li>
              </ul>
              <p className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
                <strong>Importante:</strong> BaxiService es un servicio técnico independiente. No estamos afiliados, 
                autorizados ni representamos a BAXI ni a ninguna otra marca de calderas. Las marcas mencionadas 
                se utilizan únicamente con fines descriptivos de compatibilidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datos Personales que Recopilamos</h2>
              <p>
                A través de nuestro sitio web y formularios de contacto, podemos recopilar los siguientes datos personales:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.1. Datos proporcionados voluntariamente:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nombre y apellido</li>
                <li>Número de teléfono</li>
                <li>Dirección de correo electrónico</li>
                <li>Dirección postal o zona de ubicación</li>
                <li>Descripción del servicio requerido</li>
                <li>Marca y modelo de la caldera (cuando aplique)</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">2.2. Datos recopilados automáticamente:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dirección IP</li>
                <li>Tipo de navegador y dispositivo</li>
                <li>Páginas visitadas y tiempo de permanencia</li>
                <li>Fuente de tráfico (cómo llegó al sitio)</li>
                <li>Datos de cookies (ver sección específica)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Finalidad del Tratamiento de Datos</h2>
              <p>
                Los datos personales que nos proporcione serán utilizados para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Gestión de consultas:</strong> Responder a sus solicitudes de información y presupuestos</li>
                <li><strong>Prestación de servicios:</strong> Coordinar visitas técnicas y servicios de reparación o mantenimiento</li>
                <li><strong>Comunicación:</strong> Contactarlo para confirmar citas, informar sobre el estado de servicios o enviar presupuestos</li>
                <li><strong>Mejora del servicio:</strong> Analizar el uso del sitio web para mejorar la experiencia del usuario</li>
                <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales y fiscales aplicables</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Uso de WhatsApp y Formularios</h2>
              <p>
                Ofrecemos la posibilidad de contactarnos a través de WhatsApp y formularios web. Al utilizar estos medios:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sus datos serán tratados conforme a esta política de privacidad</li>
                <li>Las conversaciones de WhatsApp pueden ser almacenadas para seguimiento del servicio</li>
                <li>Los formularios web envían información a nuestro sistema de gestión interno</li>
                <li>No compartimos sus datos de contacto con terceros para fines comerciales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Uso de Cookies</h2>
              <p>
                Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. 
                Las cookies que utilizamos incluyen:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">5.1. Cookies técnicas (necesarias):</h3>
              <p>
                Permiten la navegación y el uso de funciones básicas del sitio. No requieren consentimiento.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">5.2. Cookies de análisis (Google Analytics):</h3>
              <p>
                Utilizamos Google Analytics para comprender cómo los usuarios interactúan con nuestro sitio. 
                Estas cookies recopilan información de forma anónima, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Número de visitantes</li>
                <li>Páginas más visitadas</li>
                <li>Tiempo de permanencia</li>
                <li>Fuentes de tráfico</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">5.3. Cookies de publicidad (Google Ads):</h3>
              <p>
                Utilizamos cookies de Google Ads para medir la efectividad de nuestras campañas publicitarias 
                y mostrar anuncios relevantes. Estas cookies pueden rastrear su actividad en distintos sitios web.
              </p>

              <p className="mt-4">
                Puede gestionar sus preferencias de cookies a través de la configuración de su navegador. 
                Tenga en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Protección de Datos Personales</h2>
              <p>
                En cumplimiento con la Ley N° 25.326 de Protección de los Datos Personales de Argentina, 
                garantizamos que:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sus datos son tratados de forma lícita, leal y transparente</li>
                <li>Los datos se recogen con fines determinados, explícitos y legítimos</li>
                <li>Solo recopilamos los datos necesarios para los fines establecidos</li>
                <li>Los datos son exactos y se mantienen actualizados</li>
                <li>Implementamos medidas de seguridad técnicas y organizativas adecuadas</li>
                <li>No conservamos los datos más tiempo del necesario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Derechos del Usuario</h2>
              <p>
                De acuerdo con la legislación vigente, usted tiene los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Derecho de acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
                <li><strong>Derecho de rectificación:</strong> Solicitar la corrección de datos inexactos</li>
                <li><strong>Derecho de supresión:</strong> Solicitar la eliminación de sus datos personales</li>
                <li><strong>Derecho de oposición:</strong> Oponerse al tratamiento de sus datos para determinados fines</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puede contactarnos a través de:
              </p>
              <ul className="list-none pl-0 space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  <strong>Email:</strong>&nbsp;contacto@baxi-service.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-2" />
                  <strong>Teléfono:</strong>&nbsp;+54 9 11 2846 2184
                </li>
              </ul>
              <p className="mt-4">
                Responderemos a su solicitud en un plazo máximo de 10 días hábiles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Solicitud de Eliminación de Datos</h2>
              <p>
                Si desea que eliminemos todos sus datos personales de nuestros sistemas, puede enviar 
                una solicitud a contacto@baxi-service.com con el asunto "Solicitud de eliminación de datos". 
                En su solicitud, incluya:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Su nombre completo</li>
                <li>Email o teléfono con el que nos contactó anteriormente</li>
                <li>Una breve descripción de su solicitud</li>
              </ul>
              <p className="mt-4">
                Procederemos a eliminar sus datos en un plazo de 10 días hábiles y le confirmaremos 
                la eliminación por el medio que nos indique.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Compartición de Datos con Terceros</h2>
              <p>
                No vendemos ni alquilamos sus datos personales a terceros. Sin embargo, podemos compartir 
                información con:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Empresas que nos ayudan a operar el sitio web 
                  (hosting, análisis, etc.) bajo estrictos acuerdos de confidencialidad</li>
                <li><strong>Autoridades:</strong> Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Seguridad de los Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales 
                contra acceso no autorizado, pérdida, alteración o divulgación, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conexión segura HTTPS en todo el sitio</li>
                <li>Acceso restringido a datos personales solo al personal autorizado</li>
                <li>Copias de seguridad periódicas</li>
                <li>Actualización regular de sistemas de seguridad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Cambios en la Política de Privacidad</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. 
                Los cambios serán publicados en esta página con la fecha de última actualización. 
                Le recomendamos revisar periódicamente esta política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contacto</h2>
              <p>
                Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos 
                personales, puede contactarnos en:
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

export default PoliticaPrivacidad;
