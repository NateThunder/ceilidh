"use client";

import { motion } from "framer-motion";
import { ChevronRight, Music, Users, Calendar, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-widest text-gold-500">
            ELYSIA <span className="text-xs tracking-normal font-sans ml-1 text-neutral-400 italic">CEILIDH</span>
          </div>
          <div className="hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase text-neutral-400">
            <Link href="#about" className="hover:text-gold-500 transition-colors">The Experience</Link>
            <Link href="#services" className="hover:text-gold-500 transition-colors">Services</Link>
            <Link href="#watch" className="hover:text-gold-500 transition-colors">Showcase</Link>
            <Link href="#contact" className="hover:text-gold-500 transition-colors">Inquiry</Link>
          </div>
          <button className="px-6 py-2 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-black transition-all duration-300 text-sm tracking-widest uppercase">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-30 scale-105">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1514525253361-bee8718a300c?auto=format&fit=crop&q=80"
          >
            <source src="https://cdn.pixabay.com/video/2021/04/24/72082-542034171_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/70 to-neutral-950" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold-500 tracking-[0.3em] uppercase text-sm mb-6 block">Premium Scottish Entertainment</span>
            <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
              A Modern Take on <span className="italic text-neutral-300">Tradition</span>
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Experience the energy of a traditional Scottish ceilidh, reimagined for the most prestigious events.
              Sophisticated, high-energy, and completely unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-4 bg-gold-500 text-black font-semibold tracking-widest uppercase hover:bg-gold-600 transition-all duration-300 rounded-none w-full sm:w-auto">
                Explore The Experience
              </button>
              <button className="px-10 py-4 border border-white/20 text-white font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 rounded-none w-full sm:w-auto">
                View Showcase
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
               <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700 scale-110">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img
                   src="https://images.unsplash.com/photo-1465821508027-5815ad7258aa?auto=format&fit=crop&q=80"
                   alt="Band"
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute inset-0 bg-gold-500/10 mix-blend-multiply" />
            </div>
            <div>
              <span className="text-gold-500 tracking-widest uppercase text-sm mb-6 block">The Collective</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Artistry Meets Energy</h2>
              <div className="space-y-6 text-neutral-400 leading-relaxed text-lg">
                <p>
                  Elysia Ceilidh is not just a band; it&apos;s a curated collective of Scotland&apos;s most talented folk musicians,
                  dedicated to elevating the ceilidh experience.
                </p>
                <p>
                  We blend virtuosic performance with expert calling, ensuring that whether your guests are seasoned
                  dancers or first-timers, the floor remains electric from the first note to the final encore.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-serif text-gold-500 mb-2">500+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Premium Events</div>
                </div>
                <div>
                  <div className="text-3xl font-serif text-gold-500 mb-2">10+</div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">Years Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-gold-500 tracking-widest uppercase text-sm mb-6 block">Bespoke Packages</span>
            <h2 className="text-4xl md:text-6xl font-serif">Tailored for Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings",
                desc: "From the walk down the aisle to the final dance, we provide a seamless, elegant soundtrack for your special day.",
                icon: Users
              },
              {
                title: "Corporate",
                desc: "High-class entertainment that breaks the ice and leaves a lasting impression on your clients and colleagues.",
                icon: Music
              },
              {
                title: "Private Parties",
                desc: "Intimate gatherings or grand celebrations, we bring the authentic ceilidh spirit to any setting.",
                icon: Calendar
              }
            ].map((service, i) => (
              <div key={i} className="group p-10 border border-neutral-800 hover:border-gold-500/50 transition-all duration-500 bg-neutral-950/50">
                <service.icon className="w-10 h-10 text-gold-500 mb-8 stroke-1 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif mb-6 group-hover:text-gold-500 transition-colors">{service.title}</h3>
                <p className="text-neutral-500 leading-relaxed mb-8">{service.desc}</p>
                <Link href="#contact" className="inline-flex items-center text-xs tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors">
                  Enquire Now <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch/Listen Section */}
      <section id="watch" className="py-24 px-6 bg-neutral-950 overflow-hidden">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="max-w-3xl text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif mb-8">The Visual Experience</h2>
              <p className="text-neutral-400 text-lg italic">&quot;A performance that is as stunning to watch as it is to dance to.&quot;</p>
            </div>

            <div className="w-full aspect-video bg-neutral-900 relative group cursor-pointer overflow-hidden border border-neutral-800">
               <div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-1000">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img
                   src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80"
                   alt="Showcase"
                   className="w-full h-full object-cover"
                 />
               </div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 border border-gold-500 rounded-full flex items-center justify-center bg-neutral-950/40 group-hover:bg-gold-500/10 transition-all group-hover:scale-110">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-gold-500 border-b-[10px] border-b-transparent ml-1" />
                  </div>
               </div>
               <div className="absolute bottom-10 left-10">
                  <span className="text-gold-500 tracking-widest uppercase text-xs mb-2 block font-sans">Live @ Edinburgh Castle</span>
                  <div className="text-2xl font-serif">A Highland Soirée</div>
               </div>
            </div>
         </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-neutral-900/30 border-y border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10 text-gold-500 flex justify-center space-x-1">
            {[1,2,3,4,5].map(i => <span key={i} className="text-xl">★</span>)}
          </div>
          <blockquote className="text-2xl md:text-4xl font-serif mb-12 leading-relaxed">
            &quot;The level of professionalism and talent was beyond anything we&apos;ve ever experienced.
            They turned our wedding into the event of the decade. Simply world-class.&quot;
          </blockquote>
          <cite className="not-italic">
            <span className="block text-white font-semibold tracking-widest uppercase text-sm mb-1">Victoria & James Sutherland</span>
            <span className="text-neutral-500 text-xs tracking-widest uppercase font-sans">Wedding at Gleneagles</span>
          </cite>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-gold-500 tracking-widest uppercase text-sm mb-6 block font-sans">Availability</span>
              <h2 className="text-4xl md:text-6xl font-serif mb-8">Let&apos;s Discuss Your Event</h2>
              <p className="text-neutral-400 text-lg mb-12 font-sans">
                We are now booking for late 2026 and 2027. To maintain our standard of excellence, we only accept a limited number of engagements per year.
              </p>

              <div className="space-y-8 font-sans">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center text-gold-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Email Us</div>
                    <div className="text-lg text-neutral-200">concierge@elysiaceilidh.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-neutral-800 flex items-center justify-center text-gold-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-neutral-500 mb-1">In Person</div>
                    <div className="text-lg text-neutral-200">Studio 4, Edinburgh Park</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 p-10 md:p-16 border border-neutral-800 font-sans">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Your Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-gold-500 outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Email Address</label>
                    <input type="email" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-gold-500 outline-none transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">Event Date & Location</label>
                  <input type="text" className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-gold-500 outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">The Vision (Tell us about your event)</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-neutral-700 py-3 focus:border-gold-500 outline-none transition-colors resize-none" />
                </div>
                <button className="w-full py-5 bg-gold-500 text-black font-semibold tracking-widest uppercase hover:bg-gold-600 transition-all">
                  Request Private Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-neutral-900 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-serif tracking-widest text-gold-500 mb-8 md:mb-0">
            ELYSIA <span className="text-xs tracking-normal font-sans ml-1 text-neutral-400 italic">CEILIDH</span>
          </div>

          <div className="flex space-x-10 mb-8 md:mb-0">
            <Link href="#" className="text-neutral-500 hover:text-gold-500 transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link href="#" className="text-neutral-500 hover:text-gold-500 transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link href="#" className="text-neutral-500 hover:text-gold-500 transition-colors"><Youtube className="w-5 h-5" /></Link>
          </div>

          <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">
            © 2026 Elysia Collective. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
