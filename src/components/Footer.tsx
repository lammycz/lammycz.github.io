import { IconBrandYoutube, IconBrandDiscord, IconMail, IconCopy, IconCheck, IconBrandFiverr } from "@tabler/icons-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function DiscordButton() {
  const [iconState, setIconState] = useState<'discord' | 'copy' | 'check'>('discord');

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText('lammycz');
      setIconState('copy');
      setTimeout(() => setIconState('check'), 500);
      setTimeout(() => setIconState('discord'), 2000);
    } catch (err) {
      console.error('Failed to copy Discord ID:', err);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110"
    >
      <AnimatePresence mode="wait">
        {iconState === 'discord' && (
          <motion.div
            key="discord"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <IconBrandDiscord className="w-5 h-5" />
          </motion.div>
        )}
        {iconState === 'copy' && (
          <motion.div
            key="copy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <IconCopy className="w-5 h-5" />
          </motion.div>
        )}
        {iconState === 'check' && (
          <motion.div
            key="check"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <IconCheck className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-10 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-white/10 pb-12 items-center">
          <div className="col-span-1">
            <a href="#" className="text-2xl font-bold tracking-tighter uppercase font-sans mb-6 block">
              Lammy
            </a>
            <p className="text-gray-500 max-w-xs text-sm">
              Lammy creates premium trailers for servers, mods, maps and much more!
            </p>
          </div>

          <div className="flex justify-start md:justify-end gap-4">
            <DiscordButton />
            <a href="https://www.youtube.com/watch?v=lxRGMJId0xo&list=PLXqqHYuv3-cOhhVZO_t3kEo0T9jiXQQUz" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <IconBrandYoutube className="w-5 h-5" />
            </a>
            <a href="https://www.fiverr.com/s/wk88ePB" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <IconBrandFiverr className="w-5 h-5" />
            </a>
            <a href="mailto:lammy@volny.cz" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <IconMail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-wider">
          <div>
            Made by Lammy &copy; 2026. All Rights Reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Not affiliated with Mojang Studios.
          </div>
        </div>
      </div>
    </footer>
  );
}
