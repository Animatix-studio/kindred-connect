import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Film,
  Box,
  Sparkles,
  Palette,
  PenTool,
  Image,
} from "lucide-react";
import ourVisionBg from "@/assets/our-vision-bg.jpg";

const services = [
  {
    id: "2d-animation",
    icon: Film,
    title: "2D Animation",
    description:
      "Captivating two-dimensional animations that bring stories and ideas to vivid life.",
    gradient: "from-amber-500/20 to-orange-500/10",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    id: "3d-animation",
    icon: Box,
    title: "3D Animation",
    description:
      "Stunning three-dimensional worlds and characters that push creative boundaries.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    id: "motion-graphics",
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Dynamic visual storytelling for brands, titles, and promotional content.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconGradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "character-design",
    icon: Palette,
    title: "Character Design",
    description:
      "Memorable characters with unique personalities that resonate with audiences.",
    gradient: "from-green-500/20 to-emerald-500/10",
    iconGradient: "from-green-500 to-emerald-500",
  },
  {
    id: "graphics-design",
    icon: PenTool,
    title: "Graphics Design",
    description:
      "Eye-catching visual designs for branding, marketing, and digital media.",
    gradient: "from-rose-500/20 to-red-500/10",
    iconGradient: "from-rose-500 to-red-500",
  },
  {
    id: "digital-illustrations",
    icon: Image,
    title: "Digital Illustrations",
    description:
      "Beautiful hand-crafted digital artwork that tells your story with artistry and precision.",
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

const ServiceCard = ({ service }: { service: typeof services[number] }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
    className="group relative"
  >
    <Link to={`/services#${service.id}`} className="block">
      <div className="relative p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-background/40 backdrop-blur-md border border-white/[0.08] hover:border-primary/30 transition-all duration-500">
        <div className={`absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-0 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-soft" />
        <div className="relative">
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className={`w-7 h-7 sm:w-10 sm:h-10 rounded-md sm:rounded-lg bg-gradient-to-br ${service.iconGradient} p-[1px] mb-2 sm:mb-3`}
          >
            <div className="w-full h-full rounded-md sm:rounded-lg bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <service.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
          </motion.div>
          <h3 className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-[10px] sm:text-xs hidden sm:block">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  </motion.div>
);

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-36 relative overflow-hidden">
      {/* Background Image - single layer, no duplication */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={ourVisionBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-background/50" />
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[420px] sm:w-[1000px] sm:h-[600px] rounded-full blur-[160px] sm:blur-[200px]"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-8 px-2">
            Imagination has no limits—
            <span className="text-gradient italic">why should your designs?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
            We dive deep into the infinite depths of design to bring your most defiant dreams to life, shaping a reality where your vision knows no gravity and your story never stands still.
          </p>
          <div className="line-gradient w-24 mx-auto mt-8" />
        </motion.div>

        {/* Services Grid - Split Left & Right */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-row justify-between gap-2 sm:gap-0"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-2 sm:gap-3 w-[30%] sm:w-[26%]">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-2 sm:gap-3 w-[30%] sm:w-[26%]">
            {services.slice(3, 6).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
