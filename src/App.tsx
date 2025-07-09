import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectPage from './components/ProjectPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
          </>
        } />
        <Route path="/project/:projectId" element={<ProjectPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;