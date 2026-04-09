"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const clients = [
    {
      id: 1,
      name: "Sun Pharma",
      logo: "/clients/sunpharma.png",
      category: "pharmaceutical",
    },
    {
      id: 2,
      name: "Zydus",
      logo: "/clients/zyduslife.png",
      category: "pharmaceutical",
    },
    {
      id: 3,
      name: "Torrent Pharma",
      logo: "/clients/torrentpharma.png",
      category: "pharmaceutical",
    },
    {
      id: 4,
      name: "Cadila",
      logo: "/clients/cadilapharma.png",
      category: "pharmaceutical",
    },
    {
      id: 5,
      name: "Amul",
      logo: "/clients/amul.png",
      category: "dairy",
    },
    {
      id: 6,
      name: "Arvind",
      logo: "/clients/arvind.png",
      category: "textile",
    },
    {
      id: 7,
      name: "Aarti Industries",
      logo: "/clients/aartiindustries.png",
      category: "manufacturing",
    },
    {
      id: 8,
      name: "Nirma",
      logo: "/clients/nirma.png",
      category: "fmcg",
    },
    {
      id: 9,
      name: "UPL",
      logo: "/clients/upl.png",
      category: "agricultural",
    },
    {
      id: 10,
      name: "Alembic",
      logo: "/clients/alembicpharmaceuticals.png",
      category: "pharmaceutical",
    },
  ];

  const categories = [
    { id: "all", label: "All", icon: "🌍" },
    { id: "pharmaceutical", label: "Pharma", icon: "💊" },
    { id: "dairy", label: "Dairy", icon: "🥛" },
    { id: "textile", label: "Textile", icon: "👕" },
    { id: "manufacturing", label: "Mfg", icon: "🏭" },
    { id: "fmcg", label: "FMCG", icon: "🧼" },
    { id: "agricultural", label: "Agri", icon: "🌾" },
  ];

  const filteredClients =
    activeCategory === "all"
      ? clients
      : clients.filter((c) => c.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f4] via-[#e6f3f0] to-[#dceef0]" />

        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(88,129,87,0.08), rgba(163,177,138,0.04))",
              "linear-gradient(225deg, rgba(88,129,87,0.08), rgba(163,177,138,0.04))",
            ],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute inset-0"
        />

        <motion.div
          animate={{ y: [0, 60, 0], x: [0, 40, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute -top-60 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-[70px]"
          style={{
            background:
              "radial-gradient(circle, rgba(88,129,87,0.3), transparent)",
          }}
        />

        <motion.div
          animate={{ y: [0, -60, 0], x: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 26, repeat: Infinity }}
          className="absolute -bottom-80 -left-60 w-[700px] h-[700px] rounded-full opacity-15 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(88,129,87,0.25), transparent)",
          }}
        />
      </div>

      {/* HERO */}
      <motion.section className="relative py-24 text-center text-white">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute inset-0"
          >
            <Image
              src="/clientsImg.jpg"
              alt="Industrial"
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-6">
            Trusted by <span className="text-[#a3b18a]">Market Leaders</span>
          </h1>
          <p className="mb-8 text-lg">
            Partnering with leading companies across industries
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#588157] rounded-xl"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </motion.section>

      {/* FILTER */}
      <div className="flex flex-wrap justify-center gap-3 py-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-3 rounded-full ${
              activeCategory === cat.id
                ? "bg-[#588157] text-white"
                : "border border-[#588157]/40 hover:border-[#588157]"
            }`}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      {/* CLIENT GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 px-4 pb-20">
        {filteredClients.map((client, idx) => (
          <motion.div
            key={client.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{
              y: -6,
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(88,129,87,0.25)",
            }}
            className="group rounded-xl p-6 flex flex-col items-center justify-center 
            border-2 border-transparent hover:border-[#588157] transition-all"
            style={{
              backgroundColor: "rgba(88,129,87,0.2)",
              minHeight: "140px",
            }}
          >
            <motion.img
              src={client.logo}
              alt={client.name}
              whileHover={{ scale: 1.1 }}
              className="max-h-20 object-contain mb-3"
            />

            <h3 className="text-sm font-bold text-[#344e41] text-center">
              {client.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
