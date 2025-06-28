
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import About from '../components/About';
import Manga from '../components/Manga';
import Goals from '../components/Goals';
import Hobbies from '../components/Hobbies';
import Footer from '../components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
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
