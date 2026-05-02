"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LDPEServicePage() {
  const aboutContent = `
Enviro Polymers offers premium Low Density Polyethylene (LDPE) granules manufactured using high-quality ethylene-based thermoplastic processing.

LDPE is widely known for its flexibility, lightweight structure, and excellent chemical resistance. It is extensively used in producing plastic bags, containers, tubing, laboratory equipment, and packaging materials.

Our granules are developed using modern machinery and controlled processing techniques to ensure consistency, durability, and smooth performance in industrial applications. We also provide customized grades based on client requirements and support bulk supply with timely delivery.
`;

  const overviewContent = `
LDPE granules are one of the most widely used thermoplastics due to their ease of processing and versatility across industries.

Their soft and flexible molecular structure allows them to be easily molded into various shapes, making them ideal for lightweight and adaptable plastic products.

Key features include:

• Long shelf life and storage stability  
• Accurate material composition  
• High resistance to moisture and chemicals  
• Smooth processing and molding capability  
• Lightweight yet durable structure  
• Adaptability to custom molds and designs  

These properties make LDPE an efficient alternative to traditional materials, requiring less energy and time during manufacturing processes.
`;

  const chooseContent = `
At Enviro Polymers, we focus on delivering LDPE granules that meet industrial-grade quality standards and performance expectations.

Our strengths include:

• Advanced manufacturing techniques for consistent quality  
• Reliable bulk supply and on-time delivery  
• Customization based on application requirements  
• Strict quality checks for purity and composition  
• Cost-effective solutions for large-scale industries  
• Trusted by clients across packaging, industrial, and commercial sectors  

We are committed to providing materials that enhance productivity, reduce processing effort, and deliver dependable performance in every application.
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
              src="/services/ldpeImg.jpg"
              alt="LDPE Granules"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-6">LDPE Plastic Granules</h1>

          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Enviro Polymers – delivering flexible, durable, and high-quality
            LDPE granules for industrial and packaging applications.
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
                About LDPE Granules
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutContent}
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/services/ldpee.jpg"
                alt="LDPE Granules"
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
            Industrial Overview of LDPE Granules
          </h2>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* IMAGE (LEFT SIDE) */}
            <div className="relative w-full h-[380px] md:h-[420px] order-1 md:order-none">
              <Image
                src="/services/production.jpg"
                alt="LDPE Granules Industrial Overview"
                fill
                className="rounded-xl object-cover shadow-md"
              />
            </div>

            {/* TEXT (RIGHT SIDE) */}
            <div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {overviewContent}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* WHY CHOOSE */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-[#588157]/10 border border-[#588157]/20 rounded-2xl p-8 overflow-hidden"
        >
          {/* IMAGE RIGHT SIDE */}
          <div className="absolute top-0 right-0 h-full w-[40%] hidden md:block">
            <Image
              src="/services/why.jpg"
              alt="LDPE Quality"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/40" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 md:w-[60%]">
            <h2 className="text-3xl font-bold mb-6 text-[#344e41]">
              Why Choose Enviro Polymers for LDPE
            </h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {chooseContent}
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
