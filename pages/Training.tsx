import React from 'react';
import { Button } from '../components/Layout';

const Training: React.FC = () => {
  const scriptStyle = "text-[#D9A13B] py-2 leading-none";

  const courses = [
    {
      title: "Foundation Anti-Wrinkle",
      duration: "2 Days",
      price: "£1,500",
      desc: "Perfect for beginners looking to enter the aesthetics industry with medical-grade training."
    },
    {
      title: "Advanced Lip Masterclass",
      duration: "1 Day",
      price: "£850",
      desc: "Focusing on advanced techniques for natural, architectural lip results Olivia is known for."
    },
    {
      title: "Skin Rejuvenation Workshop",
      duration: "1 Day",
      price: "£600",
      desc: "In-depth training on chemical peels, dermaplaning, and skin health protocols."
    }
  ];

  return (
    <div className="pt-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center pt-[3.75rem] md:pt-[7.5rem] pb-[3.75rem] md:pb-[7.5rem] fade-in">
          <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Master Your Craft</p>
          <h1 className="text-5xl md:text-8xl font-serif text-stone-900 leading-tight">
            Professional <br />
            <span className={`font-script text-6xl md:text-9xl block -mt-2 ${scriptStyle}`}>Training Academy</span>
          </h1>
          <p className="max-w-2xl mx-auto mt-8 text-stone-600 font-light leading-relaxed">
            Nurse-led education for aspiring aesthetic practitioners. We combine clinical excellence with artistic vision to help you build a successful career.
          </p>
        </div>

        {/* Course Grid - Total gap 15rem desktop / 7.5rem mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-[3.75rem] md:py-[7.5rem]">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[10px] shadow-sm flex flex-col h-full hover:shadow-xl transition-all duration-500 group">
              <div className="mb-8">
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 block mb-2">{course.duration}</span>
                <h3 className="text-2xl font-serif text-stone-900 group-hover:text-[#D9A13B] transition-colors">{course.title}</h3>
              </div>
              <p className="text-stone-600 font-light leading-relaxed mb-10 flex-grow text-sm italic">
                {course.desc}
              </p>
              <div className="mt-auto pt-8 border-t border-stone-100 flex justify-between items-baseline">
                <span className="text-xl font-serif text-stone-900">{course.price}</span>
                <Button variant="outline" className="px-6 py-2 text-[10px]" to="/contact">Enquire Now</Button>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy CTA - 15rem gap from Grid, 15rem gap to Footer */}
        <section className="mt-[3.75rem] md:mt-[7.5rem] mb-[7.5rem] md:mb-[15rem] relative py-24 rounded-[20px] overflow-hidden text-center text-white bg-stone-900">
           <div className="absolute inset-0 opacity-40">
             <img src="https://images.unsplash.com/photo-1516542077369-bc21742c131f?q=80&w=2070&auto=format&fit=crop" alt="Training Background" className="w-full h-full object-cover" />
           </div>
           <div className="relative z-10 max-w-3xl mx-auto px-6">
             <h2 className="text-4xl md:text-6xl font-serif mb-6">Beyond the Needle</h2>
             <p className="font-light text-lg mb-10 text-stone-200">Our training focuses on facial anatomy, safety protocols, and the 'natural results' philosophy that defines Apex Clinic.</p>
             <Button variant="primary" className="bg-white text-stone-900 border-white hover:bg-transparent hover:text-white" to="/contact">Start Your Journey</Button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Training;