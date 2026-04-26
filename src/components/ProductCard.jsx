import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCart }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: window.innerWidth > 768 ? rotateX : 0,
        rotateY: window.innerWidth > 768 ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <div className="relative aspect-[3/4] overflow-hidden manga-panel border-2 md:border-4 border-dark dark:border-white shadow-none md:group-hover:shadow-[12px_12px_0px_0px_#E74C3C] transition-all duration-300">
        {product.isNew && (
          <div className="absolute top-4 left-4 z-20 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 tracking-widest border-2 border-dark">
            Nouveau
          </div>
        )}
        
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110" 
        />
        
        {/* Overlay Actions - Visible on Hover (Desktop) or always (Mobile) */}
        <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <Link 
            to={`/product/${product.id}`}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-white transition-all scale-75 group-hover:scale-100"
          >
            <Eye size={20} />
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white hover:bg-dark transition-all scale-75 group-hover:scale-100"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>

      <div className="mt-4 md:mt-6 space-y-2">
        <div className="flex justify-between items-start gap-2">
          <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors flex-grow">
            <h3 className="font-heading font-black text-sm md:text-xl leading-tight uppercase tracking-tight line-clamp-2 md:line-clamp-none">
              {product.name}
            </h3>
          </Link>
          <p className="font-heading font-black text-xs md:text-xl text-primary flex-shrink-0 italic">
            {product.price.toLocaleString()} DA
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
