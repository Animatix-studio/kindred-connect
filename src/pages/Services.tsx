import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Wand2,
  Film,
  Box,
  Eye,
  PenTool,
  Users,
  Heart,
  Mail,
  Phone,
  ArrowRight,
  Check,
  Sparkles,
  Palette,
  Image as ImageIcon,
} from "lucide-react";

const services = [
  {
    id: "2d-animation",
    icon: Film,
    title: "2D Animation",
    description: "Captivating two-dimensional animations that bring stories and ideas to vivid life.",
    gradient: "from-amber-500/20 to-orange-500/10",
    iconGradient: "from-amber-500 to-orange-500",
  },
  {
    id: "3d-animation",
    icon: Box,
    title: "3D Animation",
    description: "Stunning three-dimensional worlds and characters that push creative boundaries.",
    gradient: "from-purple-500/20 to-pink-500/10",
    iconGradient: "from-purple-500 to-pink-500",
  },
  {
    id: "motion-graphics",
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic visual storytelling for brands, titles, and promotional content.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    iconGradient: "from-cyan-500 to-blue-500",
  },
  {
    id: "character-design",
    icon: Palette,
    title: "Character Design",
    description: "Memorable characters with unique personalities that resonate with audiences.",
    gradient: "from-green-500/20 to-emerald-500/10",
    iconGradient: "from-green-500 to-emerald-500",
  },
  {
    id: "graphics-design",
    icon: PenTool,
    title: "Graphics Design",
    description: "Eye-catching visual designs for branding, marketing, and digital media.",
    gradient: "from-rose-500/20 to-red-500/10",
    iconGradient: "from-rose-500 to-red-500",
  },
  {
    id: "digital-illustrations",
    icon: ImageIcon,
    title: "Digital Illustrations",
    description: "Beautiful hand-crafted digital artwork that tells your story with artistry and precision.",
    gradient: "from-indigo-500/20 to-violet-500/10",
    iconGradient: "from-indigo-500 to-violet-500",
  },
  {
    id: "concept-art",
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
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const packages = [
  { id: "basic", label: "Basic Package", subtitle: "Package 1" },
  { id: "intermediate", label: "Intermediate Package", subtitle: "Package 2" },
  { id: "premium", label: "Premium Package", subtitle: "Package 3" },
  { id: "3d-basic", label: "3D Basic Package", subtitle: "Package 1" },
  { id: "3d-intermediate", label: "3D Intermediate Package", subtitle: "Package 2" },
  { id: "3d-premium", label: "3D Premium Package", subtitle: "Package 3" },
];

type CourseItem = { title: string; description: string };
type CoursePackage = {
  id: string;
  subtitle: string;
  title: string;
  tagline?: string;
  price?: string;
  description: string;
  items: CourseItem[];
  gradient: string;
  highlighted?: boolean;
};

const animation3DPackages: CoursePackage[] = [
  {
    id: "3d-basic",
    subtitle: "Package 1",
    title: "3D Basic Package",
    description: "An introductory course focusing on the core concepts of 3D motion.",
    gradient: "from-amber-500/20 to-orange-500/10",
    items: [
      { title: "Introduction to the 3D Process", description: "Understanding the stages of a professional 3D production." },
      { title: "Evolution of Animation", description: "A look into how 3D animation transformed the industry." },
      { title: "The Mechanics of Motion", description: "Learning how physics, timing, and spacing work in a digital 3D space." },
      { title: "Foundational Practice", description: "Basic exercises to get comfortable with industry-standard 3D software." },
    ],
  },
  {
    id: "3d-intermediate",
    subtitle: "Package 2",
    title: "3D Intermediate Package",
    tagline: "Intro to Advanced",
    description: "Move beyond the basics and start creating functional 3D sequences.",
    gradient: "from-purple-500/20 to-pink-500/10",
    highlighted: true,
    items: [
      { title: "Advanced Animation Concepts", description: "Deep dive into the 12 principles of animation applied to 3D." },
      { title: "Technical Workflow", description: "Exploring the 'why' and 'how' behind complex character movements." },
      { title: "Basic to Advanced Practice", description: "Progressive exercises ranging from simple object motion to complex character actions." },
      { title: "Project Compilation", description: "Learning how to render and compile small animation clips into a cohesive reel." },
    ],
  },
  {
    id: "3d-premium",
    subtitle: "Package 3",
    title: "3D Premium Package",
    tagline: "Modelling + Animation",
    description: "Our most comprehensive program, covering the full spectrum from asset creation to final animation.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    items: [
      { title: "Fundamentals of Drawing", description: "Building the artistic foundation needed for character and prop design." },
      { title: "Introduction to 3D Modelling", description: "Learning the basics of poly-modelling, topology, and structure." },
      { title: "Advanced Animation Techniques", description: "High-level practice focusing on performance, weight, and fluid motion." },
      { title: "Background & World Building", description: "Developing 3D environments and assets to house your animations." },
      { title: "Studio-Level Compilation", description: "Bringing your custom-modelled assets and animations together for a professional-grade project." },
    ],
  },
];

const Services = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const { hash } = useLocation();
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const t = setTimeout(() => {
      setHighlightedId(id);
      const clear = setTimeout(() => setHighlightedId(null), 1600);
      return () => clearTimeout(clear);
    }, 400);
    return () => clearTimeout(t);
  }, [hash]);

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
            {services.map((service) => {
              const sid = (service as { id?: string }).id;
              return (
              <motion.div
                key={service.title}
                id={sid}
                style={{ scrollMarginTop: "120px" }}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className={`group relative ${sid && highlightedId === sid ? "target-highlight" : ""}`}
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
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Learn From Us Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5">
              Learn From Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              2D Animation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
              Explore our comprehensive 2D animation programs designed to take you from a beginner to a professional creator.
            </p>
            <div className="line-gradient w-24 mx-auto mt-8" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {/* Basic Package */}
            <motion.div variants={itemVariants} className="group relative">
              <div
                onClick={() => setSelectedPackage(selectedPackage === "basic" ? null : "basic")}
                className={`relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background/40 backdrop-blur-md border cursor-pointer transition-all duration-500 h-full ${
                  selectedPackage === "basic" ? "border-primary ring-2 ring-primary/20" : "border-white/[0.08] hover:border-primary/30"
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground">Package 1</span>
                    {selectedPackage === "basic" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 text-primary">Basic Package</h3>
                  <p className="text-muted-foreground text-sm mb-6">Perfect for beginners wanting to understand the core mechanics of motion.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Introduction to the Animation Process</span><p className="text-muted-foreground text-xs mt-0.5">Understanding the workflow from start to finish.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">The History & Art of Animation</span><p className="text-muted-foreground text-xs mt-0.5">A deep dive into what makes animation unique.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Mechanics of Motion</span><p className="text-muted-foreground text-xs mt-0.5">Understanding how animation actually works (frames, timing, and spacing).</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">The Basics</span><p className="text-muted-foreground text-xs mt-0.5">Fundamental exercises to get you comfortable with the software and tools.</p></div></li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Intermediate Package */}
            <motion.div variants={itemVariants} className="group relative">
              <div
                onClick={() => setSelectedPackage(selectedPackage === "intermediate" ? null : "intermediate")}
                className={`relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background/40 backdrop-blur-md border cursor-pointer transition-all duration-500 h-full ${
                  selectedPackage === "intermediate" ? "border-primary ring-2 ring-primary/20" : "border-primary/20 hover:border-primary/40 ring-1 ring-primary/10"
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary">Package 2</span>
                    {selectedPackage === "intermediate" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 text-primary">Intermediate Package</h3>
                  <p className="text-muted-foreground text-sm mb-6">Designed for those ready to move beyond the basics and create complete scenes.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Core Fundamentals</span><p className="text-muted-foreground text-xs mt-0.5">Re-establishing how animation works at a professional level.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Basic to Advanced Practice</span><p className="text-muted-foreground text-xs mt-0.5">Mastery of the 12 principles of animation.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Scene Compilation</span><p className="text-muted-foreground text-xs mt-0.5">Learning how to take small animation clips and compile them into a finished sequence.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Character Development</span><p className="text-muted-foreground text-xs mt-0.5">Introduction to character design, personality, and expressive movement.</p></div></li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Premium Package */}
            <motion.div variants={itemVariants} className="group relative">
              <div
                onClick={() => setSelectedPackage(selectedPackage === "premium" ? null : "premium")}
                className={`relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background/40 backdrop-blur-md border cursor-pointer transition-all duration-500 h-full ${
                  selectedPackage === "premium" ? "border-primary ring-2 ring-primary/20" : "border-white/[0.08] hover:border-primary/30"
                }`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-muted-foreground">Package 3</span>
                    {selectedPackage === "premium" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                      >
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </motion.div>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 text-primary">Premium Package</h3>
                  <p className="text-muted-foreground text-sm mb-1 italic text-xs">Drawing + Animation</p>
                  <p className="text-muted-foreground text-sm mb-6">The complete "Studio Ready" package covering everything from a blank page to a finished film.</p>
                  <ul className="space-y-4">
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Mastering the Pencil</span><p className="text-muted-foreground text-xs mt-0.5">Basics of drawing, anatomy, and perspective for animators.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Advanced Animation Practice</span><p className="text-muted-foreground text-xs mt-0.5">High-level motion studies and fluid movements.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Character Development</span><p className="text-muted-foreground text-xs mt-0.5">Advanced design, rigging concepts, and character consistency.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Background Development</span><p className="text-muted-foreground text-xs mt-0.5">Creating immersive worlds, layout design, and environmental storytelling.</p></div></li>
                    <li className="flex gap-3"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" /><div><span className="font-semibold text-sm text-foreground">Final Compilation</span><p className="text-muted-foreground text-xs mt-0.5">Bringing characters and backgrounds together for a polished portfolio piece.</p></div></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learn From Us — 3D Animation Section */}
      <section className="py-16 sm:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6">
              3D Animation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
              Upgrade your creative potential with our specialized 3D animation tracks. We offer three tiers designed to take you from a curious beginner to a skilled 3D artist.
            </p>
            <div className="line-gradient w-24 mx-auto mt-8" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {animation3DPackages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <motion.div key={pkg.id} variants={itemVariants} className="group relative">
                  <div
                    onClick={() => setSelectedPackage(isSelected ? null : pkg.id)}
                    className={`relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-background/40 backdrop-blur-md border cursor-pointer transition-all duration-500 h-full ${
                      isSelected
                        ? "border-primary ring-2 ring-primary/20"
                        : pkg.highlighted
                        ? "border-primary/20 hover:border-primary/40 ring-1 ring-primary/10"
                        : "border-white/[0.08] hover:border-primary/30"
                    }`}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`inline-block text-xs font-semibold tracking-widest uppercase ${pkg.highlighted ? "text-primary" : "text-muted-foreground"}`}>
                          {pkg.subtitle}
                        </span>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                          >
                            <Check className="w-4 h-4 text-primary-foreground" />
                          </motion.div>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold mb-2 text-primary">{pkg.title}</h3>
                      {pkg.tagline && (
                        <p className="text-muted-foreground mb-1 italic text-xs">{pkg.tagline}</p>
                      )}
                      <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                      <ul className="space-y-4">
                        {pkg.items.map((item) => (
                          <li key={item.title} className="flex gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <div>
                              <span className="font-semibold text-sm text-foreground">{item.title}</span>
                              <p className="text-muted-foreground text-xs mt-0.5">{item.description}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact CTA - appears when a package is selected (2D or 3D) */}
          <AnimatePresence>
            {selectedPackage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 sm:mt-14 max-w-2xl mx-auto"
              >
                <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 text-center">
                  <h3 className="text-lg sm:text-xl font-display font-bold mb-2">
                    Interested in the{" "}
                    <span className="text-primary">
                      {packages.find((p) => p.id === selectedPackage)?.label}
                    </span>
                    ?
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Get in touch with us to learn more and enroll in this program.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <motion.a
                      href="mailto:animatixanimation@gmail.com"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full text-sm w-full sm:w-auto justify-center"
                      onClick={(e) => {
                        const isThreeD = selectedPackage?.startsWith("3d-");
                        const courseType = isThreeD ? "3D Animation" : "2D Animation";
                        const label = packages.find((p) => p.id === selectedPackage)?.label;
                        e.currentTarget.href = `mailto:animatixanimation@gmail.com?subject=Enquiry about ${courseType} - ${label}`;
                      }}
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </motion.a>
                    <motion.a
                      href="tel:+918828293396"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 hover:border-primary/60 rounded-full text-sm font-medium text-foreground w-full sm:w-auto justify-center transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      +91 8828293396
                    </motion.a>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      Or visit Contact page
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
