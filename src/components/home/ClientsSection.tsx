import { motion } from "framer-motion";

const clients = [
  "Netflix",
  "Disney",
  "Apple",
  "Nike",
  "Sony",
  "Warner Bros",
  "Amazon",
  "Google",
];

export const ClientsSection = () => {
  return (
    <section className="py-24 border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm uppercase tracking-widest"
        >
          Trusted by Industry Leaders
        </motion.p>
      </div>

      {/* Infinite scroll animation */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...clients, ...clients].map((client, index) => (
            <span
              key={`${client}-${index}`}
              className="text-3xl md:text-4xl font-display font-bold text-muted-foreground/30 hover:text-muted-foreground/60 transition-colors cursor-default"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
