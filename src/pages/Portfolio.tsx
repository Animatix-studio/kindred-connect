import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, Play, X } from "lucide-react";

import semiconImg from "@/assets/portfolio/semicon-india.jpg";
import officeImg from "@/assets/portfolio/office-interior.jpg";
import kitchenImg from "@/assets/portfolio/kitchen-interior.jpg";

import officeVideo from "@/assets/portfolio/office-interior.mp4";
import kitchenVideo from "@/assets/portfolio/kitchen-interior.mp4";
import semiconVideo from "@/assets/portfolio/semicon-india.mp4";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  gradient: string;
  video?: string;
  vimeoId?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Delhi Vidhan Sabha — Structure Building",
    category: "3D Animation",
    image:
      "https://i.vimeocdn.com/video/2150425995-a16d2169bba420a5e03609ace0bdfdfd9722c3bc90693f88d6aced36f6a735ed-d_640x360",
    gradient: "from-amber-500/40 via-amber-500/20",
    vimeoId: "1186673821",
  },
  {
    id: 2,
    title: "The Journey of Pure Water — Raw to Bottled",
    category: "3D Animation, Modelling & Motion Graphics",
    image:
      "https://i.vimeocdn.com/video/2150423740-774498019e92e5f879ab59998011dc67f97ec6583109e6a0e0ae52218644c52c-d_640x360",
    gradient: "from-blue-500/40 via-blue-500/20",
    vimeoId: "1186672130",
  },
  {
    id: 3,
    title: "Tanha Safar — Musical Lofi",
    category: "2D Animation",
    image:
      "https://i.vimeocdn.com/video/2150422503-dc3a7691ea2cfd0721fa3396c19f7603150c2a0dc4759ad07c2a4c68ba1c6d0e-d_640x360",
    gradient: "from-rose-500/40 via-rose-500/20",
    vimeoId: "1186671083",
  },
  {
    id: 4,
    title: "Delhi Vidhan Sabha",
    category: "Motion Graphics & Video Editing",
    image:
      "https://i.vimeocdn.com/video/2150422147-6e632e88f89a69e1a88b0ac7dcaec01e8c2d36e2ae795b4a46b4c6380526138f-d_640x360",
    gradient: "from-amber-500/40 via-orange-500/20",
    vimeoId: "1186670775",
  },
  {
    id: 5,
    title: "Diamantra — Apni Pehchan, Apni Kayani",
    category: "2D Cel Animation",
    image:
      "https://i.vimeocdn.com/video/2150420817-8926d7afda392dd8fa26396b67f8660ecf3a786a836767b03ee92e7ae5648769-d_640x360",
    gradient: "from-fuchsia-500/40 via-fuchsia-500/20",
    vimeoId: "1186669714",
  },
  {
    id: 6,
    title: "Semicon India 2025",
    category: "Video Edits",
    image: semiconImg,
    gradient: "from-cyan-500/40 via-cyan-500/20",
    video: semiconVideo,
  },
  {
    id: 7,
    title: "Office Interior Walkthrough",
    category: "Visualization",
    image: officeImg,
    gradient: "from-purple-500/40 via-purple-500/20",
    video: officeVideo,
  },
  {
    id: 8,
    title: "Kitchen Interior Walkthrough",
    category: "Visualization",
    image: kitchenImg,
    gradient: "from-emerald-500/40 via-emerald-500/20",
    video: kitchenVideo,
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
                <div
                  className="group cursor-pointer"
                  onClick={() =>
                    (project.video || project.vimeoId) &&
                    setActiveProject(project)
                  }
                >
                  {/* Title above the card */}
                  <div className="mb-3 sm:mb-4 flex items-end justify-between gap-3 px-1">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-border/40 shadow-xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.gradient} to-transparent opacity-60`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />

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

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary text-xs sm:text-sm font-medium">
                        {project.video || project.vimeoId
                          ? "Play Video →"
                          : "Coming Soon"}
                      </span>
                    </div>

                    {(project.video || project.vimeoId) && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-500 pointer-events-none">
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
                    )}


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

      {/* Video Modal */}
      <AnimatePresence>
        {activeProject && activeProject.video && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveProject(null)}
          >
            <motion.button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-12 h-12 rounded-full bg-foreground/10 backdrop-blur-md flex items-center justify-center border border-foreground/15 hover:bg-foreground/20 transition-colors z-10"
              aria-label="Close video"
            >
              <X className="text-foreground" size={20} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 px-1">
                <h3 className="text-xl sm:text-3xl font-display font-bold">
                  {activeProject.title}
                </h3>
                <span className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase text-muted-foreground">
                  {activeProject.category}
                </span>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/40 shadow-2xl bg-black">
                <video
                  src={activeProject.video}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
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
