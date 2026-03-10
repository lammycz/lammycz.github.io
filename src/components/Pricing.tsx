import { Section, FadeIn } from "./ui/Section";
import { useState } from 'react';
import { IconCheck, IconClock, IconRotateClockwise, IconX, IconVideo, IconSparkles, IconPhoto } from "@tabler/icons-react";

const tiers = [
  {
    name: "Starter Trailer",
    price: "€13.55",
    description: "Server/map Trailer 60 Seconds 1080P 120 FPS Titles Color grading",
    features: [
      { text: "3-day delivery", icon: IconClock, included: true },
      { text: "1 Revision", icon: IconRotateClockwise, included: true },
      { text: "Up to 1 minute running time", icon: IconVideo, included: true },
      { text: "Color grading", icon: IconSparkles, included: true },
      { text: "Sound design & mixing", icon: IconCheck, included: true },
      { text: "Motion graphics", icon: IconCheck, included: false },
      { text: "Thumbnail included", icon: IconPhoto, included: false }
    ],
    id: "Starter",
    link: "https://www.fiverr.com/lammycz/record-and-edit-a-minecraft-trailer-or-teaser-for-you?&pckg_id=1"
  },
  {
    name: "Pro Trailer",
    price: "€27.09",
    description: "Server/map Trailer 60 Seconds 1080P 120 FPS Titles Effects Speed ramps Color grading",
    features: [
      { text: "4-day delivery", icon: IconClock, included: true },
      { text: "2 Revisions", icon: IconRotateClockwise, included: true },
      { text: "Up to 1 minute running time", icon: IconVideo, included: true },
      { text: "Color grading", icon: IconSparkles, included: true },
      { text: "Sound design & mixing", icon: IconCheck, included: true },
      { text: "Motion graphics", icon: IconCheck, included: true },
      { text: "Thumbnail included", icon: IconPhoto, included: false }
    ],
    id: "Pro",
    link: "https://www.fiverr.com/lammycz/record-and-edit-a-minecraft-trailer-or-teaser-for-you?&pckg_id=2"
  },
  {
    name: "Ultimate Trailer",
    price: "€54.19",
    description: "Server/map Trailer 120 Seconds 1080P 120 FPS Effects Transitions Speed ramps In-game animation",
    features: [
      { text: "5-day delivery", icon: IconClock, included: true },
      { text: "3 Revisions", icon: IconRotateClockwise, included: true },
      { text: "Up to 2 minutes running time", icon: IconVideo, included: true },
      { text: "Color grading", icon: IconSparkles, included: true },
      { text: "Sound design & mixing", icon: IconCheck, included: true },
      { text: "Motion graphics", icon: IconCheck, included: true },
      { text: "Thumbnail included", icon: IconPhoto, included: true }
    ],
    id: "Ultimate",
    link: "https://www.fiverr.com/lammycz/record-and-edit-a-minecraft-trailer-or-teaser-for-you?&pckg_id=3"
  }
];

export default function Pricing() {
  const [hoveredTier, setHoveredTier] = useState('Pro Trailer');

  const isTierHovered = (tierName: string) => hoveredTier === tierName;

  return (
    <Section id="pricing" className="pt-0 pb-32">
      <FadeIn className="mb-8 text-center">
        <span className="text-lammy-blue font-bold text-sm uppercase tracking-widest mb-4 block">
          Pricing Plans
        </span>
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
          Choose Your Tier
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Professional Minecraft trailers tailored to your needs.
        </p>
      </FadeIn>

      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-0"
        onMouseLeave={() => setHoveredTier('Pro Trailer')}
      >
        {tiers.map((tier, index) => {
          const isHovered = isTierHovered(tier.name);
          const isUltimate = tier.name === 'Ultimate Trailer';

          return (
            <div 
              key={index} 
              className="h-full"
              onMouseEnter={() => setHoveredTier(tier.name)}
            >
              <FadeIn delay={index * 0.1} className="h-full">
                <div className="h-full relative group">
                  {tier.name === "Pro Trailer" && (
                    <div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-lammy-blue text-white text-xs font-bold uppercase px-3 py-1 tracking-widest rounded-full z-20 shadow-lg whitespace-nowrap transition-all duration-500 ${isHovered ? '-translate-y-7' : '-translate-y-3'}`}>
                      Most Popular
                    </div>
                  )}

                  <div className={`h-full p-8 border flex flex-col relative transition-all duration-500 rounded-2xl overflow-hidden ${
                    isHovered
                      ? "bg-white/5 border-lammy-blue shadow-[0_0_30px_rgba(59,130,246,0.1)] scale-105"
                      : "bg-lammy-surface border-white/10"
                  }`}>
                    {isUltimate && (
                      <>
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                          <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/40 blur-[80px] rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                          <div className={`absolute -bottom-20 -right-20 w-64 h-64 bg-lammy-blue/40 blur-[80px] rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                        </div>
                        <div className={`absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lammy-blue/10 to-transparent blur-xl pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                      </>
                    )}

                    <div className="mb-6 relative z-10">
                      <h3 className="text-xl font-bold uppercase mb-1 text-white">
                        {tier.name}
                      </h3>
                    </div>

                    <div className="mb-6 relative z-10">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px] relative z-10">
                      {tier.description}
                    </p>

                    <div className="space-y-4 mb-8 flex-grow relative z-10">
                      {tier.features.map((feature, i) => (
                        <div key={i} className={`flex items-start gap-3 ${!feature.included ? "opacity-40" : ""}`}>
                          {feature.included ? (
                            <feature.icon className={`w-4 h-4 mt-0.5 transition-colors duration-300 ${isHovered ? "text-lammy-blue" : "text-gray-500"}`} />
                          ) : (
                            <IconX className="w-4 h-4 mt-0.5 text-gray-500" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-300 line-through"}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 relative z-10">
                      <a
                        href={`#work?tab=${tier.id}`}
                        className="block w-full py-3 text-center font-bold uppercase tracking-wider text-xs border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all rounded-lg"
                      >
                        Preview Works
                      </a>
                      
                      <a
                        href={tier.link}
                        target="_blank"
                        rel="noreferrer"
                        className={`block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-lg relative ${
                          isHovered
                            ? "bg-lammy-blue text-white hover:bg-lammy-blue/80"
                            : "bg-white/10 text-white hover:bg-white hover:text-black"
                        } ${isUltimate ? 'glowing-border' : ''}`}
                        style={isUltimate ? { '--glow-opacity': isHovered ? 1 : 0, zIndex: 1 } : {}}
                      >
                        <span className="relative z-10">Select Plan</span>
                      </a>

                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          )
        })}
      </div>
       <style jsx>{`
        .glowing-border {
          position: relative;
          overflow: hidden;
        }
        .glowing-border::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from var(--angle),
            transparent 0%,
            #3b82f6 75%,
            transparent 50%,
            #8b5cf6 75%,
            transparent 100%
          );
          opacity: var(--glow-opacity, 0);
          transition: opacity 0.5s;
          animation: rotate 4s linear infinite;
        }
        .glowing-border::after {
          content: '';
          position: absolute;
          inset: 2px;
          background: #1a1a1a;
          border-radius: 6px;
          z-index: 0;
        }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes rotate {
          from { --angle: 0deg; }
          to { --angle: 360deg; }
        }
      `}</style>
    </Section>
  );
}
