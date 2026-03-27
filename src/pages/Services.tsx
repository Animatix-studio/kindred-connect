import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Wand2,
  Film,
  Box,
  Eye,
  PenTool,
  Users,
  Heart,
} from "lucide-react";

const services = [
  {
    icon: Wand2,
    title: "Concept Art",
    description: "Imaginative concept development that sets the foundation for visual excellence and creative storytelling.",
    gradient: "from-amber-500/20 to-orange-500/10",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Film,
    title: "Video Edits",
    description: "Professional video editing and post-production that transforms raw footage into polished visual narratives.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Box,
    title: "3D Modelling",
    description: "Detailed three-dimensional models for games, films, products, and architectural visualization.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconGradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Eye,
    title: "Visualization",
    description: "Photorealistic renders and visual simulations that bring concepts to life before they exist.",
    gradient: "from-green-500/20 to-emerald-500/10",
    iconGradient: "from-green-500 to-emerald-500",
  },
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Distinctive brand identities and logos that make lasting impressions and define your visual presence.",
    gradient: "from-rose-500/20 to-red-500/10",
    iconGradient: "from-rose-500 to-red-500",
  },
  {
    icon: Users,
    title: "Caricatures & Portraits",
    description: "Expressive caricatures and detailed digital portraits that capture personality with artistic flair.",
    gradient: "from-indigo-500/20 to-violet-500/10",
    iconGradient: "from-indigo-500 to-violet-500",
  },
  {
    icon: Heart,
    title: "Digital & Motion Wedding Cards",
    description: "Elegant animated wedding invitations and digital cards that set the tone for your special day.",
    gradient: "from-pink-500/20 to-rose-500/10",
    iconGradient: "from-pink-500 to-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-16 sm:pb-24 relative overflow-hidden">
        {/* Background glow */}
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[180px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, hsl(200 100% 50% / 0.12), transparent)",
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-20"
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-8">
              Everything you need to{" "}
              <span className="text-gradient italic">bring ideas to life</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
              From concept to completion, we offer a comprehensive suite of creative services tailored to your vision.
            </p>
            <div className="line-gradient w-24 mx-auto mt-8" />
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group relative"
              >
                <div className="relative p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-background/40 backdrop-blur-md border border-white/[0.08] hover:border-primary/30 transition-all duration-500 h-full">
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-soft" />

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.iconGradient} p-[1px] mb-4`}
                    >
                      <div className="w-full h-full rounded-lg sm:rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    </motion.div>

                    <h3 className="text-base sm:text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
