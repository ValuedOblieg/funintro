
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-slate-100 to-blue-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold text-slate-700 mb-4">
            Thanks for Visiting!
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
            That's me in a nutshell—a manga-loving, Switzerland-dreaming, 
            TikTok-scrolling high schooler with big cybersecurity ambitions. 
            Thanks for taking the time to get to know me!
          </p>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center gap-2 text-slate-500"
        >
          <span>Made with</span>
          <Heart className="w-5 h-5 text-red-400 fill-red-400" />
          <span>and lots of TikTok breaks</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm text-slate-400 mt-6"
        >
          © 2024 Alex • Ignatius Global School Palembang • Future Swiss Resident (hopefully!)
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
