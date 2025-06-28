
import { motion } from 'framer-motion';
import { SpinnerLoader } from './LoadingAnimations';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-navy-50 via-gold-50 to-navy-100 dark:from-navy-900 dark:via-navy-800 dark:to-gold-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 1
          }}
          className="mb-8"
        >
          <SpinnerLoader size={64} />
        </motion.div>
        
        <motion.h2
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-2xl font-light text-navy-700 dark:text-gold-300 mb-4"
        >
          Loading...
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-navy-400 to-gold-400 rounded-full mx-auto"
          style={{ maxWidth: "200px" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
