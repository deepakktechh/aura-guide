import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Sparkles, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

interface MasterHeroProps {
  onScrollToDemo?: () => void;
}

export const MasterHero: React.FC<MasterHeroProps> = ({ onScrollToDemo }) => {
  const [activeCallout, setActiveCallout] = useState<string | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const callouts = {
    tof: {
      title: 'ToF Laser Ranging',
      tag: '— 2.0m ToF Ranging',
      metric: 'VL53L0X 940nm VCSEL',
      detail: 'Measures photon bounce time at sub-millimeter resolution up to 2.0 meters, uninhibited by surface color or ambient light.',
    },
    haptic: {
      title: 'Dual Haptic Feedback',
      tag: 'Dual Haptic Motors +',
      metric: 'Tactile ERM Motors',
      detail: 'Synchronized bilateral coin vibration motors deliver progressive tactile intensity directly mapped to obstacle proximity.',
    },
    mcu: {
      title: 'Fail-Safe Offline Edge Logic',
      tag: '+ 100% Offline MCU',
      metric: 'Low-latency Arduino Core',
      detail: 'Zero cloud reliance and zero wireless delay ensures real-time safety even in underground or zero-signal environments.',
    },
  };

  return (
    <section className="relative bg-[#F7F3F6] dark:bg-[#0c0e10] text-zinc-900 dark:text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden border-b border-zinc-200/60 dark:border-white/10 transition-colors duration-200">
      
      {/* Subtle ambient pastel gradient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-pink-100/40 via-purple-100/30 to-blue-100/40 dark:from-white/5 dark:via-transparent dark:to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Giant Bold Headline across the top matching reference template */}
        <div 
          className="text-center w-full mb-10 sm:mb-14 lg:mb-16 transition-transform duration-300"
          style={{ transform: `translateY(${Math.min(scrollY * 0.12, 40)}px)` }}
        >
          <h1 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] tracking-tight text-zinc-950 dark:text-white uppercase leading-[0.92] select-none">
            SPATIAL SENSING. REAL RESULTS.
          </h1>
        </div>

        {/* 3-Column Flanked Grid framing the central product */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column (3 cols): Narrative, Underline link, and Black Pill CTA */}
          <div className="lg:col-span-3 flex flex-col justify-center space-y-6 text-left order-2 lg:order-1">
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans max-w-sm">
              Take the step towards a safer, more intuitive world — explore our wearable spatial awareness attachment engineered to complement traditional mobility aids.
            </p>

            <div>
              {onScrollToDemo ? (
                <button
                  type="button"
                  onClick={onScrollToDemo}
                  className="text-zinc-900 dark:text-white font-semibold text-sm underline underline-offset-4 decoration-zinc-400 hover:decoration-zinc-950 dark:decoration-zinc-600 dark:hover:decoration-white transition cursor-pointer"
                >
                  Learn more
                </button>
              ) : (
                <Link
                  to="/how-it-works"
                  className="text-zinc-900 dark:text-white font-semibold text-sm underline underline-offset-4 decoration-zinc-400 hover:decoration-zinc-950 dark:decoration-zinc-600 dark:hover:decoration-white transition"
                >
                  Learn more
                </Link>
              )}
            </div>

            <div className="pt-2">
              <Link
                to="/prototype"
                className="inline-flex items-center justify-between gap-4 px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-sm font-semibold transition-all shadow-md active:scale-95 group w-fit"
              >
                <span>Explore Prototype</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
              </Link>
            </div>

            {/* Micro spec feature note */}
            <div className="pt-4 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-zinc-800 dark:text-zinc-200" />
              <span>Tested on Arduino UNO &amp; VL53L0X</span>
            </div>
          </div>

          {/* Center Column (6 cols): Centerpiece Product Showcase with Floating Animation & Parallax */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center relative order-1 lg:order-2 my-4 lg:my-0">
            
            <div 
              className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] sm:aspect-[1/1] flex items-center justify-center animate-float"
              style={{
                transform: `translateY(${Math.max(scrollY * -0.08, -30)}px)`,
                transition: 'transform 0.15s ease-out'
              }}
            >
              
              {/* Product Card Container with realistic soft drop shadow */}
              <div className="relative w-72 sm:w-80 md:w-88 rounded-[36px] bg-gradient-to-b from-white via-[#FCFAFC] to-[#F2EEF2] dark:from-zinc-900 dark:via-zinc-900/95 dark:to-zinc-950 border border-white/80 dark:border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] p-6 sm:p-7 flex flex-col items-center justify-between overflow-hidden group">
                
                {/* Subtle top cap / clip detail */}
                <div className="w-24 h-5 rounded-t-xl bg-zinc-200 dark:bg-zinc-800 border-t border-x border-zinc-300 dark:border-zinc-700 shadow-inner flex items-center justify-center">
                  <div className="w-8 h-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                </div>

                {/* Main device front panel */}
                <div className="w-full flex-1 rounded-2xl bg-gradient-to-b from-sky-50 via-white to-sky-50/60 dark:from-zinc-800/60 dark:via-zinc-900 dark:to-zinc-800/40 border border-sky-100 dark:border-zinc-800 p-5 flex flex-col justify-between my-3 relative shadow-inner">
                  
                  {/* Top Brand & Sensor Emblem */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 flex items-center justify-center">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <span className="text-[11px] font-heading font-black tracking-wider uppercase text-zinc-950 dark:text-white">
                        Aura Guide
                      </span>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/60 dark:border-zinc-700">
                      MK-1 PROTO
                    </span>
                  </div>

                  {/* Central Time-of-Flight Optical Aperture */}
                  <div className="my-auto flex flex-col items-center justify-center py-4">
                    <div className="relative w-28 h-28 rounded-full bg-zinc-950 flex items-center justify-center shadow-lg border-2 border-zinc-200 dark:border-zinc-700 group-hover:scale-105 transition-transform duration-500">
                      
                      {/* Rotating subtle radar sweep ring */}
                      <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-radar-sweep pointer-events-none" />
                      
                      {/* Dual lens aperture representation */}
                      <div className="w-16 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center gap-2 px-2 shadow-inner">
                        <div className="w-5 h-5 rounded-full bg-amber-900/60 border border-amber-500/50 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        </div>
                        <div className="w-5 h-5 rounded-full bg-sky-950 border border-sky-500/50 flex items-center justify-center">
                          <Eye className="w-3 h-3 text-sky-400" />
                        </div>
                      </div>

                      <span className="absolute -bottom-3 px-2 py-0.5 rounded-full bg-zinc-900 text-[8px] font-mono tracking-widest text-zinc-300 border border-zinc-700">
                        VL53L0X
                      </span>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="font-heading font-bold text-base text-zinc-950 dark:text-white">
                        Spatial Attachment
                      </h3>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans">
                        Millimeter Time-of-Flight Sensing
                      </p>
                    </div>
                  </div>

                  {/* Bottom Technical specs tag */}
                  <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                    <span>RANGE: 0.05m – 2.0m</span>
                    <span className="text-zinc-900 dark:text-zinc-200 font-bold">FAIL-SAFE</span>
                  </div>

                </div>

                {/* Base clip mounting feet */}
                <div className="w-40 h-2 rounded-b-md bg-zinc-300 dark:bg-zinc-700" />
              </div>

              {/* CALLOUT 1: Top-Right (— 2.0m ToF Sensing) */}
              <div 
                className="absolute top-[16%] right-0 sm:-right-4 z-20 hidden sm:flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveCallout('tof')}
                onMouseLeave={() => setActiveCallout(null)}
              >
                <div className="w-10 sm:w-16 h-[1px] bg-zinc-300 dark:bg-zinc-600" />
                <div className="px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700 shadow-md text-xs font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 hover:border-zinc-400 hover:scale-105 transition-all">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">—</span>
                  <span>{callouts.tof.title}</span>
                </div>
              </div>

              {/* CALLOUT 2: Bottom-Left (Dual Haptic Motors +) */}
              <div 
                className="absolute bottom-[24%] left-0 sm:-left-6 z-20 hidden sm:flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveCallout('haptic')}
                onMouseLeave={() => setActiveCallout(null)}
              >
                <div className="px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700 shadow-md text-xs font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 hover:border-zinc-400 hover:scale-105 transition-all">
                  <span>{callouts.haptic.title}</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">+</span>
                </div>
                <div className="w-10 sm:w-16 h-[1px] bg-zinc-300 dark:bg-zinc-600" />
              </div>

              {/* CALLOUT 3: Bottom-Right (+ 100% Offline MCU) */}
              <div 
                className="absolute bottom-[10%] right-0 sm:-right-2 z-20 hidden sm:flex items-center group cursor-pointer"
                onMouseEnter={() => setActiveCallout('mcu')}
                onMouseLeave={() => setActiveCallout(null)}
              >
                <div className="w-8 sm:w-14 h-[1px] bg-zinc-300 dark:bg-zinc-600" />
                <div className="px-3.5 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700 shadow-md text-xs font-medium text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5 hover:border-zinc-400 hover:scale-105 transition-all">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">+</span>
                  <span>Offline MCU Core</span>
                </div>
              </div>

              {/* Mobile Callouts Row below image */}
              <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-4 w-full">
                <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[11px] font-medium shadow-xs">
                  — ToF 2.0m
                </span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[11px] font-medium shadow-xs">
                  Dual Haptic +
                </span>
                <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[11px] font-medium shadow-xs">
                  + Offline MCU
                </span>
              </div>

            </div>

            {/* Active Callout Details Tooltip */}
            {activeCallout && (
              <div className="mt-3 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-zinc-800/95 border border-zinc-200 dark:border-zinc-700 shadow-lg text-xs max-w-sm text-center animate-fade-in z-30">
                <p className="font-bold text-zinc-950 dark:text-white">
                  {callouts[activeCallout as keyof typeof callouts]?.title}
                </p>
                <p className="text-zinc-600 dark:text-zinc-300 mt-0.5 text-[11px]">
                  {callouts[activeCallout as keyof typeof callouts]?.detail}
                </p>
              </div>
            )}
          </div>

          {/* Right Column (3 cols): Explainer Paragraph & Floating Detail Inset Circle */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-8 text-left order-3">
            <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans max-w-sm">
              Our products are carefully formulated with science-backed sensor feedback, free from wireless dependency, and built to open-source accessibility standards.
            </p>

            {/* Floating Circular Inset Card matching the circular capsule element in reference */}
            <div className="pt-2 flex flex-col items-start sm:items-start">
              <Link
                to="/prototype"
                title="View Haptic Actuator Details"
                className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 shadow-xl flex flex-col items-center justify-center p-3 text-center relative group hover:scale-105 transition-all duration-300"
              >
                {/* Photo inset inside circle */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-sky-50 dark:bg-sky-950/40 p-1 flex items-center justify-center relative shadow-inner">
                  <img
                    src="/assets/vibration-motors.jpg"
                    alt="Dual Haptic Vibration Motors"
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-full border border-sky-400/30" />
                </div>

                <div className="mt-1.5 space-y-0.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                    TACTILE DETAIL
                  </span>
                  <span className="text-xs font-bold text-zinc-950 dark:text-white block group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
                    Dual ERM Motors
                  </span>
                </div>
              </Link>
              
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-sans mt-2 ml-4">
                Instant tactile distance cues
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
