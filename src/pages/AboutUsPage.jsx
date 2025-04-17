// src/pages/AboutUsPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const AboutUsPage = () => (
  <>
    <Helmet>
      <title>Quiénes Somos | Técnicos Autorizados Baxi en Argentina</title>
      <meta
        name="description"
        content="Somos especialistas en calderas Baxi con más de 10 años de experiencia en el rubro. Ofrecemos un servicio técnico autorizado con compromiso, rapidez y atención personalizada."
      />
      <meta
        name="keywords"
        content="service técnico Baxi, técnicos autorizados Baxi, empresa Baxi Argentina, expertos calderas, especialistas calefacción, experiencia Baxi"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://baxi-calderas.netlify.app/about" />
    </Helmet>


    <Navbar />
    <AboutUs />
    <Footer />
  </>
);

export default AboutUsPage;
