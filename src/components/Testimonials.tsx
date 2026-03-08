import { Section, FadeIn } from "./ui/Section";
import { Quote, Play, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    name: "ShushMC",
    role: "5K+ Discord Members",
    text: "Great work, been working with the studio for years now. They have always delivered what I was looking for!",
    avatar: "https://picsum.photos/seed/user1/100/100",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
  },
  {
    name: "RoyceMC",
    role: "1K+ Discord Members",
    text: "Awesome team, I kept dragging this ticket for months for private reasons, and he NEVER complained and cooked an INSANE trailer!",
    avatar: "https://picsum.photos/seed/user2/100/100",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
  },
  {
    name: "CarnagePvP",
    role: "2.5K+ Discord Members",
    text: "Helpful and gave insights on things to improve the trailer with!",
    avatar: "https://picsum.photos/seed/user3/100/100",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
  },
  {
    name: "Navania",
    role: "1K+ Discord Members",
    text: "We are very satisfied with the work they did for us. Very quick deliveries in high quality, and very patient with our wishes and revisions.",
    avatar: "https://picsum.photos/seed/user4/100/100",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
  },
  {
    name: "FruskyGames",
    role: "2.5K+ Discord Members",
    text: "Awesome work, listened very carefully to my requests. Finished within the deadline and had to do almost no revisions due to all the clips in advance.",
    avatar: "https://picsum.photos/seed/user5/100/100",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
  },
  {
    name: "MCRivals",
    role: "1K+ Discord Members",
    text: "Invix and his team at Vexel Studios are so very good at what they do. This is where you go when you need a project to be next level.",
    avatar: "https://picsum.photos/seed/user6/100/100",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
  },
];

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
    <Section id="testimonials" className="bg-black py-32">
      <FadeIn className="mb-20">
        <span className="text-lammy-blue font-bold text-sm uppercase tracking-widest mb-4 block">
          Client Feedback
        </span>
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-[0.9]">
          Trusted by <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">the community.</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="h-full">
            <FadeIn delay={i * 0.05} className="h-full">
              <div className="bg-[#0a0a0a] border border-white/5 p-8 h-full relative group hover:border-lammy-blue/30 transition-all duration-300 flex flex-col justify-between min-h-[300px]">
                {/* Top: User Info & Link */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border border-white/10">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-lg leading-none mb-1">{t.name}</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.role}</div>
                    </div>
                  </div>
                </div>

                {/* Middle: Quote */}
                <div className="flex-grow mb-8">
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    "{t.text}"
                  </p>
                </div>

                {/* Bottom: Action */}
                <div className="pt-6 border-t border-white/5 flex justify-end items-center">
                   <button 
                    onClick={() => setSelectedVideo(t.trailerUrl)}
                    className="text-xs font-bold text-white uppercase tracking-widest hover:text-lammy-blue transition-colors flex items-center gap-2 group/btn"
                   >
                     Watch delivered trailer
                     <Play className="w-3 h-3 fill-current group-hover/btn:scale-110 transition-transform" />
                   </button>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
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
