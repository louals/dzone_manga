import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Sun, Moon, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs';

const Navbar = ({ darkMode, setDarkMode, cartCount }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-[60]">
            <motion.img 
              src="/image.png" 
              alt="DZone Manga" 
              className="h-10 md:h-12 w-auto"
              whileHover={{ rotate: 10, scale: 1.1 }}
            />
            <span className="font-heading text-xl md:text-2xl font-black tracking-tighter">
              D<span className="text-primary">ZONE</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/shop">Boutique</NavLink>
            <NavLink to="/about">À Propos</NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4 md:space-x-6 relative z-[60]">
            <button className="text-dark dark:text-white hover:text-primary transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <Link to="/cart" className="relative group">
              <ShoppingBag size={20} className="text-dark dark:text-white group-hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
            <button 
              className="md:hidden text-dark dark:text-white" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white dark:bg-dark flex flex-col items-center justify-center space-y-12 md:hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden text-center flex items-center justify-center">
              <img src="/image.png" alt="" className="w-full h-full object-contain rotate-12 scale-150" />
            </div>
            
            <div className="flex flex-col items-center space-y-8 relative z-10">
              <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Accueil</MobileNavLink>
              <MobileNavLink to="/shop" onClick={() => setIsOpen(false)}>Boutique</MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>À Propos</MobileNavLink>
            </div>

            <div className="flex flex-col items-center gap-6 relative z-10 pt-12 border-t border-gray-100 dark:border-gray-800 w-64">
              <span className="text-gray-400 font-black text-xs uppercase tracking-[0.3em]">Suivez-nous</span>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/dzone_manga" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-white hover:text-primary transition-colors">
                  <BsInstagram size={24} />
                </a>
                <a href="https://www.facebook.com/people/Dzone-Manga/61572305105246/#" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-white hover:text-primary transition-colors">
                  <BsFacebook size={24} />
                </a>
                <a href="https://www.tiktok.com/@dzonemanga" target="_blank" rel="noopener noreferrer" className="text-dark dark:text-white hover:text-primary transition-colors">
                  <BsTiktok size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="font-heading font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    onClick={onClick}
    className="block font-heading font-black uppercase tracking-[0.2em] text-4xl hover:text-primary transition-colors"
  >
    {children}
  </Link>
);

export default Navbar;
