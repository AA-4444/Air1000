"use client";

import { motion } from "framer-motion";
import aboutVideo from "@/assets/bg-about.mp4"; 

export const CappenAbout = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden flex items-center justify-center bg-black">
      
      {/* ВИДЕО-ФОН (без индикаторов) */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover"
        src={aboutVideo}
        autoPlay
        muted
        loop
        playsInline
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Мягкий затемняющий слой, чтобы текст читался */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Световой radial-эффект, как раньше */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* КОНТЕНТ */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-white/60 mb-8"
        >
          02 / Philosophy
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[8vw] md:text-[6vw] font-light leading-[1.1] text-white"
        >
          BORN FROM
          <br />
          THE STREETS.
          <br />
          BUILT FOR
          <br />
          THE FUTURE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12 text-lg text-white/70 max-w-xl mx-auto font-light"
        >
          We don't follow trends. We create them. Air Nova represents 
          the next evolution in sneaker culture.
        </motion.p>
      </div>
    </section>
  );
};
