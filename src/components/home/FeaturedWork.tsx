import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import portfolioBg from "@/assets/portfolio-bg.jpg";
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
    title: "Ethereal Dreams",
    category: "Feature Films",
    year: "2024",
    client: "Netflix",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    description:
      "An award-winning animated feature exploring the boundaries between reality and imagination.",
    fullDescription:
      "Ethereal Dreams is a groundbreaking animated feature that takes viewers on an unforgettable journey through the subconscious mind. Working closely with Netflix, we crafted stunning visuals that blur the line between dreams and reality, earning critical acclaim and multiple animation awards.",
    services: ["Character Design", "3D Animation", "Visual Effects", "Sound Design"],
    duration: "2h 15min",
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
    fullDescription:
      "For Nike's latest campaign, we created a futuristic vision of sports and athleticism. Using cutting-edge motion graphics and neon-infused color palettes, we brought their new product line to life in a way that resonated with a global audience.",
    services: ["Motion Graphics", "3D Modeling", "Color Grading", "Compositing"],
    duration: "60 seconds",
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
    fullDescription:
      "Wild Spirits is a captivating animated series that follows a group of magical creatures navigating life in an ancient, enchanted forest. Created for Disney+, this project showcases our ability to create rich, immersive worlds filled with memorable characters.",
    services: ["World Building", "Character Animation", "Background Art", "Storyboarding"],
    duration: "12 Episodes",
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
    fullDescription:
      "Digital Genesis represented Apple's vision for their annual product launch. We designed and animated a series of motion graphics that elegantly showcased their new technology, blending minimalist aesthetics with dynamic visual storytelling.",
    services: ["Motion Design", "3D Animation", "Typography", "Brand Integration"],
    duration: "45 seconds",
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
    fullDescription:
      "Ocean's Memory is an emotional animated feature that tells the story of deep-sea creatures and their forgotten histories. Partnering with Warner Bros, we created breathtaking underwater environments and characters that audiences fell in love with globally.",
    services: ["Underwater FX", "Character Design", "Lighting", "Score Integration"],
    duration: "1h 52min",
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
    fullDescription:
      "Velocity captures the essence of Tesla's commitment to innovation and speed. Through dynamic camera movements, sleek 3D renders, and electrifying visual effects, we created a commercial that embodies the future of transportation.",
    services: ["3D Visualization", "Particle Effects", "Camera Animation", "Post-Production"],
    duration: "30 seconds",
    gradient: "from-green-500/50 via-green-500/20",
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
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image with iPad - This IS the layout */}
      <div className="relative w-full">
        <img 
          src={portfolioBg} 
          alt="Featured projects background" 
          className="w-full h-auto"
        />
        
        {/* iPad Screen Overlay - aligned precisely to the blue-marked screen area inside the iPad frame */}
        <div
          className="absolute overflow-hidden"
          style={{
            top: '16%',
            left: '43%',
            width: '30%',
            height: '65%',
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
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${currentProject.gradient} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Project Info on Screen */}
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-xs font-medium bg-white/20 backdrop-blur-sm text-white mb-1 md:mb-2"
                  >
                    {currentProject.category}
                  </motion.span>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-display font-bold mb-0.5 md:mb-1"
                  >
                    {currentProject.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-white/70 text-[10px] sm:text-xs md:text-sm line-clamp-2 hidden sm:block"
                  >
                    {currentProject.description}
                  </motion.p>
                </div>

                {/* Click indicator - Play button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors">
                    <Play className="text-white ml-0.5" size={20} />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/50 transition-colors z-10"
            >
              <ChevronLeft className="text-white" size={16} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-black/50 transition-colors z-10"
            >
              <ChevronRight className="text-white" size={16} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Controls - Below the image */}
      <div className="bg-background py-6 md:py-10">
        <div className="container mx-auto px-6">
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
            <div className="mt-4 w-full max-w-md h-1 bg-muted rounded-full overflow-hidden">
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
                className="text-center mt-4"
              >
                <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
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
              className="mt-6"
            >
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
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
