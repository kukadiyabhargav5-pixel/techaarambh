"use client";

import React, { useRef, useEffect } from "react";

export default function PlexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 120;
    const connectionDistance = 160;
    const mouseInfluenceDistance = 250;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      layer: number; // 0, 1, or 2 for depth
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 0);
        this.y = Math.random() * (canvas?.height || 0);
        this.layer = Math.floor(Math.random() * 3);
        
        // Parallax speeds: back layers move slower
        const speedScale = (this.layer + 1) / 3;
        this.vx = (Math.random() - 0.5) * 1.2 * speedScale;
        this.vy = (Math.random() - 0.5) * 1.2 * speedScale;
        
        // Sizes based on layer
        this.size = (this.layer + 1) * 0.8;
        
        // Colors: Cyan, Blue, Violet
        const colors = ["rgba(34, 211, 238, 1)", "rgba(37, 99, 235, 1)", "rgba(139, 92, 246, 1)"];
        this.color = colors[this.layer];
      }

      update() {
        if (!canvas) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -100) this.x = canvas.width + 100;
        if (this.x > canvas.width + 100) this.x = -100;
        if (this.y < -100) this.y = canvas.height + 100;
        if (this.y > canvas.height + 100) this.y = -100;
      }

      draw() {
        if (!ctx) return;
        const opacity = (this.layer + 1) / 4;
        
        // Node Glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color.replace("1)", `${opacity})`);
        ctx.fill();
        
        ctx.shadowBlur = 0; // Reset for performance
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only connect if they are close and in similar/adjacent layers
          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.4;
            
            // Gradient lines
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y, 
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, particles[i].color.replace("1)", `${opacity})`));
            gradient.addColorStop(1, particles[j].color.replace("1)", `${opacity})`));
            
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5 + (particles[i].layer * 0.3);
            ctx.stroke();
          }
        }
        
        // Mouse Energy Interaction
        const dmx = mouseRef.current.x - particles[i].x;
        const dmy = mouseRef.current.y - particles[i].y;
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy);
        
        if (mouseDist < connectionDistance) {
          const opacity = (1 - mouseDist / connectionDistance) * 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`; // White energy thread
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: "transparent" }}
    />
  );
}
