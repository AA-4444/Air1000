import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, ReactNode, Children } from "react";

interface ScrollScenesProps {
  children: ReactNode;
}

interface SceneProps {
  children: ReactNode;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

const Scene = ({ children, index, total, scrollYProgress }: SceneProps) => {
  const sceneStart = index / total;
  const sceneEnd = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;

 
  const y = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sceneEnd * 0.8, sceneEnd]
      : isLast
      ? [sceneStart - 0.05, sceneStart, 1]
      : [sceneStart - 0.05, sceneStart, sceneEnd * 0.9, sceneEnd],
    isFirst
      ? ["0%", "0%", "-100%"]
      : isLast
      ? ["100%", "0%", "0%"] 
      : ["100%", "0%", "0%", "-100%"]
  );

  // SCALE
  const scale = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sceneEnd * 0.8, sceneEnd]
      : isLast
      ? [sceneStart - 0.05, sceneStart, 1]
      : [sceneStart - 0.05, sceneStart, sceneEnd * 0.9, sceneEnd],
    isFirst
      ? [1, 1, 0.95]
      : isLast
      ? [0.9, 1, 1] 
      : [0.9, 1, 1, 0.95]
  );

  // OPACITY
  const opacity = useTransform(
    scrollYProgress,
    isFirst
      ? [0, sceneEnd * 0.7, sceneEnd]
      : isLast
      ? [sceneStart - 0.02, sceneStart + 0.02, 1]
      : [sceneStart - 0.02, sceneStart + 0.02, sceneEnd * 0.85, sceneEnd],
    isFirst
      ? [1, 1, 0]
      : isLast
      ? [0, 1, 1] 
      : [0, 1, 1, 0]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: total - index,
      }}
      className="absolute inset-0 w-full h-full will-change-transform"
    >
      <div className="w-full h-full">{children}</div>
    </motion.div>
  );
};

export const ScrollScenes = ({ children }: ScrollScenesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childArray = Children.toArray(children);
  const total = childArray.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ height: `${total * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {childArray.map((child, index) => (
          <Scene
            key={index}
            index={index}
            total={total}
            scrollYProgress={scrollYProgress}
          >
            {child}
          </Scene>
        ))}
      </div>
    </div>
  );
};
