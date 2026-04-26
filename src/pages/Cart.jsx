import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, ArrowRight, ShoppingBag, CreditCard, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeFromCart }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pb-32 md:pb-12"
    >
      <h1 className="text-4xl md:text-7xl font-black mb-8 md:mb-12 tracking-tighter uppercase leading-none">
        Votre <span className="text-primary italic">Loot</span>
      </h1>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16">
          {/* Item List */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            {cart.map((item, idx) => (
              <motion.div 
                key={`${item.id}-${idx}`}
                layout
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex gap-4 md:gap-6 p-4 md:p-6 border-2 border-gray-100 dark:border-gray-800 rounded-2xl hover:border-dark dark:hover:border-white transition-colors"
              >
                <div className="w-24 md:w-32 aspect-square manga-panel flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg md:text-2xl font-black tracking-tighter uppercase leading-tight">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 font-black uppercase tracking-widest text-[8px] md:text-xs mb-2">{item.category}</p>
                    <p className="text-sm md:text-xl font-black text-primary">{item.price.toLocaleString()} DA</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-[10px] md:text-sm font-black uppercase tracking-widest text-gray-500">
                      Qté: {item.quantity || 1}
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 font-black uppercase text-[10px] tracking-widest"
                    >
                      <Trash2 size={14} /> <span className="hidden sm:inline">Supprimer</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-6 md:p-10 bg-gray-50 dark:bg-gray-900 border-2 border-dark dark:border-white manga-panel shadow-none">
              <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter uppercase border-b-2 border-gray-200 dark:border-gray-800 pb-4">Résumé</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between font-black uppercase tracking-widest text-[10px] md:text-sm text-gray-500">
                  <span>Sous-total</span>
                  <span>{subtotal.toLocaleString()} DA</span>
                </div>
                <div className="flex justify-between font-black uppercase tracking-widest text-[10px] md:text-sm text-gray-500">
                  <span>Livraison</span>
                  <span>{shipping.toLocaleString()} DA</span>
                </div>
                <div className="pt-4 border-t-2 border-gray-200 dark:border-gray-800 flex justify-between items-center">
                  <span className="text-xl md:text-2xl font-black tracking-tighter uppercase">Total</span>
                  <span className="text-xl md:text-2xl font-black tracking-tighter text-primary italic">{total.toLocaleString()} DA</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full btn-primary h-14 flex items-center justify-center gap-3 text-sm">
                  <CreditCard size={20} /> Commander
                </button>
                <Link to="/shop" className="w-full btn-secondary h-14 flex items-center justify-center gap-3 text-sm">
                  Continuer
                </Link>
              </div>

              <div className="mt-8 md:mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
                <div className="flex items-center gap-2 text-gray-400">
                  <ShieldCheck size={14} className="text-primary" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Paiement Sécurisé SSL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 md:py-32 bg-gray-50 dark:bg-gray-900 rounded-3xl border-4 border-dashed border-gray-200 dark:border-gray-800 px-6">
          <ShoppingBag size={64} className="mx-auto text-gray-300 dark:text-gray-700 mb-6" />
          <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tighter uppercase">Votre panier est vide</h2>
          <p className="text-gray-500 font-black uppercase tracking-widest text-[10px] mb-10">Le loot vous attend dans le Vault...</p>
          <Link to="/shop" className="btn-primary px-10">Boutique</Link>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
