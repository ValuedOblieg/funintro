
import { motion } from 'framer-motion';
import { Play, Pause, Music, Heart, ExternalLink } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Music = () => {
  const { ref, controls } = useScrollAnimation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Note: For demo purposes, we'll simulate audio playback
  // In a real implementation, you'd need the actual audio file
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= 30) { // 30 second demo
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying && currentTime === 0) {
      setDuration(30); // 30 second demo
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black theme-transition">
      <div className="max-w-4xl mx-auto">
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Music className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Current Favorite Music Artist
            </h2>
            <Music className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
        </motion.div>

        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }
          }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 hover-effect theme-transition"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Album Art & Artist Info */}
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative mb-6"
              >
                <img
                  src="https://i.scdn.co/image/ab67616d0000b2731bd6d088d3d81972af4cb81d"
                  alt="Apricot Princess Album Cover"
                  className="w-64 h-64 mx-auto rounded-2xl shadow-xl"
                />
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white fill-white" />
                </div>
              </motion.div>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <img
                  src="https://i.scdn.co/image/ab6761610000e5ebee3852e6b5500f0af5315609"
                  alt="Rex Orange County"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Rex Orange County</h3>
                  <p className="text-gray-600 dark:text-gray-400">Indie Pop • Alternative</p>
                </div>
              </div>
            </div>

            {/* Music Player */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  🎵 "Never Enough"
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  From the album "Apricot Princess"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  This song perfectly captures those feelings of longing and never being satisfied. 
                  Rex's dreamy vocals and the nostalgic instrumentals make it my current obsession! 🎧
                </p>
              </div>

              {/* Demo Audio Player */}
              <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 theme-transition">
                <div className="flex items-center gap-4 mb-4">
                  <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover-effect"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </motion.button>
                  
                  <div className="flex-1">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                        animate={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  🎵 Demo player - {isPlaying ? 'Playing sample...' : 'Click play for a 30s demo'} 🎵
                </p>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href="https://open.spotify.com/artist/7pbDxGE6nQSZVfiFdq9lOL"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover-effect"
                >
                  <ExternalLink className="w-4 h-4" />
                  Spotify
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/watch?v=yXVLrtWaqPE"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full hover-effect"
                >
                  <ExternalLink className="w-4 h-4" />
                  YouTube
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fun Quote */}
        <motion.div
          animate={controls}
          initial="hidden"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
          }}
          className="text-center mt-8"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 italic">
            "Music is basically math in disguise - which makes Rex Orange County a mathematical genius!" 🎯
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Music;
