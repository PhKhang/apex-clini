import React from 'react';
import { Button } from '../components/Layout';

const Contact: React.FC = () => {
  const scriptStyle = "text-[#D9A13B] py-2 leading-none";

  return (
    <div className="pt-24 min-h-screen bg-stone-50 flex flex-col">
       <div className="flex-grow max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 py-12">
         <div>
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Get in Touch</p>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4">
              Contact <span className={`font-script text-6xl md:text-8xl inline-block ml-2 ${scriptStyle}`}>Us</span>
            </h1>
         </div>
         <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-100 rounded-[10px]">
            <form className="space-y-8">
              <input placeholder="Name" className="w-full bg-transparent border-b border-stone-300 outline-none py-2" />
              <input placeholder="Email" className="w-full bg-transparent border-b border-stone-300 outline-none py-2" />
              <textarea placeholder="Message" className="w-full bg-transparent border-b border-stone-300 outline-none py-2"></textarea>
              <Button variant="primary" type="button" className="w-full">Send Message</Button>
            </form>
         </div>
       </div>
    </div>
  );
};

export default Contact;