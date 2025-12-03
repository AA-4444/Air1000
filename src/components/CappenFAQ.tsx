import { motion } from "framer-motion";

const faqs = [
  { q: "When does Nike Air Max 1000 release?", a: "March 2025" },
  { q: "What sizes will be available?", a: "US 5–14 (men) / US 5–12 (women)" },
  { q: "Is Air Max 1000 good for running?", a: "Designed for lifestyle + light training" },
  { q: "What cushioning does it use?", a: "New AirMaxX+ multi-chamber air system" },
  { q: "What’s the return policy?", a: "30-day free returns" },
];

export const CappenFAQ = () => {
  return (
    <section className="h-screen w-full bg-background relative overflow-hidden flex items-center">
      <div className="max-w-4xl mx-auto px-8 w-full">

        {/* Фиолетовый цвет */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#b766ff] mb-8"
        >
          06 / FAQ
        </motion.div>

        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[8vw] md:text-[6vw] font-light mb-12 text-foreground"
        >
          QUESTIONS
        </motion.h2>
        
        {/* Список FAQ */}
        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-border py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
            >
              <span className="text-foreground font-light">{faq.q}</span>
              <span className="text-muted-foreground font-mono text-sm">{faq.a}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
