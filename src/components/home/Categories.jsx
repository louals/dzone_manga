import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 text-center md:text-left"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl font-black mb-2 md:mb-4 tracking-tighter uppercase italic leading-none">
            Les <span className="text-primary not-italic">Archives</span>
          </h2>
          <p className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px]">Sélectionnées avec passion</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link to="/shop" className="group flex items-center gap-3 font-black uppercase text-[10px] md:text-sm tracking-widest hover:text-primary transition-colors">
            Tout Explorer 
            <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-dark dark:border-white rounded-full flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
              <ArrowRight size={16} />
            </div>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
      >
        {CATEGORIES.map((cat) => (
          <motion.div 
            key={cat.id}
            variants={itemVariants}
            className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden group manga-panel cursor-pointer border-2 md:border-4 border-dark dark:border-white shadow-none active:scale-95 transition-all"
          >
            <motion.img 
              src={cat.image} 
              alt={cat.name} 
              className="w-full h-full object-cover md:group-hover:scale-110 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-4 md:p-8">
              <span className="text-primary font-black text-[8px] md:text-xs uppercase tracking-[0.2em] mb-1">Catégorie</span>
              <h3 className="text-white text-xl md:text-4xl font-black tracking-tighter uppercase leading-none">{cat.name}</h3>
            </div>
            <Link to={`/shop?cat=${cat.id}`} className="absolute inset-0 z-10" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Categories;
