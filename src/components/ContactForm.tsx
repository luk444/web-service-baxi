import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';


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
    <div id="contact" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Información de contacto */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Contacto</h2>
              <p className="text-lg text-gray-600 mb-12">
                Estamos aquí para ayudarte. Contáctanos para programar un servicio o resolver cualquier consulta sobre tu sistema de calefacción.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Teléfono</h4>
                    <p className="mt-1 text-gray-600">+54 9 11 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">info@calderapro.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Dirección</h4>
                    <p className="mt-1 text-gray-600">Av. Ejemplo 1234, Buenos Aires</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Horarios</h4>
                    <div className="mt-1 text-gray-600">
                      <p>Lunes a Viernes: 8:00 - 18:00</p>
                      <p>Sábados: 9:00 - 13:00</p>
                      <p>Emergencias: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-12 h-[300px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38375908477038!3d-34.60373888045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1645454545454!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre completo</label>
                  <input
                    type="text"
                    {...register('nombre')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.nombre && <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>}
                </div>

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
                  <label className="block text-sm font-medium text-gray-700">Horario de contacto preferido</label>
                  <select
                    {...register('horario')}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Seleccione un horario</option>
                    <option value="manana">Mañana (8:00 - 12:00)</option>
                    <option value="tarde">Tarde (12:00 - 18:00)</option>
                    <option value="urgente">Urgente - Contactar lo antes posible</option>
                  </select>
                  {errors.horario && <p className="mt-1 text-sm text-red-600">{errors.horario.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Mensaje (opcional)</label>
                  <textarea
                    {...register('mensaje')}
                    rows={4}
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
      </div>
    </div>
  );
};

export default ContactForm;