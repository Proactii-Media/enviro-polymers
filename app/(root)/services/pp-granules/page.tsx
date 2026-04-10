"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicePage() {
  const content = `
Manufacturers, suppliers, and exporters of pp plastic granules, pp granules, pp plastic dana, pp dana, cp plastic granules and cp dana in Delhi, India.

We provide high-quality PP & CP granules for various industrial applications including injection molding, extrusion, and packaging industries.
`;

  const products = [
    {
      title: "Milky (PP & CP)",
      image: "/services/cpff.jpg",
      items: ["Milky PP Granules", "Milky CP Granules"],
    },
    {
      title: "Black (PP & CP)",
      image: "/services/black.jpg",
      items: [
        "Black BK 03 Granules",
        "Black Fresh S Granules",
        "Black CPBT Granules",
        "Black Supreme Granules",
      ],
    },
    {
      title: "Color PW (PP & CP)",
      image: "/granules.webp",
      items: [
        "Green PW Granules",
        "Cherry PW Granules",
        "Lemon PW Granules",
        "Blue PW Granules",
        "etc.",
      ],
    },
    {
      title: "Natural Co-Polymer",
      image: "/services/yellow.webp",
      items: ["CPN F Granules", "CPFF 54 Granules", "NCP Polymer"],
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
              alt="Plastic Granules"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-6">PP & CP Plastic Granules</h1>

          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Manufacturers, suppliers, and exporters of high-quality PP plastic
            granules, PP dana, CP granules, and CP dana in Delhi, India.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#588157] rounded-xl"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>

            <a
              href="https://share.google/6a4s1aHJLX7hxSVO0"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#344e41] rounded-xl"
            >
              Visit Website <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </motion.section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-[#588157]/20"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#344e41]">
            Our Services
          </h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </motion.div>
      </section>

      {/* PRODUCT CARDS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#344e41]">
          Our Product Range
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(88,129,87,0.2)",
              }}
              className="bg-white rounded-xl overflow-hidden border border-[#588157]/20 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <h3 className="font-bold text-lg mb-3 text-[#344e41]">
                  {product.title}
                </h3>

                <ul className="text-sm text-gray-600 space-y-1 min-h-[120px]">
                  {product.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* VISIT WEBSITE CTA */}
      <section className="text-center pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#588157]/10 border border-[#588157]/20 rounded-2xl py-10 px-6 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-[#344e41] mb-4">
            Looking for more product details?
          </h3>

          <p className="text-gray-600 mb-6">
            For complete specifications and full product range, visit our
            official website.
          </p>

          <a
            href="https://share.google/6a4s1aHJLX7hxSVO0"
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
