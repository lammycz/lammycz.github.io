import { Youtube, Twitter, Instagram, Mail, MessageCircle } from "lucide-react";

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
              Lammy creates premium visuals and development for Minecraft and Hytale, trailers, animation, modeling, rendering/lighting, release visuals, and custom tech.
            </p>
          </div>

          <div className="flex justify-start md:justify-end gap-4">
            <a href="mailto:lammy@volny.cz" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-full hover:bg-lammy-blue hover:text-white transition-all border border-white/10 hover:scale-110">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-wider">
          <div>
            Made by Lammy &copy; 2026. All Rights Reserved.
          </div>
          <div className="mt-4 md:mt-0">
            Not affiliated with Mojang Studios or Hypixel Studios.
          </div>
        </div>
      </div>
    </footer>
  );
}
