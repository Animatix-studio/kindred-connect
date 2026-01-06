import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale: bgScale }}
      >
        <img 
          src={heroBackground} 
          alt="" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </motion.div>

      {/* Animated Overlay Effects */}
      <div className="absolute inset-0 z-[1]">
        {/* Primary orb */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.35, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full blur-[150px]"
          style={{
            background:
              "radial-gradient(circle, hsl(38 100% 64% / 0.3), hsl(25 100% 55% / 0.1))",
          }}
        />

        {/* Secondary orb */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, hsl(280 80% 65% / 0.2), hsl(320 90% 55% / 0.1))",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-strong mb-10"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-primary"
            />
            <span className="text-sm font-medium text-foreground/80 tracking-wide">
              Award-Winning Animation Studio
            </span>
            <Sparkles size={14} className="text-primary" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-10 tracking-tight"
          >
            <span className="block">Where</span>
            <motion.span
              className="text-gradient italic inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(45 100% 70%), hsl(38 100% 60%), hsl(25 100% 55%), hsl(45 100% 70%))",
                backgroundSize: "300% 100%",
              }}
            >
              Imagination
            </motion.span>
            <span className="block">Becomes</span>
            <motion.span
              className="text-gradient-purple italic inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(280 80% 65%), hsl(300 80% 55%), hsl(320 90% 55%), hsl(280 80% 65%))",
                backgroundSize: "300% 100%",
              }}
            >
              Reality
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            We craft extraordinary visual experiences that captivate audiences
            worldwide. From concept to screen, we bring your stories to life
            with cutting-edge animation and boundless creativity.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/80 to-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <Link
                to="/portfolio"
                className="relative flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-semibold rounded-full transition-all"
              >
                View Our Work
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 px-10 py-5 glass-strong rounded-full hover:border-primary/30 transition-all"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-foreground/10 to-foreground/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all"
              >
                <Play size={18} className="ml-0.5" />
              </motion.span>
              <span className="font-medium">Watch Showreel</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-12 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{
                height: ["20%", "60%", "20%"],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 bg-gradient-to-b from-primary to-primary/50 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
