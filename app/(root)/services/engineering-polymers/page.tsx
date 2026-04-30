"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EngineeringPolymersPage() {
  const aboutContent = `
Engineering polymers are high-performance plastic materials designed to deliver superior mechanical strength, thermal stability, and chemical resistance for advanced industrial applications.

Our range includes ABS (Acrylonitrile Butadiene Styrene) and other engineering-grade polymers widely used in automotive components, electrical housings, medical devices, construction systems, and consumer products.

These materials are lightweight, easy to mold, and provide excellent surface finish, making them a reliable alternative to metals in many structural and functional applications.
`;

  const overviewContent = `
Engineering polymers represent a specialized category of synthetic materials developed to meet demanding engineering requirements. Unlike conventional plastics, these polymers are designed with precise molecular structures to deliver enhanced strength, stiffness, and dimensional stability.

They combine the processing advantages of thermoplastics with the structural performance of metals, making them suitable for high-end industrial use.

Key characteristics include:

• High strength-to-weight ratio  
• Excellent stiffness and dimensional stability  
• Resistance to heat and chemical exposure  
• Long-term durability under stress  
• Superior surface quality and finish  
• Reliable performance in critical applications  

These properties make engineering polymers essential in industries such as automotive, aerospace, electronics, and medical manufacturing.
`;

  const chooseContent = `
We supply engineering polymers that meet strict industrial quality standards and performance expectations.

Our focus includes:

• Consistent material composition and quality control  
• Non-abrasive and smooth processing properties  
• Reliable mechanical performance under load  
• Wide range of polymer grades and specifications  
• Timely delivery and bulk supply capability  
• Custom solutions based on application requirements  

As a trusted supplier in India, we work closely with manufacturers to provide materials that improve product efficiency, reduce weight, and enhance overall performance.

Our commitment to quality, precision, and client satisfaction makes us a dependable partner for engineering polymer solutions.
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
              src="/services/engineer.avif"
              alt="Engineering Polymers"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-6">Engineering Polymers</h1>

          <p className="mb-8 text-lg max-w-2xl mx-auto">
            High-performance polymer materials engineered for strength,
            precision, and advanced industrial applications.
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
                About Engineering Polymers
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutContent}
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/services/engineer-polymer.jpg"
                alt="Engineering Polymers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-[#588157]/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#344e41]">
            Overview of Engineering Polymers
          </h2>

          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {overviewContent}
          </p>
        </motion.div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#588157]/10 border border-[#588157]/20 rounded-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* CONTENT (LEFT SIDE) */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-[#344e41]">
                Why Choose Our Engineering Polymers
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {chooseContent}
              </p>
            </div>

            {/* IMAGE (RIGHT SIDE) */}
            <div className="relative h-[250px] md:h-full w-full">
              <Image
                src="/services/why.webp"
                alt="Engineering Polymer Quality"
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
