
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import About from '../components/About';
import Manga from '../components/Manga';
import Music from '../components/Music';
import Goals from '../components/Goals';
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';
import InteractiveCursor from '../components/InteractiveCursor';
import ParticleSystem from '../components/ParticleSystem';
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
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white relative theme-transition">
      <InteractiveCursor />
      <ParticleSystem />
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
            <Music />
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
