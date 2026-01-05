import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Play, Sparkles } from "lucide-react";

const categories = [
  "All",
  "Feature Films",
  "Commercials",
  "Series",
  "Motion Graphics",
];

const projects = [
  {
    id: 1,
    title: "Ethereal Dreams",
    category: "Feature Films",
    year: "2024",
    client: "Netflix",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    description:
      "An award-winning animated feature exploring the boundaries between reality and imagination.",
    gradient: "from-purple-600/50 via-purple-600/20",
  },
  {
    id: 2,
    title: "Neon Horizons",
    category: "Commercials",
    year: "2024",
    client: "Nike",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    description:
      "A vibrant commercial campaign showcasing the future of athletic wear.",
    gradient: "from-cyan-500/50 via-cyan-500/20",
  },
  {
    id: 3,
    title: "Wild Spirits",
    category: "Series",
    year: "2023",
    client: "Disney+",
    image:
      "https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=800&h=600&fit=crop",
    description:
      "An animated series following magical creatures in an enchanted forest.",
    gradient: "from-orange-500/50 via-orange-500/20",
  },
  {
    id: 4,
    title: "Digital Genesis",
    category: "Motion Graphics",
    year: "2024",
    client: "Apple",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    description: "Motion graphics for Apple's latest product launch event.",
    gradient: "from-pink-500/50 via-pink-500/20",
  },
  {
    id: 5,
    title: "Ocean's Memory",
    category: "Feature Films",
    year: "2023",
    client: "Warner Bros",
    image:
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop",
    description: "An underwater adventure that captured hearts worldwide.",
    gradient: "from-blue-500/50 via-blue-500/20",
  },
  {
    id: 6,
    title: "Velocity",
    category: "Commercials",
    year: "2024",
    client: "Tesla",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop",
    description: "A high-energy commercial celebrating speed and innovation.",
    gradient: "from-green-500/50 via-green-500/20",
  },
  {
    id: 7,
    title: "Cosmic Tales",
    category: "Series",
    year: "2023",
    client: "Amazon Prime",
    image:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=600&fit=crop",
    description: "An episodic journey through the cosmos and beyond.",
    gradient: "from-indigo-500/50 via-indigo-500/20",
  },
  {
    id: 8,
    title: "Brand Metamorphosis",
    category: "Motion Graphics",
    year: "2024",
    client: "Google",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    description:
      "Dynamic brand transformation for Google's developer conference.",
    gradient: "from-rose-500/50 via-rose-500/20",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 noise">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
              rotate: [0, 45, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full blur-[150px]"
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
              Our Work
            </motion.span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-10 leading-tight">
              A Showcase of{" "}
              <span className="text-gradient italic">Creativity</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Explore our diverse portfolio of award-winning animations, from
              blockbuster features to cutting-edge commercials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 z-30">
        <div className="absolute inset-0 glass-strong" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground bg-secondary/50"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7 }}
                    />

                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                    {/* Play Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-24 h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30"
                      >
                        <Play
                          className="text-primary-foreground ml-1"
                          size={32}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -15, y: 15 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        x: hoveredProject === project.id ? 0 : -15,
                        y: hoveredProject === project.id ? 0 : 15,
                      }}
                      className="absolute top-6 right-6"
                    >
                      <div className="w-14 h-14 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center border border-foreground/10">
                        <ArrowUpRight className="text-foreground" size={22} />
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-5 py-2 rounded-full text-xs font-medium glass-strong"
                      >
                        {project.category}
                      </motion.span>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="font-medium text-foreground/80">
                          {project.client}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
