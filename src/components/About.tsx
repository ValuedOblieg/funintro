
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ParallaxWrapper from './ParallaxWrapper';

const About = () => {
  const { ref, controls } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-r from-blue-50 to-slate-50 relative overflow-hidden">
      <ParallaxWrapper speed={0.2} className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
      </ParallaxWrapper>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-slate-700 mb-8 hover-effect"
          >
            A Bit About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: 1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover-effect"
            >
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">
                Currently
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I'm a 16-year-old ISFP sx964 student navigating through high school life at 
                Ignatius Global School in Palembang. When I'm not buried in textbooks, 
                you'll find me diving into manga worlds or dreaming about my future adventures!
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg hover-effect"
            >
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">
                Personality
              </h3>
              <p className="text-slate-600 leading-relaxed">
                As an ISFP, I'm that creative soul who finds deep meaning in manga panels, gets excited about 
                cybersecurity, and somehow turns "just checking TikTok for 5 minutes" 
                into a 3-hour scrolling marathon. Life's too short to be serious all the time!
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
