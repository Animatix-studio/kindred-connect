import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-14 sm:py-36 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Main gradient orb */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[180px]"
          style={{
            background:
              "radial-gradient(circle, hsl(38 100% 64% / 0.2), hsl(280 80% 65% / 0.1))",
          }}
        />

        {/* Secondary orb */}
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, hsl(280 80% 65% / 0.15), transparent)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 20}%`,
            top: `${15 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        >
          <Star
            size={12 + i * 3}
            className="text-primary/30"
            fill="currentColor"
          />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-10 relative"
          >
            {/* Glow ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"
            />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 sm:mb-8 leading-tight">
            Ready to Create Something{" "}
            <motion.span
              className="text-gradient italic inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(45 100% 70%), hsl(280 80% 65%), hsl(320 90% 55%), hsl(45 100% 70%))",
                backgroundSize: "300% 100%",
              }}
            >
              Extraordinary?
            </motion.span>
          </h2>

          {/* Description */}
          <p className="text-base md:text-xl text-muted-foreground mb-8 sm:mb-14 max-w-2xl mx-auto leading-relaxed">
            Let's collaborate and bring your vision to life. From concept to
            completion, we're here to make magic happen.
          </p>

          {/* CTA Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block relative group"
          >
            {/* Button glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

            <Link
              to="/contact"
              className="relative inline-flex items-center gap-3 sm:gap-4 px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold text-base sm:text-lg rounded-full transition-all shadow-2xl shadow-primary/25"
            >
              Start Your Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={22} />
              </motion.span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Available for new projects
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              24-48h response time
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Free consultation
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
