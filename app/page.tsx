"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main
      className="flex-grow flex flex-col justify-center items-center text-black
     p-2 min-h-screen "
    >
      {/* <main className="flex-grow flex flex-col justify-center items-center text-white */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-2">
          WAKTH SWAHEH
        </h1>
        <p className="font-inter text-lg md:text-xl mb-8">
          Timeless Elegance, Unparalleled Craftsmanship.
        </p>
        <Link
          href="/collections"
          className="inline-block bg-black text-white first-letter:font-inter text-sm uppercase tracking-wider py-3 px-8 border border-transparent hover:border-black hover:bg-white hover:text-black transition-colors duration-300"
          //className="inline-block bg-white text-black first-letter:font-inter text-sm uppercase tracking-wider py-3 px-8 border border-transparent hover:border-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          Explore Our Collection
        </Link>
      </motion.div>
      <div className="mt-12 flex space-x-6">
        <a
          href="https://www.instagram.com/wakthswaheh"
          className="text-black hover:text-gray-300 transition-colors"
          //className="text-white hover:text-gray-300 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="/coming-soon"
          className="text-black hover:text-gray-300 transition-colors"
          //className="text-white hover:text-gray-300 transition-colors"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </main>
  );
}
