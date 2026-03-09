import { Section, FadeIn } from "./ui/Section";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How do I place an order?",
    answer: "Simply send me a message on Fiverr with some details about your trailer. Then, you can choose from one of the three tiers. Don’t worry—I’ll help you pick the option that fits your needs best.",
  },
  {
    question: "How can I track my order?",
    answer: "I’ll keep you updated throughout the entire process, so you’ll always know the progress of your trailer.",
  },
  {
    question: "How do I create a custom order?",
    answer: "Once we discuss your server and budget, I’ll send you a custom offer. All you need to do is accept it, and we’re ready to start!",
  },
  {
    question: "Which Minecraft versions do you work with?",
    answer: "I can work with any Minecraft version.",
  },
  {
    question: "Can you record on Bedrock Edition?",
    answer: "Unfortunately, I cannot record directly on Bedrock Edition. However, if you provide converted world files from Bedrock to Java, I can use them to create cinematic footage for your trailer.",
  },
  {
    question: "Do you provide the footage?",
    answer: "Yes! I will record cinematic footage directly on your server.",
  },
  {
    question: "Can you create trailers in languages other than English?",
    answer: "Absolutely! I can create trailers in various languages. Just provide the translated text, and I’ll ensure it’s fully incorporated into your trailer.",
  },
  {
    question: "Can you create trailers for TikTok, Reels, or Shorts?",
    answer: "Yes! I have experience creating trailers for vertical formats and short-form platforms.",
  },
  {
    question: "Can you make Minecraft animations?",
    answer: "Yes! I can create custom in-game animations to make your trailer truly cinematic and dynamic.",
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
          Questions? Answered!
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
