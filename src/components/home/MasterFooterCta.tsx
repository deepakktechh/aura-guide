'use client';
import React, { useEffect, useRef } from 'react';
import { Link } from '@/components/common/CompatLink';
import { ArrowRight, Compass, Linkedin, Instagram, Youtube } from 'lucide-react';

export const MasterFooterCta: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    // Generate globe latitude/longitude dots
    const dots: { x: number; y: number; z: number }[] = [];
    const numLat = 16;
    const numLng = 32;
    const radius = 120;

    for (let i = 0; i <= numLat; i++) {
      const lat = (Math.PI * i) / numLat - Math.PI / 2;
      for (let j = 0; j < numLng; j++) {
        const lng = (2 * Math.PI * j) / numLng;
        const x = radius * Math.cos(lat) * Math.sin(lng);
        const y = radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.cos(lng);
        dots.push({ x, y, z });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      rotation += 0.008;

      // Draw dots
      for (const dot of dots) {
        // Rotate around Y axis
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const rx = dot.x * cosR - dot.z * sinR;
        const rz = dot.x * sinR + dot.z * cosR;

        // Simple perspective projection
        const fov = 300;
        const scale = fov / (fov + rz + 50);
        const px = cx + rx * scale;
        const py = cy + dot.y * scale;

        // Depth opacity
        const alpha = Math.max(0.1, (rz + radius) / (2 * radius));
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.8, 1.8 * scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210, 238, 56, ${alpha * 0.85})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="bg-[#090b0c] text-white pt-20 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Brand Header */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#d2ee38] text-slate-950 flex items-center justify-center font-bold">
            <Compass className="w-3.5 h-3.5 text-slate-950" />
          </div>
          <span className="font-heading font-extrabold text-sm tracking-wider uppercase text-white">
            Aura Guide
          </span>
        </div>

        {/* Main CTA Grid (7 cols text + 5 cols 3D particle globe) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.06]">
              Let's build a<br />
              more accessible world.
            </h2>

            <p className="text-base sm:text-lg text-slate-400 max-w-lg leading-relaxed font-sans">
              We're exploring, learning and building towards a future of inclusive navigation. Join us on this journey.
            </p>

            {/* Buttons matching mockup */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d2ee38] text-slate-950 font-medium text-sm hover:bg-[#c2de2c] active:scale-95 transition-all shadow-[0_0_20px_rgba(210,238,56,0.25)]"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/10 active:scale-95 transition-all"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>

          {/* 3D Glowing Dotted Particle Globe matching mockup */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-[340px] h-[340px] flex items-center justify-center">
              {/* Subtle ambient glow behind globe */}
              <div className="absolute inset-0 bg-[#d2ee38]/10 blur-[90px] rounded-full pointer-events-none" />
              <canvas
                ref={canvasRef}
                width={340}
                height={340}
                className="relative z-10 w-full h-full"
                aria-label="3D rotating digital accessibility globe"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar: Links, Social Icons & Copyright matching mockup */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-sans">
          
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
            <Link to="/prototype" className="hover:text-white transition-colors">Prototype</Link>
            <Link to="/roadmap" className="hover:text-white transition-colors">Vision</Link>
            <Link to="/team" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <div className="text-slate-400 text-right">
            <span className="font-heading font-bold text-white uppercase tracking-wider">AURA GUIDE</span>
            <span className="block text-[11px] text-slate-500">Feel the space around you.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
