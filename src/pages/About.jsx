import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Sparkles, Zap } from 'lucide-react';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-24"
    >
      {/* Hero */}
      <section className="bg-dark text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <img src="/image.png" alt="" className="w-full h-full object-contain rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none"
          >
            PLUS QU'UNE <br />SIMPLE <span className="text-primary italic">BOUTIQUE</span>.
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-bold text-gray-400 max-w-3xl uppercase tracking-wide"
          >
            Nous sommes les curateurs de la culture manga. Un sanctuaire pour les collectionneurs, les rêveurs et les rebelles qui affichent leur passion.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="manga-panel aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=1000" 
              alt="Communauté" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Notre <span className="text-primary italic">Histoire</span></h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg font-medium leading-relaxed">
              <p>
                DZone Manga est né dans une petite chambre avec une pile de Shonen Jump et le rêve de faire découvrir l'effervescence de la street culture japonaise au monde entier.
              </p>
              <p>
                Nous trouvions que les boutiques de manga traditionnelles étaient trop génériques. Nous voulions quelque chose d'audacieux, quelque chose qui ressemble à une marque de streetwear premium tout en restant fidèle à nos racines otaku.
              </p>
              <p>
                Aujourd'hui, nous sommes une communauté mondiale de plus de 100 000 fans, dédiés à ne fournir que les objets de collection les plus authentiques et qualitatifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 dark:bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tighter uppercase">Ce que nous <span className="text-primary italic">Défendons</span></h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest">Notre ADN</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ValueCard 
              icon={<Heart className="text-primary" size={40} />}
              title="Authenticité"
              desc="Nous travaillons directement avec des distributeurs japonais pour garantir que chaque figurine et manga est 100% authentique."
            />
            <ValueCard 
              icon={<Users className="text-primary" size={40} />}
              title="Communauté"
              desc="Nous ne vendons pas seulement des produits ; nous organisons des événements, soutenons des artistes et créons un foyer pour les fans."
            />
            <ValueCard 
              icon={<Sparkles className="text-primary" size={40} />}
              title="Esthétique"
              desc="Tout ce que nous faisons est conçu avec une esthétique premium, minimaliste et rebelle à l'esprit."
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <Zap className="mx-auto text-primary mb-8" size={60} />
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Redéfinissons l'expérience <span className="text-primary italic">Manga</span> ensemble.</h2>
        <button className="btn-primary">Rejoindre le mouvement</button>
      </section>
    </motion.div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="p-10 bg-white dark:bg-dark border-2 border-dark dark:border-white manga-panel shadow-none hover:shadow-[10px_10px_0px_0px_#E74C3C] transition-all">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">{desc}</p>
  </div>
);

export default About;
