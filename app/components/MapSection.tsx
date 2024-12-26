'use client'
import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const branches = [
  { name: 'Dubai Mall', location: '25.197197,55.279378', timing: '10 AM - 10 PM', phone: '+971 4 123 4567' },
  { name: 'Mall of the Emirates', location: '25.118371,55.200651', timing: '10 AM - 10 PM', phone: '+971 4 234 5678' },
  { name: 'City Centre Deira', location: '25.252423,55.330655', timing: '10 AM - 10 PM', phone: '+971 4 345 6789' },
  { name: 'Dubai Marina Mall', location: '25.076831,55.139015', timing: '10 AM - 10 PM', phone: '+971 4 456 7890' },
  { name: 'Ibn Battuta Mall', location: '25.045822,55.120226', timing: '10 AM - 10 PM', phone: '+971 4 567 8901' },
]

const MapSection = () => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Our Branches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {branches.map((branch) => (
          <motion.button
            key={branch.name}
            onClick={() => setSelectedBranch(branch.name === selectedBranch ? null : branch.name)}
            className={`p-4 rounded-lg transition-all duration-300 ${
              selectedBranch === branch.name
                ? 'bg-white text-black'
                : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-lg font-semibold mb-2">{branch.name}</h3>
            <AnimatePresence>
              {selectedBranch === branch.name && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm"
                >
                  <p>Timing: {branch.timing}</p>
                  <p>Phone: {branch.phone}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {selectedBranch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-64 overflow-hidden rounded-lg"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${
                branches.find((b) => b.name === selectedBranch)?.location
              }&zoom=15`}
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MapSection

