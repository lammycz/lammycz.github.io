import { Section, FadeIn } from "./ui/Section";
import { Play, X, Zap, Sparkles, Crown, Info } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Epic SMP Season 4",
    tier: "Pro",
    image: "https://picsum.photos/seed/mc1/800/600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0",
  },
  {
    id: 2,
    title: "BedWars Championship",
    tier: "Ultimate",
    image: "https://picsum.photos/seed/mc2/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0",
  },
  {
    id: 3,
    title: "Lifesteal SMP",
    tier: "Starter",
    image: "https://picsum.photos/seed/mc3/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0",
  },
  {
    id: 4,
    title: "Ark Survival Trailer",
    tier: "Pro",
    image: "https://picsum.photos/seed/ark1/800/800",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0",
  },
  {
    id: 5,
    title: "Hytale Teaser",
    tier: "Ultimate",
    image: "https://picsum.photos/seed/hytale1/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0",
  },
  {
    id: 6,
    title: "Server Showcase",
    tier: "Starter",
    image: "https://picsum.photos/seed/showcase/800/450",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0",
  }
];

const tabs = [
  { id: "Starter", label: "Starter", icon: Zap, desc: "Perfect for new servers. 60s trailer with essential editing." },
  { id: "Pro", label: "Pro", icon: Sparkles, desc: "High-end editing with motion graphics and sound design." },
  { id: "Ultimate", label: "Ultimate", icon: Crown, desc: "The complete package. In-game animation, VFX, and custom assets." },
];

export default function Work() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("Starter");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const filteredProjects = projects.filter(p => p.tier === activeTab);

  // Handle Hash Change for "Preview Works" buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.includes("?tab=")) {
        const tab = hash.split("?tab=")[1];
        if (tabs.some(t => t.id === tab)) {
          setActiveTab(tab);
          // Scroll to section
          const element = document.getElementById('work');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedVideo) {
        setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedVideo]);

  return (
    <Section id="work" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-lammy-blue/5 blur-[120px] -z-10 rounded-full" />
      
      <FadeIn className="mb-16 text-center">
        <span className="text-lammy-blue font-bold text-sm uppercase tracking-widest mb-4 block">
          Portfolio
        </span>
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-[0.9]">
          The
          <span className="text-white">Masterpieces</span>
        </h2>

        {/* Filter Tabs - Enhanced */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {tabs.map((tab) => (
            <div 
              key={tab.id} 
              className="relative"
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`group relative px-8 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all border ${
                  activeTab === tab.id 
                    ? "bg-lammy-blue text-white border-lammy-blue shadow-[0_0_20px_rgba(59,130,246,0.4)]" 
                    : "bg-white/5 text-gray-500 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? "text-white" : "text-gray-600 group-hover:text-lammy-blue transition-colors"}`} />
                  {tab.label}
                </span>
              </button>

              {/* Info Popup */}
              <AnimatePresence>
                {hoveredTab === tab.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 z-50 pointer-events-none"
                  >
                    <div className="bg-black/90 border border-white/10 p-4 rounded-xl shadow-2xl backdrop-blur-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-lammy-blue" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">{tab.label}</span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{tab.desc}</p>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-black/90 border-r border-b border-white/10 rotate-45 -mt-1.5" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="relative group overflow-hidden rounded-3xl cursor-pointer bg-lammy-surface border border-white/5 hover:border-lammy-blue/50 transition-colors aspect-video"
                onClick={() => setSelectedVideo(project.videoUrl)}
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-end">
                    {/* Removed ArrowUpRight icon as requested */}
                  </div>

                  <div>
                    <div className="text-xs font-bold text-lammy-blue uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.tier}
                    </div>
                    <h3 className="text-xl font-black uppercase text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h3>
                    <div className="h-1 w-0 group-hover:w-full bg-lammy-blue transition-all duration-300"></div>
                  </div>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-white/10 p-4 rounded-full border border-white/20 shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-6xl aspect-video bg-black border border-white/10 shadow-[0_0_100px_rgba(59,130,246,0.2)] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-white hover:text-black p-3 rounded-full text-white transition-all backdrop-blur-md border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                src={selectedVideo}
                title="YouTube video player"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
