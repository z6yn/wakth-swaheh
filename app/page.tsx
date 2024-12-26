'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="flex-grow flex flex-col justify-center items-center bg-black text-white p-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">Wakth Swaheh</h1>
        <p className="font-inter text-lg md:text-xl mb-8">Timeless Elegance, Unparalleled Craftsmanship</p>
        <Link
          href="/about"
          className="inline-block bg-white text-black font-inter text-sm uppercase tracking-wider py-3 px-8 border border-white hover:bg-black hover:text-white transition-colors duration-300"
        >
          Discover Our Collection
        </Link>
      </motion.div>
      <div className="mt-12 flex space-x-6">
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors">
          <FaTwitter size={24} />
        </a>
      </div>
    </main>
  )
}

