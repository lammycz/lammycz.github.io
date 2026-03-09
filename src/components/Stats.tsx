import { Section, FadeIn } from "./ui/Section";
import { Twitter, Youtube, Instagram } from "lucide-react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "PROJECTS DELIVERED", value: 20, suffix: "+" },
  { label: "CLIENT SATISFACTION", value: 5, suffix: "/5" },
  { label: "YEARS EXPERIENCE", value: 7, suffix: "+" },
  { label: "AVERAGE RESPONSE TIME", value: 1, suffix: " hour" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { duration: 2000, bounce: 0 });
  const displayValue = useTransform(springValue, (current) => Math.round(current));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      setDisplay(latest);
    });
  }, [displayValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <Section id="about" className="pt-12 pb-0 md:pb-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-lammy-blue/5 blur-[150px] -z-10 rounded-full -translate-y-1/2" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Profile (Clean Design) */}
        <div className="lg:col-span-4 flex flex-col items-center">
          <FadeIn>
            <div className="relative mb-8 group flex justify-center">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-1 bg-white/5 backdrop-blur-sm border border-white/10">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Lammy Profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <h3 className="text-5xl font-black uppercase tracking-tighter mb-2 text-center">Lammy</h3>
            <p className="text-lammy-blue font-bold uppercase tracking-widest text-sm mb-6 text-center max-w-[250px] mx-auto">
              Turning great ideas into legendary trailers!
            </p>

            <div className="flex gap-4 justify-center">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8 flex flex-col gap-8 justify-center">
            <FadeIn delay={0.2}>
              <span className="text-lammy-blue font-bold text-sm uppercase tracking-widest mb-4 block">
                About Me
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[0.9]">
                Visuals built for <br />
                <span className="text-lammy-blue">server launches.</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl font-light border-l-2 border-white/10 pl-8">
                <p>
                  I help Minecraft and Hytale projects look premium across every touchpoint, 
                  from the trailer that drives hype to the visuals that explain features and the development that supports your ecosystem.
                </p>
                <p>
                  With over 4 years of experience and 150+ projects delivered, I understand exactly what makes a server stand out in a crowded market.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

      {/* Stats Grid - Matrix Style */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="w-full">
            <FadeIn delay={0.4 + index * 0.1}>
              <div className="relative group p-6 bg-black/60 border border-white/10 hover:border-lammy-blue/50 transition-all duration-300 overflow-hidden">
                {/* Matrix/Digital Background Effect */}
                
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lammy-blue/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col items-center justify-center text-center relative z-10">
                  <div className="text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter mb-2 group-hover:text-lammy-blue transition-colors duration-300">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-lammy-blue/50 transition-colors" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-lammy-blue/50 transition-colors" />
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </Section>
  );
}
