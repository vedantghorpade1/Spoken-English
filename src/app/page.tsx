'use client';

import React from 'react';
import Navbar from '@/src/components/Navbar';
import Hero from '@/src/components/Hero';
import Footer from '@/src/components/Footer'; 


/**
 * Main Assembler for the CODE IT Extravagant Home Page.
 * This file brings together the high-end industrial minimalist components.
 */
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white selection:bg-purple-600 selection:text-white">
      
      {/* 1. ARCHITECTURAL NAVIGATION */}
      <Navbar />

      {/* 2. HERO PROTOCOL - Viewport Cover */}
      <Hero />
    </main>
  );
}