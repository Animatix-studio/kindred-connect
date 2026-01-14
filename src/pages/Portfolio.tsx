import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Ethereal Dreams",
    category: "Feature Films",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    gradient: "from-purple-600/40 via-purple-600/20",
  },
  {
    id: 2,
    title: "Neon Horizons",
    category: "Commercials",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    gradient: "from-cyan-500/40 via-cyan-500/20",
  },
  {
    id: 3,
    title: "Wild Spirits",
    category: "Series",
    image:
      "https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=800&h=600&fit=crop",
    gradient: "from-orange-500/40 via-orange-500/20",
  },
  {
    id: 4,
    title: "Digital Genesis",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    gradient: "from-pink-500/40 via-pink-500/20",
  },
  {
    id: 5,
    title: "Ocean's Memory",
    category: "Feature Films",
    image:
      "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop",
    gradient: "from-blue-500/40 via-blue-500/20",
  },
  {
    id: 6,
    title: "Velocity",
    category: "Commercials",
    image:
      "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop",
    gradient: "from-green-500/40 via-green-500/20",
  },
  {
    id: 7,
    title: "Starfall",
    category: "Feature Films",
    image:
      "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&h=600&fit=crop",
    gradient: "from-indigo-500/40 via-indigo-500/20",
  },
  {
    id: 8,
    title: "Urban Pulse",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?w=800&h=600&fit=crop",
    gradient: "from-red-500/40 via-red-500/20",
  },
];

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-[200px]"
            style={{
              background:
                "radial-gradient(circle, hsl(280 80% 65% / 0.15), transparent)",
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-primary text-sm font-semibold tracking-[0.2em] uppercase mb-5"
            >
              Our Portfolio
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Explore Our{" "}
              <span className="text-gradient italic">Creative Work</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Discover the projects that showcase our passion for animation and
              visual storytelling. Each piece represents our commitment to
              pushing creative boundaries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
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
                      <span className="self-start px-4 py-1.5 rounded-full text-xs font-medium glass-strong">
                        {project.category}
                      </span>

                      {/* Bottom - Title */}
                      <div>
                        <span className="text-primary text-sm font-medium mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          View Project
                        </span>
                        <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                      >
                        <Play
                          className="text-primary-foreground ml-1"
                          size={28}
                        />
                      </motion.div>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center border border-foreground/10">
                        <ArrowUpRight className="text-foreground" size={20} />
                      </div>
                    </div>
                  </div>
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

export default Portfolio;
