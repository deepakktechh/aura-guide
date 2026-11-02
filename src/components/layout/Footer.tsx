import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Linkedin, Instagram, Youtube, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

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

      rotation += 0.007;

      const isDark = resolvedTheme === 'dark';

      // Draw dots
      for (const dot of dots) {
        const cosR = Math.cos(rotation);
        const sinR = Math.sin(rotation);
        const rx = dot.x * cosR - dot.z * sinR;
        const rz = dot.x * sinR + dot.z * cosR;

        const fov = 300;
        const scale = fov / (fov + rz + 50);
        const px = cx + rx * scale;
        const py = cy + dot.y * scale;

        const alpha = Math.max(0.12, (rz + radius) / (2 * radius));
        ctx.beginPath();
        ctx.arc(px, py, Math.max(0.8, 1.8 * scale), 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${alpha * 0.85})`
          : `rgba(24, 24, 27, ${alpha * 0.75})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <footer className="bg-[#F4F0F4] dark:bg-[#090b0c] text-zinc-900 dark:text-white pt-20 pb-12 border-t border-zinc-200/80 dark:border-white/10 relative overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Brand Header */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center font-bold shadow-sm">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-heading font-black text-sm tracking-wider uppercase text-zinc-950 dark:text-white">
            Aura Guide
          </span>
        </div>

        {/* Main CTA Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-zinc-950 dark:text-white uppercase leading-[0.98]">
              LET'S BUILD A MORE ACCESSIBLE WORLD.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed font-sans">
              We're exploring, designing, and building towards an inclusive future of spatial awareness. Open source, human-centered, and dignity-first.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/team"
                className="inline-flex items-center justify-between gap-3 px-7 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-sm font-semibold transition-all shadow-md active:scale-95 group"
              >
                <span>Get in Touch</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white font-medium text-sm hover:border-zinc-400 active:scale-95 transition-all shadow-xs"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>

          {/* Minimalist Rotating Globe */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={320}
                height={320}
                className="relative z-10 w-full h-full"
                aria-label="3D rotating accessibility globe"
              />
            </div>
          </div>

        </div>

        {/* Bottom Bar: Links, Social Icons & Copyright */}
        <div className="pt-10 border-t border-zinc-200/80 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 dark:text-zinc-400 font-sans">
          
          <div className="flex flex-wrap items-center gap-6 font-medium">
            <Link to="/" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="hover:text-zinc-950 dark:hover:text-white transition-colors">About</Link>
            <Link to="/how-it-works" className="hover:text-zinc-950 dark:hover:text-white transition-colors">How It Works</Link>
            <Link to="/prototype" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Prototype</Link>
            <Link to="/roadmap" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Vision</Link>
            <Link to="/team" className="hover:text-zinc-950 dark:hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-zinc-950 dark:hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          <div className="text-right">
            <span className="font-heading font-black text-zinc-900 dark:text-white uppercase tracking-wider block">AURA GUIDE</span>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400">Feel the space around you.</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
