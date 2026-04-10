"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PolymerPage() {
  const categories = [
    {
      title: "Medical & Pharma Granules",
      image: "/services/medical.jpg",
    },
    {
      title: "Polyethylene (PE) Granules",
      image: "/services/polythylene.jpg",
    },
    {
      title: "Polypropylene (PP) Granules",
      image: "/services/polypropylene.jpg",
    },
    {
      title: "Polyvinyl Chloride (PVC) Granules",
      image: "/services/pvc.jpg",
    },
  ];

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f4] via-[#e6f3f0] to-[#dceef0]" />
      </div>

      {/* HERO */}
      <motion.section className="relative py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          {/* ZOOM EFFECT */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute inset-0"
          >
            <Image
              src="/granules.webp"
              alt="Plastic Raw Material"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-6">
            Polymer & Plastic Raw Material Supplier
          </h1>

          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Leading Plastic Raw Material Suppliers in India. Reliable,
            customer-centric, and your one-stop solution for polymer
            distribution.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#588157] rounded-xl"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>

            <a
              href="https://share.google/n0dn8IqR190LISALQ"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#344e41] rounded-xl"
            >
              Visit Website <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-[#588157]/20"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#344e41]">
            About AVH Polychem
          </h2>

          <p className="text-gray-700 leading-relaxed">
            We at AVH Polychem promise our customers that when it comes to the
            business of distribution of polymers, we are reliable and
            customer-centric. As a one-stop shop, we stand apart with dedicated
            systems and resources, ensuring consistent quality and timely
            delivery across India.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT CATEGORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#344e41]">
          Our Product Categories
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(88,129,87,0.2)",
              }}
              className="bg-white rounded-xl overflow-hidden border border-[#588157]/20"
            >
              {/* IMAGE */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* TITLE */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-[#344e41]">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#588157]/10 border border-[#588157]/20 rounded-2xl py-10 px-6 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-[#344e41] mb-4">
            Need detailed product specifications?
          </h3>

          <p className="text-gray-600 mb-6">
            Explore our complete range of polymer and plastic raw materials by
            visiting our official website.
          </p>

          <a
            href="https://share.google/n0dn8IqR190LISALQ"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#588157] text-white rounded-lg"
          >
            Visit Website <ExternalLink size={18} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
