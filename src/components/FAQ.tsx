import { Section, FadeIn } from "./ui/Section";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What services does Lammy offer?",
    answer: "I offer Minecraft server trailers, 3D animation, modeling, rendering, and release visuals. I can also help with social media content like shorts and TikToks.",
  },
  {
    question: "Do you only work in the Minecraft community?",
    answer: "While I specialize in Minecraft and Hytale, my skills in video editing and 3D animation transfer to other games and styles. Contact me to discuss your project.",
  },
  {
    question: "Can you match an existing style or brand?",
    answer: "Absolutely. I can adapt to your server's branding guidelines, color palette, and existing visual identity to ensure consistency.",
  },
  {
    question: "What is your pricing?",
    answer: "Pricing varies based on the complexity and length of the project. Please check my Fiverr gigs or contact me directly for a custom quote.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq">
      <FadeIn className="mb-12">
        <span className="text-lammy-blue font-bold text-sm uppercase tracking-widest mb-4 block">
          FAQ
        </span>
        <h2 className="text-4xl font-bold uppercase mb-4">
          Questions, Answered
        </h2>
      </FadeIn>

      <div className="max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index}>
            <FadeIn delay={index * 0.1}>
              <div className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold uppercase transition-colors ${openIndex === index ? "text-lammy-blue" : "text-white group-hover:text-gray-300"}`}>
                    {faq.question}
                  </span>
                  <span className="text-white/50 group-hover:text-white transition-colors">
                    {openIndex === index ? <Minus /> : <Plus />}
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          </div>
        ))}
      </div>
    </Section>
  );
}
