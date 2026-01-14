import React from 'react';
import { Scale, Sparkles, Syringe, ShieldCheck } from 'lucide-react';
import { Button } from '../components/Layout';

const About: React.FC = () => {
  const specialisms = [
    { title: "Profile balancing", icon: <Scale size={32} className="text-[#D9A13B]" /> },
    { title: "Facial harmonisation", icon: <Sparkles size={32} className="text-[#D9A13B]" /> },
    { title: "Skin rejuvenation injectables", icon: <Syringe size={32} className="text-[#D9A13B]" /> },
    { title: "Medical-grade skin treatments", icon: <ShieldCheck size={32} className="text-[#D9A13B]" /> }
  ];

  const scriptStyle = "text-[#D9A13B] py-2 leading-none";
  
  // Unified typography classes
  const mainTitleClass = "text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1]";
  const scriptTitleClass = `font-script text-6xl md:text-8xl inline-block ${scriptStyle}`;
  const bodyTextClass = "text-stone-600 font-light text-lg leading-relaxed";

  return (
    <div className="w-full overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-end bg-stone-50 overflow-hidden pb-16 md:pb-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
            alt="About Apex Clinic"
            className="w-full h-full object-cover opacity-90 brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-stone-900/20"></div>
        </div>
        
        <div className="relative z-10 text-left max-w-7xl mx-auto px-6 fade-in w-full">
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            Artistry Meets <br className="hidden md:block" /> Clinical Excellence <br />
            <span className={`font-script text-6xl md:text-8xl block -mt-2 ${scriptStyle}`}>Discover the Story of Apex</span>
          </h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pt-[7.5rem] md:pt-[15rem] pb-[3.75rem] md:pb-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square bg-stone-50 rounded-[10px] overflow-hidden shadow-sm order-1 md:order-1">
              <img src="https://images.unsplash.com/photo-1579159278991-88f572110c73?q=80&w=1935&auto=format&fit=crop" alt="The Space" className="w-full h-full object-cover" />
          </div>
          <div className="fade-in order-2 md:order-2">
            <h2 className={`${mainTitleClass} mb-2`}>
              The Apex <br />
              Difference & <span className={scriptTitleClass}>Philosophy</span>
            </h2>
            <div className={`${bodyTextClass} mb-10 space-y-6`}>
               <p>Founded on the principle that aesthetic medicine should be a blend of science and art. We focus on subtle enhancements that empower your confidence without compromising your natural character.</p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              {['Natural Aesthetics', 'Patient Safety', 'Artistic Vision'].map((label, index) => (
                <div key={index} className="border-b border-stone-900 pb-1 text-stone-900 font-serif text-lg tracking-wide">{label}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Olivia Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-1 md:order-1 fade-in">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">Our Founder</p>
            <h2 className={`${mainTitleClass} mb-4`}>
              Meet <span className={scriptTitleClass}>Olivia</span>
            </h2>
            <div className={`${bodyTextClass} space-y-6`}>
              <p>With over a decade of clinical experience, Olivia has trained extensively and worked tirelessly to perfect her craft. Her background in nursing provides the medical foundation required for the safest possible outcomes.</p>
            </div>
            <div className="mt-10">
               <Button variant="primary" to="/training">View Academy</Button>
            </div>
          </div>
          <div className="order-2 md:order-2 relative">
            <div className="aspect-square bg-stone-200 relative overflow-hidden rounded-[10px]">
               <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t51.82787-15/553742065_18428179612100116_1721518372852238092_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHPyKkuriUljae4jVxe9KIPh5Md1K0Mf8SHkx3UrQx_xMOq6tnBgVvN1Jxx3O9FTzSwSE_SZCOOU9DVEiT0Jy_p&_nc_ohc=a3D-ElNau1YQ7kNvwEBXrG5&_nc_oc=Adkmy3cFG8QwxvepInSSxZEO7oG_j-HOa8jbVI69RQH517LREBdRkHVndvBcfY23WkpytWujYjdh8NwF5q7L8Ks3&_nc_zt=23&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=Wrga319Fp2zOAIwq7DQqpg&oh=00_Afo0AfplS0rQXxSLYYZrp6GlhdqsjAE9xB8gDvCqepaETg&oe=69642CB8" alt="Olivia Founder" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Specialisms Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className={`${mainTitleClass} mb-2`}>
              Specialisms
            </h2>
            <p className={`font-script text-6xl md:text-8xl ${scriptStyle}`}>
              Liv specialises in:
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {specialisms.map((item, idx) => (
              <div 
                key={idx} 
                className="aspect-square bg-[#eeeae7] rounded-[10px] p-6 md:p-8 flex flex-col justify-center items-center text-center transition-transform duration-300 hover:scale-[1.02]"
              >
                <div className="mb-6">
                  {item.icon}
                </div>
                <h3 className="text-stone-900 font-serif text-base md:text-lg leading-snug">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <p className={`${bodyTextClass} italic`}>
              Each treatment plan is bespoke, focusing on facial balance, structure, and skin quality rather than trends or over-treatment.
            </p>
          </div>
        </div>
      </section>

      {/* A Safe Space for Confidence Section */}
      <section className="relative py-[7.5rem] md:py-[15rem] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            alt="Clinic Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#eeeae7]/90 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className={`${mainTitleClass} mb-8 leading-tight`}>
            A Safe Space for <br className="md:hidden" /> <span className={scriptTitleClass}>Confidence</span>
          </h2>
          <p className={`${bodyTextClass} mb-12`}>
            Apex Clinic is a judgement-free, professional environment where clients feel listened to, educated, and cared for. 
            Whether you’re new to aesthetics or experienced with treatments, every consultation is thorough, honest, and client-led. 
            We are proud to offer results that are natural, safe, and confidence-boosting - with care you can trust.
          </p>
          <Button variant="primary" to="/contact" className="shadow-lg">
            Book Consultation
          </Button>
        </div>
      </section>

      {/* Your Journey Starts Here Section */}
      <section className="py-[5.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          <div className="max-w-2xl text-left">
             <h2 className={`${mainTitleClass} mb-8`}>
              Your journey <br /> <span className={scriptTitleClass}>starts here.</span>
             </h2>
             <p className={`${bodyTextClass} max-w-lg`}>
               Experience bespoke treatments designed around you. Enquire now to arrange your personalised consultation.
             </p>
          </div>
          <div className="w-full md:w-auto flex justify-start md:justify-end">
             <Button variant="primary" to="/contact" className="w-full md:w-auto px-16 py-6 text-sm md:text-base">
               Enquire Now
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
