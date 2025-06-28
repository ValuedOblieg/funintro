import { motion } from 'framer-motion';
import { GraduationCap, School, Home } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            delay: 0.2 
          }}
          className="w-32 h-32 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl"
        >
          <GraduationCap className="w-16 h-16 text-white" />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent mb-6"
        >
          Hello, I'm Alex
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <School className="w-5 h-5" />
            <span className="text-lg">16 years old • High School Student</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-slate-600">
            <Home className="w-5 h-5" />
            <span className="text-lg">Ignatius Global School Palembang</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-xl text-slate-500 max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          Welcome to my corner of the internet! Scroll down to discover my world of manga, 
          dreams of Swiss adventures, and my totally productive hobby of TikTok scrolling.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400"
          >
            ↓ Scroll to explore ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
