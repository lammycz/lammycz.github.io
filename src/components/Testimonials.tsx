import { Section, FadeIn } from "./ui/Section";
import { IconQuote, IconPlayerPlay, IconX } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    name: "bingos_",
    role: "Server Owner",
    text: "Its been a pleasure working with this guy, 100% recommend, hes the goat fr the attention and communication is amazing",
    avatar: "/assets/clients/bingos_.png",
    trailerUrl: "https://www.youtube.com/embed/jJuzd37PYQg?autoplay=1&mute=0"
  },
  {
    name: "voxcraftnetwork",
    role: "Server Owner",
    text: "I think the result is incredible, I totally recommend it.",
    avatar: "/assets/clients/voxcraftnetwork.png",
    trailerUrl: "https://www.youtube.com/embed/jhAMB5AWS10?autoplay=1&mute=0"
  },
  {
    name: "brimar11",
    role: "Server Owner",
    text: "To the people who are looking for a trailer that is a fair price and not overpriced, I fully recommend this freelancer. Thank you for the outstanding work you have put into this video.",
    avatar: "/assets/clients/brimar11.png",
    trailerUrl: "https://www.youtube.com/embed/hppUxGWLObE?autoplay=1&mute=0"
  },
  {
    name: "igor_ilic",
    role: "Mod Developer",
    text: "Truly pleased with the work they did. During the planing they helped me a lot and asked the right questions, and when they needed something they didn't hesitate to ask for to make the video that much better. From my vague concept to their quality work.",
    avatar: "/assets/clients/igor_ilic.png",
    trailerUrl: "https://www.youtube.com/embed/M4z6opu0VQY?autoplay=1&mute=0"
  },
  {
    name: "adam01548mc",
    role: "Server Owner",
    text: "INCREDIBLE, THANK YOU!",
    avatar: "/assets/clients/adam01548mc.png",
    trailerUrl: "https://www.youtube.com/embed/hEBV8foikt8?autoplay=1&mute=0"
  },
  {
    name: "hampedumpe",
    role: "Server Owner",
    text: "Really easy to work with, amazing response time! And just a nice guy in general!",
    avatar: "/assets/clients/hampedumpe.png",
    trailerUrl: "https://www.youtube.com/embed/DEb4Du1ncQg?autoplay=1&mute=0"
  },
  {
    name: "champixn_yt",
    role: "Server Owner",
    text: "he made my trailer like exactly what u wanted",
    avatar: "/assets/clients/champixn_yt.png",
    trailerUrl: "https://www.youtube.com/embed/KBp2-UPQqSI?autoplay=1&mute=0"
  },
  {
    name: "handyfon",
    role: "Mod Developer",
    text: "It was a pleasure working with Lammy, he effortlessy met my requirements and had no trouble reshooting some shots multiple times, always quick to respond. Kept me regularely updated how its going and checking in. Highly recommend this him for any of your projects.",
    avatar: "/assets/clients/handyfon.png",
    trailerUrl: "https://www.youtube.com/embed/zGwkhKbb-sI?autoplay=1&mute=0"
  },
  {
    name: "magicallands",
    role: "Server Owner",
    text: "fast response, great quality, I'm very happy with the result :)",
    avatar: "/assets/clients/magicallands.png",
    trailerUrl: "https://www.youtube.com/embed/qt7x9PZUG3A?autoplay=1&mute=0"
  },
  {
    name: "goldeaglep",
    role: "Popular Resourcepack Developer",
    text: "Very good communicator, did everything I asked for and more. Very accommodating to my request.",
    avatar: "/assets/clients/goldeaglep.png",
    trailerUrl: "https://www.youtube.com/embed/32JxlDLxgaU?autoplay=1&mute=0"
  },
  {
    name: "windswept276",
    role: "Server Owner",
    text: "Literally the best creator that I have worked with. Will for sure be using him in the future. ",
    avatar: "/assets/clients/windswept276.png",
    trailerUrl: "https://www.youtube.com/embed/7BXyFQXhdu4?autoplay=1&mute=0"
  },
  {
    name: "airhead022946",
    role: "Server Owner",
    text: "Great job! Thank you for your time and patience! ",
    avatar: "/assets/clients/airhead022946.png",
    trailerUrl: "https://www.youtube.com/embed/bv5Awgnh9GA?autoplay=1&mute=0"
  },
  {
    name: "imran_lives",
    role: "Influencer",
    text: "point of view from ambulance driver running into the building is really beautiful, thanks for the added scenes in the park ending too.",
    avatar: "/assets/clients/imran_lives.png",
    trailerUrl: "https://www.youtube.com/embed/qdSDjlrjPT8?autoplay=1&mute=0"
  },
  {
    name: "natewinfrey",
    role: "Server Owner",
    text: "By far exceeded my expectations. Amazing work!",
    avatar: "/assets/clients/natewinfrey.png",
    trailerUrl: "https://www.youtube.com/embed/tfEGvqLBGGk?autoplay=1&mute=0"
  },
  {
    name: "fritz432",
    role: "Map Creator",
    text: "I'm absolutely thrilled with my order! The trailer was delivered quickly and impressed me with its top-notch quality. The final result was exactly what I had in mind – professional, creative, and made with great attention to detail. Communication was super friendly and reliable throughout. I’ll definitely order again and can highly recommend it to anyone. Huge thanks for the amazing service – and most of all: Thank you, Lammy! 🙏",
    avatar: "/assets/clients/fritz432.png",
    trailerUrl: "https://www.youtube.com/embed/3DbDjrl_Go4?autoplay=1&mute=0"
  },
  {
    name: "lkjh141",
    role: "Server Owner",
    text: "For this price, the seller has outdone themself. I asked for 2 revision, no question asked, he did what I ask for. I will for sure buy from him again. The communication and final delivered product were just amazing and broke all of my expectations.",
    avatar: "/assets/clients/lkjh141.png",
    trailerUrl: "https://www.youtube.com/embed/KR1dZ94ypmE?autoplay=1&mute=0"
  },
  {
    name: "kisbertok24",
    role: "Server Owner",
    text: "Good job thanks 🙏🏽 ",
    avatar: "/assets/clients/kisbertok24.png",
    trailerUrl: "https://www.youtube.com/embed/OFlBfF3evDE?autoplay=1&mute=0"
  },
  {
    name: "tsxtoxicshadowx",
    role: "Server Owner",
    text: "Just amazing the server wasn't complete and somehow he made it 40 seconds long and just amazing exactly how I wanted it I will work with them again soon!",
    avatar: "/assets/clients/tsxtoxicshadowx.png",
    trailerUrl: "https://www.youtube.com/embed/Q0IBIqoh7Uc?autoplay=1&mute=0"
  },
  {
    name: "sonice1995",
    role: "Server Owner",
    text: "es hat meine Erwartungen übertroffen Wow  mega zufrieden ",
    avatar: "/assets/clients/sonice1995.png",
    trailerUrl: "https://www.youtube.com/embed/gAepC20HjZU?autoplay=1&mute=0"
  },
  {
    name: "johngra759",
    role: "Server Owner",
    text: "Very nice Work ",
    avatar: "/assets/clients/johngra759.png",
    trailerUrl: "https://www.youtube.com/embed/lxRGMJId0xo?autoplay=1&mute=0"
  }
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
          <span className="text-lammy-blue">the community.</span>
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
                     <IconPlayerPlay className="w-3 h-3 fill-current group-hover/btn:scale-110 transition-transform" />
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
                <IconX className="w-6 h-6" />
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
