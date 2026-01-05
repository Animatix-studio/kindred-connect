import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Ethereal Dreams",
    category: "Feature Film",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    gradient: "from-purple-600/40 via-purple-600/20",
    accent: "purple",
  },
  {
    id: 2,
    title: "Neon Horizons",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    gradient: "from-cyan-500/40 via-cyan-500/20",
    accent: "cyan",
  },
  {
    id: 3,
    title: "Wild Spirits",
    category: "Series",
    image:
      "https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=800&h=600&fit=crop",
    gradient: "from-orange-500/40 via-orange-500/20",
    accent: "orange",
  },
  {
    id: 4,
    title: "Digital Genesis",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    gradient: "from-pink-500/40 via-pink-500/20",
    accent: "pink",
  },
];

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group cursor-pointer perspective-1000"
      >
        <Link
          to="/portfolio"
          className="block relative aspect-[4/3] rounded-3xl overflow-hidden"
        >
          {/* Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Gradient overlays */}
          <div
            className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-70`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            {/* Top - Category */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="self-start px-4 py-1.5 rounded-full text-xs font-medium glass-strong"
            >
              {project.category}
            </motion.span>

            {/* Bottom - Title */}
            <div>
              <motion.span
                className="text-primary text-sm font-medium mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                View Project
              </motion.span>
              <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Play button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
            >
              <Play className="text-primary-foreground ml-1" size={28} />
            </motion.div>
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileHover={{ opacity: 1, x: 0, y: 0 }}
            className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center border border-foreground/10">
              <ArrowUpRight className="text-foreground" size={20} />
            </div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export const FeaturedWork = () => {
  return (
    <section className="py-36 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full blur-[200px]"
          style={{
            background:
              "radial-gradient(circle, hsl(280 80% 65% / 0.1), transparent)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5"
            >
              Featured Projects
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Our Latest{" "}
              <span className="text-gradient italic">Creations</span>
            </h2>
          </div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <span className="font-medium">View All Projects</span>
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
