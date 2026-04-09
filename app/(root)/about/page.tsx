"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Leaf, Award, Users, Zap, Globe, Target } from "lucide-react";

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
      color: "#588157",
    },
    { icon: "🌍", label: "Countries Served", value: "50+", color: "#a3b18a" },
    { icon: "👥", label: "Team Members", value: "200+", color: "#3a5a40" },
    {
      icon: "⭐",
      label: "Client Satisfaction",
      value: "98%",
      color: "#588157",
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We are committed to environmental responsibility and sustainable practices in every aspect of our operations.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Quality is non-negotiable. We strive for excellence in every product we deliver and every service we provide.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We believe in building long-term relationships with our clients based on trust, transparency, and mutual growth.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuous improvement and innovation drive us to develop better solutions for our customers.",
    },
  ];

  const timeline = [
    {
      year: "2009",
      title: "Company Founded",
      description:
        "Environ Polymers was established with a vision to revolutionize the plastic manufacturing industry through sustainable practices.",
    },
    {
      year: "2012",
      title: "First Export",
      description:
        "Successfully exported our premium plastic granules to international markets, marking our global expansion.",
    },
    {
      year: "2015",
      title: "ISO Certification",
      description:
        "Achieved ISO 9001:2015 certification, demonstrating our commitment to quality management standards.",
    },
    {
      year: "2018",
      title: "Recycling Initiative",
      description:
        "Launched our comprehensive plastic recycling program, processing over 1000 tonnes annually.",
    },
    {
      year: "2021",
      title: "Regional Expansion",
      description:
        "Expanded operations to 6 major cities across India, strengthening our market presence.",
    },
    {
      year: "2024",
      title: "Technology Upgrade",
      description:
        "Invested in cutting-edge technology for better quality control and increased production capacity.",
    },
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      experience: "25+ years in plastics industry",
      image: "👨‍💼",
    },
    {
      name: "Priya Singh",
      position: "Chief Operations Officer",
      experience: "20+ years in operations management",
      image: "👩‍💼",
    },
    {
      name: "Amit Patel",
      position: "Head of Quality Assurance",
      experience: "18+ years in quality control",
      image: "👨‍💼",
    },
    {
      name: "Neha Sharma",
      position: "Head of Sales & Marketing",
      experience: "16+ years in sales and business development",
      image: "👩‍💼",
    },
    {
      name: "Vikram Reddy",
      position: "Technical Director",
      experience: "22+ years in technical innovation",
      image: "👨‍💼",
    },
    {
      name: "Anjali Verma",
      position: "Sustainability Manager",
      experience: "14+ years in environmental management",
      image: "👩‍💼",
    },
  ];

  const achievements = [
    "ISO 9001:2015 Certified",
    "Best Plastic Supplier Award 2023",
    "Environmental Excellence Recognition",
    "Client Retention Rate: 95%+",
    "Zero Waste Initiative",
    "Industry Leadership Award",
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
        className="relative z-10 py-24 md:py-32 overflow-hidden"
      >
        {/* Background Image with Zoom Effect */}
        <motion.div
          animate={{ scale: [1, 1.5] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/aboutImg.jpg')",
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
        <div className="relative z-[2] px-4 py-16 md:py-24">
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
                🌿 About Our Company
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
              For over 15 years, Environ Polymers has been at the forefront of
              sustainable plastic manufacturing, delivering premium quality
              solutions while protecting our planet for future generations.
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
                  border: "2px solid",
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
        className="px-4 py-16 md:py-24 relative z-10"
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
                📖 Our Journey
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#344e41" }}
              >
                Transforming the Plastics Industry
              </h2>
              <p
                className="text-base md:text-lg mb-4 leading-relaxed"
                style={{ color: "#556B4F" }}
              >
                Founded in 2009, Environ Polymers emerged from a simple yet
                powerful vision: to revolutionize the plastic manufacturing
                industry by combining quality excellence with environmental
                responsibility. What started as a small operation has grown into
                a leading supplier of premium plastic granules, serving over 500
                clients across 50 countries.
              </p>
              <p
                className="text-base md:text-lg mb-6 leading-relaxed"
                style={{ color: "#556B4F" }}
              >
                Our journey has been defined by unwavering commitment to
                sustainability, continuous innovation, and building lasting
                partnerships with our clients. We don&apos;t just manufacture
                plastic granules; we create solutions that support sustainable
                manufacturing practices worldwide.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-bold text-white transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #588157 0%, #3a5a40 100%)",
                }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-xl"
              style={{
                backgroundColor: "rgba(88, 129, 87, 0.1)",
              }}
            >
              <div
                className="w-full h-96 flex items-center justify-center text-6xl relative group"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(88, 129, 87, 0.2) 0%, rgba(163, 177, 138, 0.1) 100%)",
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="group-hover:scale-110 transition-transform"
                >
                  🏭
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-xl backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(88, 129, 87, 0.2)",
                border: "2px solid",
              }}
            >
              <div className="flex items-center mb-6">
                <Target size={40} color="#588157" className="mr-4" />
                <h3 className="text-2xl font-bold" style={{ color: "#344e41" }}>
                  Our Mission
                </h3>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#556B4F" }}
              >
                To be the most trusted and sustainable supplier of premium
                plastic granules globally, enabling manufacturers to produce
                high-quality products while minimizing environmental impact. We
                are committed to delivering excellence, innovation, and
                reliability in every interaction with our clients.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="p-8 rounded-xl backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderColor: "rgba(88, 129, 87, 0.2)",
                border: "2px solid",
              }}
            >
              <div className="flex items-center mb-6">
                <Globe size={40} color="#588157" className="mr-4" />
                <h3 className="text-2xl font-bold" style={{ color: "#344e41" }}>
                  Our Vision
                </h3>
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#556B4F" }}
              >
                To create a world where sustainable plastic manufacturing is the
                standard, not the exception. We envision a future where our
                innovations help industries reduce waste, optimize resources,
                and build a circular economy that benefits both business and the
                environment.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
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
              💡 Core Values
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#344e41" }}
            >
              What Drives Us <span style={{ color: "#588157" }}>Forward</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-xl backdrop-blur-sm group"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderColor: "rgba(88, 129, 87, 0.2)",
                    border: "2px solid",
                  }}
                >
                  <div
                    className="mb-4 p-3 rounded-lg inline-block group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: "rgba(88, 129, 87, 0.1)" }}
                  >
                    <Icon size={32} color="#588157" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#344e41" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#556B4F" }}>
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
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
              ⏱️ Our Timeline
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#344e41" }}
            >
              Milestones in Our <span style={{ color: "#588157" }}>Growth</span>
            </motion.h2>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 md:gap-12 items-start"
              >
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-6 h-6 rounded-full border-4 z-10"
                    style={{
                      borderColor: "#588157",
                      backgroundColor: "#a3b18a",
                    }}
                  />
                  {index !== timeline.length - 1 && (
                    <div
                      className="w-1 h-24 md:h-32"
                      style={{ backgroundColor: "rgba(88, 129, 87, 0.2)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 pb-6 md:pb-12">
                  <div
                    className="p-6 rounded-xl backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      borderColor: "rgba(88, 129, 87, 0.15)",
                      border: "2px solid",
                    }}
                  >
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ color: "#588157" }}
                    >
                      {item.year}
                    </h3>
                    <h4
                      className="text-lg font-semibold mb-2"
                      style={{ color: "#344e41" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: "#556B4F" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
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
              👥 Leadership Team
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#344e41" }}
            >
              Meet Our <span style={{ color: "#588157" }}>Experts</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg"
              style={{ color: "#556B4F" }}
            >
              Our leadership team brings decades of combined experience in the
              plastics industry
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-xl overflow-hidden backdrop-blur-sm group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(88, 129, 87, 0.15)",
                  border: "2px solid",
                }}
              >
                <div
                  className="h-48 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(88, 129, 87, 0.1) 0%, rgba(163, 177, 138, 0.05) 100%)",
                  }}
                >
                  {member.image}
                </div>
                <div className="p-6">
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "#344e41" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-semibold mb-2"
                    style={{ color: "#588157" }}
                  >
                    {member.position}
                  </p>
                  <p className="text-sm" style={{ color: "#556B4F" }}>
                    {member.experience}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
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
              🏆 Recognition
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#344e41" }}
            >
              Awards & <span style={{ color: "#588157" }}>Achievements</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl backdrop-blur-sm text-center group"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "rgba(88, 129, 87, 0.2)",
                  border: "2px solid",
                }}
              >
                <Award
                  size={48}
                  color="#588157"
                  className="mx-auto mb-4 group-hover:rotate-12 transition-transform"
                />
                <p
                  className="font-semibold text-lg"
                  style={{ color: "#344e41" }}
                >
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-16 md:py-24 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image */}
            <motion.div
              variants={itemVariants}
              className="rounded-xl overflow-hidden shadow-xl"
              style={{
                backgroundColor: "rgba(88, 129, 87, 0.1)",
              }}
            >
              <div
                className="w-full h-96 flex items-center justify-center text-6xl relative group"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(88, 129, 87, 0.2) 0%, rgba(163, 177, 138, 0.1) 100%)",
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="group-hover:scale-110 transition-transform"
                >
                  🌱
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants}>
              <span
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  backgroundColor: "rgba(88, 129, 87, 0.1)",
                  color: "#588157",
                }}
              >
                ✨ Why Choose Us
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "#344e41" }}
              >
                The Environ Polymers Advantage
              </h2>

              <div className="space-y-4">
                {[
                  "Premium quality products meeting international standards",
                  "Sustainable manufacturing with zero waste initiatives",
                  "Dedicated customer support and technical assistance",
                  "Competitive pricing with transparent cost structures",
                  "Reliable supply chain with timely deliveries",
                  "Continuous innovation and product development",
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "#588157" }}
                    >
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-base" style={{ color: "#556B4F" }}>
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
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
              background: "linear-gradient(135deg, #588157 0%, #3a5a40 100%)",
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
