"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LLDPEServicePage() {
  const aboutContent = `
Linear Low Density Polyethylene (LLDPE) granules are widely used thermoplastic materials known for their flexibility, strength, and adaptability across various industrial applications.

These granules are produced through advanced copolymerization processes, resulting in a linear structure with short branching that enhances durability and performance. LLDPE is commonly used in manufacturing plastic films, stretch wraps, packaging materials, pipes, containers, and molded products.

Our granules are processed using modern machinery to ensure consistent quality, excellent finish, and reliable industrial performance.
`;

  const overviewContent = `
LLDPE granules are highly versatile materials used across packaging, agriculture, and industrial sectors. Their unique molecular structure provides better impact resistance, tensile strength, and flexibility compared to conventional polyethylene materials.

They are ideal for producing thin films and flexible plastic products that require strength without compromising elasticity.

Key characteristics include:

• High resistance to environmental stress cracking  
• Strong impact and puncture resistance  
• Excellent flexibility and elongation  
• Stable chemical composition  
• Easy processing and molding adaptability  
• Suitable for both lightweight and heavy-duty applications  

These properties make LLDPE a preferred choice for manufacturers requiring durability with flexibility.
`;

  const chooseContent = `
Our LLDPE granules are manufactured using high-grade raw materials and advanced production techniques to ensure superior consistency and performance.

We focus on delivering:

• High durability and long-lasting material performance  
• Resistance to oxidation and environmental damage  
• Reliable shelf life and storage stability  
• Smooth processing for industrial manufacturing  
• Cost-efficient solutions for bulk requirements  
• Custom grades as per application needs  

Our materials are trusted across industries for producing packaging films, plastic goods, containers, and various molded products with precision and efficiency.
`;

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f4] via-[#e6f3f0] to-[#dceef0]" />
      </div>

      {/* HERO */}
      <motion.section className="relative py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute inset-0"
          >
            <Image
              src="/services/lldpe.jpg"
              alt="LLDPE Granules"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-6">LLDPE Plastic Granules</h1>

          <p className="mb-8 text-lg max-w-2xl mx-auto">
            High-performance LLDPE granules designed for flexible, durable, and
            efficient industrial applications.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#588157] rounded-xl"
          >
            Contact Now <ArrowRight size={18} />
          </Link>
        </div>
      </motion.section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-[#588157]/20"
        >
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#344e41]">
                About LLDPE Granules
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutContent}
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/services/lldp.webp"
                alt="LLDPE Granules"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
