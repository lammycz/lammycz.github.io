import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [showReel, setShowReel] = useState(false);

  // Close showreel on scroll past hero
  useEffect(() => {
    const handleScroll = () => {
      if (showReel && window.scrollY > window.innerHeight) {
        setShowReel(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showReel]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showReel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showReel]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showReel) {
        setShowReel(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showReel]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-lammy-blue/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Showreel Overlay */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <button
              onClick={() => setShowReel(false)}
              className="absolute top-8 right-8 z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full h-full relative">
              <video
                src="/assets/videos/showreel.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted={false}
                controls={false}
                loop
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 pointer-events-none" />
              
              {/* Cool overlay text */}
              <div className="absolute bottom-10 left-10 z-10">
                <h3 className="text-4xl font-black uppercase text-white mb-2">Showreel 2026</h3>
                <p className="text-lammy-blue font-mono uppercase tracking-widest text-sm">Best Moments</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`container mx-auto px-4 md:px-6 relative z-10 transition-opacity duration-500 ${showReel ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              Turning Ideas
            </span>
            <br />
            <span className="text-white">
              Into <span className="text-lammy-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">Legendary</span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-gray-600">
              Trailers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Premium Minecraft trailers and cinematics designed to turn viewers into players.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setShowReel(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              Watch Showreel <Play className="w-5 h-5 fill-current" />
            </button>
            <a
              href="#pricing"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-bold text-lg rounded-full hover:bg-white/20 backdrop-blur-sm transition-all border border-white/10"
            >
              View Packages
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
         {/* Decorative floating cubes or elements could go here */}
      </div>
    </section>
  );
}
