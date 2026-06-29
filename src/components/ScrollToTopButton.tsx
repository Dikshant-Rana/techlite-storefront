import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if page is scrolled down more than 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-[#066291] shadow-lg backdrop-blur-md transition-colors duration-300 hover:border-[#066291] hover:bg-slate-900 hover:text-white hover:shadow-[0_0_20px_rgba(6,98,145,0.3)] focus:outline-none focus:ring-2 focus:ring-[#066291] focus:ring-offset-2 focus:ring-offset-slate-900"
        >
          <ChevronUp className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
