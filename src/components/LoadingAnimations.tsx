
import { motion } from 'framer-motion';

export const SpinnerLoader = ({ size = 40 }: { size?: number }) => (
  <motion.div
    className="relative inline-block"
    style={{ width: size, height: size }}
  >
    <motion.div
      className="absolute inset-0 border-4 border-navy-200 dark:border-gold-200 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      style={{
        borderTopColor: 'transparent',
        borderRightColor: 'var(--gold-500)',
      }}
    />
  </motion.div>
);

export const PulseLoader = () => (
  <div className="flex space-x-2">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-3 h-3 bg-navy-500 dark:bg-gold-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
);

export const SkeletonLoader = ({ className }: { className?: string }) => (
  <motion.div
    className={`bg-gradient-to-r from-navy-100 to-gold-100 dark:from-navy-700 dark:to-gold-700 rounded ${className}`}
    animate={{
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    }}
    style={{
      backgroundSize: '200% 100%',
    }}
  />
);
