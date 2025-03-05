"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import bgImage from "../assets/bg.png";

export default function About() {
  const ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a loading placeholder
  }

  return (
    <main className="flex-grow bg-white text-black min-h-screen">
      <section className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={bgImage || "/placeholder.svg"}
            alt="Luxury watch background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="font-playfair text-4xl md:text-6xl text-white font-bold">
            Our Story
          </h1>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            The Wakth Swaheh Legacy
          </h2>
          <p className="font-inter text-lg mb-6">
            At Wakth Swaheh, we are passionate about curating timepieces that
            combine beauty, quality, and timeless design. While we are a young
            brand, our mission is to offer watches that bring elegance and joy
            to your everyday moments.
          </p>
          <p className="font-inter text-lg mb-6">
            We are dedicated to providing an exceptional shopping experience,
            carefully selecting pieces that you will cherish for years to come.
            Thank you for being part of our journey—we look forward to helping
            you create timeless moments.
          </p>
        </div>
      </section>
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Values
          </h2>
          <br></br>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Expertise
              </h3>
              <p className="font-inter">
                We offer in-depth knowledge and guidance to help you find the
                perfect timepiece.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Authenticity
              </h3>
              <p className="font-inter">
                We guarantee the genuineness of every watch in our carefully
                curated collection.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Customer Service
              </h3>
              <p className="font-inter">
                We're committed to providing an exceptional shopping experience
                for every client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
