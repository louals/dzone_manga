import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ArrowLeft, Star, ShieldCheck, Truck, RefreshCw, Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductPage = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="text-center py-24 font-black uppercase">Produit non trouvé</div>;
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[10px] md:text-sm font-black uppercase tracking-widest text-gray-400 hover:text-primary mb-8 md:mb-12 transition-colors"
      >
        <ArrowLeft size={14} /> Retour au Vault
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-24">
        {/* Gallery */}
        <div className="space-y-4 md:space-y-6">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="manga-panel aspect-[4/5] bg-gray-100 dark:bg-gray-800"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="grid grid-cols-4 gap-2 md:gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square manga-panel opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <img src={product.image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="space-y-8 md:space-y-10">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-primary/10 text-primary font-black text-[10px] px-3 py-1 uppercase tracking-widest border border-primary/20">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <span className="text-gray-400 text-[10px] font-black ml-2 uppercase">(48 Avis)</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase leading-none">{product.name}</h1>
            <p className="text-2xl md:text-3xl font-black text-primary italic">{product.price.toLocaleString()} DA</p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed font-medium">
            {product.description} Plus qu'un simple article, c'est une pièce de collection unique conçue pour les véritables passionnés de culture manga. Qualité supérieure garantie.
          </p>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center justify-between border-2 border-dark dark:border-white h-14 px-2">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="px-6 font-black text-xl">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button 
                onClick={() => addToCart({...product, quantity})}
                className="flex-grow btn-primary h-14 flex items-center justify-center gap-3 text-sm"
              >
                <ShoppingCart size={20} /> Ajouter au Panier
              </button>
              <button className="hidden sm:flex h-14 w-14 items-center justify-center border-2 border-dark dark:border-white hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Heart size={20} />
              </button>
            </div>
            
            <button className="w-full flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-primary transition-colors py-2">
              <Share2 size={14} /> Partager ce drop
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-10 border-t border-gray-200 dark:border-gray-800">
            <Feature icon={<Truck size={18} />} text="Livraison DZ Express" />
            <Feature icon={<ShieldCheck size={18} />} text="100% Authentique" />
            <Feature icon={<RefreshCw size={18} />} text="Échange sous 7j" />
            <Feature icon={<Star size={18} />} text="DZone Rewards" />
          </div>
        </div>
      </div>

      {/* Sticky Mobile Add to Cart Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-dark/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 p-4 md:hidden">
        <div className="flex items-center gap-4">
          <div className="flex-grow">
            <p className="text-[10px] font-black uppercase text-gray-400 leading-none mb-1">Total</p>
            <p className="text-lg font-black text-primary leading-none">{(product.price * quantity).toLocaleString()} DA</p>
          </div>
          <button 
            onClick={() => addToCart({...product, quantity})}
            className="bg-primary text-white h-12 px-8 font-black uppercase tracking-widest text-xs rounded-xl active:scale-95 transition-transform"
          >
            Acheter
          </button>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-24 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-black mb-12 tracking-tighter uppercase">VOUS POURRIEZ AUSSI <span className="text-primary italic">AIMER</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
    <div className="text-primary">{icon}</div>
    <span className="text-[10px] font-black uppercase tracking-widest leading-none">{text}</span>
  </div>
);

export default ProductPage;
