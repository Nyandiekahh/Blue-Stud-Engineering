import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Engineers from './pages/Engineers';
import FacilityManagement from './pages/FacilityManagement';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preloader will show for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Preloader isVisible={isLoading} />
      {!isLoading && (
        <Router>
          <div className="min-h-screen bg-gray-50 relative">
            {/* Global Logo Watermark Background */}
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
              <img 
                src="/logos/logo.svg" 
                alt="Blue Stud Engineering Limited Logo Watermark" 
                className="w-96 h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] object-contain opacity-5 filter grayscale"
              />
            </div>
            <Navbar />
            <div className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/engineers" element={<Engineers />} />
                <Route path="/facility-management" element={<FacilityManagement />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      )}
    </HelmetProvider>
  );
}

export default App;