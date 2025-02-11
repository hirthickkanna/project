import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import HeaderAnimation from '../three/HeaderAnimation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-4 z-50 px-4">
      <HeaderAnimation />
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`mx-auto max-w-[600px] rounded-full transition-all duration-300 ${
          isScrolled ? 'bg-black/80' : 'bg-black/40'
        } backdrop-blur-lg border border-white/10`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
              <Link to="/projects" className="text-white/90 hover:text-white transition-colors">Projects</Link>
            </div>

            <Link to="/" className="text-xl font-bold text-white">
              Portfolio
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4"
              >
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
                  <Link to="/projects" className="text-white/90 hover:text-white transition-colors">Projects</Link>
                  <Link to="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
                  <Link to="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default Header;