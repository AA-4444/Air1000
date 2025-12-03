import { motion } from "framer-motion";

export const CappenNavbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center mix-blend-difference"
    >
      <a
        href="/"
        className="font-mono text-sm uppercase tracking-wider text-foreground"
      >
        AIRMAX.
      </a>

      <div className="flex items-center gap-6 font-mono text-[10px] md:text-xs uppercase tracking-wider">
        <a
          href="#product"
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          Product
        </a>

        <a
          href="#story"
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          Story
        </a>

        <a
          href="/product"
          className="text-[#b766ff] hover:text-[#d08cff] transition-colors"
        >
          Shop Now
        </a>
      </div>
    </motion.nav>
  );
};