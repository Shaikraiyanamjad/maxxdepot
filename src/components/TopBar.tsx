"use client";
import { motion } from "framer-motion";
import { Phone, MapPin, Facebook, Instagram, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#003E6B] text-white text-xs md:text-sm"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 space-y-3 md:space-y-0">
        
        {/* Left: Address Section */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-center md:text-left">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#22B14C]" />
            <span>698 Franklin Lakes, NJ 07417</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#22B14C]" />
            <span>129 Passaic Street, NJ 07601</span>
          </div>
        </div>

        {/* Right: Contact + Social Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
          {/* Phones */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-[#22B14C]" />
              <a href="tel:+19739011170" className="hover:text-[#22B14C] transition">
                 973 901 1170
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={14} className="text-[#22B14C]" />
              <a href="tel:+12015623835" className="hover:text-[#22B14C] transition">
                 201 562 3835
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            <a href="#" className="hover:text-[#22B14C] transition">
              <Facebook size={14} />
            </a>
            <a href="#" className="hover:text-[#22B14C] transition">
              <Instagram size={14} />
            </a>
            <a href="mailto:info@maxxdepot.com" className="hover:text-[#22B14C] transition">
              <Mail size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
