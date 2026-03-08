import { Section, FadeIn } from "./ui/Section";
import { Check, Clock, RotateCcw, X, Video, Sparkles, Image as ImageIcon } from "lucide-react";

const tiers = [
  {
    name: "Starter Trailer",
    price: "€13.55",
    description: "Server/map Trailer 60 Seconds 1080P 120 FPS Titles Color grading",
    features: [
      { text: "3-day delivery", icon: Clock, included: true },
      { text: "1 Revision", icon: RotateCcw, included: true },
      { text: "Up to 1 minute running time", icon: Video, included: true },
      { text: "Color grading", icon: Sparkles, included: true },
      { text: "Sound design & mixing", icon: Check, included: true },
      { text: "Motion graphics", icon: Check, included: false },
      { text: "Thumbnail included", icon: ImageIcon, included: false }
    ],
    highlight: false,
    special: false
  },
  {
    name: "Pro Trailer",
    price: "€27.09",
    description: "Server/map Trailer 60 Seconds 1080P 120 FPS Titles Effects Speed ramps Color grading",
    features: [
      { text: "4-day delivery", icon: Clock, included: true },
      { text: "2 Revisions", icon: RotateCcw, included: true },
      { text: "Up to 1 minute running time", icon: Video, included: true },
      { text: "Color grading", icon: Sparkles, included: true },
      { text: "Sound design & mixing", icon: Check, included: true },
      { text: "Motion graphics", icon: Check, included: true },
      { text: "Thumbnail included", icon: ImageIcon, included: false }
    ],
    highlight: true,
    special: false
  },
  {
    name: "Ultimate Trailer",
    price: "€54.19",
    description: "Server/map Trailer 120 Seconds 1080P 120 FPS Effects Transitions Speed ramps In-game animation",
    features: [
      { text: "5-day delivery", icon: Clock, included: true },
      { text: "3 Revisions", icon: RotateCcw, included: true },
      { text: "Up to 2 minutes running time", icon: Video, included: true },
      { text: "Color grading", icon: Sparkles, included: true },
      { text: "Sound design & mixing", icon: Check, included: true },
      { text: "Motion graphics", icon: Check, included: true },
      { text: "Thumbnail included", icon: ImageIcon, included: true }
    ],
    highlight: false,
    special: true
  }
];

export default function Pricing() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-0">
        {tiers.map((tier, index) => (
          <div key={index} className="h-full">
            <FadeIn delay={index * 0.1} className="h-full">
              <div className="h-full relative group">
                {/* Highlight Badge - Placed outside the overflow-hidden container but scales with group */}
                {tier.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-lammy-blue text-white text-xs font-bold uppercase px-3 py-1 tracking-widest rounded-full z-20 shadow-lg whitespace-nowrap transition-all duration-300 group-hover:opacity-0">
                    Most Popular
                  </div>
                )}

                <div className={`h-full p-8 border flex flex-col relative transition-all duration-500 rounded-2xl overflow-hidden ${
                  tier.special
                    ? "bg-lammy-surface border-white/10 group-hover:border-lammy-blue group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:scale-105 z-10"
                    : tier.highlight 
                      ? "bg-white/5 border-lammy-blue shadow-[0_0_30px_rgba(59,130,246,0.1)] group-hover:scale-105" 
                      : "bg-lammy-surface border-white/10 group-hover:border-white/30 group-hover:scale-105"
                }`}>

                  {/* Hover Gradient Circles - Only for Ultimate (Special) */}
                  {tier.special && (
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-lammy-blue/20 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}

                  {/* Special Glow for Ultimate - Bottom only */}
                  {tier.special && (
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lammy-blue/10 to-transparent blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                          <feature.icon className={`w-4 h-4 mt-0.5 ${tier.highlight || tier.special ? "text-lammy-blue" : "text-gray-500"}`} />
                        ) : (
                          <X className="w-4 h-4 mt-0.5 text-red-500/50" />
                        )}
                        <span className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-500 line-through"}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 relative z-10">
                    <a
                      href={`#work?tab=${tier.name.split(' ')[0]}`}
                      className="block w-full py-3 text-center font-bold uppercase tracking-wider text-xs border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all rounded-lg"
                    >
                      Preview Works
                    </a>
                    <a
                      href="https://www.fiverr.com/"
                      target="_blank"
                      rel="noreferrer"
                      className={`block w-full py-4 text-center font-bold uppercase tracking-wider text-sm transition-all rounded-lg ${
                        tier.highlight || tier.special
                          ? "bg-lammy-blue text-white hover:bg-lammy-blue-dim"
                          : "bg-white/10 text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      Select Plan
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </Section>
  );
}
