"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">(
    "",
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitStatus(""), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(""), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const contactMethods = [
    {
      icon: "📞",
      title: "Call Us",
      value: "+91 9737776666",
      href: "tel:+919737776666",
    },
    {
      icon: "📧",
      title: "Email Us",
      value: "info@enviropolymers.com",
      href: "mailto:info@enviropolymers.com",
    },
    {
      icon: "⏰",
      title: "Available",
      value: "9 AM - 6 PM IST",
      href: "#",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM", icon: "🏢" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM", icon: "🏪" },
    { day: "Sunday", hours: "Closed", icon: "🚫" },
  ];

  const locations = [
    {
      city: "Vapi",
      state: "Gujarat",
      address: "Industrial Area, Vapi",
      isPrimary: true,
    },
    {
      city: "Ankleshwar",
      state: "Gujarat",
      address: "GIDC, Ankleshwar",
    },
    {
      city: "Ahmedabad",
      state: "Gujarat",
      address: "Industrial Hub, Ahmedabad",
    },
    {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Industrial Zone, Mumbai",
    },
    {
      city: "Jaipur",
      state: "Rajasthan",
      address: "RIICO Area, Jaipur",
    },
  ];

  return (
    <div
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{ backgroundColor: "#f0f7f4" }}
    >
      {/* Advanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Base gradient layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f0f7f4 0%, #e6f3f0 50%, #dceef0 100%)",
          }}
        />

        {/* Animated mesh gradients */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(88, 129, 87, 0.12) 0%, rgba(163, 177, 138, 0.06) 100%)",
              "linear-gradient(225deg, rgba(88, 129, 87, 0.12) 0%, rgba(163, 177, 138, 0.06) 100%)",
              "linear-gradient(45deg, rgba(88, 129, 87, 0.12) 0%, rgba(163, 177, 138, 0.06) 100%)",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute inset-0"
        />

        {/* Large Animated Blob 1 - Top Right */}
        <motion.div
          animate={{
            y: [0, 60, 0],
            x: [0, 40, 0],
            scale: [1, 1.25, 1],
            borderRadius: [
              "65% 35% 45% 55%",
              "35% 65% 60% 40%",
              "65% 35% 45% 55%",
            ],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute -top-60 -right-40 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(88, 129, 87, 0.3) 0%, rgba(88, 129, 87, 0.08) 50%, transparent 100%)",
            filter: "blur(70px)",
          }}
        />

        {/* Large Animated Blob 2 - Bottom Left */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, -50, 0],
            scale: [1, 1.3, 1],
            borderRadius: [
              "45% 55% 65% 35%",
              "65% 35% 45% 55%",
              "45% 55% 65% 35%",
            ],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1,
          }}
          className="absolute -bottom-80 -left-60 w-[700px] h-[700px]"
          style={{
            background:
              "radial-gradient(circle at 65% 65%, rgba(163, 177, 138, 0.28) 0%, rgba(163, 177, 138, 0.06) 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />

        {/* Medium Blob 3 - Center */}
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 1.15, 1],
            borderRadius: [
              "55% 45% 50% 50%",
              "50% 50% 60% 40%",
              "55% 45% 50% 50%",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 3,
          }}
          className="absolute top-1/2 right-0 w-[450px] h-[450px]"
          style={{
            background:
              "radial-gradient(circle at 40% 60%, rgba(58, 90, 64, 0.25) 0%, rgba(58, 90, 64, 0.04) 50%, transparent 100%)",
            filter: "blur(65px)",
          }}
        />

        {/* Medium Blob 4 - Left Side */}
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 40, 0],
            scale: [1, 1.2, 1],
            borderRadius: [
              "50% 50% 55% 45%",
              "45% 55% 50% 50%",
              "50% 50% 55% 45%",
            ],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 2,
          }}
          className="absolute top-1/4 -left-48 w-[500px] h-[500px]"
          style={{
            background:
              "radial-gradient(circle at 60% 40%, rgba(88, 129, 87, 0.22) 0%, rgba(88, 129, 87, 0.04) 55%, transparent 100%)",
            filter: "blur(75px)",
          }}
        />

        {/* Small Accent Blob - Top Center */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 4,
          }}
          className="absolute top-0 left-1/3 w-80 h-80"
          style={{
            background:
              "radial-gradient(circle, rgba(163, 177, 138, 0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Animated Geometric Grid */}
        <motion.svg
          className="absolute inset-0 opacity-6 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ opacity: [0.06, 0.1, 0.06] }}
          transition={{ duration: 12, repeat: Infinity }}
        >
          <defs>
            <pattern
              id="grid-lg"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="#588157"
                strokeWidth="0.5"
                opacity="0.5"
              />
              <circle cx="50" cy="50" r="2" fill="#588157" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-lg)" />
        </motion.svg>

        {/* Enhanced Particle System */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 3,
              height: Math.random() * 8 + 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor:
                i % 3 === 0 ? "#588157" : i % 3 === 1 ? "#a3b18a" : "#3a5a40",
              opacity: Math.random() * 0.5 + 0.15,
              boxShadow: `0 0 ${Math.random() * 20 + 8}px ${i % 3 === 0 ? "rgba(88, 129, 87, 0.4)" : i % 3 === 1 ? "rgba(163, 177, 138, 0.3)" : "rgba(58, 90, 64, 0.35)"}`,
            }}
            animate={{
              y: [0, Math.random() * 250 - 125, 0],
              x: [0, Math.random() * 200 - 100, 0],
              opacity: [
                Math.random() * 0.3 + 0.1,
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.3 + 0.1,
              ],
              scale: [1, Math.random() * 1.5 + 1, 1],
            }}
            transition={{
              duration: 25 + Math.random() * 25,
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut" as const,
            }}
          />
        ))}

        {/* Flowing Wave Background */}
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-96 opacity-30"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#588157" />
              <stop offset="100%" stopColor="#3a5a40" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#wave-grad)"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,133.3C672,139,768,117,864,112C960,107,1056,117,1152,122.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,154.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut" as const,
            }}
          />
        </motion.svg>

        {/* Subtle Animated Overlay */}
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(163, 177, 138, 0.08) 0%, transparent 60%)",
          }}
        />

        {/* Floating Accent Elements */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`accent-${i}`}
            className="absolute"
            style={{
              width: Math.random() * 150 + 100,
              height: Math.random() * 150 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: "2px solid rgba(88, 129, 87, 0.1)",
              borderRadius: "50%",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 30 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Hero Section with Background Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-16 md:py-20 overflow-hidden"
      >
        {/* Industrial hero background */}
        <div className="absolute inset-0">
          <Image
            src="/contactImg.jpg"
            alt="Industrial contact and logistics"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-900/70" />
          <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_25%_25%,rgba(16,185,129,0.35),transparent_45%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 px-4 py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "#ffffff",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                ✉️ Get in Touch
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            >
              We'd Love to{" "}
              <span style={{ color: "#a3b18a" }}>Hear From You</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/95 drop-shadow-md"
            >
              Have questions about our premium plastic granules? Connect with
              our team and let's discuss how we can support your business
              growth.
            </motion.p>

            {/* Animated down arrow */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-8"
            >
              <div className="text-3xl text-white/60">↓</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom wave transition */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-white"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q360,0 720,50 T1440,50 L1440,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </motion.section>

      {/* Quick Contact Cards */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-12 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const bgColors = [
                "linear-gradient(135deg, #024b86 0%, #02e1ed 100%)",
                "linear-gradient(135deg, #024b86 0%, #02e1ed 100%)",
                "linear-gradient(135deg, #024b86 0%, #02e1ed 100%)",
              ];
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 16px 32px rgba(88, 129, 87, 0.15)",
                  }}
                  className="p-7 rounded-xl text-white text-center transition-all duration-300 shadow-md relative overflow-hidden"
                  style={{
                    background: bgColors[index],
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="text-4xl mb-3 inline-block"
                  >
                    {method.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-xs opacity-85 font-medium">
                    {method.value}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                whileHover={{
                  boxShadow: "0 24px 48px rgba(88, 129, 87, 0.12)",
                }}
                className="rounded-xl p-8 md:p-10 border shadow-md backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(88, 129, 87, 0.15)",
                }}
              >
                <div className="mb-8">
                  <h2
                    className="text-3xl font-bold"
                    style={{ color: "#1a9a44" }}
                  >
                    Send us a Message
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 50 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-1 mt-3 rounded-full"
                    style={{ backgroundColor: "#588157" }}
                  />
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label
                        className="block text-sm font-bold mb-2 uppercase tracking-wide"
                        style={{ color: "#344e41" }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-lg border-2 focus:outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                        style={{
                          borderColor: "#e5e7eb",
                          backgroundColor: "#f9fafb",
                          color: "#1f2937",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#588157";
                          e.target.style.backgroundColor = "#ffffff";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e5e7eb";
                          e.target.style.backgroundColor = "#f9fafb";
                        }}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 }}
                      viewport={{ once: true }}
                    >
                      <label
                        className="block text-sm font-bold mb-2 uppercase tracking-wide"
                        style={{ color: "#344e41" }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border-2 focus:outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                        style={{
                          borderColor: "#e5e7eb",
                          backgroundColor: "#f9fafb",
                          color: "#1f2937",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "#588157";
                          e.target.style.backgroundColor = "#ffffff";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "#e5e7eb";
                          e.target.style.backgroundColor = "#f9fafb";
                        }}
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label
                      className="block text-sm font-bold mb-2 uppercase tracking-wide"
                      style={{ color: "#344e41" }}
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-lg border-2 focus:outline-none transition-all text-sm text-gray-800 placeholder-gray-400"
                      style={{
                        borderColor: "#e5e7eb",
                        backgroundColor: "#f9fafb",
                        color: "#1f2937",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#588157";
                        e.target.style.backgroundColor = "#ffffff";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e5e7eb";
                        e.target.style.backgroundColor = "#f9fafb";
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <label
                      className="block text-sm font-bold mb-2 uppercase tracking-wide"
                      style={{ color: "#344e41" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry..."
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg border-2 focus:outline-none transition-all resize-none text-sm text-gray-800 placeholder-gray-400"
                      style={{
                        borderColor: "#e5e7eb",
                        backgroundColor: "#f9fafb",
                        color: "#1f2937",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#588157";
                        e.target.style.backgroundColor = "#ffffff";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "#e5e7eb";
                        e.target.style.backgroundColor = "#f9fafb";
                      }}
                      required
                    ></textarea>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-lg font-bold text-white transition-all duration-300 text-base uppercase tracking-wide"
                    style={{
                      background: isSubmitting
                        ? "linear-gradient(135deg, #a3b18a 0%, #1a9a44 100%)"
                        : "linear-gradient(135deg, #1a9a44 0%, #3a5a40 100%)",
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>

                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="p-3 rounded-lg border-2 text-sm"
                        style={{
                          backgroundColor: "#ecfdf5",
                          borderColor: "#10b981",
                        }}
                      >
                        <p className="font-bold" style={{ color: "#047857" }}>
                          ✓ Message sent successfully! We'll get back to you
                          soon.
                        </p>
                      </motion.div>
                    )}
                    {submitStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="p-3 rounded-lg border-2 text-sm"
                        style={{
                          backgroundColor: "#fef2f2",
                          borderColor: "#ef4444",
                        }}
                      >
                        <p className="font-bold" style={{ color: "#dc2626" }}>
                          ✗ Something went wrong. Please try again.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{
                  boxShadow: "0 24px 48px rgba(88, 129, 87, 0.12)",
                }}
                className="rounded-xl p-7 border shadow-md backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(88, 129, 87, 0.15)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: "#344e41" }}
                >
                  ⏱️ Business Hours
                </h3>
                <div className="space-y-4">
                  {businessHours.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="pb-4 border-b last:border-0 last:pb-0"
                      style={{ borderColor: "rgba(88, 129, 87, 0.1)" }}
                      whileHover={{ x: 3 }}
                    >
                      <p
                        className="font-semibold text-sm"
                        style={{ color: "#344e41" }}
                      >
                        {item.icon} {item.day}
                      </p>
                      <p
                        className="text-xs mt-1 font-medium"
                        style={{ color: "#588157" }}
                      >
                        {item.hours}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="p-7 rounded-xl text-white text-center shadow-md backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #189944 0%, #3a5a40 100%)",
                }}
              >
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-xs font-semibold opacity-90 uppercase tracking-wide">
                  Years of Trust & Excellence
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Locations Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(88, 129, 87, 0.1)",
                color: "#189944",
              }}
            >
              📍 Global Presence
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#344e41" }}
            >
              Our Offices <span style={{ color: "#189944" }}>Across India</span>
            </h2>

            <p className="text-base" style={{ color: "#556B4F" }}>
              Visit us at any of our strategically located offices
            </p>
          </motion.div>

          {/* ✅ FIX: Use map here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.length > 0 &&
              locations.map((location) => (
                <motion.div
                  key={location.city}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-lg mb-2">{location.city}</h3>

                  <p className="text-xs text-gray-500 mb-2">{location.state}</p>

                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-1">📍</span>
                    <p>{location.address}</p>
                  </div>

                  {location.isPrimary && (
                    <p className="text-green-700 text-xs font-semibold mt-3">
                      ⭐ Head Office
                    </p>
                  )}
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 md:py-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 32px 64px rgba(88, 129, 87, 0.2)",
            }}
            className="py-12 px-8 md:px-12 rounded-xl text-white text-center transition-all shadow-lg"
            style={{
              background: "linear-gradient(135deg,#189944 0%, #70ba40 100%)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base mb-8 opacity-95 max-w-2xl mx-auto"
            >
              Partner with us today and discover how our premium plastic
              solutions can revolutionize your manufacturing process and boost
              profitability.
            </motion.p>
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-3 rounded-lg font-bold text-green-700 transition-all text-base"
              style={{ backgroundColor: "#ffffff" }}
            >
              Start Conversation Now →
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
