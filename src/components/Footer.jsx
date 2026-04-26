import React from 'react';
import { Link } from 'react-router-dom';
import { Send } from 'lucide-react';
import { BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t-4 border-dark dark:border-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/image.png" alt="Logo" className="h-10 w-auto" />
              <span className="font-heading text-xl font-black tracking-tighter">DZONE</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
              La destination ultime pour les amoureux de manga, collectionneurs et passionnés de streetwear. Entrez dans la Zone.
            </p>
            <div className="flex space-x-4">
              <SocialIcon 
                href="https://www.instagram.com/dzone_manga" 
                icon={<BsInstagram size={20} />} 
              />
              <SocialIcon 
                href="https://www.facebook.com/people/Dzone-Manga/61572305105246/#" 
                icon={<BsFacebook size={20} />} 
              />
              <SocialIcon 
                href="https://www.tiktok.com/@dzonemanga" 
                icon={<BsTiktok size={20} />} 
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black uppercase tracking-wider mb-6 text-primary">Boutique</h4>
            <ul className="space-y-4">
              <FooterLink to="/shop?cat=manga">Manga</FooterLink>
              <FooterLink to="/shop?cat=figures">Figurines</FooterLink>
              <FooterLink to="/shop?cat=clothing">Vêtements</FooterLink>
              <FooterLink to="/shop?cat=accessories">Accessoires</FooterLink>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-heading font-black uppercase tracking-wider mb-6 text-primary">Support</h4>
            <ul className="space-y-4">
              <FooterLink to="/about">Notre Histoire</FooterLink>
              <FooterLink to="#">Livraison</FooterLink>
              <FooterLink to="#">Confidentialité</FooterLink>
              <FooterLink to="#">Contactez-nous</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-black uppercase tracking-wider mb-6 text-primary">Newsletter</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">
              Profitez de -10% sur votre première commande et restez à l'affût des derniers drops.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white dark:bg-dark border-4 border-dark dark:border-white px-4 py-2 flex-grow focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white px-4 py-2 border-y-4 border-r-4 border-dark dark:border-white hover:bg-dark transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-dark dark:border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-xs font-black uppercase tracking-widest">
            © 2026 DZone Manga. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-[10px] text-gray-500 font-black uppercase tracking-widest">
            <span className="hover:text-primary cursor-pointer">Conditions</span>
            <span className="hover:text-primary cursor-pointer">Cookies</span>
            <span className="hover:text-primary cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 flex items-center justify-center border-2 border-dark dark:border-white rounded-none hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-black uppercase text-xs tracking-widest">
      {children}
    </Link>
  </li>
);

export default Footer;
