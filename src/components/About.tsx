
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-r from-blue-50 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-slate-700 mb-8">
            A Bit About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">
                Currently
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I'm a 16-year-old student navigating through high school life at 
                Ignatius Global School in Palembang. When I'm not buried in textbooks, 
                you'll find me diving into manga worlds or dreaming about my future adventures!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-slate-700 mb-4">
                Personality
              </h3>
              <p className="text-slate-600 leading-relaxed">
                I'm that guy who finds deep meaning in manga panels, gets excited about 
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
