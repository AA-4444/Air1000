import React, { useMemo } from "react";
import { motion } from "framer-motion";

// ТВОИ КАРТИНКИ
import c1 from "@/assets/preview1.png";
import c2 from "@/assets/preview2.png";
import c3 from "@/assets/preview3.png";
import c4 from "@/assets/preview4.png";

const communityImages = [c1, c2, c3, c4];

// ===== АНИМИРОВАННАЯ СТРОКА =====
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
	  transition: { delayChildren: delayStart, staggerChildren: 0.06 },
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
		<motion.span key={i} className="inline-block" variants={letterVariants}>
		  {letter}
		</motion.span>
	  ))}
	</motion.span>
  );
};

export const CappenCommunity: React.FC = () => {
  // генерим случайные позиции и размеры
  const floatingItems = useMemo(() => {
	const positions = [
	  { top: "10%", left: "12%" },
	  { top: "25%", left: "70%" },
	  { top: "62%", left: "18%" },
	  { top: "72%", left: "68%" },
	];

	return communityImages.map((src, i) => ({
	  src,
	  top: positions[i].top,
	  left: positions[i].left,
	  // теперь разные размеры: от 160 до 300px
	  size: 160 + Math.random() * 140,
	  delay: Math.random() * 1.2 + i * 0.3,
	  duration: 6 + Math.random() * 4,
	}));
  }, []);

  return (
	<section className="relative min-h-screen w-full bg-background overflow-hidden">
	  {/* ФОТО-БЛОКИ БЕЗ БЛЮРА */}
	  <div className="pointer-events-none absolute inset-0">
		{floatingItems.map((item, idx) => (
		  <motion.div
			key={idx}
			className="absolute rounded-2xl overflow-hidden"
			style={{
			  top: item.top,
			  left: item.left,
			  width: item.size,
			  height: item.size,
			}}
			animate={{
			  y: [0, -12, 0],
			  scale: [1, 1.02, 1],
			}}
			transition={{
			  duration: item.duration,
			  delay: item.delay,
			  repeat: Infinity,
			  ease: "easeInOut",
			}}
		  >
			<img
			  src={item.src}
			  alt={`Community ${idx + 1}`}
			  className="w-full h-full object-cover"
			/>
		  </motion.div>
		))}
	  </div>

	  {/* МАТОВЫЙ ГРАДИЕНТ ДЛЯ ЧИТАЕМОСТИ ТЕКСТА */}
	  <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95" />

	  {/* КОНТЕНТ */}
	  <div className="relative z-10 max-w-4xl mx-auto px-8 py-24 flex flex-col gap-8">
		<motion.div
		  initial={{ opacity: 0, y: 20 }}
		  whileInView={{ opacity: 1, y: 0 }}
		  viewport={{ once: true }}
		  transition={{ duration: 0.8 }}
		  className="font-mono text-xs uppercase tracking-[0.3em] text-[#b766ff]"
		>
		  05 / Community
		</motion.div>

		<h2 className="text-[12vw] md:text-[6vw] font-light leading-[1.05] text-foreground">
		  <AnimatedTextLine text="JOIN THE" delayStart={0.2} />
		  <AnimatedTextLine text="MOVEMENT" delayStart={0.6} />
		</h2>

		<motion.p
		  initial={{ opacity: 0, y: 20 }}
		  whileInView={{ opacity: 1, y: 0 }}
		  viewport={{ once: true }}
		  transition={{ duration: 0.9, delay: 0.8 }}
		  className="text-base md:text-lg text-muted-foreground max-w-xl font-light"
		>
		  Our community is open to anyone with a passion for pushing boundaries
		  and redefining style.
		</motion.p>
	  </div>
	</section>
  );
};