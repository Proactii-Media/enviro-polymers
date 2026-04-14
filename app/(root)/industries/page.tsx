"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const industries = [
  {
    title: "Pharmaceutical & Healthcare",
    description:
      "Comprehensive waste management for expired medicines, lab waste, hazardous chemicals, and packaging materials with strict PCB compliance.",
    services: [
      "Hazardous chemical waste disposal",
      "Expired medication recycling",
      "Laboratory waste management",
      "Medical packaging waste",
    ],
    color: "#588157",
    imageUrl: "/industries/pharmaceutical-scrap.jpg",
  },
  {
    title: "Textile & Garment",
    description:
      "Cotton waste, synthetic fibers, fabric offcuts, dye waste and packaging materials recycled responsibly with zero-landfill commitment.",
    services: [
      "Fabric scraps & offcuts",
      "Cotton & synthetic waste",
      "Dye & chemical waste",
      "Packaging materials",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/textile-scrap.jpg",
  },
  {
    title: "Paint & Coating",
    description:
      "Safe handling of expired paints, solvents, coating residues, contaminated containers and hazardous waste streams.",
    services: [
      "Expired paint disposal",
      "Solvent recycling",
      "Coating residue management",
      "Contaminated drum cleaning",
    ],
    color: "#344e41",
    imageUrl: "/industries/paint-scrap.jpg",
  },
  {
    title: "Electronics & Electrical",
    description:
      "E-waste recycling, component recovery, battery disposal and dismantling services.",
    services: [
      "E-waste recycling",
      "Battery disposal",
      "Component recovery",
      "Production line waste",
    ],
    color: "#588157",
    imageUrl: "/industries/electronics-scrap.jpg",
  },
  {
    title: "Automotive & Manufacturing",
    description:
      "Metal scrap, rubber waste, production offcuts and oil disposal.",
    services: [
      "Metal scrap recycling",
      "Rubber & tyre waste",
      "Used oil re-refining",
      "Production line scrap",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/automotive-scrap.jpg",
  },
  {
    title: "FMCG & Packaging",
    description:
      "Plastic packaging, multilayer plastics, cardboard waste and bulk handling.",
    services: [
      "Plastic packaging waste",
      "EPR compliance support",
      "Cardboard & paper waste",
      "Production rejects",
    ],
    color: "#344e41",
    imageUrl: "/industries/fmcg-scrap.jpg",
  },
  {
    title: "Food & Beverage",
    description:
      "Organic waste composting, glass recycling and packaging waste solutions.",
    services: [
      "Organic waste composting",
      "Glass & bottle recycling",
      "Food packaging waste",
      "Industrial kitchen waste",
    ],
    color: "#588157",
    imageUrl: "/industries/food-scrap.jpg",
  },
  {
    title: "Chemical & Petrochemical",
    description: "Hazardous chemical disposal and scheduled waste handling.",
    services: [
      "Hazardous chemical waste",
      "Contaminated materials",
      "Scheduled waste handling",
      "Drum cleaning",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/chemical-scrap.jpg",
  },
  {
    title: "Steel & Metal Processing",
    description: "Ferrous & non-ferrous scrap and production waste recycling.",
    services: [
      "Metal scrap buying",
      "Production offcuts",
      "Metal dust & slag",
      "Equipment dismantling",
    ],
    color: "#344e41",
    imageUrl: "/industries/metal-scrap.jpg",
  },
  {
    title: "Construction & Infrastructure",
    description: "Construction debris, metal scrap and bulk waste handling.",
    services: [
      "Wooden pallet recycling",
      "Construction debris",
      "Metal structure scrap",
      "Bulk waste handling",
    ],
    color: "#588157",
    imageUrl: "/industries/construction-scrap.jpg",
  },
  {
    title: "Agriculture & Agro-Processing",
    description: "Organic waste, plastic mulch and farm waste management.",
    services: [
      "Organic waste recycling",
      "Plastic mulch disposal",
      "Agricultural packaging",
      "Wooden crate buying",
    ],
    color: "#3a5a40",
    imageUrl: "/industries/agriculture.webp",
  },
  {
    title: "IT & Technology Parks",
    description: "Office e-waste, battery disposal and waste audits.",
    services: [
      "Office e-waste recycling",
      "Battery disposal",
      "Paper waste management",
      "Waste audits",
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
          <h1 className="text-5xl font-bold mb-4">Industries We Serve</h1>
          <p className="text-lg text-white/80">
            Tailored solutions for every industry
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
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl"
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
