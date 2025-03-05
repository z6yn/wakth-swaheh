"use client";
import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const branches = [
  {
    location: "International City",
    stores: [
      {
        name: "Branch 1",
        timing: "Sat to Fri: 08:00 – 01:30",
        phone: "+971 50 809 9722",
        mapLink:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226.31074046650454!2d55.40906047006659!3d25.156985600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6151706409c7%3A0xa96917fa0118dd82!2sShaklan%20Hypermarket%20Br!5e0!3m2!1sen!2sae!4v1706561987654!5m2!1sen!2sae",
      },
      {
        name: "Branch 2",
        timing:
          "Sat to Thurs: 08:30 – 00:00, \n Fri: 08:30 – 12:30, 14:00 – 00:00",
        phone: "+971 55 387 0232",
        mapLink:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5248668205547!2d55.40842871744384!3d25.157013800000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61f514d99a6b%3A0x7942bed356ca4e8c!2sWAKTH%20SWAHEH%20WATCHES%20(S2)!5e0!3m2!1sen!2sae!4v1706561533744!5m2!1sen!2sae",
      },
    ],
  },
  {
    location: "Al Qouz",
    stores: [
      {
        name: "Branch 3",
        timing:
          "Sat to Thurs: 08:30 – 23:30, \nFri: 08:30 – 12:30, 14:30 – 23:30",
        phone: "+971 58 553 5848",
        mapLink:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8876016677584!2d55.24074907744095!3d25.132611000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69f7dbabbd43%3A0xc99eaa907fbc9635!2sWAKTH%20SWAHEH%20WATCHES%20(S3)!5e0!3m2!1sen!2sae!4v1706562045123!5m2!1sen!2sae",
      },
      {
        name: "Branch 4",
        timing:
          "Sat to Thurs: 08:30 – 23:30, \nFri: 08:30 – 12:30, 14:00 – 23:30",
        phone: "+971 50 809 9722",
        mapLink:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.8505068952387!2d55.24733827744096!3d25.132848000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f690020ef10ff%3A0xc022ef88cd2b2b09!2sWAKTH%20SWAHEH%20WATCHES%20(S4)!5e0!3m2!1sen!2sae!4v1706562087654!5m2!1sen!2sae",
      },
    ],
  },
];

const MapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Our Branches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {branches.map((branch) => (
          <motion.div
            key={branch.location}
            className="bg-white bg-opacity-10 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-center">
              {branch.location}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {branch.stores.map((store) => (
                <motion.button
                  key={store.name}
                  onClick={() => {
                    setSelectedLocation(branch.location);
                    setSelectedStore(store.name);
                  }}
                  className={`w-full p-4 rounded-lg transition-all duration-300 text-left ${
                    selectedStore === store.name
                      ? "bg-white text-black"
                      : "bg-white bg-opacity-10 text-white hover:bg-opacity-20"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center">
                    <h4 className="text-lg font-semibold mb-2 text-center">
                      {store.name}
                    </h4>
                    <AnimatePresence>
                      {selectedStore === store.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-sm space-y-2 text-center w-full"
                        >
                          <p>
                            <span className="font-semibold">Timing:</span>{" "}
                            {store.timing}
                          </p>
                          <p>
                            <span className="font-semibold">Phone:</span>{" "}
                            {store.phone}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedLocation && selectedStore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-64 overflow-hidden rounded-lg"
          >
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={
                branches
                  .find((branch) => branch.location === selectedLocation)
                  ?.stores.find((store) => store.name === selectedStore)
                  ?.mapLink
              }
              allowFullScreen
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapSection;
