import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  const phoneNumber = "+5491177213649"; // Replace with your phone number

  return (
    <div className="bg-blue-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">¿Necesita ayuda con su caldera?</span>
          <span className="block text-xl mt-2">
            Contáctenos para una atención inmediata
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-4">
        <a
          href={`tel:${phoneNumber}`}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 shadow-md"
        >
          <Phone className="h-5 w-5 mr-2" />
          Llamar Ahora
        </a>

        <a
          href="https://wa.me/5491177213649"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 shadow-md"
        >
          <MessageCircle className="h-5 w-5 mr-2" />
          WhatsApp
        </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
