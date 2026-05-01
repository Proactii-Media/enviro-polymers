"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Award, Globe, Target } from "lucide-react";
import WhyChooseUs from "@/components/Why-choose-us";
import Image from "next/image";

export default function AboutPage() {
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
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const stats = [
    {
      icon: "📊",
      label: "Projects Completed",
      value: "500+",
      color: "#1a9a44",
    },
    { icon: "🌍", label: "Countries Served", value: "50+", color: "#1a9a44" },
    { icon: "👥", label: "Team Members", value: "200+", color: "#1a9a44" },
    {
      icon: "⭐",
      label: "Client Satisfaction",
      value: "98%",
      color: "#1a9a44",
    },
  ];

  const vision = [
    "To provide high-quality plastic granules and scrap materials at competitive prices ",
    "To promote eco-friendly practices by converting plastic waste into reusable resources ",
    "To build long-term relationships with customers through reliability and transparency ",
    "To continuously improve processes and adopt advanced recycling technologies ",
    "To contribute to a cleaner and more sustainable environment",
  ];
  // CountUpNumber Component
  const CountUpNumber = ({
    target,
    duration = 2,
    isVisible,
  }: {
    target: number;
    duration?: number;
    isVisible: boolean;
  }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(0);

    useEffect(() => {
      if (!isVisible) return;

      const increment = target / (duration * 60);
      const timer = setInterval(() => {
        countRef.current += increment;
        if (countRef.current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(countRef.current));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [isVisible, target, duration]);

    return <span>{count}</span>;
  };

  // Stats visibility observer
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen pt-20 relative overflow-hidden"
      style={{ backgroundColor: "#f0f7f4" }}
    >
      {/* Advanced Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #f0f7f4 0%, #e6f3f0 50%, #dceef0 100%)",
          }}
        />

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

        {/* Blobs */}
        <motion.div
          animate={{
            y: [0, 60, 0],
            x: [0, 40, 0],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut" as const,
          }}
          className="absolute -top-60 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(88, 129, 87, 0.3) 0%, rgba(88, 129, 87, 0.08) 50%, transparent 100%)",
            filter: "blur(70px)",
          }}
        />

        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay: 1,
          }}
          className="absolute -bottom-80 -left-60 w-[700px] h-[700px] rounded-full opacity-28"
          style={{
            background:
              "radial-gradient(circle at 65% 65%, rgba(163, 177, 138, 0.28) 0%, rgba(163, 177, 138, 0.06) 50%, transparent 100%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* Hero Section with Background Image and Zoom Effect */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 py-16 md:py-20py-16 md:py-20 overflow-hidden"
      >
        {/* Background Image with Zoom Effect */}
        <motion.div
          animate={{ scale: [1, 1.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/aboutt.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transformOrigin: "center",
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-[2] px-4 py-16 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
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
                🌿About Enviro Polymers
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            >
              Leading the Sustainable{" "}
              <span style={{ color: "#a3b18a" }}>Plastic Revolution</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/95 drop-shadow-md max-w-3xl mx-auto"
            >
              Enviro Polymers is a trusted name in plastic recycling and raw
              material supply, delivering high-quality polymer solutions since
              2009. We specialize in premium PP, HDPE, and LLDPE granules along
              with plastic scrap for diverse manufacturing industries.
            </motion.p>
          </motion.div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-white z-[2]"
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

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-xl backdrop-blur-sm"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(88, 129, 87, 0.15)",
                  border: "1px solid #1a9a44",
                }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  <CountUpNumber
                    target={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                    duration={2.5}
                    isVisible={statsVisible}
                  />
                  {stat.value.includes("+") && <span>+</span>}
                  {stat.value.includes("%") && <span>%</span>}
                </div>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-2 md:py-2 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  backgroundColor: "rgba(88, 129, 87, 0.1)",
                  color: "#588157",
                }}
              >
                📖 About Us
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#344e41" }}
              >
                Building Sustainable Polymer Solutions
              </h2>
              <p
                className="text-base md:text-lg mb-4 leading-relaxed"
                style={{ color: "#556B4F" }}
              >
                Enviro Polymers has been actively serving the plastic recycling
                and raw material industry since 2009, operating under the Enviro
                Polymers brand from 2026. With strong industry expertise, we
                specialize in supplying premium-grade PP granules, HDPE
                granules, LLDPE granules, and plastic scrap to a wide range of
                manufacturing sectors.
              </p>
              <p
                className="text-base md:text-lg mb-6 leading-relaxed"
                style={{ color: "#556B4F" }}
              >
                Our core strength lies in transforming plastic waste into
                valuable reusable resources. Through efficient sourcing, strict
                quality control, and deep market understanding, we ensure
                consistent material performance while supporting industries with
                cost-effective and sustainable solutions.
              </p>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/about.jpg"
                alt="About us"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-2 py-4 md:py-12 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            {/* Vision*/}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-xl backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                border: "1px solid #1a9a44",
              }}
            >
              <div className="flex items-center mb-">
                <Target size={40} color="#588157" className="mr-4" />
                <h3 className="text-2xl font-bold" style={{ color: "#344e41" }}>
                  Our Vision
                </h3>
              </div>

              <p
                className="text-base md:text-lg leading-relaxed max-w-4xl"
                style={{ color: "#556B4F" }}
              >
                To become a leading and trusted supplier of recycled and raw
                polymer materials in India and global markets, recognized for
                sustainability, quality, and innovation in plastic recycling
                solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-2 md:py-2 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
              style={{
                backgroundColor: "rgba(88, 129, 87, 0.1)",
                color: "#588157",
              }}
            >
              🌍 Our Misson
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#344e41" }}
            >
              Our <span style={{ color: "#1a9a44" }}>Mission</span>
            </motion.h2>
          </motion.div>

          {/* Vision Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {vision.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl backdrop-blur-sm flex items-start gap-4 transition-all"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  border: "1px solid #1a9a44",
                }}
              >
                {/* Tick Icon */}
                <div
                  className="min-w-[32px] h-[32px] flex items-center justify-center rounded-full text-white font-bold"
                  style={{ backgroundColor: "#1a9a44" }}
                >
                  ✔
                </div>

                {/* Text */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#556B4F" }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <WhyChooseUs />
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="px-4 py-16 md:py-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="py-12 px-8 md:px-16 rounded-xl text-white text-center transition-all shadow-lg"
            style={{
              background: "linear-gradient(135deg, #588157 0%, #1a9a44 100%)",
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Partner With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base mb-8 opacity-95 max-w-2xl mx-auto"
            >
              Join hundreds of satisfied clients who trust Environ Polymers for
              their plastic granule needs. Let&apos;s work together to create
              sustainable solutions.
            </motion.p>
            <motion.div
              className="flex gap-4 flex-wrap justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-3 rounded-lg font-bold text-green-700 transition-all text-base"
                style={{ backgroundColor: "#ffffff" }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/services/pp-granules"
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-3 rounded-lg font-bold transition-all text-base border-2"
                style={{
                  borderColor: "#ffffff",
                  color: "#ffffff",
                }}
              >
                Explore Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
