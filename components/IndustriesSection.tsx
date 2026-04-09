"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";

interface IndustriesSectionProps {
  title?: string;
  subtitle?: string;
}

const IndustriesSection = ({
  title = "Industries We Serve",
  subtitle = "Trusted by leading companies across diverse sectors",
}: IndustriesSectionProps) => {
  const ref = useRef(null);

  const industries = [
    {
      icon: "💊",
      name: "Pharmaceutical",
      description:
        "High-purity granules for medical packaging and pharmaceutical manufacturing",
      applications: [
        "Medical packaging",
        "Drug delivery systems",
        "Sterile containers",
      ],
      color: "#2E5266",
      accentColor: "#6E8898",
    },
    {
      icon: "🥛",
      name: "Dairy",
      description:
        "Food-grade materials meeting strict dairy industry safety standards",
      applications: ["Milk packaging", "Yogurt containers", "Cheese packaging"],
      color: "#D4A574",
      accentColor: "#E8C4A0",
    },
    {
      icon: "👕",
      name: "Textile",
      description:
        "Durable polymers for textile machinery and industrial applications",
      applications: [
        "Machinery components",
        "Fiber production",
        "Industrial parts",
      ],
      color: "#8B4513",
      accentColor: "#A0522D",
    },
    {
      icon: "🏭",
      name: "Manufacturing",
      description:
        "Versatile plastics for general manufacturing and assembly processes",
      applications: [
        "Injection molding",
        "Extrusion products",
        "Assembly parts",
      ],
      color: "#4A5859",
      accentColor: "#6B7C7E",
    },
    {
      icon: "🧼",
      name: "FMCG",
      description:
        "Consumer-friendly packaging solutions for fast-moving goods",
      applications: [
        "Detergent bottles",
        "Personal care packaging",
        "Household products",
      ],
      color: "#C41E3A",
      accentColor: "#E74C3C",
    },
    {
      icon: "🌾",
      name: "Agricultural",
      description:
        "Weather-resistant materials for agricultural equipment and packaging",
      applications: [
        "Crop protection",
        "Equipment covers",
        "Storage containers",
      ],
      color: "#6B8E23",
      accentColor: "#9ACD32",
    },
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
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -15,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="industries"
      ref={ref}
      className="relative py-16 md:py-24 px-4 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-b from-[#f0f7f4] via-white to-[#f5f5f5]" />

        {/* Glowing Orbs */}
        <div
          className="absolute top-1/4 left-0 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          style={{ backgroundColor: "#588157" }}
        />
        <div
          className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full mix-blend-screen filter blur-3xl opacity-15"
          style={{ backgroundColor: "#a3b18a" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border"
              style={{
                backgroundColor: "rgba(88, 129, 87, 0.1)",
                borderColor: "rgba(88, 129, 87, 0.2)",
                color: "#588157",
              }}
            >
              <Zap size={16} />
              Multi-Industry Solutions
            </span>
          </motion.div>

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

        {/* Industries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group relative rounded-2xl p-8 border transition-all shadow-lg hover:shadow-2xl cursor-pointer overflow-hidden"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "rgba(88, 129, 87, 0.15)",
              }}
            >
              {/* Background accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundColor: industry.color,
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {industry.icon}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-2 transition-colors"
                  style={{ color: industry.color }}
                >
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {industry.description}
                </p>

                {/* Applications */}
                <div>
                  <p
                    className="text-xs font-semibold mb-2 uppercase tracking-wide"
                    style={{ color: industry.color }}
                  >
                    Key Applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIdx) => (
                      <motion.span
                        key={appIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: appIdx * 0.1 }}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          backgroundColor: "rgba(88, 129, 87, 0.08)",
                          borderColor: "rgba(88, 129, 87, 0.2)",
                          color: "#556B4F",
                        }}
                      >
                        {app}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  boxShadow: `inset 0 0 20px ${industry.color}33`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            Don't see your industry? We create custom solutions for any sector.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#588157" }}
          >
            Contact Us for Custom Solutions
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
