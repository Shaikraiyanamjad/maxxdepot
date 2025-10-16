"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/img3.png",
  "/img5.jpg",
  "/hero3.png",
  "/hero111.png",
  "/img4.jpg",
  "/img1.png",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden py-10 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <h2 className="text-[#22B14C] font-semibold uppercase tracking-wider text-sm sm:text-base">
          Our Gallery
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#222] mt-2">
          Stunning Spaces We've Crafted
        </h3>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 overflow-hidden">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
