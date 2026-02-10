import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", icon: "🎬" },
  { value: 45, suffix: "+", label: "Industry Awards", icon: "🏆" },
  { value: 12, suffix: "", label: "Years of Excellence", icon: "⭐" },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: "💎" },
];

interface CounterProps {
  value: number;
  suffix: string;
}

const Counter = ({ value, suffix }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="flex items-baseline justify-center">
      <motion.span>{rounded}</motion.span>
      <span className="text-primary">{suffix}</span>
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-16 sm:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-card/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="text-center p-4 sm:p-8 rounded-3xl premium-card hover:border-primary/20 transition-all duration-500">
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-soft" />

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: 0.2 + index * 0.1,
                  }}
                  className="text-4xl mb-4"
                >
                  {stat.icon}
                </motion.div>

                {/* Number */}
                <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient mb-4">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <p className="text-muted-foreground text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
