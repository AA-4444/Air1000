import { motion } from "framer-motion";

export const CappenContact = () => {
  return (
    <section className="h-screen w-full bg-foreground relative overflow-hidden flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#b766ff] mb-8"
        >
          07 / Get Yours
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[12vw] md:text-[10vw] font-light text-background leading-[0.9] mb-12"
        >
          READY?
        </motion.h2>

        <motion.a
          href="/product"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-block px-12 py-4 bg-[#b766ff] text-primary-foreground font-mono text-sm uppercase tracking-wider hover:bg-[#b766ff] transition-colors"
        >
          Shop Now — $249
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 left-8 font-mono text-xs text-background/40"
        >
          <div>STRIDE.</div>
          <div className="mt-1">© 2024</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute bottom-8 right-8 font-mono text-xs text-background/40 text-right"
        >
          <div>40° 42' 46" N</div>
          <div>74° 0' 22" W</div>
        </motion.div>
      </div>
    </section>
  );
};
