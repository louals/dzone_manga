import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard';
import { PRODUCTS } from '../../constants';

const NewDrops = ({ addToCart }) => {
  const featuredProducts = PRODUCTS.filter(p => p.isNew).slice(0, 4);

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-black text-xs uppercase tracking-[0.5em] mb-4 block"
            >
              Directement du Japon
            </motion.span>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none">
              Derniers <span className="text-primary not-italic">Drops</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/shop" className="btn-secondary !py-4 !px-10">Explorer le Vault</Link>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProductCard product={product} addToCart={addToCart} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewDrops;
