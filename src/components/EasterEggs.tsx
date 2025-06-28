
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

const EasterEggs = () => {
  const [foundEggs, setFoundEggs] = useState<number[]>([]);
  const [showMessage, setShowMessage] = useState<string | null>(null);

  const handleEggClick = (eggId: number, message: string) => {
    if (!foundEggs.includes(eggId)) {
      setFoundEggs(prev => [...prev, eggId]);
      setShowMessage(message);
      setTimeout(() => setShowMessage(null), 3000);
    }
  };

  const easterEggs = [
    { id: 1, message: "ISFP vibes detected! 🎨", icon: Heart, position: "top-10 right-10" },
    { id: 2, message: "sx964 energy! ⚡", icon: Star, position: "bottom-20 left-10" },
    { id: 3, message: "Swiss dreams are calling! 🏔️", icon: Sparkles, position: "top-1/2 right-5" },
  ];

  return (
    <>
      {easterEggs.map(({ id, message, icon: Icon, position }) => (
        <motion.div
          key={id}
          className={`fixed ${position} w-8 h-8 cursor-pointer hover-effect z-40`}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleEggClick(id, message)}
        >
          <Icon 
            className={`w-full h-full ${foundEggs.includes(id) ? 'text-yellow-400' : 'text-gray-300 opacity-50'}`}
          />
        </motion.div>
      ))}

      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.5 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full z-50 shadow-xl"
          >
            {showMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {foundEggs.length === 3 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-10 right-10 bg-yellow-400 text-black px-4 py-2 rounded-full z-50 shadow-xl"
        >
          🎉 All eggs found!
        </motion.div>
      )}
    </>
  );
};

export default EasterEggs;
