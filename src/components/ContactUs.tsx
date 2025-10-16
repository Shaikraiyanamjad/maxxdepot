"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    alert(res.ok ? "✅ Message sent successfully!" : "❌ Failed to send message.");
    if (res.ok) setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full overflow-x-hidden bg-gray-50 py-20"
    >
      {/* Section Heading */}
      <div className="text-center mb-12 px-4 sm:px-6">
        <h2 className="text-[#01a64a] font-semibold uppercase tracking-widest">
          Contact Us
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
          Let’s Build Something Beautiful
        </h3>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Have a project in mind? Reach out — we’re here to help turn your ideas into reality.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mx-auto flex flex-col lg:flex-row gap-10 px-4 sm:px-6 lg:px-8 max-w-7xl items-stretch">
        {/* Left Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 rounded-2xl shadow-xl p-8 text-white flex flex-col justify-between overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #00416c 0%, #01a64a 100%)",
          }}
        >
          <div>
            <Image
              src="/Maxxdepot-logo.png"
              alt="Maxx Depot"
              width={160}
              height={60}
              className="mb-6 object-contain"
            />
            <h4 className="text-2xl font-semibold mb-4">Get in Touch</h4>
            <p className="text-white/90 mb-8 leading-relaxed">
              We’d love to hear from you — whether it’s about your next project,
              partnership, or just to say hello.
            </p>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center gap-3 break-all">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>973 901-1170</span>
              </div>
              <div className="flex items-center gap-3 break-all">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>abdulcmax@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 break-all">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>698 Franklin Avenue <br /> Franklin Lakes, NJ 07417</span>
              </div>
              <div className="flex items-start gap-3 break-all">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>129 Passaic Street <br /> Hackensack, NJ 07601</span>
              </div>
            </div>
          </div>
          <p className="text-white/70 text-sm mt-10">
            © {new Date().getFullYear()} Maxx Depot. All rights reserved.
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex-1 bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-5"
        >
          <h4 className="text-2xl font-semibold text-gray-800 mb-2">
            Send Us a Message
          </h4>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#01a64a] outline-none"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#01a64a] outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#01a64a] outline-none resize-none"
          />
          <button
            disabled={loading}
            type="submit"
            className="bg-[#01a64a] text-white font-medium py-3 rounded-lg hover:bg-[#018c3e] transition disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
