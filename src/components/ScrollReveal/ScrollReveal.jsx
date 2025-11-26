import { motion } from 'framer-motion';

const ScrollReveal = ({ children, width = "100%" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
