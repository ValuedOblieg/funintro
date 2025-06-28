
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Book, Heart, Star } from 'lucide-react';

const Manga = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-l from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-700 mb-4">
            My Manga Obsession
          </h2>
          <p className="text-xl text-slate-500">
            Where stories come alive and emotions hit different
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200 to-indigo-200 rounded-bl-full opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <Book className="w-8 h-8 text-blue-500" />
                  <h3 className="text-2xl font-bold text-slate-700">Current Favorite</h3>
                </div>
                
                <h4 className="text-3xl font-semibold text-blue-600 mb-4">
                  "The Fragrant Flowers Blooms With Dignity"
                </h4>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  This manga isn't just a story—it's an emotional journey that hits you right in the feels. 
                  The way it portrays dignity, growth, and the beauty of human connections is absolutely 
                  mesmerizing. Every chapter leaves me contemplating life and relationships in ways I never expected.
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-slate-500">Absolutely Phenomenal</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-red-400" />
                <h4 className="text-xl font-semibold text-slate-700">Why I Love It</h4>
              </div>
              <p className="text-slate-600">
                The character development is chef's kiss! Each character feels so real, 
                with their own struggles and growth arcs that mirror real-life experiences.
              </p>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-slate-700 mb-3">
                Impact on Me
              </h4>
              <p className="text-slate-600">
                This manga taught me that dignity isn't about perfection—it's about staying 
                true to yourself while growing through life's challenges. Pretty deep for a 
                16-year-old, right? 😄
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-semibold text-slate-700 mb-3">
                Reading Ritual
              </h4>
              <p className="text-slate-600">
                Every new chapter release is an event! I dim the lights, grab some snacks, 
                and prepare for an emotional rollercoaster. Sometimes I end up crying, 
                sometimes laughing—but always satisfied.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manga;
