'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Menu, 
  X, 
  Sparkles, 
  Users, 
  Trophy, 
  BookOpen, 
  PhoneCall,
  Terminal
} from 'lucide-react';

/**
 * ============================================================================
 * NAVIGATION DATA PROTOCOL
 * ----------------------------------------------------------------------------
 * Updated hrefs to match the existing file structure:
 * - About Us: /about
 * - Placement: /#placements (Homepage section anchor)
 * - Courses: /courses
 * - Contact Us: /contact
 * ============================================================================
 */
const navLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Placement', href: '/placements', icon: Trophy },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'Contact Us', href: '/contact', icon: PhoneCall },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Monitor scroll to adjust transparency and floating depth
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* -----------------------------------------------------------------------
        1. FLOATING NAV CONTAINER
        -----------------------------------------------------------------------
      */}
      <div className="fixed top-6 left-0 w-full z-[100] px-6 pointer-events-none">
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className={`
            pointer-events-auto mx-auto max-w-6xl transition-all duration-700 ease-in-out
            rounded-full border border-white/40 bg-white/60 backdrop-blur-2xl
            ${isScrolled ? 'shadow-[0_20px_50px_rgba(0,0,0,0.05)] py-3 px-4' : 'shadow-none py-5 px-8'}
          `}
        >
          <div className="flex justify-between items-center">
            
            {/* LOGO - Premium Identity */}
            <Link href="/" className="relative group overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-lg shadow-purple-200 group-hover:rotate-[15deg] transition-transform duration-500">
                  <Terminal size={20} />
                </div>
                <span className="text-2xl font-black tracking-tighter text-gray-900">
                  CODE<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:tracking-widest transition-all duration-700 uppercase">IT.</span>
                </span>
              </div>
            </Link>

            {/* DESKTOP LINKS - High-Fidelity Hover State */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredPath(link.name)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className="relative px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 transition-colors"
                >
                  <AnimatePresence>
                    {hoveredPath === link.name && (
                      <motion.span
                        layoutId="nav-pill"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute inset-0 bg-purple-50 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <span className="relative flex items-center gap-2">
                    {link.name}
                    {hoveredPath === link.name && (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <link.icon size={12} className="text-purple-600" />
                      </motion.span>
                    )}
                  </span>
                </Link>
              ))}
            </div>

            {/* ACTION CENTER - Luminous Button */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/contact">
                <button className="group relative flex items-center gap-4 bg-gray-900 text-white px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] shadow-xl overflow-hidden transition-all hover:scale-105 active:scale-95">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Book Free Demo</span>
                  <div className="relative z-10 bg-white/20 rounded-full p-1 group-hover:translate-x-2 transition-transform duration-500">
                    <ChevronRight size={14} />
                  </div>
                </button>
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button 
              className="lg:hidden relative p-2 text-gray-900 hover:bg-purple-50 rounded-full transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* -----------------------------------------------------------------------
        2. MOBILE MENU OVERLAY
        -----------------------------------------------------------------------
      */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-white pt-32 px-10 pb-10 flex flex-col lg:hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] -z-10" />
            
            <div className="space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between py-5 border-b border-gray-100"
                  >
                    <span className="text-4xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-purple-600 transition-colors">
                      {link.name}
                    </span>
                    <link.icon size={24} className="text-purple-200 group-hover:text-purple-600 transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto space-y-8">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-6 rounded-3xl font-black text-xs uppercase tracking-widest shadow-2xl shadow-purple-200 active:scale-95 transition-transform">
                  Initialize Enrollment
                </button>
              </Link>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">
                  Pune Tech Hub — Established 2021
                </span>
                <Sparkles size={16} className="text-purple-300" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
