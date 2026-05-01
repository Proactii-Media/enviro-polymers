"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ---------------- COUNT UP ---------------- */
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

/* ---------------- HERO ---------------- */
const Hero = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  /* -------- SLIDES -------- */
  const slides = [
    {
      image: "/homeImg.webp",
      tagline: "Recycling Today for a Better Tomorrow",
    },
    {
      image: "/granules.webp",
      tagline: "High-Quality Plastic Raw Materials",
    },
    {
      image: "/aboutt.jpg",
      tagline: "Turning Plastic Waste into Value",
    },
  ];

  /* -------- AUTO SLIDER -------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  /* -------- STATS VISIBILITY -------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  /* -------- ANIMATIONS -------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -6,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* -------- SLIDER BACKGROUND -------- */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt="Enviro Polymers"
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}

          {/* Overlays */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
        </div>

        {/* -------- CONTENT -------- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container-custom text-center relative z-10 px-4"
        >
          {/* Brand */}
          <motion.span
            variants={itemVariants}
            className="inline-block px-5 py-2 rounded-full text-xs md:text-sm border backdrop-blur-md mb-6 text-white/90"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.2)",
            }}
          >
            Enviro Polymers
          </motion.span>

          {/* Tagline */}
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white max-w-3xl mx-auto leading-snug"
          >
            {slides[currentSlide].tagline}
          </motion.h1>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-white py-20">
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="container-custom"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-green-900">
            Our Impact & Excellence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: 15, label: "Years of Experience", icon: "🏆" },
              { value: 100, label: "Industries Served", icon: "🏭" },
              { value: 1000, label: "Orders Delivered", icon: "📦" },
              {
                value: 100,
                label: "Sustainable Focus",
                icon: "♻️",
                suffix: "%",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statCardVariants}
                whileHover="hover"
                className="group p-8 rounded-2xl border shadow-md hover:shadow-2xl transition"
                style={{ borderColor: "#1a9a44" }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>

                <p className="text-4xl font-bold mb-2 text-[#1a9a44]">
                  <CountUpNumber target={stat.value} isVisible={statsVisible} />
                  {stat.suffix ? stat.suffix : "+"}
                </p>

                <p className="text-gray-700 font-semibold text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
