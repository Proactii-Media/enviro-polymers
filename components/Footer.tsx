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
    { label: "PP Granules", href: "/services/pp-granules" },
    { label: "Clients", href: "/clients" },
    { label: "Industries", href: "/#industries" },
    { label: "FAQs", href: "/faqs" },
  ];

  const services = [
    { label: "PP Granules Manufacturing", href: "/services/pp-granules" },
    { label: "Plastic Raw Material Supply", href: "/services/raw-material" },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (973) 777-6666",
      href: "tel:+919737776666",
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
        "Unit-1, Plot no: 14, Evershine Industrial Park Vapi Nashik Road, Karwad Vapi, India",
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
              "linear-gradient(135deg, #344e41 0%, #3a5a40 50%, #588157 100%)",
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
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/Enviro polymers-01.svg"
                alt="Enviro Polymers"
                width={44}
                height={44}
                className="h-11 w-11 rounded-lg bg-amber-50 p-1.5 object-contain"
              />
              <span className="font-bold text-lg text-amber-50">
                Enviro Polymers
              </span>
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

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 text-amber-50">Services</h3>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="text-amber-50/70">
                    {service.label}
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
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
