"use client";
import { Home, Building, Briefcase, Coffee, Edit3, Layers } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Residential Decoration",
    description:
      "Transform your home with personalized designs that enhance both style and functionality. From layout optimization to decor selection, we make your space truly yours.",
    icon: Home,
  },
  {
    id: 2,
    title: "Commercial Decoration",
    description:
      "Elevate your business with stunning, functional interiors. We design spaces that reflect your brand identity and enhance productivity.",
    icon: Building,
  },
  {
    id: 3,
    title: "Office Decoration",
    description:
      "Inspire your team with ergonomic, stylish office spaces designed for comfort, focus, and collaboration.",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Kitchen & Bathroom Decoration",
    description:
      "Bring elegance and practicality together in your kitchen and bathroom with our modern, functional design approach.",
    icon: Coffee,
  },
  {
    id: 5,
    title: "Remodeling & Renovation Services",
    description:
      "Give your interiors a fresh new life through expert renovation, blending contemporary design with smart utility.",
    icon: Edit3,
  },
  {
    id: 6,
    title: "Custom Furniture Design",
    description:
      "Bespoke furniture built to complement your interiors perfectly — where function meets craftsmanship and style.",
    icon: Layers,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10 bg-gray-50 text-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#01a64a] font-semibold uppercase tracking-widest text-sm sm:text-base"
        >
          Our Services
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6 text-[#00416c]"
        >
          Crafting Elegant & Functional Spaces
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto text-gray-600 text-sm sm:text-base md:text-lg"
        >
          We blend creativity and precision to deliver interiors that inspire and last. Each project is designed to match your unique vision and lifestyle.
        </motion.p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl border ${
                index % 2 === 0 ? "bg-white border-gray-200" : "bg-gray-100 border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#00416c] to-[#01a64a] mb-5 shadow-md group-hover:shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-[#00416c] mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#00416c] to-[#01a64a] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
