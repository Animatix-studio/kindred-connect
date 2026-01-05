import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Film, Palette, Layers, Wand2, Clapperboard } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "3D Animation",
    description:
      "Stunning three-dimensional worlds and characters that push creative boundaries.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Dynamic visual storytelling for brands, titles, and promotional content.",
  },
  {
    icon: Palette,
    title: "Character Design",
    description:
      "Memorable characters with unique personalities that resonate with audiences.",
  },
  {
    icon: Layers,
    title: "Visual Effects",
    description:
      "Seamless VFX integration that enhances reality and creates impossible worlds.",
  },
  {
    icon: Wand2,
    title: "Concept Art",
    description:
      "Imaginative concept development that sets the foundation for visual excellence.",
  },
  {
    icon: Clapperboard,
    title: "Commercial Production",
    description:
      "End-to-end animated commercials that captivate and convert audiences.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Crafting Visual <span className="text-gradient italic">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From initial concept to final delivery, we offer comprehensive
            animation services that bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl glass hover:bg-card/80 transition-all duration-500"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-accent/5" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
