
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [showTrail, setShowTrail] = useState(false);

  const funCursorTexts = ['✨', '🎵', '📚', '🏔️', '💭', '🎨'];

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Occasionally show fun cursor text
      if (Math.random() < 0.001) {
        setCursorText(funCursorTexts[Math.floor(Math.random() * funCursorTexts.length)]);
        setTimeout(() => setCursorText(''), 1000);
      }
    };

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true);
      const target = e.target as HTMLElement;
      
      // Add specific hover text for different elements
      if (target.textContent?.includes('Switzerland')) {
        setCursorText('🏔️');
      } else if (target.textContent?.includes('manga') || target.textContent?.includes('Manga')) {
        setCursorText('📚');
      } else if (target.textContent?.includes('music') || target.textContent?.includes('Music')) {
        setCursorText('🎵');
      } else if (target.textContent?.includes('TikTok')) {
        setCursorText('📱');
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setCursorText('');
    };

    const handleMouseDown = () => setShowTrail(true);
    const handleMouseUp = () => setShowTrail(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .hover-effect');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Outer cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-blue-300 dark:border-blue-600 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          rotate: showTrail ? 360 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30,
          rotate: { duration: 1, ease: "linear" }
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed pointer-events-none z-50 text-2xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            x: mousePosition.x + 20,
            y: mousePosition.y - 20,
          }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
};

export default InteractiveCursor;
