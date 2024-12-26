import "./globals.css";
import React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackgroundAnimation from "./components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Wakth Swaheh - Premium Quality Watches",
  description:
    "Discover exquisite timepieces at Wakth Swaheh, your premier destination for watches.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-black text-white flex flex-col min-h-screen`}
      >
        <BackgroundAnimation />
        <Header />
        <div className="flex-grow pt-16">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
