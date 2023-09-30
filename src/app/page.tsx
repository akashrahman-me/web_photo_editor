import Navbar from "@/components/global/Navbar";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="h-screen w-screen flex">
      <Navbar />
      <div aria-label="main" className="w-[calc(100vw-20rem)]">
        <div aria-label="header" className="px-6 py-8 shadow-sm">
          <h2 className="text-4xl font-black uppercase">
            Photo Cropping Tools
          </h2>
          <p>A pixel perfect image cropping way.</p>
        </div>
        <div className="px-6">
          <canvas id="cropping"></canvas>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
