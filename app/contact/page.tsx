"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaAmazon,
  FaEnvelope,
} from "react-icons/fa";
import Link from "next/link";
import MapSection from "../components/MapSection";

const ContactPage = () => {
  const socialLinks = [
    { icon: FaAmazon, href: "/coming-soon", label: "Amazon" },
    { icon: FaFacebook, href: "/coming-soon", label: "Facebook" },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/wakthswaheh",
      label: "Instagram",
    },
    {
      icon: FaEnvelope,
      href: "mailto:wakthswaheh@gmail.com",
      label: "Mail",
    },
  ];

  return (
    <main className="flex-grow min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-12"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center"
            >
              <Link
                href={link.href}
                className="flex flex-col items-center justify-center w-24 h-24 p-5 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50"
              >
                {link.icon &&
                  React.createElement(link.icon, {
                    className: "w-10 h-10 mb-3",
                  })}
                <span className="text-sm">{link.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://wa.me/+971508099722"
              className="inline-flex items-center justify-center bg-green-500 text-white py-3 px-8 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <FaWhatsapp className="mr-2 text-xl" />
              <span>WhatsApp</span>
            </Link>
          </motion.div>
        </div>

        <MapSection />
      </motion.div>
    </main>
  );
};

export default ContactPage;
