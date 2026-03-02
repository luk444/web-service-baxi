// src/pages/AboutUsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const AboutUsPage = () => (
  <>
    <Helmet>
      <title>Quiénes Somos | BaxiService - Servicio Técnico Independiente</title>
      <meta
        name="description"
        content="Somos una empresa independiente especializada en calderas BAXI con más de 15 años de experiencia. Servicio técnico profesional con compromiso, rapidez y atención personalizada."
      />
      <meta
        name="keywords"
        content="servicio técnico calderas, técnicos especializados BAXI, empresa calderas Argentina, expertos calderas, especialistas calefacción, servicio independiente"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://baxi-service.com/about" />
    </Helmet>


    <Navbar />
    <AboutUs />
    <Footer />
  </>
);

export default AboutUsPage;
