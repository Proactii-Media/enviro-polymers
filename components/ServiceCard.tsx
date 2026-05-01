"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode, useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  index: number;
  link?: string;
  serviceId: string;
}

const ServiceCard = ({
  title,
  description,
  features,
  index,
  serviceId,
}: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut" as const,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.15,
      rotate: 10,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group rounded-xl overflow-hidden border transition-all duration-300 shadow-sm hover:shadow-2xl cursor-pointer h-full"
      style={{
        backgroundColor: isHovered ? "#189944" : "rgba(255, 255, 255, 0.7)",
        borderColor: isHovered ? "#3a5a40" : "rgba(88, 129, 87, 0.2)",
      }}
    >
      {/* Decorative Leaf - Top Right - Always Visible */}
      <motion.div
        className="absolute top-0 right-0 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.4,
        }}
        animate={isHovered ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="leafGradient1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor={
                  isHovered
                    ? "rgba(255, 255, 255, 0.4)"
                    : "rgba(88, 129, 87, 0.3)"
                }
              />
              <stop
                offset="100%"
                stopColor={
                  isHovered
                    ? "rgba(255, 255, 255, 0.1)"
                    : "rgba(88, 129, 87, 0.1)"
                }
              />
            </linearGradient>
          </defs>
          <path
            d="M60 10C75 20, 95 30, 105 55C115 80, 100 100, 75 110C50 120, 30 110, 20 85C10 60, 45 15, 60 10Z"
            fill="url(#leafGradient1)"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.3)" : "rgba(88, 129, 87, 0.25)"
            }
            strokeWidth="1.5"
          />
          <path
            d="M60 15L62 60L60 105"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.25)" : "rgba(88, 129, 87, 0.2)"
            }
            strokeWidth="1"
          />
          <path
            d="M60 35L80 42"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(88, 129, 87, 0.15)"
            }
            strokeWidth="0.8"
          />
          <path
            d="M60 55L85 65"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(88, 129, 87, 0.15)"
            }
            strokeWidth="0.8"
          />
          <path
            d="M60 75L80 88"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(88, 129, 87, 0.15)"
            }
            strokeWidth="0.8"
          />
          <path
            d="M60 35L45 42"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(88, 129, 87, 0.15)"
            }
            strokeWidth="0.8"
          />
          <path
            d="M60 55L40 65"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(88, 129, 87, 0.15)"
            }
            strokeWidth="0.8"
          />
          <path
            d="M60 75L45 88"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(88, 129, 87, 0.15)"
            }
            strokeWidth="0.8"
          />
        </svg>
      </motion.div>

      {/* Decorative Leaf - Bottom Left - Always Visible */}
      <motion.div
        className="absolute bottom-0 left-0 transition-opacity duration-300 transform scale-x-[-1]"
        style={{
          opacity: isHovered ? 1 : 0.3,
        }}
        animate={isHovered ? { rotate: [45, 50, 40, 45] } : { rotate: 45 }}
        transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
      >
        <svg
          width="85"
          height="85"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="leafGradient2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor={
                  isHovered
                    ? "rgba(255, 255, 255, 0.35)"
                    : "rgba(88, 129, 87, 0.25)"
                }
              />
              <stop
                offset="100%"
                stopColor={
                  isHovered
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(88, 129, 87, 0.05)"
                }
              />
            </linearGradient>
          </defs>
          <path
            d="M60 10C75 20, 95 30, 105 55C115 80, 100 100, 75 110C50 120, 30 110, 20 85C10 60, 45 15, 60 10Z"
            fill="url(#leafGradient2)"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.25)" : "rgba(88, 129, 87, 0.2)"
            }
            strokeWidth="1.5"
          />
          <path
            d="M60 15L62 60L60 105"
            stroke={
              isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(88, 129, 87, 0.15)"
            }
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative p-6 z-10 h-full flex flex-col">
        {/* Title */}
        <motion.h3
          className="text-lg font-bold mb-2 transition-all duration-300"
          style={{
            color: isHovered ? "#ffffff" : "#344e41",
          }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="mb-4 leading-relaxed text-xs grow"
          style={{
            color: isHovered ? "#ffffff" : "#556B4F",
          }}
        >
          {description}
        </motion.p>

        {/* Features - Only 2 items */}
        <div className="mb-5 space-y-1">
          {features.slice(0, 2).map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 3 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold transition-all"
                style={{
                  backgroundColor: isHovered ? "#ffffff" : "#588157",
                  color: isHovered ? "#588157" : "#ffffff",
                }}
              >
                ✓
              </motion.span>
              <motion.span
                className="text-xs transition-all duration-300 line-clamp-1"
                style={{
                  color: isHovered ? "#ffffff" : "#556B4F",
                }}
              >
                {feature}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <Link href={`/services/${serviceId}`} className="mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-2.5 rounded-lg font-semibold text-sm transition-all border flex items-center justify-center gap-2"
            style={{
              color: isHovered ? "#1a9a44" : "#ffffff",
              backgroundColor: isHovered
                ? "rgba(255, 255, 255, 0.9)"
                : "#1a9a44",
              borderColor: isHovered ? "rgba(255, 255, 255, 0.5)" : "#1a9a44",
            }}
          >
            Explore
            <motion.span
              animate={{ x: isHovered ? 3 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </Link>
      </div>

      {/* Border animation on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
          zIndex: 1,
        }}
      />
    </motion.div>
  );
};

export default ServiceCard;
