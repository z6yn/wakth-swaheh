import { FaWhatsapp } from 'react-icons/fa'
import React from 'react'
const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+971589901394"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg border border-black hover:bg-black hover:text-white transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  )
}

export default WhatsAppButton

