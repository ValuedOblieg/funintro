
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import About from '../components/About';
import Manga from '../components/Manga';
import Goals from '../components/Goals';
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';
import InteractiveCursor from '../components/InteractiveCursor';
import ParticleSystem from '../components/ParticleSystem';
import EasterEggs from '../components/EasterEggs';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-50 via-gold-50 to-navy-100 dark:from-navy-900 dark:via-navy-800 dark:to-gold-900 relative transition-colors duration-500">
      <InteractiveCursor />
      <ParticleSystem />
      <EasterEggs />
      <ThemeSwitcher />
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <Hero />
            <About />
            <Manga />
            <Goals />
            <Hobbies />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
