"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sophia Johnson",
    role: "Homeowner",
    image: "/siala.jpg",
    feedback:
      "They transformed my house into a warm and inviting home. The design process was smooth, and the results were beyond what I imagined. Every detail is just perfect!",
  },
  {
    id: 2,
    name: "Ethan Brown",
    role: "Business Owner",
    image: "/michael.jpg",
    feedback:
      "Their team turned our dull office into a lively, productive workspace. The attention to color, light, and layout truly boosted our team's energy and focus.",
  },
  {
    id: 3,
    name: "Ava Patel",
    role: "Interior Enthusiast",
    image: "/emily.jpg",
    feedback:
      "The blend of creativity and professionalism made this one of the best experiences. They really listened to my ideas and brought them to life beautifully.",
  },
];

export default function Testimonial() {
  return (
    <section
      id="testimonials"
      className="bg-gray-50 py-10 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#22B14C] font-semibold uppercase tracking-wider text-sm sm:text-base">
            What Our Clients Say
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Hear From Our Happy Customers
          </h2>
        </motion.div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12 mt-4">
          Hear from our happy clients who trusted us to transform their spaces
          into something extraordinary.
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center flex flex-col items-center w-full max-w-sm overflow-hidden"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 shrink-0">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
              <p className="text-gray-600 italic mb-5 leading-relaxed">
                “{testimonial.feedback}”
              </p>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-[#22B14C] font-medium">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
