"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Zap, Shield, Droplet, Award, TrendingUp } from "lucide-react";

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

const WhyChooseUs = ({
  title = "Why Choose Enviro Polymers?",
  subtitle = "Industry-leading solutions for sustainable polymer production",
  showStats = true,
}: WhyChooseUsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Leaf,
      title: "100% Sustainable",
      description:
        "Eco-friendly materials and processes that reduce carbon footprint without compromising quality.",
      color: "#588157",
      bgColor: "rgba(88, 129, 87, 0.1)",
      borderColor: "rgba(88, 129, 87, 0.2)",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "ISO certified production with rigorous quality control ensuring consistent excellence across all products.",
      color: "#588157",
      bgColor: "rgba(88, 129, 87, 0.1)",
      borderColor: "rgba(88, 129, 87, 0.2)",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description:
        "Pan-India logistics network ensuring prompt delivery of bulk orders with minimal lead time.",
      color: "#588157",
      bgColor: "rgba(88, 129, 87, 0.1)",
      borderColor: "rgba(88, 129, 87, 0.2)",
    },
    {
      icon: Shield,
      title: "Reliable Partner",
      description:
        "Trusted by 500+ clients for over 15 years with proven track record of excellence and innovation.",
      color: "#588157",
      bgColor: "rgba(88, 129, 87, 0.1)",
      borderColor: "rgba(88, 129, 87, 0.2)",
    },
    {
      icon: Droplet,
      title: "Custom Solutions",
      description:
        "Tailored formulations designed to meet your exact specifications and manufacturing requirements.",
      color: "#588157",
      bgColor: "rgba(88, 129, 87, 0.1)",
      borderColor: "rgba(88, 129, 87, 0.2)",
    },
    {
      icon: TrendingUp,
      title: "Cost Effective",
      description:
        "Competitive pricing with bulk discounts and flexible ordering options for maximum value.",
      color: "#588157",
      bgColor: "rgba(88, 129, 87, 0.1)",
      borderColor: "rgba(88, 129, 87, 0.2)",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: "🏆" },
    { number: "500+", label: "Satisfied Clients", icon: "👥" },
    { number: "3000+", label: "Tonnes Recycled", icon: "♻️" },
    { number: "50+", label: "Countries Served", icon: "🌍" },
  ];

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
<<<<<<< HEAD
      transition: { duration: 0.6, ease: "easeOut" as const },
=======
      transition: { duration: 0.6, ease: "easeOut" as const},
>>>>>>> e7f8bc4470d4c9f159c4913303f91bd7949b869d
    },
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section ref={ref} className="relative py-16 md:py-24 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-[#f0f7f4] via-white to-[#e6f3f0]" />

        {/* Glowing Orbs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          style={{ backgroundColor: "#588157" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full mix-blend-screen filter blur-3xl opacity-15"
          style={{ backgroundColor: "#a3b18a" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#344e41" }}
          >
            {title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={featureCardVariants}
                whileHover="hover"
                className="group relative rounded-2xl p-8 border transition-all shadow-lg hover:shadow-2xl cursor-pointer"
                style={{
                  backgroundColor: feature.bgColor,
                  borderColor: feature.borderColor,
                }}
              >
                {/* Decorative Leaf - Top Right */}
                <motion.div
                  className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Leaf size={40} color={feature.color} />
                </motion.div>

                {/* Icon Container */}
                <motion.div
                  className="mb-6 inline-flex p-4 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderColor: feature.borderColor,
                  }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={28} color={feature.color} strokeWidth={2} />
                </motion.div>

                {/* Content */}
                <motion.h3
                  className="text-xl font-bold mb-3 transition-colors"
                  style={{ color: "#344e41" }}
                >
                  {feature.title}
                </motion.h3>

                <motion.p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                  {feature.description}
                </motion.p>

                {/* Bottom accent line */}
                <motion.div
                  className="h-0.5 rounded-full"
                  style={{ backgroundColor: feature.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section */}
        {showStats && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative rounded-3xl p-8 md:p-12 border overflow-hidden"
            style={{
              backgroundColor: "rgba(88, 129, 87, 0.08)",
              borderColor: "rgba(88, 129, 87, 0.2)",
            }}
          >
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(88, 129, 87, 0.1) 0%, transparent 100%)",
              }}
            />

            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <motion.div
                    className="text-4xl md:text-5xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.p
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{ color: "#588157" }}
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-gray-700 font-medium text-sm md:text-base">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-700 mb-6 text-sm md:text-base max-w-2xl mx-auto">
            Ready to partner with us? Let's create sustainable solutions
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "#588157" }}
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/services/pp-granules"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg font-semibold border-2 transition-all"
              style={{
                borderColor: "#588157",
                color: "#588157",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(88, 129, 87, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
