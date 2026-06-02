"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect touch/mobile devices
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(isTouch);
  }, []);

  // Motion values for high performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the trailing effect
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isInteractive = 
      target.tagName === 'A' || 
      target.tagName === 'BUTTON' || 
      target.closest('a') || 
      target.closest('button') ||
      target.getAttribute('role') === 'button' ||
      target.classList.contains('cursor-pointer');
    
    setIsHovering(!!isInteractive);
  }, []);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);
    document.body.addEventListener("mouseleave", () => setIsVisible(false));
    document.body.addEventListener("mouseenter", () => setIsVisible(true));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  if (!mounted || isTouchDevice) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300 ${isHovering ? "cursor-hover" : ""}`}>
      {/* Main Dot */}
      <motion.div
        className={`custom-cursor border-2 ${
          isHovering 
            ? "bg-blue-600 dark:bg-white border-white dark:border-blue-500 scale-150 shadow-xl" 
            : "bg-blue-600 dark:bg-blue-400 border-transparent"
        }`}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Trailing Ring */}
      <motion.div
        className={`cursor-follower border-2 ${
          isHovering 
            ? "border-blue-500/80 dark:border-white/80 scale-125 bg-blue-500/10 dark:bg-white/10" 
            : "border-blue-600/60 dark:border-blue-400/60"
        }`}
        style={{
          x: followerX,
          y: followerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
