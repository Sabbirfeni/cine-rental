// PageTransitionWrapper.js
import { AnimatePresence, motion } from "framer-motion";

const PageTransitionWrapper = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={window.location.pathname}
        initial={{ opacity: 0, scale: 0.9, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
