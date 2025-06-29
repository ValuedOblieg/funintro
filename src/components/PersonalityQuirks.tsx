
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Brain, Zap, Sparkles, Heart, Globe, Gamepad2 } from 'lucide-react';

const PersonalityQuirks = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [showFloatingThought, setShowFloatingThought] = useState(false);
  const [konami, setKonami] = useState('');

  const personalityQuotes = [
    "Currently overthinking my next TikTok scroll session 🤔",
    "ISFP vibes: Making everything an aesthetic moment ✨",
    "Switzerland dreams loading... 🏔️",
    "Math + Manga = Perfect combo 📚",
    "Rex Orange County on repeat mode 🎵"
  ];

  const floatingThoughts = [
    { text: "Procrastination level: Expert", icon: Coffee, color: "text-amber-500" },
    { text: "Introvert energy recharging...", icon: Brain, color: "text-blue-500" },
    { text: "Swiss chocolate thoughts", icon: Heart, color: "text-red-500" },
    { text: "TikTok algorithm knows me too well", icon: Zap, color: "text-purple-500" },
    { text: "Manga collection growing...", icon: Sparkles, color: "text-green-500" }
  ];

  // Rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % personalityQuotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Show floating thoughts randomly
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        setShowFloatingThought(true);
        setTimeout(() => setShowFloatingThought(false), 3000);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Konami code easter egg (↑↑↓↓←→←→BA)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const sequence = konami + key;
      
      if ('arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba'.startsWith(sequence)) {
        setKonami(sequence);
        if (sequence === 'arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba') {
          alert('🎉 Secret unlocked: You found the ISFP konami code! Switzerland here we come! 🏔️');
          setKonami('');
        }
      } else {
        setKonami('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konami]);

  const randomThought = floatingThoughts[Math.floor(Math.random() * floatingThoughts.length)];
  const ThoughtIcon = randomThought.icon;

  return (
    <>
      {/* Floating Status Bar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-20 right-4 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg theme-transition"
      >
        <motion.p
          key={currentQuote}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="text-sm text-gray-700 dark:text-gray-300 font-medium"
        >
          {personalityQuotes[currentQuote]}
        </motion.p>
      </motion.div>

      {/* Floating Random Thoughts */}
      <AnimatePresence>
        {showFloatingThought && (
          <motion.div
            initial={{ opacity: 0, scale: 0, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: -50 }}
            className="fixed bottom-20 right-10 z-40 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 text-white dark:text-black px-4 py-3 rounded-2xl shadow-xl max-w-xs"
          >
            <div className="flex items-center gap-2">
              <ThoughtIcon className={`w-5 h-5 ${randomThought.color}`} />
              <span className="text-sm font-medium">{randomThought.text}</span>
            </div>
            <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-gray-800 dark:border-r-gray-100"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle Personality Indicators */}
      <div className="fixed bottom-4 left-4 z-40 flex gap-2">
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
          title="ISFP Energy"
        >
          <Heart className="w-4 h-4 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
          title="Switzerland Dreams"
        >
          <Globe className="w-4 h-4 text-white" />
        </motion.div>
        
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
          className="w-8 h-8 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
          title="Gaming & Manga Mode"
        >
          <Gamepad2 className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left z-50"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0
        }}
      />
    </>
  );
};

export default PersonalityQuirks;
