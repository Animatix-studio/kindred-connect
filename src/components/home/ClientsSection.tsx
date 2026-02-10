import { motion } from "framer-motion";

const clients = [
  { name: "Netflix", gradient: "from-red-500 to-red-600" },
  { name: "Disney", gradient: "from-blue-500 to-indigo-600" },
  { name: "Apple", gradient: "from-gray-400 to-gray-600" },
  { name: "Nike", gradient: "from-orange-500 to-red-500" },
  { name: "Sony", gradient: "from-blue-600 to-purple-600" },
  { name: "Warner Bros", gradient: "from-yellow-500 to-amber-600" },
  { name: "Amazon", gradient: "from-orange-400 to-yellow-500" },
  { name: "Google", gradient: "from-green-500 to-blue-500" },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 sm:py-28 overflow-hidden relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-6 mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase block mb-3">
            Trusted Partners
          </span>
          <p className="text-muted-foreground text-lg">
            Collaborating with the world's most innovative brands
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll animation */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

        {/* First row - left to right */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-10 sm:gap-20 mb-8 sm:mb-12"
        >
          {[...clients, ...clients].map((client, index) => (
            <motion.div
              key={`row1-${client.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-pointer flex-shrink-0"
            >
              <span
                className={`text-2xl sm:text-4xl md:text-5xl font-display font-bold text-muted-foreground/20 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${client.gradient} transition-all duration-500`}
              >
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Second row - right to left */}
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-10 sm:gap-20"
        >
          {[...clients.reverse(), ...clients].map((client, index) => (
            <motion.div
              key={`row2-${client.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-pointer flex-shrink-0"
            >
              <span
                className={`text-2xl sm:text-4xl md:text-5xl font-display font-bold text-muted-foreground/15 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${client.gradient} transition-all duration-500`}
              >
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
