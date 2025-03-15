"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo_ws.png"; // Update the path to your logo image

const Loading = ({
  setLoading,
}: {
  setLoading: (loading: boolean) => void;
}) => {
  useEffect(() => {
    const handleComplete = () => setLoading(false);
    handleComplete(); // Simulate loading complete for demonstration

    return () => {
      // Cleanup if necessary
    };
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white text-black z-50">
      <div className="text-center">
        <Image
          src={logo}
          alt="Loading Logo"
          width={100}
          height={100}
          className="animate-pulse"
        />
      </div>
    </div>
  );
};

export default Loading;
