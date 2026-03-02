// src/pages/CoberturaPage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Cobertura from '../components/Cobertura';
import Footer from '../components/Footer';

const CoberturaPage = () => (
  <>
    <Helmet>
      <title>Zonas de Cobertura | BaxiService - Servicio Técnico de Calderas</title>
      <meta
        name="description"
        content="Servicio técnico de calderas BAXI en Capital Federal y GBA. Atención en el día en zona Norte, Oeste y Sur. ¡Llamá ahora para asistencia técnica rápida!"
      />
      <meta
        name="keywords"
        content="calderas BAXI, servicio técnico calderas, service calderas Capital Federal, reparación calderas, calderas zona norte, calderas zona oeste, calderas zona sur, mantenimiento calderas, técnico calderas urgente"
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
