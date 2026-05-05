import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, ExternalLink } from 'lucide-react';

const Location = () => {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* INFO SIDE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 space-y-10 md:space-y-16"
          >
            <div className="text-center lg:text-left">
              <span className="text-primary font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                Notre localisation
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none mb-6">
                Le <span className="text-primary not-italic">Shop</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium max-w-md mx-auto lg:mx-0 leading-relaxed">
                Retrouvez-nous pour une expérience immersive au cœur de la culture manga.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <ContactItem icon={<MapPin className="text-primary" size={24} />} title="Adresse" content="12 Rue Aissat Idir, Chéraga, Alger" />
                <motion.a 
                  href="https://maps.app.goo.gl/1Q8Jzd4U9hLVc3vJA"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-dark dark:bg-white text-white dark:text-dark px-6 py-3 font-heading font-black text-[10px] md:text-xs uppercase tracking-widest rounded-full hover:bg-primary transition-all shadow-lg"
                >
                  <ExternalLink size={14} /> Voir sur Google Maps
                </motion.a>
              </div>
              
              <ContactItem icon={<Phone className="text-primary" size={24} />} title="Téléphone" content="+213 (0) 550 00 00 00" />
              
              <ContactItem icon={<Clock className="text-primary" size={24} />} title="Horaires" content={
                <div className="space-y-1">
                  <p>Samedi - Jeudi: 10h - 19h</p>
                  <p className="text-primary">Vendredi: Fermé</p>
                </div>
              } />
              
              <ContactItem icon={<Mail className="text-primary" size={24} />} title="Contact" content="contact@manga.com" />
            </div>
          </motion.div>

          {/* VIDEO SIDE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[9/16] manga-panel group shadow-2xl">
              <video 
                src="/.mp4" 
                className="w-full h-full object-cover"
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="space-y-3 text-center sm:text-left">
    <div className="flex flex-col sm:flex-row items-center gap-3">
      {icon}
      <h4 className="font-black text-xs md:text-sm uppercase tracking-widest">{title}</h4>
    </div>
    <div className="text-gray-500 dark:text-gray-400 text-sm font-bold sm:pl-9 leading-relaxed italic">
      {content}
    </div>
  </div>
);

export default Location;