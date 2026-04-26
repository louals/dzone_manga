import React from 'react';
import { Zap, ShieldCheck, Star, Truck } from 'lucide-react';

const TrustBadges = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Badge icon={<Zap className="text-primary" />} title="Livraison Rapide" desc="Livraison en 48h sur tous les drops" />
        <Badge icon={<ShieldCheck className="text-primary" />} title="100% Authentique" desc="Produits certifiés d'origine" />
        <Badge icon={<Star className="text-primary" />} title="Avantages Club" desc="Accès anticipé aux nouveautés" />
        <Badge icon={<Truck className="text-primary" />} title="Emballage Safe" desc="Arrivée garantie en état mint" />
      </div>
    </section>
  );
};

const Badge = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 border-2 border-gray-100 dark:border-gray-800 rounded-2xl hover:border-primary transition-colors duration-300">
    <div className="mb-4">{icon}</div>
    <h4 className="font-heading font-bold text-lg mb-2 uppercase tracking-tighter">{title}</h4>
    <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">{desc}</p>
  </div>
);

export default TrustBadges;
