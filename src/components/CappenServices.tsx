import { motion } from "framer-motion";

const specs = [
  { label: "Weight", value: "280g", detail: "Ultra-lightweight" },
  { label: "Cushion", value: "React+", detail: "Advanced foam" },
  { label: "Upper", value: "Flyknit", detail: "Breathable mesh" },
  { label: "Sole", value: "Carbon", detail: "Energy return" },
];

export const CappenServices = () => {
  const title = "TECH";

  return (
    <section className="h-screen w-full bg-background relative overflow-hidden flex items-center">
      <div className="max-w-6xl mx-auto px-8 w-full">
        {/* Подзаголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#b766ff] mb-8"
        >
          03 / Specifications
        </motion.div>

        {/* Заголовок с по-буквенной анимацией */}
        <h2 className="text-[10vw] md:text-[8vw] font-light mb-16 leading-none text-foreground">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: "110%", rotateX: -90, opacity: 0 }}
              whileInView={{ y: 0, rotateX: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.15 + index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>

        {/* Сетка характеристик с плавным появлением */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.12,
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
        >
          {specs.map((spec) => (
            <motion.div
              key={spec.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="border-t border-border pt-6"
            >
              <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-2">
                {spec.label}
              </div>
              <div className="text-3xl md:text-4xl font-light text-foreground mb-2">
                {spec.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {spec.detail}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};