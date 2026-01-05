import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Users, Target, Heart, Sparkles } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue perfection in every frame, pushing boundaries to deliver exceptional results.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Great work comes from great partnerships. We work closely with our clients at every stage.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Animation is our art and our love. We pour our hearts into every project we undertake.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We stay at the forefront of technology and techniques to create groundbreaking work.",
    gradient: "from-purple-500 to-violet-500",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Marcus Rivera",
    role: "Head of Animation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sarah Mitchell",
    role: "Art Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Technical Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <main ref={containerRef} className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 noise">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[150px]"
            style={{
              background:
                "radial-gradient(circle, hsl(280 80% 65% / 0.2), transparent)",
            }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[130px]"
            style={{
              background:
                "radial-gradient(circle, hsl(38 100% 64% / 0.15), transparent)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-6"
            >
              <Sparkles size={14} />
              About Us
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-10 leading-tight">
              Storytellers at{" "}
              <span className="text-gradient italic">Heart</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Founded in 2012, Lumina Studios has grown from a small team of
              passionate animators to an award-winning studio trusted by the
              world's leading brands and entertainment companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  What began as a dream in a small garage has evolved into one
                  of the most respected animation studios in the industry. Our
                  journey started with a simple belief: that animation has the
                  power to move hearts and change minds.
                </p>
                <p>
                  Today, our team of over 100 talented artists, animators, and
                  technicians continues to push the boundaries of what's
                  possible in visual storytelling. From feature films to
                  commercials, from games to immersive experiences, we bring
                  creativity and technical excellence to every project.
                </p>
                <p>
                  Our work has been recognized with over 45 industry awards,
                  including multiple Annie Awards, BAFTA nominations, and Cannes
                  Lions. But our greatest achievement is the trust placed in us
                  by clients who return time and again.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Lumina Studios Team"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 p-8 glass-strong rounded-2xl"
              >
                <p className="text-5xl font-display font-bold text-gradient">
                  12+
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Years of Excellence
                </p>
              </motion.div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-primary/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-card/30" />

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we create
            </p>
            <div className="line-gradient w-24 mx-auto mt-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="p-10 rounded-3xl premium-card text-center hover:border-primary/20 transition-all duration-500 h-full">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} p-[1px] mx-auto mb-8`}
                  >
                    <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-4 block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Meet the <span className="text-gradient italic">Creatives</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who bring imagination to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <div className="flex gap-3">
                      {["Twitter", "LinkedIn"].map((social) => (
                        <div
                          key={social}
                          className="w-10 h-10 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-primary transition-colors"
                        >
                          <span className="text-xs font-medium">
                            {social[0]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
