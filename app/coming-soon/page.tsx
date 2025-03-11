"use client";
import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="flex-grow flex items-center justify-center min-h-screen text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
          Coming Soon!!
        </h1>
        <p className="text-lg md:text-xl mb-8">
          We're working on something exciting! This feature will be available
          soon.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-black font-inter text-sm uppercase tracking-wider py-3 px-8 border border-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </main>
  );
}
