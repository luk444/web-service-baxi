// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import StartupService from '../components/StartupService';
import MaintenancePlans from '../components/MaintenancePlans';
import Reviews from '../components/Reviews';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Home = () => (
  <div className="min-h-screen bg-white overflow-x-hidden">
    <Helmet>
      <title>Service Oficial Baxi | Reparación, Mantenimiento y Puesta en Marcha</title>
      <meta
        name="description"
        content="Service técnico oficial de calderas Baxi en Argentina. Realizamos reparación de calderas individuales y centrales, mantenimiento preventivo y puestas en marcha con garantía."
      />
      <meta
        name="keywords"
        content="service oficial Baxi, reparación calderas Baxi, mantenimiento calderas, puesta en marcha caldera, service Baxi Argentina, técnico caldera Baxi, urgencias calderas Baxi"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Servicio Oficial Baxi" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://baxi-calderas.netlify.app/" />
    </Helmet>

    <Navbar />
    <main id="main" role="main">
      <Hero />
      <Services />
      <StartupService />
      <MaintenancePlans />
      <Reviews />
      <ContactCTA />
    </main>
    <Footer />
  </div>
);

export default Home;
