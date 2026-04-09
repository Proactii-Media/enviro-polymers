"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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

const Hero = () => {
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
      transition: { duration: 0.8, ease: "easeOut" as const },
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
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 10,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            whileHover={{ scale: 1.12 }}
            className="w-full h-full"
          >
            <Image
              src="/homeImg.webp"
              alt="Industrial polymer manufacturing"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>

          {/* Lighter Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60" />

          {/* Glow Effects */}
          <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_45%)]" />
          <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_80%_30%,rgba(163,177,138,0.35),transparent_40%)]" />
        </div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container-custom text-center relative z-10"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold border backdrop-blur-lg mb-6"
            style={{
              backgroundColor: "rgba(163, 177, 138, 0.25)",
              color: "#fff",
              borderColor: "rgba(88, 129, 87, 0.5)",
            }}
          >
            🌿 Sustainable Plastic Solutions
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            Premium Quality
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-300 via-white to-green-500 bg-clip-text text-transparent"
          >
            Plastic Raw Materials
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
          >
            Trusted supplier of high-quality PP and CP plastic granules for
            manufacturing industries worldwide. Committed to sustainability and
            excellence.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-3 bg-emerald-500 text-white rounded-xl font-semibold hover:bg-emerald-400 transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services/pp-granules"
              className="px-8 py-3 border border-white/30 text-white rounded-xl hover:bg-white/10 transition"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 15, label: "Years of Excellence" },
              { value: 500, label: "Satisfied Clients" },
              { value: 3000, label: "Tonnes Recycled" },
              { value: 50, label: "Countries Served" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statCardVariants}
                whileHover="hover"
                className="text-center p-6 rounded-xl border bg-white shadow-sm"
              >
                <p className="text-5xl font-bold text-green-700 mb-3">
                  <CountUpNumber target={stat.value} isVisible={statsVisible} />
                  +
                </p>
                <p className="font-semibold text-green-900">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
