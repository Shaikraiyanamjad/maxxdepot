"use client";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between gap-10 flex-wrap">

        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start min-w-0"
        >
          <div className="relative w-[180px] h-[60px] mb-4">
            <Image
              src="/maxxdepot-logo.png"
              alt="Maxx Depot Logo"
              fill
              priority
              className="object-contain"
              sizes="180px"
            />
          </div>


          <p className="text-gray-400 max-w-xs">
            Building your dreams with precision and creativity. Transforming spaces into extraordinary experiences.
          </p>
        </motion.div>

        {/* Contact & Addresses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-10"
        >
          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#22B14C]" />
                <span>973 901 1170</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#22B14C]" />
                <span>201 562 3835</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#22B14C]" />
                <span>abdulcmax@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div>
            <h4 className="text-white font-semibold mb-5">Address</h4>
            <div className="flex flex-col gap-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#22B14C] mt-1" />
                <span>
                  698 Franklin Avenue <br /> Franklin Lakes, NJ 07417
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#22B14C] mt-1" />
                <span>
                  129 Passaic Street <br /> Hackensack, NJ 07601
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-start lg:items-end gap-4"
        >
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-5">
            {[
              { icon: <Facebook className="w-7 h-7" />, href: "#" },
              { icon: <Instagram className="w-7 h-7" />, href: "#" },
              { icon: <Linkedin className="w-7 h-7" />, href: "#" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="hover:text-[#22B14C] transition-transform transform hover:scale-110"
                aria-label="Social Link"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Maxx Depot. All rights reserved.
      </div>
    </footer>
  );
}
