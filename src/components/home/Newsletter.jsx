import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-dark dark:bg-gray-900 p-12 md:p-24 overflow-hidden rounded-[2rem] border-4 border-primary/20"
      >
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" 
        />


        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black text-sm uppercase tracking-[0.4em] mb-6 block"
          >
            Restez informé
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none"
          >
            Rejoignez l'<span className="text-primary italic">Underground</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-12 font-medium leading-relaxed"
          >
            Accès exclusif aux drops limités, alertes de réapprovisionnement et événements communautaires. Pas de spam, juste du lourd.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 p-2 bg-white/5 backdrop-blur-xl border-2 border-white/10 rounded-2xl"
          >
            <input 
              type="email" 
              placeholder="Votre email" 
              className="bg-transparent text-white px-6 py-4 flex-grow focus:outline-none font-bold placeholder:text-gray-600"
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-10 py-4 font-heading font-black uppercase tracking-wider rounded-xl hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-2"
            >
              S'abonner <Send size={18} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
