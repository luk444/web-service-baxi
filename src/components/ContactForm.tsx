import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactInfoCard from './ContactInfoCard';

const schema = z.object({
  nombre: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(8, 'Teléfono inválido'),
  servicio: z.string().min(1, 'Seleccione un servicio'),
  horario: z.string().min(1, 'Seleccione un horario'),
  mensaje: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formsubmit.co/ajax/lucabussines23@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
      } else {
        alert("Error al enviar el mensaje");
      }

    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Error al enviar el mensaje");
    }
  };

  return (
    <div id="contact" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacto</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos para programar un servicio o resolver cualquier consulta sobre tu sistema de calefacción.
          </p>
        </motion.div>

        {/* Main content section - 2 columns */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Contact info cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Primera fila: Teléfonos y Horarios */}
            <div className="grid sm:grid-cols-2 gap-4">
              <ContactInfoCard 
                icon={<Phone className="h-5 w-5 text-blue-600" />}
                title="Teléfonos"
                content={
                  <div className="w-full space-y-3">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Fijo</span>
                      <a href="tel:+541112345678" className="text-blue-600 hover:text-blue-700 transition-colors">
                        (011)7709-4182
                      </a>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Celular</span>
                      <a href="tel:+541112345678" className="text-blue-600 hover:text-blue-700 transition-colors">
                        +54 9 11 2846-2184
                      </a>
                    </div>
                  </div>
                }
              />

              <ContactInfoCard 
                icon={<Clock className="h-5 w-5 text-blue-600" />}
                title="Horarios"
                content={
                  <div className="w-full space-y-2">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Lunes a Viernes</span>
                      <span className="text-gray-700">8:00 - 18:00</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">Sábados</span>
                      <span className="text-gray-700">9:00 - 13:00</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-blue-600 font-medium">Emergencias 24/7</span>
                    </div>
                  </div>
                }
              />
            </div>

            {/* Segunda fila: Email y Dirección (más pequeños) */}
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <ContactInfoCard 
                icon={<Mail className="h-4 w-4 text-blue-600" />}
                title="Email"
                content={
                  <div className="w-full">
                    <a 
                      href="mailto:info@calderapro.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors break-all"
                    >
                      baxioficial@gmail.com
                    </a>
                  </div>
                }
              />
              
              <ContactInfoCard 
                icon={<MapPin className="h-4 w-4 text-blue-600" />}
                title="Dirección"
                content={
                  <div className="w-full">
                    <a 
                      href="https://goo.gl/maps/your-location-link" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Gral. Martín Güemes 508, Hurlingham
                    </a>
                  </div>
                }
              />
            </div>
          </motion.div>



          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-fit"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Solicitar Servicio
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center bg-green-50 border border-green-200 p-8 rounded-xl"
              >
                <h4 className="text-2xl font-semibold text-green-700 mb-2">¡Mensaje enviado con éxito! ✅</h4>
                <p className="text-gray-600">
                  Gracias por contactarnos. Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow transition"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <input
                    type="text"
                    {...register('nombre')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Teléfono</label>
                    <input
                      type="tel"
                      {...register('telefono')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    {errors.telefono && <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Servicio</label>
                    <select
                      {...register('servicio')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="reparacion">Reparación de Calderas</option>
                      <option value="mantenimiento">Mantenimiento Preventivo</option>
                      <option value="instalacion">Instalación Nueva</option>
                      <option value="emergencia">Emergencia 24hs</option>
                    </select>
                    {errors.servicio && <p className="mt-1 text-sm text-red-600">{errors.servicio.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Horario de contacto</label>
                    <select
                      {...register('horario')}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Seleccione un horario</option>
                      <option value="manana">Mañana (8:00 - 12:00)</option>
                      <option value="tarde">Tarde (12:00 - 18:00)</option>
                      <option value="urgente">Urgente - Lo antes posible</option>
                    </select>
                    {errors.horario && <p className="mt-1 text-sm text-red-600">{errors.horario.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Mensaje (opcional)</label>
                  <textarea
                    {...register('mensaje')}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  ></textarea>
                </div>

                <input type="hidden" name="_captcha" value="false" />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Enviar Solicitud
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
        
        {/* Full-width map section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <div className="bg-white p-4 rounded-t-xl">
            <h3 className="text-xl font-semibold text-gray-900">Nuestra Ubicación</h3>
            <p className="text-gray-600">Gral. Martín Güemes 508, Hurlingham, Provincia de Buenos Aires</p>
          </div>
          <div className="h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.434796037941!2d-58.6238782!3d-34.5958755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb9178c450ae3%3A0x2ca33f3be2d12b6c!2sGral.%20Mart%C3%ADn%20G%C3%BCemes%20508%2C%20B1686%20Hurlingham%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1713361300000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;