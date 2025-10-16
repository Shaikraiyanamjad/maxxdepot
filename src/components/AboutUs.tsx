"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative w-full bg-gray-50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* LEFT SIDE - TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-[#22B14C] font-semibold uppercase tracking-wider text-sm sm:text-base">
            About Us
          </h2>

          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mt-2 leading-tight">
            Maxx Depot — Crafting Timeless Interiors with Passion and Precision
          </h3>

          {/* MOBILE IMAGE (shown below heading) */}
          <div className="relative w-full h-[250px] sm:h-[300px] mt-6 rounded-2xl overflow-hidden lg:hidden">
            <Image
              src="/img1.png"
              alt="Modern interior design"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw" // 👈 added sizes
            />

            <div className="absolute inset-0 bg-black/20" />
          </div>

          <p className="text-gray-600 mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            We are passionate about transforming ordinary spaces into extraordinary experiences.
            Our team blends artistic creativity with technical expertise to design interiors that
            are not only visually stunning but also practical, comfortable, and timeless.
          </p>

          <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Whether it’s a luxury residence, a corporate environment, or a hospitality project,
            we believe in crafting environments that reflect your unique personality and lifestyle.
            Every project we undertake is a collaboration — between your vision and our passion for perfection.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
            <a
              href="#contact"
              className="border-2 border-[#22B14C] text-[#22B14C] px-6 py-3 rounded-full font-semibold hover:bg-[#22B14C] hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE - IMAGE (hidden on mobile, shown on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden lg:block flex-1 relative w-full h-[450px] lg:h-[550px]"
        >
          <Image
            src="/img1.png"
            alt="Modern interior design"
            fill
            className="object-cover rounded-2xl shadow-lg"
            sizes="(max-width: 1024px) 100vw, 50vw" // 👈 added sizes
          />

          <div className="absolute inset-0 rounded-2xl bg-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
