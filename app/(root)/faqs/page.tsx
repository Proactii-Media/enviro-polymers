"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const faqs = [
    {
      question: "What types of waste do you manage?",
      answer:
        "We manage various types of waste including hazardous waste, plastic waste, industrial waste, e-waste, organic waste, rubber scrap, and wooden scrap. We also provide extended producer responsibility services and support circular economy initiatives.",
      category: "Services",
    },
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply contact us through our contact form or call us directly. Our team will assess your needs and provide a customized waste management solution for your business.",
      category: "Getting Started",
    },
    {
      question: "Are your services compliant with environmental regulations?",
      answer:
        "Yes, all our services are fully compliant with local and national environmental regulations.",
      category: "Compliance",
    },
    {
      question: "Do you provide services for residential customers?",
      answer: "Our primary focus is on businesses and industrial clients.",
      category: "Services",
    },
    {
      question: "What is Extended Producer Responsibility (EPR)?",
      answer:
        "Extended Producer Responsibility is an environmental policy approach where producers are responsible for post-consumer products.",
      category: "Compliance",
    },
    {
      question: "Do You Also Collect Waste From The Household?",
      answer: "No, currently we are limited to bulk waste generators only.",
      category: "Services",
    },
    {
      question: "How do you serve the larger cause of waste management?",
      answer:
        "We ensure safe recycling and create awareness about waste segregation through IEC activities.",
      category: "About Us",
    },
    {
      question:
        "Do you accept online manifest for collection of hazardous waste?",
      answer: "Yes, we accept online manifest.",
      category: "Operations",
    },
    {
      question:
        "Do you use any technology to track and monitor waste movement?",
      answer: "Yes, we use our own ERP system to track everything.",
      category: "Operations",
    },
    {
      question: "Are your vehicles GPS enabled?",
      answer: "Yes, all vehicles are GPS enabled and AIS-140 certified.",
      category: "Operations",
    },
    {
      question: "Do you also help in meeting our EPR goals?",
      answer: "Yes, we help brands meet their EPR goals.",
      category: "Compliance",
    },
    {
      question:
        "Do you have PWM registration certificate for plastic recycling?",
      answer: "Yes, we are PCB-approved plastic waste recyclers.",
      category: "Compliance",
    },
    {
      question: "Are you a recycler or a scrap trader?",
      answer: "We are a GPCB authorized recycler ensuring 100% recycling.",
      category: "About Us",
    },
    {
      question: `Why should I choose SV Green India?`,
      answer:
        "For compliance, service quality and environmental responsibility.",
      category: "About Us",
    },
    {
      question: "Which locations do you serve?",
      answer:
        "We serve Gujarat, Rajasthan, Maharashtra and major industrial areas.",
      category: "Services",
    },
    {
      question: "Do you buy all types of industrial waste?",
      answer:
        "Yes, we buy all recyclable industrial waste including plastic, metal, e-waste, etc.",
      category: "Services",
    },
  ];

  const categories = ["All", ...new Set(faqs.map((f) => f.category))];

  const filteredFAQs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden">
      {/* BACKGROUND SAME AS CLIENT PAGE */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7f4] via-[#e6f3f0] to-[#dceef0]" />
      </div>

      {/* HERO WITH ZOOM EFFECT */}
      <section className="relative py-28 text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute inset-0"
          >
            <Image src="/faqImg.jpg" alt="FAQ" fill className="object-cover" />
          </motion.div>

          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/90">
            Everything you need to know about our services
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <div className="flex flex-wrap justify-center gap-3 py-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 rounded-full font-semibold ${
              activeCategory === cat
                ? "bg-[#588157] text-white"
                : "border border-[#588157] text-[#588157]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-4 pb-20">
        {filteredFAQs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            className="mb-4 rounded-xl overflow-hidden shadow-md bg-white"
          >
            {/* QUESTION */}
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-semibold">{faq.question}</span>
              <ChevronDown
                className={`transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* ANSWER */}
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-5 pb-5 text-gray-600"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#588157] text-white rounded-xl"
        >
          Contact Us <ArrowRight />
        </Link>
      </section>
    </div>
  );
}
