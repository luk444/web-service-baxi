// src/pages/ContactPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contactanos | Servicio Técnico Oficial de Calderas Baxi</title>
      <meta
        name="description"
        content="Solicitá una visita para mantenimiento o reparación de calderas Baxi. Atención urgente, asesoramiento técnico y puestas en marcha. ¡Escribinos ahora!"
      />
      <meta
        name="keywords"
        content="contacto Baxi, solicitar service Baxi, asistencia técnica calderas, turno reparación caldera, urgencias Baxi, servicio técnico calderas"
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
