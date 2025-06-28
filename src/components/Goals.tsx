
import { motion } from 'framer-react';
import { useInView } from 'react-intersection-observer';
import { Flag, Briefcase, Rocket } from 'lucide-react';

const Goals = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-700 mb-4">
            Dreams & Ambitions
          </h2>
          <p className="text-xl text-slate-500">
            My roadmap to world domination (ethically, of course!)
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-20 h-20 bg-gradient-to-r from-red-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
              >
                <Flag className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                Destination: Switzerland
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                Picture this: me, working in the Swiss Alps, surrounded by chocolate, watches, 
                and some of the world's best cybersecurity companies. The plan? Master my skills, 
                learn German (or improve my English), and make Switzerland my second home!
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
              >
                <Briefcase className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                Career: Penetration Tester
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                Being a "white hat hacker" sounds way cooler than it actually is (it's basically 
                professional system breaking). But seriously, I'm passionate about cybersecurity 
                and helping companies stay safe from the bad guys. Plus, the pay is pretty sweet! 💻
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:shadow-lg transition-all duration-300"
              >
                <Rocket className="w-10 h-10 text-white" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4">
                The Journey
              </h3>
              
              <p className="text-slate-600 leading-relaxed">
                First, survive high school (check in progress). Then, ace university while 
                building my tech skills. Learn everything about cybersecurity, maybe get some 
                certifications, and hopefully not accidentally hack into anything I shouldn't! 🚀
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-2xl font-semibold text-slate-700 mb-4">
              Why Switzerland?
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Besides the obvious appeal of living in a real-life fairy tale setting, 
              Switzerland is a global hub for technology and cybersecurity. Plus, imagine 
              telling people you commute to work with the Alps as your backdrop. That's 
              some serious flex material right there! 🏔️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Goals;
