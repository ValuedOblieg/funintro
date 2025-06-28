
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hobbies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-r from-indigo-50 via-blue-50 to-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-700 mb-4">
            My "Productive" Hobbies
          </h2>
          <p className="text-xl text-slate-500">
            Where I excel at the art of doing absolutely nothing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
        >
          {/* Fun background pattern */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-8 h-8 opacity-10"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 2 === 0 ? 
                    'linear-gradient(45deg, #3B82F6, #6366F1)' : 
                    'linear-gradient(45deg, #8B5CF6, #EC4899)',
                  borderRadius: i % 3 === 0 ? '50%' : '20%',
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-8xl mb-8"
            >
              📱
            </motion.div>

            <h3 className="text-3xl font-bold text-slate-700 mb-6">
              Professional TikTok Scroller
            </h3>

            <div className="space-y-6 max-w-2xl mx-auto">
              <p className="text-lg text-slate-600 leading-relaxed">
                Let's be real here—I've turned slacking off into an art form. What starts as 
                "I'll just check TikTok for 5 minutes" somehow evolves into a 3-hour deep dive 
                into the most random content you could imagine.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-pink-100 to-red-100 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">
                    My TikTok Stats 📊
                  </h4>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Daily scroll time: "Just 5 minutes" (3+ hours)</li>
                    <li>• Favorite content: Literally everything</li>
                    <li>• Success rate of "one more video": 0%</li>
                    <li>• Productivity level while scrolling: -100%</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">
                    Slacking Skills 🎯
                  </h4>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Procrastination level: Expert</li>
                    <li>• Excuse creativity: Master</li>
                    <li>• "I'll do it later" count: ∞</li>
                    <li>• Ability to find distractions: Legendary</li>
                  </ul>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mt-8"
              >
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  The Honest Truth 😅
                </h4>
                <p className="text-slate-600">
                  Hey, I'm 16! This is basically my job description right now. Between studying 
                  for school, planning my future in cybersecurity, and reading manga, sometimes 
                  a guy just needs to mindlessly scroll through dance videos and cooking hacks 
                  he'll never try. It's called balance, people!
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
