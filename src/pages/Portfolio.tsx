import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Play } from "lucide-react";

import semiconImg from "@/assets/portfolio/semicon-india.jpg";
import delhiImg from "@/assets/portfolio/delhi-vidhansabha.jpg";
import officeImg from "@/assets/portfolio/office-interior.jpg";
import kitchenImg from "@/assets/portfolio/kitchen-interior.jpg";
import waterImg from "@/assets/portfolio/pure-water.jpg";

const projects = [
  {
    id: 1,
    title: "Semicon India 2025",
    category: "Video Edits",
    image: semiconImg,
    gradient: "from-cyan-500/40 via-cyan-500/20",
  },
  {
    id: 2,
    title: "Delhi Vidhansabha",
    category: "Motion Graphics & 3D Animation",
    image: delhiImg,
    gradient: "from-amber-500/40 via-amber-500/20",
  },
  {
    id: 3,
    title: "Office Interior Walkthrough",
    category: "Visualization",
    image: officeImg,
    gradient: "from-purple-500/40 via-purple-500/20",
  },
  {
    id: 4,
    title: "Kitchen Interior Walkthrough",
    category: "Visualization",
    image: kitchenImg,
    gradient: "from-emerald-500/40 via-emerald-500/20",
  },
  {
    id: 5,
    title: "Journey of Pure Water To Bottled",
    category: "3D Animation & Modelling",
    image: waterImg,
    gradient: "from-blue-500/40 via-blue-500/20",
  },
];

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-[320px] h-[320px] sm:w-[600px] sm:h-[600px] rounded-full blur-[120px] sm:blur-[200px]"
            style={{
              background:
                "radial-gradient(circle, hsl(var(--primary) / 0.18), transparent)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6">
              Explore Our{" "}
              <span className="text-gradient italic">Creative Work</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed px-2 sm:px-0">
              A curated selection of projects across animation, visualization,
              motion graphics and video. Each piece reflects our pursuit of
              craft, story and detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
                  <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-border/40 shadow-xl">
                    {/* Image */}
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Gradient overlays */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-60`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />

                    {/* Shine */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
                      }}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        repeatDelay: 2.5,
                      }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-5 sm:p-8 flex flex-col justify-between">
                      <span className="self-start px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium glass-strong">
                        {project.category}
                      </span>

                      <div>
                        <span className="text-primary text-xs sm:text-sm font-medium mb-1 sm:mb-2 block opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                          View Project
                        </span>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 sm:group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                      >
                        <Play
                          className="text-primary-foreground ml-1"
                          size={22}
                        />
                      </motion.div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:block absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-11 h-11 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center border border-foreground/15">
                        <ArrowUpRight className="text-foreground" size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10 sm:mt-14 italic">
            More projects &amp; full videos coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Portfolio;
