import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs';

const Navbar = ({ darkMode, setDarkMode, cartCount }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
              <ShoppingBag
                size={20}
                className="text-dark dark:text-white group-hover:text-primary transition-colors"
              />
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
              className="md:hidden text-dark dark:text-white z-[110] relative"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={24} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={24} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — rendered via Portal to escape nav stacking context */}
      {typeof document !== 'undefined' &&
        ReactDOM.createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[100] bg-dark flex flex-col md:hidden overflow-hidden"
              >
                {/* Scrolling Manga Strip Background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="flex whitespace-nowrap h-full items-center"
                  >
                    {[...Array(10)].map((_, i) => (
                      <img
                        key={i}
                        src="/image.png"
                        alt=""
                        className="h-[50vh] object-contain mx-10 grayscale invert"
                      />
                    ))}
                  </motion.div>
                </div>

                {/* Menu Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6">
                  <nav className="flex flex-col gap-4">
                    {[
                      { to: '/', label: 'Accueil' },
                      { to: '/shop', label: 'Boutique' },
                      { to: '/about', label: 'À Propos' },
                      { to: '/cart', label: `Panier (${cartCount})` },
                    ].map((link, i) => (
                      <motion.div
                        key={link.to}
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.15 + i * 0.08 }}
                      >
                        <Link
                          to={link.to}
                          onClick={() => setIsOpen(false)}
                          className="group relative inline-block py-2"
                        >
                          <span className="text-6xl font-heading font-black uppercase tracking-tighter text-white group-hover:text-primary transition-all duration-300 block">
                            {link.label}
                          </span>
                          <motion.span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-500" />
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Bottom Section with Socials */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative z-10 p-10 flex flex-col items-center border-t border-white/10 bg-dark/50 backdrop-blur-sm"
                >
                  <div className="flex gap-10 mb-6">
                    {[
                      { icon: BsInstagram, href: 'https://www.instagram.com/dzone_manga' },
                      {
                        icon: BsFacebook,
                        href: 'https://www.facebook.com/people/Dzone-Manga/61572305105246/#',
                      },
                      { icon: BsTiktok, href: 'https://www.tiktok.com/@dzonemanga' },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ scale: 1.2, color: '#FF5E4D' }}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 transition-colors"
                      >
                        <social.icon size={32} />
                      </motion.a>
                    ))}
                  </div>
                  <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.5em]">
                    © 2026 DZone Manga — L'esprit Shonen
                  </p>
                </motion.div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rotate-45 translate-x-16 -translate-y-16 pointer-events-none" />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
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

export default Navbar;