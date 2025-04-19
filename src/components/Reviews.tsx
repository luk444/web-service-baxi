import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    rating: 5,
    text: "Excelente servicio oficial BAXI. Los técnicos son muy profesionales y resolvieron el problema de mi caldera rápidamente.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 2,
    name: "María González",
    rating: 5,
    text: "Muy satisfecha con el servicio de mantenimiento. Personal altamente capacitado y precios justos.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    id: 3,
    name: "Juan Robledo",
    rating: 5,
    text: "La instalación de mi nueva caldera BAXI fue impecable. El servicio técnico oficial es muy profesional y eficiente.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section aria-labelledby="reviews-title" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="reviews-title" className="text-3xl font-bold text-gray-900">
            Lo que dicen nuestros clientes sobre el Servicio Oficial BAXI
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Más de 5000 clientes satisfechos avalan nuestro servicio técnico oficial
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={reviews[currentIndex].image}
                  alt={reviews[currentIndex].name}
                  className="w-16 h-16 rounded-full"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {reviews[currentIndex].name}
                  </h3>
                  <div className="flex items-center mt-1" role="img" aria-label={`Calificación: ${reviews[currentIndex].rating} estrellas`}>
                    {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-xl text-gray-600 italic">
                "{reviews[currentIndex].text}"
              </blockquote>

             
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`relative transition-colors duration-200 rounded-full ${
                  i === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                }`}
                aria-label={`Ir a reseña ${i + 1}`}
                aria-current={i === currentIndex ? 'true' : 'false'}
                style={{
                  width: '48px',
                  height: '48px',
                  padding: 0,
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'transparent',
                }}
              >
                <span
                  className={`block w-3 h-3 rounded-full ${
                    i === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                  }`}
                />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Reviews;