"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HDPEServicePage() {
  const aboutContent = `
High Density Polyethylene (HDPE) granules are engineered for superior durability, strength, and performance across demanding industrial applications.

Our HDPE granules are manufactured using advanced processing technology to ensure exceptional consistency, moisture resistance, and chemical stability. These granules are widely used in blow molding, pipe manufacturing, packaging solutions, industrial containers, and infrastructure applications.

We also provide customized HDPE granules based on client-specific industrial requirements and performance standards.
`;

  const overviewContent = `
HDPE granules are among the most widely used thermoplastic materials in modern manufacturing. Their high density and linear molecular structure provide enhanced tensile strength, better chemical resistance, and excellent durability compared to many conventional polymers.

Available in multiple grades, shades, and technical specifications, these granules are trusted across commercial and industrial sectors for producing robust plastic products.

The material offers:

• High mechanical strength  
• Flame and oxidation resistance  
• Excellent processability  
• Non-toxic and safe composition  
• Easy transportation and storage  
• Custom manufacturing flexibility

Because of their compact molecular arrangement, HDPE granules deliver superior intermolecular force, making them highly effective for applications requiring long-term structural reliability.
`;

  const chooseContent = `
Our HDPE granules are produced from carefully selected raw materials and recycled polymer sources to deliver unmatched quality and performance.

We focus on:

• Strict quality control at every production stage  
• Cost-effective industrial-grade solutions  
• Impurity-free and odorless granules  
• Reliable density and free-flow characteristics  
• Fast bulk supply capabilities  
• Custom grade manufacturing

As one of India's trusted HDPE granule manufacturers and suppliers, we serve businesses looking for dependable material solutions for industrial-scale production.
`;

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* Background */}
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
              src="/services/hdpeBg.jpg"
              alt="HDPE Granules"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 px-4">
          <h1 className="text-5xl font-bold mb-6">HDPE Plastic Granules</h1>

          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Premium manufacturers and suppliers of industrial-grade HDPE
            granules engineered for durability, consistency, and high
            performance applications.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#588157] rounded-xl"
          >
            Contact Us <ArrowRight size={18} />
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#344e41]">
                About HDPE Granules
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {aboutContent}
              </p>
            </div>

            {/* IMAGE (inside same card) */}
            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/services/hdpe.jpg"
                alt="HDPE Granules"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* INDUSTRIAL OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/60 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-[#588157]/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#344e41]">
            Industrial Overview of HDPE Granules
          </h2>

          {/* GRID FIX */}
          <div className="grid md:grid-cols-[1fr_420px] gap-6 items-start">
            {/* TEXT */}
            <div>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {overviewContent}
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative w-full h-64 md:h-full min-h-[220px]">
              <Image
                src="/services/production.jpg"
                alt="HDPE Granules Industrial Overview"
                fill
                className="rounded-xl object-cover shadow-md"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-[#588157]/10 border border-[#588157]/20 rounded-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 items-center">
            {/* IMAGE */}
            <div className="relative h-[250px] md:h-full w-full">
              <Image
                src="/whyy.webp"
                alt="HDPE Quality"
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-[#344e41]">
                Why Choose Our HDPE Granules
              </h2>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {chooseContent}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
