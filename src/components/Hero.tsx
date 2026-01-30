'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useMotionTemplate
} from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  PlayCircle,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Zap,
  Trophy,
} from 'lucide-react';

/**
 * ============================================================================
 * ANIMATION VARIANTS
 * ============================================================================
 */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};


const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      // Add "as const" here to fix the type error
      ease: [0.16, 1, 0.3, 1] as const, 
    },
  },
};

const pulseGlow = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/**
 * ============================================================================
 * SUB-COMPONENTS
 * ============================================================================
 */

const FloatingBubble = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, y: 20 }}
    animate={{ 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { delay, duration: 0.8, ease: "easeOut" }
    }}
    whileHover={{ y: -10, scale: 1.1, transition: { duration: 0.3 } }}
    className={`absolute z-30 flex items-center gap-3 p-3 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white/50 cursor-pointer ${className}`}
  >
    {children}
  </motion.div>
);


/**
 * ============================================================================
 * MAIN HERO COMPONENT
 * ============================================================================
 */

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const spotlight = useMotionTemplate`radial-gradient(
    650px circle at ${mouseX}px ${mouseY}px,
    rgba(168, 85, 247, 0.05),
    transparent 80%
  )`;

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-40 z-10"
    >
      {/* -----------------------------------------------------------------------
        1. CRYSTAL CLEAR BACKGROUND VIDEO LAYER
        -----------------------------------------------------------------------
      */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{ filter: 'none' }} // Ensuring no filters or blurs
        >
          <source src="/images/hero-bg-video2.mp4" type="video/mp4" />
        </video>
        
        {/* Luminous Light-Theme Overlays */}
        <div className="absolute inset-0 " />
        {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.1)_0%,_rgba(236,72,153,0.03)_25%,_rgba(255,255,255,0)_60%)]" /> */}
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px)`, backgroundSize: '32px 32px' }} />
      </div>

      <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: spotlight }} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20 flex-1 flex flex-col items-center text-center">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl space-y-10"
        >
          {/* Admission Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="p-[1px] rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-purple-200">
              <div className="px-6 py-2 rounded-full bg-white/90 backdrop-blur-md flex items-center gap-3">
                <div className="flex -space-x-2">
                   {[1,2,3].map(i => <div key={i} className="w-5 h-5 rounded-full bg-purple-50 border-2 border-white flex items-center justify-center text-[8px] font-black text-purple-600">{i}</div>)}
                </div>
                <span className="text-[10px] font-black text-purple-900 uppercase tracking-[0.3em]">Admissions Open 2025-26</span>
                <Sparkles size={14} className="text-pink-500 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Master Headline */}
          <div className="space-y-6">
            <motion.h1 variants={itemVariants} className="text-7xl md:text-8xl lg:text-[110px] font-black text-gray-900 leading-[0.85] tracking-tighter uppercase">
              Drive <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">Career Growth</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-xl md:text-3xl font-black text-purple-950 uppercase tracking-[0.4em] opacity-80">
              Autonomous Success Paths
            </motion.h2>

            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-lg md:text-xl text-gray-800 font-bold leading-relaxed italic drop-shadow-sm">
              "Bridging the gap between academic learning and industry demands through visionary leadership and specialized IT training protocols."
            </motion.p>
          </div>

          {/* Action Matrix */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-8 pt-8">
            <button className="group relative px-12 py-6 rounded-full bg-gray-900 text-white font-black text-sm uppercase tracking-[0.4em] overflow-hidden shadow-2xl transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-4">Enroll Today <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-full border-2 border-purple-100 flex items-center justify-center bg-white/90 shadow-xl transition-all group-hover:border-purple-500">
                <PlayCircle fill="#A855F7" className="text-white w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-black text-purple-300 uppercase tracking-widest leading-none mb-1">Success Stories</p>
                <p className="text-xs font-black text-gray-900 uppercase tracking-widest leading-none">Watch Alumni</p>
              </div>
            </button>
          </motion.div>
        </motion.div>

        {/* ---------------- CENTERPIECE VISUAL ---------------- */}
 
      </div>

      <style jsx global>{`
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
      `}</style>
    </section>
  );
}