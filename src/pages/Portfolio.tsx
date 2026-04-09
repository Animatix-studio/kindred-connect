import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Play, X } from "lucide-react";
import { useState } from "react";

import pureWaterImg from "@/assets/portfolio/pure-water.jpg";
import kitchenInteriorImg from "@/assets/portfolio/kitchen-interior.jpg";
import officeInteriorImg from "@/assets/portfolio/office-interior.jpg";
import delhiVibhansabhaImg from "@/assets/portfolio/delhi-vibhansabha.jpg";
import semiconIndiaImg from "@/assets/portfolio/semicon-india.jpg";
import project6Img from "@/assets/portfolio/project-6.jpg";
import project7Img from "@/assets/portfolio/project-7.jpg";
import project8Img from "@/assets/portfolio/project-8.jpg";

const projects = [
  {
    id: 1,
    title: "Journey of Pure Water To Bottled",
    category: "3D Animation & Modelling",
    image: pureWaterImg,
    video: "/videos/pure-water.mp4",
    gradient: "from-blue-600/40 via-blue-600/20",
  },
  {
    id: 2,
    title: "Kitchen Interior Design & Walk Through",
    category: "3D Visualization",
    image: kitchenInteriorImg,
    gradient: "from-amber-500/40 via-amber-500/20",
  },
  {
    id: 3,
    title: "Office Interior Design & Walk Through",
    category: "3D Visualization",
    image: officeInteriorImg,
    gradient: "from-purple-500/40 via-purple-500/20",
  },
  {
    id: 4,
    title: "Delhi Vibhansabha",
    category: "Motion Graphics & 3D Animation",
    image: delhiVibhansabhaImg,
    video: "/videos/delhi-vibhansabha.mp4",
    gradient: "from-orange-500/40 via-orange-500/20",
  },
  {
    id: 5,
    title: "Semicon India 2025-07 Video Edits",
    category: "Video Edits",
    image: semiconIndiaImg,
    video: "/videos/semicon-india.mp4",
    gradient: "from-cyan-500/40 via-cyan-500/20",
  },
  {
    id: 6,
    title: "Creative Motion Project",
    category: "Motion Graphics",
    image: project6Img,
    video: "/videos/project-6.mp4",
    gradient: "from-rose-500/40 via-rose-500/20",
  },
  {
    id: 7,
    title: "Visual Storytelling Reel",
    category: "Video Production",
    image: project7Img,
    video: "/videos/project-7.mp4",
    gradient: "from-emerald-500/40 via-emerald-500/20",
  },
  {
    id: 8,
    title: "Dynamic Animation Showcase",
    category: "2D Animation",
    image: project8Img,
    video: "/videos/project-8.mp4",
    gradient: "from-indigo-500/40 via-indigo-500/20",
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null);

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
                "radial-gradient(circle, hsl(280 80% 65% / 0.15), transparent)",
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
              Discover the projects that showcase our passion for animation and
              visual storytelling. Each piece represents our commitment to
              pushing creative boundaries.
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
                <div
                  className="group cursor-pointer"
                  onClick={() => setActiveProject(project)}
                >
                  <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-70`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />

                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                      }}
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    />

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

                    {project.video && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                        >
                          <Play className="text-primary-foreground ml-1" size={20} />
                        </motion.div>
                      </div>
                    )}

                    <div className="hidden sm:block absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
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

      {/* Video Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>

              {activeProject.video ? (
                <video
                  src={activeProject.video}
                  controls
                  autoPlay
                  className="w-full rounded-2xl"
                />
              ) : (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full rounded-2xl object-contain max-h-[80vh]"
                />
              )}

              <div className="mt-4 text-center">
                <span className="text-primary text-sm font-medium">{activeProject.category}</span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                  {activeProject.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Portfolio;
