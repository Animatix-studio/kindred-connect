import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Play } from "lucide-react";

const categories = ["All", "Feature Films", "Commercials", "Series", "Motion Graphics"];

const projects = [
  {
    id: 1,
    title: "Ethereal Dreams",
    category: "Feature Films",
    year: "2024",
    client: "Netflix",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    description: "An award-winning animated feature exploring the boundaries between reality and imagination.",
  },
  {
    id: 2,
    title: "Neon Horizons",
    category: "Commercials",
    year: "2024",
    client: "Nike",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    description: "A vibrant commercial campaign showcasing the future of athletic wear.",
  },
  {
    id: 3,
    title: "Wild Spirits",
    category: "Series",
    year: "2023",
    client: "Disney+",
    image: "https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=800&h=600&fit=crop",
    description: "An animated series following magical creatures in an enchanted forest.",
  },
  {
    id: 4,
    title: "Digital Genesis",
    category: "Motion Graphics",
    year: "2024",
    client: "Apple",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    description: "Motion graphics for Apple's latest product launch event.",
  },
  {
    id: 5,
    title: "Ocean's Memory",
    category: "Feature Films",
    year: "2023",
    client: "Warner Bros",
    image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop",
    description: "An underwater adventure that captured hearts worldwide.",
  },
  {
    id: 6,
    title: "Velocity",
    category: "Commercials",
    year: "2024",
    client: "Tesla",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop",
    description: "A high-energy commercial celebrating speed and innovation.",
  },
  {
    id: 7,
    title: "Cosmic Tales",
    category: "Series",
    year: "2023",
    client: "Amazon Prime",
    image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=600&fit=crop",
    description: "An episodic journey through the cosmos and beyond.",
  },
  {
    id: 8,
    title: "Brand Metamorphosis",
    category: "Motion Graphics",
    year: "2024",
    client: "Google",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop",
    description: "Dynamic brand transformation for Google's developer conference.",
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
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]"
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
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
      <section className="py-8 sticky top-20 z-30 glass">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/70 hover:text-foreground"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Play Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                        <Play className="text-primary-foreground ml-1" size={28} />
                      </div>
                    </motion.div>

                    {/* Arrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        x: hoveredProject === project.id ? 0 : -10,
                      }}
                      className="absolute top-6 right-6"
                    >
                      <div className="w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight className="text-foreground" size={20} />
                      </div>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-foreground/10 backdrop-blur-sm text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-display font-bold group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{project.client}</span>
                        <span className="w-1 h-1 rounded-full bg-muted-foreground" />
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
