"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltIntensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  tiltIntensity = 15,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for X and Y position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Mouse position inside the card (for the flare/glow)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [tiltIntensity, -tiltIntensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-tiltIntensity, tiltIntensity]), springConfig);

  // Spring for the glare/flare effect
  const glareX = useSpring(mouseX, springConfig);
  const glareY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
    
    // Update glare position
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    mouseX.set(-100); // Hide glare
    mouseY.set(-100);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      {/* 3D Inner Content */}
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="w-full h-full relative z-10"
      >
        {children}
      </div>

      {/* Dynamic Glare/Flare Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(400px circle at ${gx}px ${gy}px, rgba(255,255,255,0.15), transparent 70%)`
          ),
        }}
      />
      
      {/* Card Shadow/Glow (Bottom layer) */}
      <div className="absolute inset-x-4 -bottom-2 h-10 bg-blue-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
