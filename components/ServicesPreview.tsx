"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import Link from "next/link";

interface ServiceData {
  id: string;
  image: string;
  title: string;
  description: string;
  features: string[];
  link?: string;
}

const ServicePreview = () => {
  const services: ServiceData[] = [
    {
      id: "pp-granules",
      image: "",
      title: "PP Granules",
      description:
        "High-quality polypropylene granules for industrial applications.",
      features: ["Strong", "Durable", "Lightweight"],
    },
    {
      id: "raw-material",
      image: "",
      title: "Plastic Raw Material",
      description:
        "Reliable plastic raw materials for various manufacturing needs.",
      features: ["Consistent quality", "Bulk supply", "Cost-effective"],
    },
    {
      id: "hdpe-granules",
      image: "",
      title: "HDPE Granules",
      description:
        "Durable HDPE granules suitable for heavy-duty applications.",
      features: ["High strength", "Chemical resistant", "Long-lasting"],
    },
    {
      id: "ldpe-granules",
      image: "",
      title: "LDPE Granules",
      description: "Flexible LDPE material ideal for packaging and film usage.",
      features: ["Flexible", "Soft", "Moisture resistant"],
    },
    {
      id: "lldpe-granules",
      image: "",
      title: "LLDPE Granules",
      description:
        "Enhanced strength and flexibility for modern plastic products.",
      features: ["Impact resistant", "Flexible", "Lightweight"],
    },
    {
      id: "engineering-polymers",
      image: "",
      title: "Engineering Polymers",
      description:
        "Advanced polymer solutions for high-performance applications.",
      features: ["High performance", "Precision use", "Reliable"],
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
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold border mb-6"
              style={{
                backgroundColor: "rgba(88, 129, 87, 0.08)",
                color: "#344e41",
                borderColor: "rgba(88, 129, 87, 0.3)",
              }}
            >
              Our Products
            </span>
          </motion.div>

          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#344e41" }}
          >
            Plastic Raw Materials Solutions
          </motion.h2>

          <motion.p
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#556B4F" }}
          >
            Wide range of high-quality plastic materials designed for industrial
            performance and sustainability.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              features={service.features}
              index={index}
              link={service.link}
              serviceId={service.id}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg mb-6" style={{ color: "#556B4F" }}>
            Looking for the right material?
          </p>

          <Link href="/contact">
            <button
              className="px-8 py-3 rounded-lg text-white font-semibold shadow-lg hover:scale-105 transition"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #1a9a44 0%, #3a5a40 100%)",
              }}
            >
              Get Quotation
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;
