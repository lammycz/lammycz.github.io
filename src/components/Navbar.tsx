import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconMenu2, IconX, IconArrowUpRight } from "@tabler/icons-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Pricing", href: "#pricing" },
  { name: "Work", href: "#work" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
        isScrolled 
          ? "py-4 bg-black/10 backdrop-blur-md" 
          : "py-8 bg-transparent"
      }`}
    >
      {/* Blue Glow behind navbar */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-lammy-blue/10 blur-[80px] rounded-full" />
      </div>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="relative group">
          <span className="text-2xl font-black tracking-tighter uppercase font-sans relative z-10 mix-blend-difference text-white">
            Lammy
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-lammy-blue transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md p-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-5 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.fiverr.com/lammycz/record-and-edit-a-minecraft-trailer-or-teaser-for-you?&pckg_id=3"
            target="_blank"
            rel="noreferrer"
            className="ml-2 bg-lammy-blue hover:bg-lammy-blue-dim text-white px-6 py-2 rounded-full font-bold text-sm transition-all flex items-center gap-1 group"
          >
            Order Now
            <IconArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <IconX /> : <IconMenu2 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[70px] bg-black z-40 md:hidden"
          >
            <div className="flex flex-col p-6 gap-6 h-full">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:to-lammy-blue uppercase"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://www.fiverr.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-auto mb-20 bg-lammy-blue text-white px-6 py-4 text-center font-bold uppercase tracking-wider rounded-xl"
              >
                Order on Fiverr
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
