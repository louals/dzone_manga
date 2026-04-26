import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, ChevronDown, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';

const Shop = ({ addToCart }) => {
  const [searchParams] = useSearchParams();
  const catParam = searchParams.get('cat');
  
  const [category, setCategory] = useState(catParam || 'all');
  const [priceRange, setPriceRange] = useState(50000);
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    if (catParam) setCategory(catParam);
  }, [catParam]);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCat = category === 'all' || p.category === category;
    const matchesPrice = p.price <= priceRange;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesPrice && matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12"
    >
      {/* HEADER */}
      <div className="mb-10 md:mb-12">
        <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase leading-none">
          Le <span className="text-primary italic">Shop</span>
        </h1>
        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-xs">
          Parcourez notre collection complète d'essentiels anime
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* MOBILE FILTER TOGGLE */}
        <button 
          onClick={() => setShowFilters(true)}
          className="lg:hidden flex items-center justify-center gap-2 bg-dark dark:bg-white text-white dark:text-dark py-4 px-6 font-black uppercase tracking-widest text-xs rounded-xl border-2 border-dark dark:border-white shadow-[6px_6px_0px_0px_#E74C3C]"
        >
          <Filter size={16} /> Filtres & Catégories
        </button>

        {/* SIDEBAR */}
        <AnimatePresence mode="wait">
          {(showFilters || isDesktop) && (
            <>
              {/* Mobile Overlay */}
              {showFilters && !isDesktop && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black z-[60] lg:hidden"
                  onClick={() => setShowFilters(false)}
                />
              )}

              <motion.aside
                initial={isDesktop ? false : { x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className={`
                  fixed lg:relative
                  top-0 left-0
                  z-[70] lg:z-0
                  h-full lg:h-auto
                  w-[300px] lg:w-72
                  bg-white dark:bg-dark
                  p-8 lg:p-0
                  overflow-y-auto lg:overflow-visible
                  border-r-4 border-dark lg:border-0
                `}
              >
                {/* Mobile Header */}
                {!isDesktop && (
                  <div className="flex justify-between items-center mb-10">
                    <h2 className="font-black text-2xl uppercase tracking-tighter">Filtres</h2>
                    <button 
                      onClick={() => setShowFilters(false)}
                      className="p-2 border-2 border-dark dark:border-white rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                )}

                {/* Categories Section */}
                <div className="space-y-6">
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter flex items-center gap-2 border-b-4 border-primary pb-2">
                    <Filter size={20} className="text-primary" />
                    Catégories
                  </h3>
                  <div className="flex flex-col gap-2">
                    <FilterButton 
                      active={category === 'all'} 
                      onClick={() => { setCategory('all'); if(!isDesktop) setShowFilters(false); }}
                    >
                      Tous les Articles
                    </FilterButton>
                    {CATEGORIES.map(cat => (
                      <FilterButton 
                        key={cat.id}
                        active={category === cat.id} 
                        onClick={() => { setCategory(cat.id); if(!isDesktop) setShowFilters(false); }}
                      >
                        {cat.name}
                      </FilterButton>
                    ))}
                  </div>
                </div>

                {/* Price Range Section */}
                <div className="mt-12 space-y-6">
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tighter flex items-center gap-2 border-b-4 border-primary pb-2">
                    <SlidersHorizontal size={20} className="text-primary" />
                    Budget
                  </h3>
                  <div className="px-2">
                    <p className="text-primary font-black text-lg mb-4 italic">{priceRange.toLocaleString()} DA MAX</p>
                    <input 
                      type="range" 
                      min="0" 
                      max="50000" 
                      step="1000"
                      value={priceRange}
                      onChange={(e) => setPriceRange(parseInt(e.target.value))}
                      className="w-full accent-primary h-2 bg-gray-200 dark:bg-gray-800 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-2 text-[10px] font-black uppercase text-gray-400">
                      <span>0 DA</span>
                      <span>50,000 DA</span>
                    </div>
                  </div>
                </div>

                {/* Help Box */}
                <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 border-4 border-dark dark:border-white relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                  <h4 className="font-black text-sm mb-3 uppercase tracking-widest text-primary">Besoin d'aide ?</h4>
                  <p className="text-xs font-bold leading-relaxed mb-6">Un produit spécifique en tête ? Notre équipe est là pour vous.</p>
                  <button className="w-full bg-dark dark:bg-white text-white dark:text-dark py-3 font-black uppercase text-[10px] tracking-widest hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all">
                    Chattez avec nous
                  </button>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* MAIN CONTENT */}
        <div className="flex-grow">
          {/* Top Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Rechercher dans le Vault..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-900 border-4 border-transparent focus:border-dark dark:focus:border-white focus:outline-none transition-all font-bold text-sm rounded-none"
              />
            </div>
            <div className="relative w-full sm:w-auto flex-shrink-0">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none w-full sm:w-64 bg-white dark:bg-dark border-4 border-dark dark:border-white px-6 py-4 pr-12 font-black uppercase tracking-widest text-xs focus:outline-none cursor-pointer"
              >
                <option value="popular">Trier par Popularité</option>
                <option value="newest">Nouveautés</option>
                <option value="low-high">Prix : Croissant</option>
                <option value="high-low">Prix : Décroissant</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="text-center py-32 border-4 border-dashed border-gray-200 dark:border-gray-800">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Aucun article trouvé</h3>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Ajustez vos filtres pour voir plus de loot</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

/* FILTER BUTTON COMPONENT */
const FilterButton = ({ children, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left px-5 py-4 font-black uppercase tracking-widest text-[11px] transition-all duration-300 border-l-8 ${
      active 
        ? 'border-primary bg-primary/10 text-primary translate-x-2' 
        : 'border-transparent text-gray-400 hover:text-dark dark:hover:text-white hover:border-gray-200 dark:hover:border-gray-700 hover:translate-x-1'
    }`}
  >
    {children}
  </button>
);

export default Shop;