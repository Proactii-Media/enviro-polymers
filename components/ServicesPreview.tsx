"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

interface ServiceData {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

const ServicePreview = () => {
  const services: ServiceData[] = [
    {
      id: "pp-granules",
      icon: "🏭",
      title: "PP Granules Manufacturing",
      description:
        "Markandey Polymers manufactures PP granules and plastic dana with dependable batch consistency, bulk readiness, and delivery support across India.",
      features: [
        "Quality & consistency",
        "Bulk supply support",
        "Timely dispatch",
        "Custom grade guidance",
        "Reliable procurement",
      ],
    },
    {
      id: "raw-material",
      icon: "📦",
      title: "Plastic Raw Material Supply",
      description:
        "AVH Polychem is a trusted polymer supplier in India for customer-focused sourcing and consistent material supply across industries.",
      features: [
        "One-stop polymer supply",
        "Reliable sourcing",
        "Customer-focused support",
        "Multi-industry coverage",
        "Stable availability",
      ],
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

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f5f5f5 0%, #fafafa 50%, #f0f4f1 100%)",
      }}
    >
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ backgroundColor: "#588157" }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ backgroundColor: "#a3b18a" }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold border mb-6 backdrop-blur-lg transition-all hover:scale-105"
              style={{
                backgroundColor: "rgba(88, 129, 87, 0.08)",
                color: "#344e41",
                borderColor: "rgba(88, 129, 87, 0.3)",
              }}
            >
              Our Services
            </span>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
            style={{ color: "#344e41" }}
          >
            Premium Plastic Raw Materials{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #189944 100%)",
              }}
            >
              Solutions
            </span>
          </motion.h2>

          <motion.p
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: "#556B4F" }}
          >
            Comprehensive range of PP granules, CP dana, and plastic raw
            materials for industries. Trusted supplier serving manufacturers,
            exporters, and businesses across Delhi and India.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
              link={service.link}
              serviceId={service.id}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg mb-8" style={{ color: "#556B4F" }}>
            Need a specific solution? Let's discuss your requirements!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl text-white"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl text-white"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #588157 0%, #3a5a40 100%)",
                }}
              >
                Get Quotation
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePreview;
