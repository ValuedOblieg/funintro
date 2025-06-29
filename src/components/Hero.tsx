
import { motion } from 'framer-motion';
import { GraduationCap, School, Home, Coffee, Heart, Star, Github } from 'lucide-react';
import ParallaxWrapper from './ParallaxWrapper';

const Hero = () => {
  const funIcons = [Coffee, Heart, Star, GraduationCap];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements with parallax */}
      <ParallaxWrapper speed={0.3} className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const Icon = funIcons[i % funIcons.length];
          return (
            <motion.div
              key={i}
              className="absolute opacity-20 dark:opacity-10"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                rotate: [0, 360, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Icon className="w-6 h-6 text-gray-400 dark:text-gray-600" />
            </motion.div>
          );
        })}
      </ParallaxWrapper>

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 rounded-full mx-auto mb-6 sm:mb-8 flex items-center justify-center shadow-xl hover-effect theme-transition"
        >
          <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-white dark:text-black" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4 sm:mb-6 hover-effect"
        >
          Hello, I'm Farrel 👋
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-3 sm:space-y-4 mb-6"
        >
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 flex-wrap">
            <School className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-base sm:text-lg text-center">16 years old • High School Student • ISFP sx964</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 flex-wrap">
            <Home className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="text-base sm:text-lg text-center">Ignatius Global School Palembang</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Welcome to my corner of the internet! 🌟 Scroll down to discover my world of manga, 
          dreams of Swiss adventures, music obsessions, and my totally productive hobby of TikTok scrolling. 📱✨
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-col items-center gap-4"
        >
          <motion.a
            href="https://github.com/farrel-a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover-effect theme-transition"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View My GitHub</span>
          </motion.a>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-500 dark:text-gray-400 hover-effect cursor-pointer text-base sm:text-lg"
          >
            ↓ Scroll to explore ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
