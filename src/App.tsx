// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// @ts-ignore
import Home from './pages/Home';
// @ts-ignore
import AboutUsPage from './pages/AboutUsPage';
// @ts-ignore
import ContactPage from './pages/ContactPage';
// @ts-ignore
import CoberturaPage from './pages/CoberturaPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cobertura" element={<CoberturaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
