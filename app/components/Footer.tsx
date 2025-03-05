"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/collections", label: "Collections" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-black bg-opacity-90 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
            <p>Email: wakthswaheh@gmail.com</p>
            <p>Phone: +971 50 809 9722</p>
            <p>Address: Al Qouz, Dubai, United Arab Emirates</p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-center">
          <p>&copy; 2025 Wakth Swaheh. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Powered by{" "}
            <a
              href="https://z6yn.github.io/zay"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              ZayTech.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
