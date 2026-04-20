"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const industries = [
  {
    title: "Pharmaceutical & Healthcare",
    description:
      "End-to-end compliant waste management solutions for pharmaceuticals, laboratories, and healthcare facilities ensuring safety, traceability, and environmental responsibility.",
    services: [
      "Hazardous chemical waste handling",
      "Expired drug destruction & recovery",
      "Laboratory waste disposal",
      "Medical packaging recycling",
    ],
    color: "#588157",
    imageUrl: "/industries/pharmaceutical-scrap.jpg",
  },
  {
    title: "Textile & Garment",
    description:
      "Sustainable recycling solutions for textile manufacturers, minimizing landfill waste while maximizing material recovery and reuse.",
    services: [
      "Fabric scraps & cutting waste",
      "Cotton & synthetic fiber recycling",
      "Dye & process waste management",
      "Packaging material recovery",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/textile-scrap.jpg",
  },
  {
    title: "Paint & Coating",
    description:
      "Specialized disposal and recycling of paints, coatings, and solvents with strict adherence to environmental safety standards.",
    services: [
      "Expired paint disposal",
      "Solvent recovery & reuse",
      "Coating sludge management",
      "Contaminated container cleaning",
    ],
    color: "#344e41",
    imageUrl: "/industries/paint-scrap.jpg",
  },
  {
    title: "Electronics & Electrical",
    description:
      "Responsible e-waste management with advanced recovery processes to extract valuable materials and ensure safe disposal.",
    services: [
      "E-waste collection & recycling",
      "Battery disposal & handling",
      "Electronic component recovery",
      "Manufacturing scrap management",
    ],
    color: "#588157",
    imageUrl: "/industries/electronics-scrap.jpg",
  },
  {
    title: "Automotive & Manufacturing",
    description:
      "Efficient scrap management solutions for automotive and industrial manufacturing units, improving sustainability and cost recovery.",
    services: [
      "Metal scrap processing",
      "Rubber & tyre recycling",
      "Used oil recycling",
      "Production scrap handling",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/automotive-scrap.jpg",
  },
  {
    title: "FMCG & Packaging",
    description:
      "Scalable waste management systems for FMCG brands focusing on packaging recovery and EPR compliance.",
    services: [
      "Plastic packaging recycling",
      "EPR compliance management",
      "Paper & cardboard recovery",
      "Production reject handling",
    ],
    color: "#344e41",
    imageUrl: "/industries/fmcg-scrap.jpg",
  },
  {
    title: "Food & Beverage",
    description:
      "Eco-friendly waste solutions for food industries including organic waste processing and packaging recycling.",
    services: [
      "Organic waste composting",
      "Glass & bottle recycling",
      "Food-grade packaging recovery",
      "Commercial kitchen waste handling",
    ],
    color: "#588157",
    imageUrl: "/industries/food-scrap.jpg",
  },
  {
    title: "Chemical & Petrochemical",
    description:
      "Advanced hazardous waste handling solutions designed for chemical industries with strict regulatory compliance.",
    services: [
      "Hazardous waste disposal",
      "Contaminated material handling",
      "Scheduled waste processing",
      "Industrial drum cleaning",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/chemical-scrap.jpg",
  },
  {
    title: "Steel & Metal Processing",
    description:
      "Optimized metal scrap recovery systems for steel plants and metal processors ensuring maximum material value extraction.",
    services: [
      "Ferrous & non-ferrous scrap",
      "Production offcut recycling",
      "Metal dust & slag handling",
      "Industrial dismantling",
    ],
    color: "#344e41",
    imageUrl: "/industries/metal-scrap.jpg",
  },
  {
    title: "Construction & Infrastructure",
    description:
      "Bulk waste handling and recycling solutions for construction projects focusing on material recovery and sustainability.",
    services: [
      "Wood & pallet recycling",
      "Construction debris management",
      "Structural metal scrap",
      "Bulk waste logistics",
    ],
    color: "#588157",
    imageUrl: "/industries/construction-scrap.jpg",
  },
  {
    title: "Agriculture & Agro-Processing",
    description:
      "Sustainable waste solutions for agricultural operations, reducing environmental impact and improving resource efficiency.",
    services: [
      "Organic waste processing",
      "Plastic mulch recycling",
      "Agro packaging disposal",
      "Wooden crate recovery",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/agriculture.webp",
  },
  {
    title: "IT & Technology Parks",
    description:
      "Smart waste management systems for corporate offices and tech parks with a focus on e-waste and sustainability audits.",
    services: [
      "Office e-waste recycling",
      "Battery disposal solutions",
      "Paper waste management",
      "Waste audit & reporting",
    ],
    color: "#344e41",
    imageUrl: "/industries/tech.webp",
  },
];

export default function IndustriesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ scale: 1.1 }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        >
          <Image
            src="/industriesImg.jpg"
            alt="Industries"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Overlay (lighter) */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">
            Industries We Partner With
          </h1>
          <p className="text-lg text-white/80">
            Smart, scalable, and sustainable solutions for modern industries
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border-b-4 border-[#1a9a44]"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                <div className="space-y-2">
                  {item.services.map((s, i) => (
                    <div key={i} className="flex gap-2 text-sm">
                      <CheckCircle2 size={16} style={{ color: item.color }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white rounded-full"
        >
          Contact Us <ArrowRight size={16} />
        </a>
      </section>
    </main>
  );
}
