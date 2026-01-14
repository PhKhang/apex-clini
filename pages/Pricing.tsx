import React from 'react';
import { Button } from '../components/Layout';

const Pricing: React.FC = () => {
  const scriptStyle = "text-[#D9A13B] py-2 leading-none";

  const prices = [
    { service: "Consultation", price: "£50" },
    { service: "Lip Enhancement (1ml)", price: "£250" },
    { service: "Anti-Wrinkle (3 Areas)", price: "£280" },
  ];

  return (
    <div className="pt-24 pb-12 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
           <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4">
             Price <span className={`font-script text-6xl md:text-8xl inline-block ml-2 ${scriptStyle}`}>List</span>
           </h1>
        </div>
        <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-[10px]">
          <ul className="space-y-8">
            {prices.map((item, index) => (
              <li key={index} className="flex justify-between border-b border-stone-100 pb-4">
                <span className="text-lg font-serif text-stone-800">{item.service}</span>
                <span className="text-lg font-light text-stone-900">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;