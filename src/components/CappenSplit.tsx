import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import shoe1 from "@/assets/1.png";
import shoe2 from "@/assets/2.png";
import shoe3 from "@/assets/3.png";
import shoe4 from "@/assets/4.png";
import shoe5 from "@/assets/5.png";
import shoe6 from "@/assets/6.png";

const SHOES = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6];

export const CappenSplit = () => {
  const [index, setIndex] = useState(0);

  const updateIndexFromX = useCallback((clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const ratio = Math.min(Math.max(x / rect.width, 0), 1);
    const newIndex = Math.min(SHOES.length - 1, Math.floor(ratio * SHOES.length));
    setIndex(newIndex);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    updateIndexFromX(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    updateIndexFromX(touch.clientX, rect);
  };

  return (
    <section
      className="
        w-full bg-[#f3f3f7] relative overflow-hidden
        min-h-screen md:h-screen        /* 👈 на мобилке можно скроллить, на md+ как было */
      "
    >
      <div className="h-full flex flex-col md:flex-row">
        {/* ЛЕВАЯ ЧАСТЬ — ПСЕВДО 3D ПРОКРУТКА */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-1 flex items-center justify-center px-4 md:px-6"
        >
          <div
            className="
              relative w-full max-w-4xl
              h-[55vh] sm:h-[60vh] md:h-[80vh]   /* 👈 на телефоне меньше высота блока */
              flex items-center justify-center
              cursor-ew-resize select-none
            "
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            <img
              src={SHOES[index]}
              alt="Sneaker view"
              className="h-[95%] md:h-full w-auto object-contain transition-transform duration-300"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
              drag / swipe to rotate
            </div>
          </div>
        </motion.div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="
            flex-1 flex
            items-start md:items-center       /* 👈 на мобилке текст прижат выше */
            justify-center
            pt-4 pb-10 px-4                   /* 👈 компактные паддинги на телефоне */
            md:p-16
          "
        >
          <div className="max-w-md">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-[#b766ff] mb-4 md:mb-6">
              01 / Design
            </div>
            <h2 className="text-3xl md:text-6xl font-light leading-[1.1] mb-6 md:mb-8 text-[#111118]">
              ENGINEERED
              <br />
              FOR
              <br />
              <span className="text-[#b766ff]">PERFECTION</span>
            </h2>
            <p className="text-neutral-600 font-light leading-relaxed text-sm md:text-base">
              Every curve, every texture, every surface has been sculpted to feel
              as futuristic as it looks — a seamless fusion of comfort, performance
              and bold design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};