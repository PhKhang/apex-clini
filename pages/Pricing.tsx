
import React, { useState, useEffect } from 'react';
import { Button } from '../components/Layout';

const Pricing: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scriptStyle = "text-[#D9A13B] leading-none";
  const mainTitleClass = "text-5xl md:text-7xl font-serif text-stone-900 leading-tight mb-8";
  const bodyTextClass = "text-stone-600 font-light text-lg leading-relaxed mb-8";

  return (
    <div className="pt-32 md:pt-48 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="fade-in order-2 md:order-1">
            <h1 className={mainTitleClass}>
              Pricing
            </h1>
            <p className={bodyTextClass}>
              Our pricing is reflective of skill, knowledge, experience and high quality products. 
              Apex Clinic is an experience and client care is at the heart of what we do. 
              Welcoming new clients and cherishing our loyal ones.
            </p>
            
            <div className="mb-12">
              <span className={`font-script text-4xl md:text-5xl ${scriptStyle} block`}>
                Your Nurse Injector, Liv x
              </span>
            </div>

            <Button variant="primary" to="/contact" className="px-16 shadow-sm">
              View pricing
            </Button>
          </div>

          {/* Right Image Frame - Updated to aspect-square and rounded-10px */}
          <div className="order-1 md:order-2">
            <div className="aspect-square rounded-[10px] overflow-hidden shadow-2xl relative bg-stone-200">
              <img 
                referrerPolicy='no-referrer'
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" 
                alt="Clinic Pricing Aesthetics" 
                className="w-full h-[110%] object-cover absolute top-0 left-0"
                style={{ transform: `translateY(${(scrollY - 200) * 0.15}px)` }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
