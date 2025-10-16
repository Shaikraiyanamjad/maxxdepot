"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/hero4.png",
    title: "Designing Spaces that Define You",
    subtitle:
      "We blend creativity and precision to craft interiors that inspire and endure.",
  },
  {
    id: 2,
    image: "/hero2.png",
    title: "Luxury Meets Functionality",
    subtitle:
      "Every detail is designed to enhance your lifestyle with timeless beauty.",
  },
  {
    id: 3,
    image: "/hero3.png",
    title: "Transform Your Vision into Reality",
    subtitle:
      "From concept to creation — interiors that speak elegance and innovation.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        relative w-full
        h-[50vh]        /* default for mobile */
        sm:h-[60vh]     /* small screens */
        md:h-[80vh]     /* medium screens */
        lg:h-[90vh]     /* large screens */
        overflow-hidden
      "
    >
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                  <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="
                      text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl
                      font-bold text-white max-w-3xl
                    "
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="
                      mt-2 sm:mt-3 md:mt-4
                      text-xs sm:text-sm md:text-base lg:text-lg
                      text-gray-200 max-w-2xl
                    "
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4"
                  >
                    <a
                      href="/contact"
                      className="
                        bg-[#22B14C] text-white px-4 py-2 sm:px-6 sm:py-3
                        rounded-full font-semibold hover:bg-[#1A8E3D] transition
                      "
                    >
                      Get a Quote
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Slider Dots */}
      <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === current
                ? "bg-[#22B14C] scale-110"
                : "bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
