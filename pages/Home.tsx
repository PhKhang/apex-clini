
import React, { useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Star, Plus, Minus } from 'lucide-react';
import { Button } from '../components/Layout';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isAndroid, setIsAndroid] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    try {
      setIsAndroid(/Android/i.test(navigator.userAgent));
    } catch (e) {
      setIsAndroid(false);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Approx card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const services = [
    { 
      title: 'Dermal Fillers', 
      desc: 'Dermal Fillers are advanced injectable treatments used to restore lost volume, enhance facial contours, and improve facial balance.', 
      img: '/home/dermal-fillers.webp' 
    },
    { 
      title: 'Anti-Wrinkle', 
      desc: 'Gently relaxes targeted muscles using a purified protein, effectively softening fine lines while preventing deeper wrinkles from forming.', 
      img: '/home/anti-wrinkles.webp' 
    },
    { 
      title: 'Skincare', 
      desc: 'This advanced therapies help stimulate collagen and elastin, improve hydration, result in smoother, firmer, radiant skin over time.', 
      img: '/home/skincare.webp' 
    },
    { 
      title: 'Fat Dissolving', 
      desc: 'Fat dissolving injections are a non-surgical treatment designed to target small, localised pockets of fat beneath the skin. ', 
      img: '/home/fat-dissolving.webp' 
    }
  ];

  const testimonials = [
      { name: "Emily W", text: "The best there is! Such an amazing insightful person. Have loved everytime I have seen Liv. I have seen Liv 5 times (and counting) from my first ever experience with filler and I have had no complaints. She always puts me at ease and provides amazing and in depth knowledge which just puts you at ease. She is always so helpful and smiley, I will never go to anybody else. (Plus her playlists are always the best)!! Cannot reccommend her enough", rating: 5, date: "1 weeks ago", googleUrl: "https://maps.app.goo.gl/rCSBDwY41WkTTsHn7" },
      { name: "Sophie Gray.", text: "I had a 3ml dermal filler package done by Liv, my results are incredible. They look really natural and I've been getting a lot of compliments saying how good my lips and jaw look. The salon is really clean and tidy, Liv is really professional, kind and explains the treatments she is doing before going ahead. Thank you so much Liv, I'll be back.", rating: 5, date: "1 month ago", googleUrl: "https://maps.app.goo.gl/hNFUn1pQwV3Npens8" },
      { name: "Cas Smith", text: "Liv is just the most wonderful human being, she is so knowledgeable and informative but in such a friendly, lovely manner. Cannot fault her one bit. She is extremely professional, whilst also being absolutely hilarious! I would never go elsewhere now, she is just fantastic at what she does, and is always pushing herself to learn more and fine tune her expertise.", rating: 5, date: "3 weeks ago", googleUrl: "https://maps.app.goo.gl/jicLDmRsPdsvRUcFA" },
      { name: "Lauren Graham", text: "I honestly couldn’t recommend Liv enough. From the moment I walked in, she made me feel completely at ease and comfortable, which is so important to me. She really takes the time to listen to what you want, explains everything clearly, and never makes you feel rushed or pressured. \n The results speak for themselves! Subtle, natural, and exactly what I was hoping for. I left feeling so confident and happy with how I look. You can tell she genuinely cares about her clients and takes so much pride in her work. \n If you’re looking for someone professional, talented, and kind who will make you look and feel amazing, she’s the one ✨.", rating: 5, date: "5 days ago", googleUrl: "https://maps.app.goo.gl/aM1C4tRuhUiTRUTp7" },
      { name: "scott williams", text: "Had a great experience at Apex Aesthetics Clinic! Liv was absolutely lovely, so professional, friendly, and made me feel completely at ease. I’m beyond happy with my results and couldn’t recommend her enough. I’ll definitely be back!", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/iBAMdRb3cnduCPNz9" },
      { name: "Jamie-Lee  Laws-Freeman", text: "Could not recommend Apex Aesthetics enough! Liv makes me feel so at ease, no matter which treatment I have. Her knowledge is unmatched, you will never leave feeling unsure. I wouldn’t trust anyone else to do the job!! If you were thinking about it, take this as your sign to book!", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/VtvDrZmPEQSwBez96" },
      { name: "Katie Newton", text: " Highly recommend Liv! Always so polite and lovely. She makes you feel so at ease and reassures you when having treatments and after. No question is a silly question with her. Aims to deliver and she sure delivers! Xx", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/f75SoTNot7g4UFL87" },
      { name: "Eleanor", text: "Absolutely incredible service from Liv at Apex Clinic. Highly highly recommend her for all your needs. So knowledgeable and professional yet at the same time down to earth and friendly. I had the glass skin facial and results exceeded my expectations!", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/c2mcpz5RVTUg5fFe7" },
      { name: "Jodie Foster", text: "Liv is awesome at what she does. Shes honest and not afraid to tell you what will and wont look best. I trust her opinion completely and I'm over the moon with the work shes done.", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/NAP3Be928ZHULWyL6" },
      { name: "Katie", text: "I’ve had so many treatments done by Liv and she smashes it every time, I’ve never walked out from an appointment feeling anything other than amazed. She listens and advises, there is no one I’d feel more comfortable and trusted with. X", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/fPinXFVkynR8YcY67" },
      { name: "Jasmine Smithson", text: "Liv is absolutely amazing at what she does, love all the treatments I’ve had so far! Liv explains all the treatments and after care in detail, would 100% recommend coming here!", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/BziAUt8iM1uieb2t8" },
      { name: "Sara Conner", text: "Absolutely love Liv . She is so professional and would never recommend a treatment if she didn’t think you needed it . The clinic is lovely and calming . 5* plus", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/9je527qzdhMkBEzu5 " },
      { name: "poppy rockley", text: "I highly recommend Apex. Liv is amazing and really tailors each treatment to you, making you feel really comfortable and at ease!", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/ka1Wj7EDKJcaapia7" },
      { name: "Amanda Bott", text: "Amazing experience with liv. Extremely professional equally friendly. Would recommend 100%", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/ZHdbBgom6jLxXWh86" },
      { name: "Kelly", text: "My favourite place to come! Always feel so relaxed and taken care of well, this is where the magic happens 😍x …", rating: 5, date: "1 week ago", googleUrl: "https://maps.app.goo.gl/39Nr1o1BBGgRSB1z8" },
  ];

  const faqs = [
    { q: "What should I expect during my first consultation?", a: "Your first consultation is a comprehensive assessment of your facial anatomy and skin health. We discuss your concerns, medical history, and desired outcomes to create a bespoke treatment plan tailored just for you." },
    { q: "Are aesthetic treatments safe?", a: "Yes, when performed by a medically qualified professional. At Apex Clinic, all treatments are nurse-led, using only FDA-approved products and following the strictest clinical safety protocols." },
    { q: "How long do dermal filler results last?", a: "Results typically last between 6 to 18 months, depending on the area treated, the product used, and your individual metabolism. We'll provide specific expectations during your consultation." },
    { q: "Is there any downtime after anti-wrinkle injections?", a: "Most clients experience very little downtime. You may have slight redness or small bumps at the injection site that usually subside within 30 minutes. We recommend avoiding strenuous exercise for 24 hours." },
    { q: "Do the treatments hurt?", a: "We prioritize your comfort. For filler treatments, we use premium products containing lidocaine (numbing agent) and can apply topical numbing cream. Most clients describe the sensation as a minor pinch or pressure." },
    { q: "How should I prepare for my appointment?", a: "We recommend avoiding alcohol and blood-thinning supplements (like Ibuprofen or Vitamin E) for 48 hours before treatment to minimize bruising. Arrive with a clean face if possible." },
    { q: "What is the difference between Botox and dermal fillers?", a: "Anti-wrinkle injections (Botox) relax the muscles that cause expression lines, while dermal fillers restore lost volume and refine facial contours using hyaluronic acid." },
    { q: "Can I have treatments if I am pregnant?", a: "No, aesthetic injectable treatments are not recommended for individuals who are pregnant or breastfeeding to ensure the absolute safety of both mother and child." },
    { q: "How many skin peel sessions will I need?", a: "While one peel provides a refresh, a course of 3 to 6 sessions is usually recommended for significant results with concerns like acne, pigmentation, or fine lines." },
    { q: "What is your cancellation policy?", a: "We require at least 48 hours' notice for cancellations or rescheduling. This allows us to offer the appointment time to other clients on our waiting list." }
  ];

  const scriptStyle = "text-[#D9A13B] py-2 leading-none";

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="w-full overflow-hidden">
      <Seo
        title="Apex Clinic & Training | Nurse-Led Aesthetics in Retford"
        description="Nurse-led aesthetics clinic in Retford offering dermal fillers, anti-wrinkle, skincare, fat dissolving, and bespoke treatment plans."
        path="/"
      />
      
      {/* Hero Section */}
<section className="relative h-screen min-h-[600px] flex items-start md:items-center bg-stone-50 overflow-hidden">
        {/* Desktop / md+ hero (hidden on small screens) */}
        <div className="absolute inset-0 z-0 hidden md:block">
          <img 
            src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/615402102_1802105790503463_1203018519109327570_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6Y7NuUIWfeIQ7kNvwEqV_tV&_nc_oc=Adk4aVFL9ObHaM-hv8vs2uDSq6XM4u-xIbfOTvB09LZVuMYpVmkn-eAlvQRHNSi6NRXN4o0GG1OYp82zCSbd-1FZ&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=1yUVKu-lr87fRxgg0L3iIA&oh=00_Afp0B6PT6WJlkfcZGG6TW283WC3c2KiAuDypLgkmG8nBZA&oe=697043F5" 
            alt="Luxury Aesthetics Background"
            className="w-full h-full object-cover opacity-100 brightness-[1]"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
        </div>

        {/* Mobile-only hero (shows on small screens) */}
        <div className="absolute inset-0 z-0 block md:hidden">
          <img
            src="/home/homepage-mobile-version.png"
            alt="Luxury Aesthetics Mobile"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className={`relative z-10 text-left max-w-7xl mx-auto px-6 fade-in w-full ${isAndroid ? 'pt-8' : ''}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-black mb-8 leading-tight">
            Nurse-Led <br className="hidden md:block" /> Aesthetics Clinic <br />
            <span className={`font-script text-6xl md:text-7xl block -mt-2 ${scriptStyle}`}>in Retford, Nottinghamshire</span>
          </h1>
          <Button
            variant="primary"
            onClick={() => window.open('https://that-time.co.uk/apex-aesthetics-by-liv', '_blank')}
          >
            Book Consultation
          </Button>
        </div>
      </section>

      {/* Our Services Section - Moved here after Hero */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-4xl">
               <h2 className="text-5xl md:text-7xl font-serif mb-4 text-stone-900">
                Browse our <span className={`font-script text-6xl md:text-8xl inline ${scriptStyle} ml-2`}>treatments</span>
               </h2>
               <p className="text-stone-600 font-light text-lg leading-relaxed">
                 Here at Apex Clinic we offer a range of treatments to help combat a wide variety of skin concerns.
               </p>
            </div>
          </div>

          <div className="relative group">
             <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 text-stone-900 border border-stone-200">
               <ArrowLeft size={20} />
             </button>
             <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 text-stone-900 border border-stone-200">
               <ArrowRight size={20} />
             </button>

             <div ref={scrollRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
               {services.map((service, idx) => (
                  <div key={idx} className="min-w-[85vw] md:min-w-[350px] snap-center flex flex-col h-full">
                     <div className="overflow-hidden rounded-[10px] mb-8 relative aspect-[3/4] shadow-sm">
                        <img referrerPolicy='no-referrer' src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                     </div>
                     <div className="flex justify-between items-baseline mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-stone-900">{service.title}</h3>
                     </div>
                     <p className="text-stone-600 font-light text-base leading-relaxed mb-8 italic flex-grow">{service.desc}</p>
                     <div className="mt-auto">
                        <Button
                          variant="outline"
                          onClick={() => window.open('https://that-time.co.uk/apex-aesthetics-by-liv', '_blank')}
                          className="w-full py-3 text-[10px] tracking-[0.2em] bg-[#eeeae7]"
                        >
                          Book Now
                        </Button>
                     </div>
                  </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Empowering Confidence Section */}
      <section className="pt-[3.75rem] md:pt-[7.5rem] pb-[3.75rem] md:pb-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          {/* Image - items-stretch combined with h-full ensures frame matches text block height */}
          <div className="relative h-full bg-stone-50 rounded-[10px] overflow-hidden shadow-sm min-h-[400px]">
              <img 
                src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/615886608_1802100287170680_6109332035050359730_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wreaEpm96W4Q7kNvwHIMliS&_nc_oc=AdnUgimrA93oFsWUGkffpgy8p79D7eMkIGPwL5wJk6jZybC3Nay7sLSPfVlpauTza3wGnOAsC8nR8TsP_ZK4F4mR&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=rX-Mxq2KpoN-5OaUURHpNA&oh=00_AfrMDjExcgbnE3B44MJAXMBDv-lo2MgRf0B9S859pP3FCw&oe=69704E42" 
                alt="Apex Aesthetics by Liv" 
                className="w-full h-full object-cover"
              />
          </div>
          
          <div className="fade-in flex flex-col justify-center py-4">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-2">
              Apex Aesthetics <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>by Liv</span>
            </h2>
            <div className="text-stone-600 font-light text-lg leading-relaxed mb-10 space-y-6">
               <p>Trading as Apex Clinic, is a professional skin and aesthetics clinic based in Retford, Nottinghamshire. Led by an experienced nurse injector, we specialise in anti-wrinkle injections, dermal fillers, skin boosters, microneedling, polynucleotides, medical-grade facials and fat dissolving treatments.
Every treatment is tailored to your individual features and goals, with a strong focus on safety, natural-looking results and expert aftercare.</p>
            </div>
            <div className="flex flex-col items-start space-y-6">
              {[
                { label: 'Dermal Fillers', to: '/treatment/dermal-fillers' },
                { label: 'Anti-Wrinkle', to: '/treatment/anti-wrinkles' },
                { label: 'Skincare', to: '/treatment/skincare' },
                { label: 'Fat dissolving', to: '/treatment/fat-dissolving' }
              ].map((item, index) => (
                <Link key={index} to={item.to} className="border-b border-stone-900 pb-1 text-stone-900 hover:text-stone-600 hover:border-stone-500 font-serif text-lg tracking-wide transition-all">{item.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Olivia (Founder) Section - Text Left, Image Right */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-stretch">
          {/* Text Container */}
          <div className="order-1 md:order-1 flex flex-col justify-center py-4">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-400 mb-4">The Expert</p>
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-stone-900 leading-tight">
              A message from <br className="md:hidden" /> our <span className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}>founder</span>
            </h2>
            <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg text-justify">
              <p>Welcome to Apex Clinic, a space where natural-looking enhancements meet expert care. I'm Liv, an experienced nurse injector, dedicated to helping you feel confident and empowered in your own skin.</p>
              <p>At Apex, we specialise in advanced aesthetic injectable treatments; including Anti Aging, Dermal Fillers, Skin Boosters, and Fat Dissolving, all tailored to your unique features and goals. Every treatment plan is personalized to enhance your natural beauty with subtle, refined results.</p>
              <p>Our commitment doesn’t end after your appointment. We provide thorough, attentive aftercare to ensure your comfort and the best possible outcomes. From consultation to follow-up, you'll be supported every step of the way.</p>
            </div>
            <div className="mt-10">
               <Button variant="primary" to="/about">Read Her Story</Button>
            </div>
          </div>

          {/* Image Container */}
          <div className="order-2 md:order-2 relative min-h-[400px]">
            <div className="h-full bg-stone-200 relative overflow-hidden rounded-[10px] shadow-sm">
               <img 
                 src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/615955281_1802100657170643_3506560264708239548_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GiRAf2rbBQQQ7kNvwHPBSFm&_nc_oc=Adk2cuFr1ysivZy-3rKe8rDZa7lQTu2liAQWdrUD05QI8cl5RU45swzeg66SztE3pLNMbKk2bryfmhJVxdqZeU47&_nc_zt=23&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=YME2oCYmqradR4F0ir165g&oh=00_AfrmZymsOPgJjrhSyDr0X9lIP7T2q6Tho8kIXj7USBQgdg&oe=69705A5A" 
                 alt="Olivia Founder" 
                 className="w-full h-full object-cover" 
               />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[3.75rem] md:py-[7.5rem] bg-[#eeeae7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-stone-500 mb-4">Common Questions</p>
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none">
              Frequently Asked <span className={`font-script text-6xl md:text-8xl inline-block ml-2 ${scriptStyle}`}>Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm rounded-[10px] overflow-hidden border border-stone-200/50 transition-all duration-300 hover:bg-white">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="text-stone-900 font-serif text-lg md:text-xl pr-4">{faq.q}</span>
                  <div className="flex-shrink-0 text-[#D9A13B]">
                    {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-stone-600 font-light text-lg leading-relaxed border-t border-stone-100 pt-6">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Google Reviews Section */}
<section className="py-[7.5rem] bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-2">
      See what all the <br />
      <span
        className={`font-script text-6xl md:text-8xl inline-block ${scriptStyle}`}
      >
        talk is about!
      </span>
    </h2>
  </div>

   {/* Marquee Container */}
        <div className="relative flex overflow-x-hidden group pb-10">
          <div className="animate-marquee flex gap-8 py-4 whitespace-nowrap group-hover:pause">
            {[...testimonials, ...testimonials].map((review, i) => (
              <div key={i} className="inline-block w-[320px] bg-white rounded-[10px] shadow-sm border border-stone-100 p-8 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-serif overflow-hidden">
                         <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                         <p className="text-sm font-bold text-stone-900">{review.name}</p>
                         <p className="text-[10px] text-stone-400 uppercase tracking-wider">{review.date}</p>
                      </div>
                   </div>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                </div>
                <div className="flex text-amber-400 mb-3">
                   {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-stone-600 font-light text-base leading-relaxed italic whitespace-normal line-clamp-4">
                   "{review.text}"
                </p>
                <div className="mt-6 pt-4 border-t border-stone-50 flex justify-end">
                   <a
                    href={review.googleUrl && review.googleUrl.length > 0 ? review.googleUrl : 'https://www.google.com/maps'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
                    aria-label={review.googleUrl && review.googleUrl.length > 0 ? `View ${review.name}'s review on Google` : 'View Apex Clinic on Google Maps'}
                   >
                    View on Google
                   </a>
                </div>
              </div>
            ))}
          </div>
        </div>
</section>

    </div>
  );
};

export default Home;
