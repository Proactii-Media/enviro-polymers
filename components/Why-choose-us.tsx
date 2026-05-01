"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Leaf,
  Zap,
  Shield,
  Truck,
  Award,
  TrendingUp,
  Boxes,
  Users,
} from "lucide-react";

interface WhyChooseUsProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

const WhyChooseUs = ({
  title = "Why Choose Enviro Polymers?",
  subtitle = "Reliable, sustainable, and high-quality polymer solutions for industrial needs",
  showStats = true,
}: WhyChooseUsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: Boxes,
      title: "Wide Product Range",
      description:
        "PP, HDPE, LLDPE granules and plastic scrap for diverse industrial applications.",
    },
    {
      icon: TrendingUp,
      title: "Strong Industry Experience",
      description:
        "Serving the plastic recycling and raw material industry since 2009.",
    },
    {
      icon: Shield,
      title: "Consistent Quality",
      description:
        "Strict material grading and quality control ensure reliable performance.",
    },
    {
      icon: Zap,
      title: "Competitive Pricing",
      description:
        "Cost-effective solutions supported by a strong and efficient supply chain.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Practices",
      description:
        "Transforming plastic waste into reusable resources for sustainability.",
    },
    {
      icon: Award,
      title: "Bulk Supply Capability",
      description:
        "Reliable availability for large-scale industrial requirements.",
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description:
        "Efficient logistics ensuring on-time delivery across regions.",
    },
    {
      icon: Users,
      title: "Customer-Focused Approach",
      description:
        "Customized solutions tailored to your specific manufacturing needs.",
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Experience", icon: "🏆" },
    { number: "100+", label: "Industries Served", icon: "🏭" },
    { number: "1000+", label: "Orders Delivered", icon: "📦" },
    { number: "100%", label: "Sustainable Focus", icon: "♻️" },
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
    <section ref={ref} className="relative py-16 md:py-12 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-[#f0f7f4] via-white to-[#e6f3f0]" />

        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: "#588157" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: "#a3b18a" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
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
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={featureCardVariants}
                whileHover="hover"
                className="group rounded-2xl p-6 border shadow-md hover:shadow-xl transition-all"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderColor: "#1a9a44",
                }}
              >
                <motion.div
                  className="mb-4 inline-flex p-3 rounded-lg border"
                  style={{
                    backgroundColor: "rgba(88, 129, 87, 0.1)",
                    borderColor: "#1a9a44",
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon size={24} color="#1a9a44" />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2 text-[#344e41]">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
