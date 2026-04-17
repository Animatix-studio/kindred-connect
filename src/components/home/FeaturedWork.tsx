import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import portfolioBg from "@/assets/portfolio-bg.jpg";
import delhiImg from "@/assets/portfolio/delhi-vidhansabha.jpg";
import waterImg from "@/assets/portfolio/pure-water.jpg";
import semiconImg from "@/assets/portfolio/semicon-india.jpg";
import officeImg from "@/assets/portfolio/office-interior.jpg";
import kitchenImg from "@/assets/portfolio/kitchen-interior.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "Delhi Vidhansabha",
    category: "Motion Graphics & 3D Animation",
    year: "2024",
    client: "Delhi Vidhansabha",
    image: delhiImg,
    description:
      "A cinematic motion graphics and 3D animation piece tracing key moments in Indian legislative history.",
    fullDescription:
      "A cinematic motion graphics and 3D animation piece tracing key moments in Indian legislative history, blending archival aesthetics with modern 3D craft.",
    services: ["Motion Graphics", "3D Animation", "Compositing", "Sound Design"],
    duration: "Short Film",
    gradient: "from-amber-500/50 via-amber-500/20",
  },
  {
    id: 2,
    title: "Journey of Pure Water To Bottled",
    category: "3D Animation & Modelling",
    year: "2024",
    client: "Industrial Client",
    image: waterImg,
    description:
      "A detailed 3D walkthrough of an industrial water purification and bottling process.",
    fullDescription:
      "A detailed 3D animation and modelling project visualising the full journey of water — from raw input through filtration, purification and bottling — built for clear technical storytelling.",
    services: ["3D Modelling", "3D Animation", "Lighting", "Rendering"],
    duration: "Explainer",
    gradient: "from-blue-500/50 via-blue-500/20",
  },
  {
    id: 3,
    title: "Semicon India 2025",
    category: "Video Edits",
    year: "2025",
    client: "PTW Group",
    image: semiconImg,
    description:
      "Event coverage and post-production edit for the Semicon India 2025 expo.",
    fullDescription:
      "End-to-end video editing for Semicon India 2025 — event highlights, booth tours and brand storytelling cut into a polished promotional package.",
    services: ["Video Editing", "Color Grading", "Sound Mix", "Motion Titles"],
    duration: "Event Edit",
    gradient: "from-cyan-500/50 via-cyan-500/20",
  },
  {
    id: 4,
    title: "Office Interior Walkthrough",
    category: "Visualization",
    year: "2024",
    client: "Private Client",
    image: officeImg,
    description:
      "Photoreal 3D visualization and walkthrough of a modern office interior.",
    fullDescription:
      "A photoreal interior visualization and animated walkthrough of a contemporary office space, designed to help the client experience the design before construction.",
    services: ["3D Visualization", "Lighting", "Texturing", "Walkthrough"],
    duration: "Walkthrough",
    gradient: "from-purple-500/50 via-purple-500/20",
  },
  {
    id: 5,
    title: "Kitchen Interior Walkthrough",
    category: "Visualization",
    year: "2024",
    client: "Private Client",
    image: kitchenImg,
    description:
      "Photoreal kitchen interior visualization with a smooth animated walkthrough.",
    fullDescription:
      "A high-fidelity 3D visualization of a modern modular kitchen, presented as a cinematic walkthrough showcasing materials, lighting and spatial flow.",
    services: ["3D Visualization", "Material Design", "Lighting", "Walkthrough"],
    duration: "Walkthrough",
    gradient: "from-emerald-500/50 via-emerald-500/20",
  },
];

export const FeaturedWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    if (isPaused || selectedProject) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused, selectedProject, nextSlide]);

  const currentProject = projects[currentSlide];

  return (
    <section
      id="featured-work"
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with iPad - all screen sizes */}
      <div className="relative w-full">
        <img
          src={portfolioBg}
          alt="Featured projects background"
          className="w-full h-auto"
        />

        {/* iPad Screen Overlay */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: "37.5%",
            left: "39.48%",
            width: "40.66%",
            height: "51.5%",
            borderRadius: "2px",
            clipPath: "polygon(2.2% 3.6%, 97.8% 4.8%, 97.1% 98.6%, 3.0% 97.2%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 cursor-pointer"
                onClick={() => setSelectedProject(currentProject)}
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${currentProject.gradient} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Project Info on Screen */}
                <div className="absolute bottom-1 left-1 right-1 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-6 md:left-6 md:right-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hidden sm:inline-block px-1.5 py-0.5 sm:px-2 md:px-3 md:py-1 rounded-full text-[8px] sm:text-[10px] md:text-xs font-medium bg-white/20 backdrop-blur-sm text-white mb-0.5 sm:mb-1 md:mb-2"
                  >
                    {currentProject.category}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-[8px] leading-tight sm:text-base md:text-2xl lg:text-3xl font-display font-bold mb-0 md:mb-1"
                  >
                    {currentProject.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/70 text-[10px] sm:text-xs md:text-sm line-clamp-2 hidden md:block"
                  >
                    {currentProject.description}
                  </motion.p>
                </div>

                {/* Play button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-5 h-5 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                    <Play className="text-white ml-0.5 w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-0.5 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/50 transition-colors z-10"
            >
              <ChevronLeft className="text-white w-2 h-2 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-0.5 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/50 transition-colors z-10"
            >
              <ChevronRight className="text-white w-2 h-2 sm:w-4 sm:h-4" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Controls - Below the image */}
      <div className="bg-background py-4 sm:py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center">
            {/* Slide Indicators */}
            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-full max-w-xs sm:max-w-md h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                key={currentSlide}
                initial={{ width: "0%" }}
                animate={{ width: isPaused || selectedProject ? "0%" : "100%" }}
                transition={{ duration: 10, ease: "linear" }}
                className="h-full bg-primary"
              />
            </div>

            {/* Current Project Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-center mt-4 px-4"
              >
                <span className="text-primary text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                  {currentProject.client} • {currentProject.year}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* View All Projects Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-5 sm:mt-6"
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-sm sm:text-base"
              >
                <span className="font-medium text-foreground">View All Projects</span>
                <ArrowUpRight
                  size={18}
                  className="text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                    {selectedProject.category}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {selectedProject.client} • {selectedProject.year}
                  </span>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl font-display">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  {selectedProject.fullDescription}
                </DialogDescription>
              </DialogHeader>

              {/* Project Image */}
              <div className="relative aspect-video rounded-xl overflow-hidden my-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.gradient} to-transparent opacity-40`} />
              </div>

              {/* Project Details Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service) => (
                      <span
                        key={service}
                        className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Duration</h4>
                  <p className="text-muted-foreground">{selectedProject.duration}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
