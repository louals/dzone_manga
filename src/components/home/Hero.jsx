import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const y = useSpring(rawY, { stiffness: 100, damping: 30 });
  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 30 });
  const smoothImageY = useSpring(imageY, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col items-center overflow-hidden bg-dark pt-20 pb-24 md:pt-32 md:pb-32"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: smoothImageY }}
        className="absolute inset-0 z-0 h-[110%]"
      >
        <img
          src="/hero.png"
          alt="DZone Hero"
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure UI visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* Top Content: Logo */}
      <div className="relative z-10 w-full px-6 flex justify-center">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <img 
            src="/image.png" 
            alt="Logo" 
            className="h-32 md:h-64 w-auto drop-shadow-[0_0_50px_rgba(231,76,60,0.5)] transition-all duration-700 group-hover:scale-105" 
          />
        </motion.div>
      </div>

      {/* Spacer to push buttons down */}
      <div className="flex-grow" />

      {/* Bottom Content: Buttons */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full px-6 max-w-4xl flex flex-col items-center"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto"
        >
          <Link
            to="/shop"
            className="btn-primary flex items-center justify-center gap-3 group text-xl py-5 px-12 shadow-[0_0_30px_rgba(231,76,60,0.4)]"
          >
            Boutique 
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="border-2 border-black bg-white flex items-center justify-center gap-3 text-xl py-5 px-12 shadow-2xl"
          >
            Notre Histoire
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/40"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;