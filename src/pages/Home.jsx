// src/pages/Home.jsx
import React from 'react';
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
