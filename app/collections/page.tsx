"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import WatchModal from "../components/WatchModal";
import type { Watch } from "../types/watch";

const watches: Watch[] = [
  {
    id: 1,
    brand: "BLADE",
    model: "Verve White 3564G5SUN",
    name: "BLADE 3564G5SUN",
    description: "CHRONOGRAPH MEN'S WATCH",
    actualRate: 525.0,
    image: "/assets/watches/3564G5SUN.png",
  },
  {
    id: 2,
    brand: "BLADE",
    model: "Bare Blue 3613G1SBO",
    name: "BLADE 3613G1SBO",
    description: "MEN'S 43MM SS MEN'S WATCH",
    actualRate: 560.0,
    image: "/assets/watches/3613G1SBO.png",
  },
  {
    id: 3,
    brand: "BLADE",
    model: "FORTE SS MONO 3646G2SUS",
    name: "BLADE 3646G2SUS",
    description: "MULTIFUNCTION MEN'S WATCH",
    actualRate: 845.0,
    image: "/assets/watches/3646G2SUS.png",
  },
  {
    id: 4,
    brand: "CASIO",
    model: "F-91W",
    name: "CASIO F-91W",
    description: "Classic Digital Watch",
    actualRate: 89.0,
    image: "/assets/watches/CasioF91W.png",
  },
  {
    id: 5,
    brand: "CASIO",
    model: "WS-1600H-1AV",
    name: "WS-1600H-1AV",
    description: "Men's Digital Watch",
    actualRate: 125.0,
    image: "/assets/watches/Casio1600H.png",
  },
  {
    id: 6,
    brand: "CASIO",
    model: "AE-1200WHL-5AV",
    name: "AE-1200WHL-5AV",
    description: "Men's Digital Watch",
    actualRate: 285.0,
    image: "/assets/watches/Casio1200WHL.png",
  },
];

export default function CollectionsPage() {
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);

  return (
    <main className="flex-grow text-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12"
      >
        Our Collections
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {watches.map((watch) => (
          <motion.div
            key={watch.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-2xl"
            onClick={() => setSelectedWatch(watch)}
          >
            <div className="relative h-48">
              <Image
                src={watch.image || "/placeholder.svg"}
                alt={`${watch.brand} ${watch.model}`}
                layout="fill"
                objectFit="contain"
                className="transition-transform duration-300 transform hover:scale-110"
                priority={false}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-inter font-semibold mb-2 text-red-800">
                {watch.brand} {watch.model}
              </h2>
              <p className="text-gray-600 mb-4">{watch.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 line-through">
                  AED {watch.actualRate ? watch.actualRate.toFixed(2) : "N/A"}
                </p>
                <p className="text-black font-bold text-lg">
                  AED{" "}
                  {watch.actualRate
                    ? (watch.actualRate * 0.8).toFixed(2)
                    : "N/A"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedWatch && (
        <WatchModal
          watch={selectedWatch}
          onClose={() => setSelectedWatch(null)}
        />
      )}
      <div className="text-center mt-12">
        <a
          href="https://wa.me/c/971508099722"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 text-white py-3 px-6 rounded-full hover:bg-green-700 transition-colors duration-300"
        >
          View Our WhatsApp Catalog
        </a>
      </div>
    </main>
  );
}
