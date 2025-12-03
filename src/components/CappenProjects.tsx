import { motion } from "framer-motion";

import color1 from "@/assets/preview1.png";
import color2 from "@/assets/preview2.png";
import color3 from "@/assets/preview3.png";

const colors = [
  { name: "Midnight Black", code: "#0a0a0a", img: color1 },
  { name: "Cloud White", code: "#f5f5f5", img: color2 },
  { name: "Violet Dream", code: "#b766ff", img: color3 },
];

const AnimatedTextLine = ({
  text,
  delayStart,
}: {
  text: string;
  delayStart: number;
}) => {
  const lineVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delayStart,
        staggerChildren: 0.06,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "110%", rotateX: -90, opacity: 0 },
    visible: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.span
      className="block overflow-hidden"
      variants={lineVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((letter, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const CappenProjects = () => {
  return (
    <section className="h-screen w-full bg-secondary relative overflow-hidden">
      {/* Внутренний скролл только на мобиле */}
      <div
        className="
          max-w-7xl mx-auto w-full
          px-6 pt-16 pb-6
          md:px-8 md:pt-20 md:pb-8
          h-[calc(100vh-96px)] overflow-y-auto
          md:h-auto md:overflow-visible
        "
      >
        {/* верхний заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#b766ff] mb-6 md:mb-8"
        >
          04 / Colorways
        </motion.div>

        {/* SELECT YOUR / STYLE с анимацией */}
        <h2 className="text-[9vw] md:text-[4vw] font-light mb-8 md:mb-12 leading-none text-[#f5f5f5]">
          <AnimatedTextLine text="SELECT YOUR" delayStart={0.2} />
          <AnimatedTextLine text="STYLE" delayStart={0.6} />
        </h2>

        {/* карточки цветов */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div
                className="
                  aspect-square
                  mb-2
                  overflow-hidden
                  rounded-[24px]
                  transition-transform duration-500 group-hover:scale-[1.02]
                "
                style={{ backgroundColor: color.code }}
              >
                <img
                  src={color.img}
                  alt={color.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="font-mono text-sm text-[#f5f5f5]">
                  {color.name}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};