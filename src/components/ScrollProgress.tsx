import { motion, useScroll, useTransform } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const percentage = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 font-mono text-xs text-muted-foreground"
    >
      <motion.span>{percentage}</motion.span>%
    </motion.div>
  );
};
