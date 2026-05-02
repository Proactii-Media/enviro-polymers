"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "Industries", href: "/industries" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    {
      id: "pp-granules",
      title: "PP Granules",
    },
    {
      id: "raw-material",
      title: "Plastic Raw Material",
    },
    {
      id: "hdpe-granules",
      title: "HDPE Granules ",
    },
    {
      id: "ldpe-granules",
      title: "LDPE Granules",
    },
    {
      id: "lldpe-granules",
      title: "LLDPE Granules",
    },
    {
      id: "engineering-polymers",
      title: "Engineering Polymers",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const AnimatedUnderline = ({ isActive }: { isActive: boolean }) => (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isActive ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" as const }}
    />
  );

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(255, 255, 255, 1)",
        backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
        borderBottomColor: scrolled
          ? "rgba(209, 213, 219, 0.5)"
          : "rgb(209, 213, 219)",
        borderBottomWidth: "1px",
        boxShadow: scrolled
          ? "0 1px 3px rgba(0, 0, 0, 0.05)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="mx-auto w-full px-3 sm:px-4 md:px-6 lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 min-w-0"
          >
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Image
                  src="/Enviro polymers-01.svg"
                  alt="Enviro Polymers"
                  width={64}
                  height={64}
                  priority
                  className="h-34 w-34 object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center"
          >
            <ul className="flex items-center gap-1">
              {navItems.slice(0, 2).map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 block"
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="relative z-10"
                    >
                      {item.label}
                    </motion.span>
                    <AnimatedUnderline isActive={hoveredItem === item.label} />
                    <motion.div
                      className="absolute inset-0 rounded-md bg-gray-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ zIndex: 0 }}
                    />
                  </Link>
                </motion.li>
              ))}

              {/* Products Dropdown */}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="relative"
                onMouseEnter={() => setHoveredItem("services")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button className="relative px-3 py-2 text-sm font-medium text-gray-700 flex items-center gap-1">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10"
                  >
                    Products
                  </motion.span>
                  <motion.span
                    animate={{ rotate: hoveredItem === "services" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs"
                  >
                    ▼
                  </motion.span>
                  <AnimatedUnderline isActive={hoveredItem === "services"} />
                  <motion.div
                    className="absolute inset-0 rounded-md bg-gray-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ zIndex: 0 }}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredItem === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 z-50"
                    >
                      <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden py-2">
                        <div className="w-80">
                          {services.map((service, idx) => (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ backgroundColor: "#f5f5f5" }}
                            >
                              <Link href={`/services/${service.id}`}>
                                <div className="px-4 py-3 transition-colors duration-150 hover:bg-gray-100">
                                  <h3 className="font-semibold text-sm text-gray-900 line-clamp-1">
                                    {service.title}
                                  </h3>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Clients Link */}
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  href="/clients"
                  className="relative px-3 py-2 text-sm font-medium text-gray-700 block"
                  onMouseEnter={() => setHoveredItem("Clients")}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="relative z-10"
                  >
                    Clients
                  </motion.span>
                  <AnimatedUnderline isActive={hoveredItem === "Clients"} />
                  <motion.div
                    className="absolute inset-0 rounded-md bg-gray-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ zIndex: 0 }}
                  />
                </Link>
              </motion.li>

              {navItems.slice(3).map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.45 + index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 block"
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="relative z-10"
                    >
                      {item.label}
                    </motion.span>
                    <AnimatedUnderline isActive={hoveredItem === item.label} />
                    <motion.div
                      className="absolute inset-0 rounded-md bg-gray-100"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ zIndex: 0 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:hidden flex flex-col gap-1.5 p-2 relative z-40"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0 }}
              className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-900 rounded"
            />
            <motion.div
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-900 rounded"
            />
            <motion.div
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0 }}
              className="w-5 h-0.5 sm:w-6 sm:h-0.5 bg-gray-900 rounded"
            />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40 top-14 sm:top-16 md:top-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 right-0 bg-white shadow-2xl flex flex-col max-h-[calc(100vh-56px)] sm:max-h-[calc(100vh-64px)] md:max-h-[calc(100vh-80px)]"
            >
              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto">
                <ul className="space-y-1 p-3">
                  {/* Home & About */}
                  {navItems.slice(0, 2).map((item, idx) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.span whileHover={{ x: 5 }}>
                          {item.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}

                  {/* Mobile Services Accordion */}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full text-left px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-between"
                    >
                      <span>Products</span>
                      <motion.span
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs shrink-0"
                      >
                        ▼
                      </motion.span>
                    </button>

                    {/* Services Submenu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-1 pl-2 pr-2 py-2"
                        >
                          {services.map((service, idx) => (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <Link
                                href={`/services/${service.id}`}
                                className="flex gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
                                onClick={() => {
                                  setIsServicesOpen(false);
                                  setIsOpen(false);
                                }}
                              >
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-xs text-gray-900 line-clamp-1">
                                    {service.title}
                                  </h3>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {/* Clients */}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                  >
                    <Link
                      href="/clients"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <motion.span whileHover={{ x: 5 }}>Clients</motion.span>
                    </Link>
                  </motion.li>

                  {/* Other Items */}
                  {navItems.slice(3).map((item, idx) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (idx + 2) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.span whileHover={{ x: 5 }}>
                          {item.label}
                        </motion.span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
