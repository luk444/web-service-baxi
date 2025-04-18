import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import BrandSlider from "./BrandSlider";
import logoBaxi from '../assets/BAXI.svg';
import banerHome from '../assets/mantenimiento-home.webp';


const reviews = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    text: "Excelente servicio oficial BAXI, muy profesionales y puntuales.",
  },
  {
    id: 2,
    name: "María González",
    text: "El mejor servicio técnico oficial de BAXI en la zona.",
  },
  {
    id: 3,
    name: "Juan Pérez",
    text: "Instalación profesional con garantía oficial BAXI.",
  }
];



const Hero = () => {
  const navigate = useNavigate();
  const [currentReview, setCurrentReview] = React.useState(0);
  

  // 🧠 Genera burbujas con posiciones y tamaños fijos
  const bubbles = React.useMemo(() => {
    return [...Array(20)].map(() => ({
      width: Math.random() * 300 + 50,
      height: Math.random() * 300 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      y: Math.random() * 100 - 50,
      duration: Math.random() * 5 + 5,
    }));
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900" id='hero'>
      {/* Fondo animado de burbujas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500/10 rounded-full"
              style={{
                width: bubble.width,
                height: bubble.height,
                left: bubble.left,
                top: bubble.top,
              }}
              animate={{
                y: [0, bubble.y],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-block">
              <img 
                src={logoBaxi}
                alt="BAXI Official Service"
                className="h-16 mb-4"
              />
              <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                <span className="text-white font-semibold">Servicio Técnico Oficial</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Expertos en <span className="text-blue-400">Calderas BAXI</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Servicio técnico oficial BAXI con más de 15 años brindando soluciones profesionales en instalación, 
              reparación y mantenimiento de calderas.
            </p>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-white"
              >
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic">"{reviews[currentReview].text}"</p>
                <p className="mt-2 text-sm text-blue-200">- {reviews[currentReview].name}</p>
              </motion.div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => {
                navigate('/contact');
                window.scrollTo(0, 0);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-300 shadow-lg"
            >
              Solicitar Servicio Oficial
            </motion.button>


              <motion.a
                href="https://wa.me/+5491128462184"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-lg font-medium rounded-xl text-white hover:bg-blue-800/50 transition-colors duration-300"
              >
                WhatsApp 24/7
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={banerHome}
                alt="Servicio profesional de calderas BAXI"
                className="absolute inset-0 w-full h-full object-cover object-[90%]"
                width={1920}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-1">
                  <BrandSlider />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
