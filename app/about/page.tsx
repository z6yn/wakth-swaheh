'use client'
import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <main className="flex-grow bg-white text-black min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury watch"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-bold">Our Story</h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">The Wakth Swaheh Legacy</h2>
          <p className="font-inter text-lg mb-6">
            Founded in the heart of luxury watchmaking, Wakth Swaheh has been crafting exquisite timepieces for discerning collectors since 1920. Our commitment to precision, elegance, and innovation has made us a beacon of horological excellence.
          </p>
          <p className="font-inter text-lg mb-6">
            Each Wakth Swaheh watch is a masterpiece, blending traditional craftsmanship with cutting-edge technology. Our artisans spend countless hours perfecting every detail, ensuring that each timepiece is not just a tool for measuring time, but a work of art to be cherished for generations.
          </p>
        </div>
      </section>
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Precision</h3>
              <p className="font-inter">We strive for perfection in every movement, every gear, and every second.</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Innovation</h3>
              <p className="font-inter">Pushing the boundaries of watchmaking with groundbreaking technologies and designs.</p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">Elegance</h3>
              <p className="font-inter">Crafting timepieces that are not just functional, but true works of art.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

