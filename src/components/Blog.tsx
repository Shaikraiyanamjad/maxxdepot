"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Innovative Building Solutions",
    description:
      "Explore how modern construction materials and sustainable designs are reshaping the way we build durable structures.",
    image: "/blog1.png",
    date: "October 10, 2025",
    author: "John Smith",
  },
  {
    id: 2,
    title: "Efficiency Through Technology",
    description:
      "Discover how smart tools and automation are improving project management and reducing costs across industries.",
    image: "/blog2.jpg",
    date: "September 22, 2025",
    author: "Emily Carter",
  },
  {
    id: 3,
    title: "Safety First in Every Project",
    description:
      "A closer look at how consistent training and innovative safety equipment help protect workers on every site.",
    image: "/blog3.png",
    date: "August 30, 2025",
    author: "Michael Lee",
  },
];

export default function Blog() {
  return (
    <section className="bg-gray-50 py-10 px-6 sm:px-10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl sm:text-2xl font-bold text-[#00416c]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Latest from <span className="text-[#01a64a]">MAXX DEPOT</span>
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-600 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Stay updated with insights, innovations, and tips from our experts in
            construction, materials, and technology.
          </motion.p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl shadow-md hover:shadow-2xl bg-white border border-gray-200 hover:border-[#01a64a] transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transform hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00416c]/60 via-transparent"></div>
              </div>


              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {blog.date} • {blog.author}
                </p>
                <h3 className="text-xl font-semibold text-[#00416c] mb-3 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
