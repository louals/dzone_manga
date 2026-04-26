import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Categories from '../components/home/Categories';
import NewDrops from '../components/home/NewDrops';
import TrustBadges from '../components/home/TrustBadges';
import Newsletter from '../components/home/Newsletter';
import Location from '../components/home/Location';

const Home = ({ addToCart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24 pb-24"
    >
      <Hero />
      <Categories />
      <NewDrops addToCart={addToCart} />
      <TrustBadges />
      <Location />
      <Newsletter />
    </motion.div>
  );
};

export default Home;
