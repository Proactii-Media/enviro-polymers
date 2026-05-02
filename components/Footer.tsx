"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "Industries", href: "/industries" },
    { label: "FAQs", href: "/faqs" },
  ];

  const products = [
    { label: "PP Granules", href: "/services/pp-granules" },
    { label: "Plastic Raw Material", href: "/services/raw-material" },
    { label: "HDPE Granules", href: "/services/hdpe-granules" },
    { label: "LLDPE Granules", href: "/services/lldpe-granules" },
    { label: "LDPE Granules", href: "/services/ldpe-granules" },
    { label: "Engineering Polymers", href: "/services/engineering-polymers" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9070205050",
      href: "tel:+919070205050",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98257 30001",
      href: "tel:+919825730001",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@enviropolymers.com",
      href: "mailto:info@enviropolymers.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value:
        "Survey No 542/1, Plot No 32, Karvad Road, Karvad Vapi, Valsad- 396191, Gujarat",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <footer className="relative overflow-hidden" id="main-footer">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #344e41 0%, #3a5a40 25%, #189944 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <Link href="/" className="flex items-center mb-4">
              <div
                className="h-28 w-28 p-2 rounded-xl backdrop-blur-md border shadow-md flex items-center justify-center overflow-hidden"
                style={{
                  background: "#ffffff",
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
                <Image
                  src="/enviro-polymers-01.svg"
                  alt="Enviro Polymers"
                  width={140}
                  height={140}
                  className="object-contain scale-110"
                />
              </div>
            </Link>

            <p className="text-sm text-amber-50/80 mb-4">
              Sustainable plastic solutions for industries worldwide.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-amber-50">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-amber-50/70">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-amber-50">Products</h3>
            <ul className="space-y-2">
              {products.map((product, idx) => (
                <li key={idx}>
                  <Link href={product.href} className="text-amber-50/70">
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-amber-50">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <li key={idx} className="flex gap-2 text-amber-50/70">
                    <Icon size={16} />
                    <span>{info.value}</span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px my-8 bg-white/10" />

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between text-sm text-amber-50/70"
        >
          <p>&copy; {currentYear} Enviro Polymers. All rights reserved.</p>
          <div className="flex gap-6">
            <p>
              Driving eco-friendly recycling with safety and compliance at the
              core.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
