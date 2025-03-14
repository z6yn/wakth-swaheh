"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import type { Watch } from "../types/watch";

interface WatchModalProps {
  watch: Watch;
  onClose: () => void;
}

const ImageModal = ({
  imageSrc,
  onClose,
}: {
  imageSrc: string;
  onClose: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 20 }}
      className="bg-white rounded-lg p-6 max-w-3xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative h-96">
        <Image
          src={imageSrc}
          alt="Full Image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <button
        onClick={onClose}
        className="mt-4 text-gray-700 hover:text-black transition-colors duration-300"
      >
        Close
      </button>
    </motion.div>
  </motion.div>
);

export default function WatchModal({ watch, onClose }: WatchModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello, I'm interested in purchasing the ${watch.brand} ${watch.model}. Could you please provide me with more information?`
    );
    window.open(`https://wa.me/+971508099722?text=${message}`, "_blank");
  };

  const handleViewImageClick = () => {
    setIsImageModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white rounded-lg p-6 max-w-fit w-fit"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-64 mb-4">
            <Image
              src={watch.image || "/placeholder.svg"}
              alt={`${watch.brand} ${watch.model}`}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-black text-2xl font-inter font-bold mb-2">
            {watch.brand} {watch.model}
          </h2>
          <p className="text-gray-700 mb-2">{watch.description}</p>
          <p className="text-2xl text-black font-bold mb-4">
            AED {watch.actualRate ? watch.actualRate.toFixed(2) : "N/A"}
          </p>
          <div className="flex items-center mb-4">
            <label htmlFor="quantity" className="mr-2 text-black">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="bg-gray-600 text-white px-2 py-1 rounded w-16"
            />
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-black text-white px-4 py-2 rounded-full w-full hover:bg-green-200  hover:text-black transition-colors duration-300 mb-4"
          >
            Inquire on WhatsApp
          </button>
          {
            <button
              onClick={handleViewImageClick}
              className="bg-black text-white px-4 py-2 rounded-full w-full hover:bg-blue-300 hover:text-black  transition-colors duration-300 mb-4"
            >
              View Image
            </button>
          }
          <button
            onClick={onClose}
            className="text-black hover:text-gray-300 transition-colors duration-300"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
      {isImageModalOpen && (
        <ImageModal
          imageSrc={watch.image || "/placeholder.svg"}
          onClose={() => setIsImageModalOpen(false)}
        />
      )}
    </>
  );
}
