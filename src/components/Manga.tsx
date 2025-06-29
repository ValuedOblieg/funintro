
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Heart, Star, ExternalLink } from 'lucide-react';

const Manga = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const floatVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: [-10, 10, -10],
      opacity: 1,
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        opacity: {
          duration: 0.5
        }
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-l from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 theme-transition">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-black dark:text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            My Manga Obsession
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Where stories come alive and emotions hit different
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl relative overflow-hidden theme-transition">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-bl-full opacity-50 theme-transition"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    <Book className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">Current Favorite</h3>
                </div>
                
                <motion.h4 
                  className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4"
                  whileHover={{ scale: 1.02 }}
                >
                  "The Fragrant Flowers Blooms With Dignity"
                </motion.h4>
                
                <div className="flex items-center gap-6 mb-6">
                  <motion.div
                    variants={floatVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex-shrink-0"
                  >
                    <img 
                      src="https://static.wikia.nocookie.net/kaoruhana/images/2/2a/Volume_5_Cover.jpg"
                      alt="The Fragrant Flowers Blooms With Dignity Volume 5 Cover"
                      className="w-24 h-32 object-cover rounded-lg shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/96x128/6B7280/FFFFFF?text=Volume+5";
                      }}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      This manga isn't just a story—it's an emotional journey that hits you right in the feels. 
                      The way it portrays dignity, growth, and the beauty of human connections is absolutely 
                      mesmerizing.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <motion.div 
                    className="flex items-center gap-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {[1,2,3,4,5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: star * 0.1 }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>
                  <span className="text-gray-500 dark:text-gray-400">Absolutely Phenomenal</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div 
              className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg theme-transition"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6 text-red-400" />
                </motion.div>
                <h4 className="text-xl font-semibold text-black dark:text-white">Why I Love It</h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                The character development is chef's kiss! Each character feels so real, 
                with their own struggles and growth arcs that mirror real-life experiences.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6 shadow-lg theme-transition"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-semibold text-black dark:text-white mb-3">
                Impact on Me
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                This manga taught me that dignity isn't about perfection—it's about staying 
                true to yourself while growing through life's challenges. Pretty deep for a 
                16-year-old, right? 😄
              </p>
            </motion.div>

            <motion.div 
              className="bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-500 rounded-2xl p-6 shadow-lg theme-transition"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="text-xl font-semibold text-black dark:text-white mb-3">
                Reading Ritual
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Every new chapter release is an event! I dim the lights, grab some snacks, 
                and prepare for an emotional rollercoaster. Sometimes I end up crying, 
                sometimes laughing—but always satisfied.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manga;
