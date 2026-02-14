import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Film,
  Palette,
  Layers,
  Wand2,
  Clapperboard,
} from "lucide-react";
import ourVisionBg from "@/assets/our-vision-bg.jpg";

const services = [
  {
    icon: Film,
    title: "3D Animation",
    description:
      "Stunning three-dimensional worlds and characters that push creative boundaries.",
    gradient: "from-amber-500/20 to-orange-500/10",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Dynamic visual storytelling for brands, titles, and promotional content.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Character Design",
    description:
      "Memorable characters with unique personalities that resonate with audiences.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconGradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Layers,
    title: "Visual Effects",
    description:
      "Seamless VFX integration that enhances reality and creates impossible worlds.",
    gradient: "from-green-500/20 to-emerald-500/10",
    iconGradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Wand2,
    title: "Concept Art",
    description:
      "Imaginative concept development that sets the foundation for visual excellence.",
    gradient: "from-rose-500/20 to-red-500/10",
    iconGradient: "from-rose-500 to-red-500",
  },
  {
    icon: Clapperboard,
    title: "Commercial Production",
    description:
      "End-to-end animated commercials that captivate and convert audiences.",
    gradient: "from-indigo-500/20 to-violet-500/10",
    iconGradient: "from-indigo-500 to-violet-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 sm:py-36 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={ourVisionBg} 
          alt="Space background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-[200px]"
          style={{
            background:
              "radial-gradient(ellipse, hsl(200 100% 50% / 0.15), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5"
          >
            What We Do
          </motion.span>
          <h2 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-8">
            Imagination has no limits—
            <span className="text-gradient italic">why should your designs?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
            We dive deep into the infinite depths of design to bring your most defiant dreams to life, shaping a reality where your vision knows no gravity and your story never stands still.
          </p>
          <div className="line-gradient w-24 mx-auto mt-8" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="group relative"
            >
              <div className="relative p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-background/60 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 h-full">
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-soft" />

                <div className="relative">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.iconGradient} p-[1px] mb-4 sm:mb-7`}
                  >
                    <div className="w-full h-full rounded-xl sm:rounded-2xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <service.icon
                        className={`w-5 h-5 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300`}
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Learn more link */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ x: 5 }}
                    className="mt-6 flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    Explore Service
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
