'use client';
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }
import { Sliders, ShieldCheck, Activity, Eye, Cpu, Bell } from 'lucide-react';

export const MasterHowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<'demo' | 'approaching' | 'close' | 'safe'>('approaching');

  const distanceMap = {
    demo: { dist: 0.8, label: 'Continuous Sweep', state: 'approaching' },
    approaching: { dist: 0.8, label: 'Obstacle Approaching', state: 'approaching' },
    close: { dist: 0.3, label: 'Close Proximity Hazard', state: 'close' },
    safe: { dist: 1.8, label: 'Clear Path Ahead', state: 'safe' },
  };

  const current = distanceMap[activeTab];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.how-elem',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
      gsap.fromTo(
        '.how-interactive-box',
        { opacity: 0, scale: 0.96, y: 35 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section id="how-it-works" ref={sectionRef} className="bg-white dark:bg-[#121417] text-zinc-900 dark:text-white py-20 lg:py-28 border-b border-zinc-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Control Bar: Overline + Tab Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-4 border-b border-zinc-200/60 dark:border-zinc-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-300 w-fit">
            <span className="font-bold text-zinc-950 dark:text-white">03</span>
            <span>/ HOW IT WORKS</span>
          </div>

          {/* Interactive State Tab Selector Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {(['demo', 'approaching', 'close', 'safe'] as const).map((key) => {
              const labels = {
                demo: 'Live Demo',
                approaching: 'Approaching (0.8m)',
                close: 'Close Hazard (0.3m)',
                safe: 'Clear Path (>1.5m)',
              };
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeTab === key
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm'
                      : 'bg-[#F7F3F6] dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-zinc-400'
                  }`}
                >
                  {labels[key]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Grid: Narrative Left (5 cols) + Isometric Simulation Right (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline & Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="how-elem font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-950 dark:text-white uppercase leading-[1.02]">
              FROM SPACE TO SENSATION.
            </h2>

            <p className="how-elem text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
              Aura Guide detects frontal barriers using laser reflection timing and converts distance changes into gentle, intuitive tactile pulses that calibrate in real time.
            </p>

            <div className="how-elem p-4 rounded-2xl bg-[#F7F3F6] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400">
              <span className="font-mono font-bold text-zinc-950 dark:text-white block uppercase text-[10px] tracking-wider">
                TACTILE LOGIC (PROTOTYPE)
              </span>
              <p>
                The VL53L0X Time-of-Flight sensor measures photon reflections. Dual motors pulse simultaneously with rhythm proportional to frontal proximity.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Distance Simulation Card */}
          <div className="lg:col-span-7">
            <div className="how-interactive-box relative rounded-3xl bg-[#F7F3F6] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-8 sm:p-12 shadow-xl overflow-hidden min-h-[380px] flex items-center justify-between">
              
              {/* Traveler Avatar */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative w-28 h-36 flex items-center justify-center">
                  <img
                    src="/assets/belt-hero.jpg"
                    alt="Traveler with sensor"
                    className="w-24 h-32 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-700 shadow-md"
                  />
                  {/* Animated sonar wave lines */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-16 h-16 pointer-events-none flex items-center">
                    <div className="w-10 h-10 rounded-full border-r-2 border-t-2 border-b-2 border-zinc-800 dark:border-zinc-200 animate-ping opacity-60" />
                  </div>
                </div>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-2">Wearer</span>
              </div>

              {/* Range Beam Lines */}
              <div className="flex-1 px-4 flex flex-col items-center justify-center relative">
                <div className="w-full h-0.5 border-t border-dashed border-zinc-300 dark:border-zinc-600 relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-800 px-2 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-xs">
                    {current.dist} meters
                  </span>
                </div>
              </div>

              {/* Obstacle Cube & Live Indicator Card */}
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <div className={`transition-all duration-500 ${current.state === 'close' ? 'scale-125' : 'scale-100'}`}>
                  <svg width="84" height="84" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50,15 85,32 50,50 15,32" fill="#d1d5db" stroke="#9ca3af" strokeWidth="2" />
                    <polygon points="15,32 50,50 50,85 15,68" fill="#9ca3af" stroke="#6b7280" strokeWidth="2" />
                    <polygon points="50,50 85,32 85,68 50,85" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
                  </svg>
                </div>

                {/* Floating Metric Card */}
                <div className="p-3.5 rounded-2xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-xl border border-zinc-800 dark:border-zinc-200 text-center min-w-[145px]">
                  <div className="font-heading text-2xl font-black">
                    {current.dist.toFixed(1)} <span className="text-xs font-mono font-normal">m</span>
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-600 mt-0.5 font-bold">
                    {current.label}
                  </div>
                  <div className="mt-1 pt-1 border-t border-white/10 dark:border-zinc-200 text-[9px] font-mono text-zinc-400 dark:text-zinc-600">
                    {current.state === 'close' && 'Fast Dual Haptic Alert'}
                    {current.state === 'approaching' && 'Gentle Dual Haptic Pulse'}
                    {current.state === 'safe' && 'Motors Idle (Safe)'}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom 3-Step Horizontal Process Pipeline */}
        <div className="pt-8 border-t border-zinc-200/60 dark:border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-xs shadow-sm shrink-0">
              1
            </span>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                Detect
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Sensors measure distance ahead via Time-of-Flight optical pulses.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-xs shadow-sm shrink-0">
              2
            </span>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                Process
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Data is interpreted in real time by onboard microcontroller thresholds.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="w-8 h-8 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 flex items-center justify-center font-mono font-bold text-xs shadow-sm shrink-0">
              3
            </span>
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                Feedback
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Vibration activates simultaneously on left and right for intuitive tactile cues.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};