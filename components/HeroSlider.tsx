"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/aboutt.jpg"
        alt="About Enviro Polymers"
        fill
        priority
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          {/* HEADING */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About Enviro Polymers
          </h1>

          {/* CONTENT */}
          <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
            Enviro Polymers is a leading supplier of high-quality plastic raw
            materials and recycled polymers, serving industries since 2009 and
            operating under the Enviro Polymers brand from 2026.
            <br />
            <br />
            We specialize in PP granules, HDPE granules, LLDPE granules, and
            plastic scrap, offering reliable and cost-effective solutions for
            manufacturers across various sectors.
            <br />
            <br />
            With a strong commitment to sustainability, we focus on converting
            plastic waste into reusable materials, helping businesses reduce
            costs while contributing to environmental responsibility.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
