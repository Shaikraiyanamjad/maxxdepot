"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Message captured (no backend connected).");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-gray-50 py-10 overflow-x-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="text-[#01a64a] font-semibold uppercase tracking-widest">Contact Us</h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">Let’s Build Something Beautiful</h3>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Have a project in mind? Reach out — we’re here to help turn your ideas into reality.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 px-4 lg:px-8 items-stretch">
        {/* Left Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 rounded-2xl shadow-xl p-8 text-white flex flex-col justify-between"
          style={{ background: "linear-gradient(135deg, #00416c 0%, #01a64a 100%)" }}
        >
          <div>
            <div className="relative w-[180px] h-[60px] mb-8">
              <Image src="/maxxdepot-logo.png" alt="Maxx Depot Logo" fill className="object-contain" priority />
            </div>
            <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
            <p className="text-white/90 mb-8 leading-relaxed">
              We’d love to hear from you — whether it’s about your next project, partnership, or just to say hello.
            </p>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+19739011170" className="hover:underline">973 901-1170</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:abdulcmax@gmail.com" className="hover:underline">abdulcmax@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=698+Franklin+Avenue+Franklin+Lakes+NJ+07417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  698 Franklin Avenue<br />
                  Franklin Lakes, NJ 07417
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=129+Passaic+Street+Hackensack+NJ+07601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  129 Passaic Street<br />
                  Hackensack, NJ 07601
                </a>
              </div>
            </div>


          </div>
          <p className="text-white/70 text-sm mt-10">© {new Date().getFullYear()} Maxx Depot. All rights reserved.</p>
        </motion.div>

        {/* Right Form Panel */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-5"
        >
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">Send Us a Message</h4>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#01a64a] outline-none" />
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your Email" required className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#01a64a] outline-none" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#01a64a] outline-none resize-none" />
          <button type="submit" className="bg-[#01a64a] text-white font-medium py-3 rounded-lg hover:bg-[#018c3e] transition">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}
