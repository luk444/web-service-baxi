// src/pages/CoberturaPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Cobertura from '../components/Cobertura';
import Footer from '../components/Footer';

const CoberturaPage = () => (
  <>
    <Helmet>
      <title>Zonas de cobertura | Service Oficial Calderas Baxi</title>
      <meta
        name="description"
        content="Servicio técnico oficial de calderas Baxi. Atención en el día en Capital Federal y GBA (Norte, Oeste y Sur). ¡Llamá ahora para asistencia rápida!"
      />
      <meta
        name="keywords"
        content="calderas Baxi, servicio técnico Baxi, service Baxi Capital Federal, reparación calderas Baxi, Baxi zona norte, Baxi zona oeste, Baxi zona sur, service oficial Baxi, mantenimiento Baxi, técnico Baxi urgente"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://baxi-service.com/cobertura" />
    </Helmet>


    <Navbar />
    <Cobertura />
    <Footer />
  </>
);

export default CoberturaPage;
