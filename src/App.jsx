import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import About from './pages/About';
import Cart from './pages/Cart';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        <div className="noise-overlay" />
        <ScrollToTop />
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          cartCount={cart.length} 
        />
        
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home addToCart={addToCart} />} />
              <Route path="/shop" element={<Shop addToCart={addToCart} />} />
              <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
