
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Heart } from 'lucide-react';

const GrassRollingDream = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-3xl p-8 shadow-lg theme-transition"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mb-4"
        >
          <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full mx-auto flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌱
            </motion.div>
          </div>
        </motion.div>

        <motion.h3 
          className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4"
          whileHover={{ scale: 1.05 }}
        >
          My Weirdly Specific Dream 🌿
        </motion.h3>

        <motion.p 
          className="text-green-700 dark:text-green-300 leading-relaxed mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Okay, this might sound totally random, but I have this super specific ambition to 
          <motion.span 
            className="font-semibold px-2 py-1 bg-green-200 dark:bg-green-800 rounded-lg mx-1"
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            frolic and roll around on pristine grass
          </motion.span>
          like the kind you see in Japan or Europe! 🇯🇵🇪🇺
        </motion.p>

        <motion.p 
          className="text-green-600 dark:text-green-400 text-sm mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          The grass here is... well, let's just say it's not exactly "rolling-friendly." 
          I dream of those Instagram-worthy meadows where you can just throw yourself down 
          without worrying about what you might land on! 😅
        </motion.p>

        <div className="flex items-center justify-center gap-6 text-sm">
          <motion.div 
            className="flex items-center gap-2 text-green-600 dark:text-green-400"
            whileHover={{ scale: 1.1 }}
          >
            <MapPin className="w-4 h-4" />
            <span>Target: Swiss Alps</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-green-600 dark:text-green-400"
            whileHover={{ scale: 1.1 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Status: Dreaming</span>
          </motion.div>
          <motion.div 
            className="flex items-center gap-2 text-green-600 dark:text-green-400"
            whileHover={{ scale: 1.1 }}
          >
            <Heart className="w-4 h-4" />
            <span>Priority: High</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GrassRollingDream;
