"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import bgVideo from "../assets/bg.mp4";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

type AnimatedLetterProps = {
  letter: string;
  delay: number;
};

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ letter, delay }) => {
  return (
    <motion.span
      className="inline-block"
      initial={{ y: "110%", rotateX: -90, opacity: 0 }}
      animate={{ y: 0, rotateX: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {letter}
    </motion.span>
  );
};

const AnimatedWord = ({
  word,
  delay,
}: {
  word: string;
  delay: number;
}) => {
  return (
    <span className="inline-block overflow-hidden">
      {word.split("").map((letter, index) => (
        <AnimatedLetter
          key={index}
          letter={letter === " " ? "\u00A0" : letter}
          delay={delay + index * 0.12}
        />
      ))}
    </span>
  );
};

export const CappenHero: React.FC = () => {
  const titleWords = ["AIR", "MAX", "1000"];

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white">

      {/* Video Background */}
      <motion.video
        className="absolute inset-0 h-full w-full object-cover"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 text-center text-black">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-neutral-700"
        >
          Limited Edition • 2024
        </motion.div>

        <motion.h1
          className="text-[18vw] md:text-[14vw] font-light leading-[0.85] tracking-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {titleWords.map((word, idx) => (
            <span key={idx} className="block">
              <AnimatedWord word={word} delay={0.7 + idx * 0.3} />
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-neutral-700"
        >
          Redefining movement
        </motion.p>
      </div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-8 font-mono text-xs text-neutral-700"
      >
        <div className="uppercase tracking-wider">Scroll to explore</div>
        <div className="mt-1 text-neutral-500">↓</div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 right-8 text-right font-mono text-xs text-neutral-700"
      >
        <div>$249</div>
        <div className="text-neutral-500">USD</div>
      </motion.div>
    </section>
  );
};