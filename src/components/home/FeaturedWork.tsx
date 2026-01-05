import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ethereal Dreams",
    category: "Feature Film",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    color: "from-purple-500/20",
  },
  {
    id: 2,
    title: "Neon Horizons",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    color: "from-blue-500/20",
  },
  {
    id: 3,
    title: "Wild Spirits",
    category: "Series",
    image: "https://images.unsplash.com/photo-1614729939124-032d1e6c9945?w=800&h=600&fit=crop",
    color: "from-orange-500/20",
  },
  {
    id: 4,
    title: "Digital Genesis",
    category: "Motion Graphics",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&h=600&fit=crop",
    color: "from-pink-500/20",
  },
];

export const FeaturedWork = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Our Latest <span className="text-gradient italic">Creations</span>
            </h2>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              View All Projects
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/portfolio"
                className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute top-8 right-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="text-primary-foreground" size={20} />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
