import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Users, Target, Heart, Sparkles, Palette, Film, Lightbulb } from "lucide-react";
import { useRef } from "react";
import ourVisionBg from "@/assets/our-vision-bg.jpg";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue perfection in every frame, pushing boundaries to deliver exceptional 2D & 3D animations.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Palette,
    title: "Creativity",
    description:
      "Every project is a canvas. We combine cutting-edge technology with artistic excellence to craft visual stories.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Animation is our art and our love. We breathe life into imagination with every project we undertake.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the forefront of animation technology and techniques to create groundbreaking visual experiences.",
    gradient: "from-purple-500 to-violet-500",
  },
];

const team = [
  {
    name: "Creative Director",
    role: "2D & 3D Animation Lead",
    icon: Film,
  },
  {
    name: "Art Director",
    role: "Character & Environment Design",
    icon: Palette,
  },
  {
    name: "Technical Director",
    role: "3D Modeling & Rendering",
    icon: Lightbulb,
  },
  {
    name: "Project Manager",
    role: "Client Relations & Delivery",
    icon: Users,
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
              Bringing Your <span className="text-gradient italic">Dreams</span>{" "}
              Into Motion
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              AnimatiX Studio is a premium animation studio specializing in
              cutting-edge 2D/3D animation, character design, and visual
              storytelling that captivates audiences and elevates brands to new
              heights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
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
                Our <span className="text-gradient">Vision & Mission</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At AnimatiX Studio, we believe animation is more than just
                  moving pictures—it's the art of breathing life into
                  imagination. Our vision is to be the world's leading creative
                  partner for brands and storytellers who dare to dream big.
                </p>
                <p>
                  We combine cutting-edge technology with artistic excellence to
                  create animations that don't just capture attention, but create
                  lasting emotional connections. Every frame we craft is a step
                  toward transforming how the world experiences visual
                  storytelling.
                </p>
                <p>
                  Our mission is to empower businesses and creators with premium
                  animation services that elevate their message, engage their
                  audience, and drive meaningful results.
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
                  src={ourVisionBg}
                  alt="AnimatiX Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -left-8 p-8 glass-strong rounded-2xl"
              >
                <p className="text-5xl font-display font-bold text-gradient">
                  50+
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Projects Completed
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 p-6 glass-strong rounded-2xl"
              >
                <p className="text-4xl font-display font-bold text-gradient">
                  15+
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Happy Clients
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
              The principles that guide every frame we create
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
              A team of 5+ talented artists, animators, and designers bringing imagination to life
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
                <div className="p-8 rounded-3xl premium-card text-center hover:border-primary/20 transition-all duration-500 h-full flex flex-col items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent p-[2px] mb-6"
                  >
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                      <member.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                  </motion.div>
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
                </div>
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
