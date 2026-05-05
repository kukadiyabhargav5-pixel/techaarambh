"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CyberGrid() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse position for tilting the plane
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [65, 55]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 perspective-1000">
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformOrigin: "center 80%",
        }}
        className="absolute inset-0 preserve-3d vanishing-point"
      >
        {/* The scrolling grid plane */}
        <div 
          className="absolute inset-[-100%] bg-grid animate-move-grid"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        
        {/* Glow at the horizon */}
        <div className="absolute top-[30%] left-0 right-0 h-[500px] bg-blue-500/25 blur-[150px] rounded-full" />
      </motion.div>
    </div>
  );
}
