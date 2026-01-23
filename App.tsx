import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import { DermalFillers, AntiWrinkles, Skincare, FatDissolving } from './pages/Treatments';
import Training from './pages/Training';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-stone-900 antialiased selection:bg-stone-200 selection:text-stone-900">
        <Navbar />
        <main className={`flex-grow ${scrolled ? 'pt-4 shadow-sm pb-0' : 'pt-8 pb-0'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/treatment/dermal-fillers" element={<DermalFillers />} />
            <Route path="/treatment/anti-wrinkles" element={<AntiWrinkles />} />
            <Route path="/treatment/skincare" element={<Skincare />} />
            <Route path="/treatment/fat-dissolving" element={<FatDissolving />} />
            <Route path="/training" element={<Training />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;