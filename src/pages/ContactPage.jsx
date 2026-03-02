// src/pages/ContactPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contacto | BaxiService - Servicio Técnico de Calderas</title>
      <meta
        name="description"
        content="Solicitá una visita para mantenimiento o reparación de calderas BAXI. Atención urgente, asesoramiento técnico y puestas en marcha. Servicio técnico independiente."
      />
      <meta
        name="keywords"
        content="contacto BaxiService, solicitar servicio calderas, asistencia técnica calderas, turno reparación caldera, urgencias calderas, servicio técnico calderas"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://baxi-service.com/contact" />
    </Helmet>


    <Navbar />
    <ContactForm />
    <Footer />
  </>
);

export default ContactPage;
