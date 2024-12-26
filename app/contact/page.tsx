"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaAmazon,
} from "react-icons/fa";

import Link from "next/link";
import MapSection from "../components/MapSection";

const ContactPage = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaAmazon, href: "#", label: "Amazon Store" },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" />
        </svg>
      ),
      href: "#",
      label: "Noon Store",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="flex flex-col items-center justify-center p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300"
              >
                {link.icon()}
                <span className="text-sm">{link.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="https://wa.me/+971589901394"
              className="inline-block bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition-colors duration-300"
            >
              <icon : FaWhatsapp className="inline-block mr-2" />
              Contact us on WhatsApp
            </Link>
          </motion.div>
        </div>

        <MapSection />
      </motion.div>
    </main>
  );
};

export default ContactPage;
