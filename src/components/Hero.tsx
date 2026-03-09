import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Play, X, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const soundEntryValue = 0.002;

export default function Hero() {
  const [showReel, setShowReel] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Audio fade in/out for showreel
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let volumeInterval: any;

    if (showReel) {
      video.volume = 0;
      video.muted = false;
      volumeInterval = setInterval(() => {
        if (video.volume < 1) {
          video.volume = Math.min(1, video.volume + soundEntryValue);
        } else {
          clearInterval(volumeInterval);
        }
      }, 20);
    } else {
      // Fade out over 1 second (matching the exit animation)
      const fadeOutDuration = 1000;
      const fadeOutInterval = 50;
      const volumeDecrement = video.volume / (fadeOutDuration / fadeOutInterval);

      volumeInterval = setInterval(() => {
        if (video && video.volume > 0) {
          video.volume = Math.max(0, video.volume - volumeDecrement);
        } else {
          clearInterval(volumeInterval);
        }
      }, fadeOutInterval);
    }

    return () => {
      clearInterval(volumeInterval);
    };
  }, [showReel]);

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
    const preventScroll = (e: Event) => e.preventDefault();
    const preventKeyScroll = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        e.preventDefault();
      }
    };

    if (showReel) {
      document.body.style.overflow = "scroll";
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', preventKeyScroll);
    } else {
      document.body.style.overflow = "unset";
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyScroll);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventKeyScroll);
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

  // Preload video
  useEffect(() => {
    const preloadVideo = preloadVideoRef.current;
    if (preloadVideo) {
      preloadVideo.addEventListener('canplaythrough', () => setVideoLoaded(true));
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-lammy-blue/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Hidden preload video */}
      <video
        ref={preloadVideoRef}
        src="https://github.com/lammycz/lammycz.github.io/releases/download/1.0/showreel.mp4"
        preload="auto"
        style={{ display: 'none' }}
      />

      {/* Showreel Overlay */}
      <AnimatePresence>
        {showReel && (
          <motion.div
            initial={{ clipPath: "inset(50% 0 50% 0)" }}
            animate={{ clipPath: "inset(0% 0 0% 0)" }}
            exit={{ clipPath: "inset(50% 0 50% 0)" }}
            transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
            onAnimationStart={() => setVideoReady(false)}
          >
            <button
              onClick={() => setShowReel(false)}
              className="absolute top-8 right-8 z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="w-full h-full relative crt-effect">
              {videoLoaded ? (
                <video
                  ref={videoRef}
                  src="https://github.com/lammycz/lammycz.github.io/releases/download/1.0/showreel.mp4"
                  className={`w-full h-full object-cover ${showReel ? 'transition-all duration-1000' : ''} ${
                    showReel && videoReady ? "blur-0" : "blur-xl"
                  }`}
                  autoPlay
                  muted={false}
                  controls={false}
                  loop
                  onCanPlay={() => setTimeout(() => setVideoReady(true), 200)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-black">
                  <div className="text-center text-white">
                    <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
                    <p className="text-lg">Loading showreel...</p>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 pointer-events-none" />
              
              {/* Cool overlay text */}
              <div className="absolute bottom-5 left-10 z-10">
                <h3 className="text-4xl font-black uppercase text-white mb-2">Trailers Showreel</h3>
                <p className="text-gray-200 font-mono uppercase tracking-widest text-sm">&#8239;Lammy CZ</p>
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
            <span className="text-white">
              Turning Ideas
            </span>
            <br />
            <span className="text-white">
              Into <span className="text-lammy-blue drop-shadow-[0_0_30px_rgba(59,130,246,0.6)]">Legendary</span>
            </span>
            <br />
            <span className="text-white">
              Trailers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Premium Minecraft trailers designed to amaze all viewers.
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
