'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') { gsap.registerPlugin(ScrollTrigger); }
import { Link } from '@/components/common/CompatLink';
import { ArrowRight, Disc, Cpu, Activity, Check } from 'lucide-react';
export const MasterPrototype: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.proto-elem',
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
        '.proto-center-photo',
        { opacity: 0, scale: 0.94, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true,
          },
        }
      );
      gsap.fromTo(
        '.proto-subsystem-item',
        { opacity: 0, x: 25 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.proto-subsystem-list',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sectionRef} className="bg-[#F7F3F6] dark:bg-[#0c0e10] text-zinc-900 dark:text-white py-20 lg:py-28 border-b border-zinc-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Overline, Headline, Narrative & Black Pill CTA */}
          <div className="lg:col-span-5 space-y-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="proto-elem inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-300 w-fit">
              <span className="font-bold text-zinc-950 dark:text-white">04</span>
              <span>/ THE PROTOTYPE</span>
            </div>

            <h2 className="proto-elem font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-950 dark:text-white uppercase leading-[1.02]">
              A CLOSER LOOK AT THE HARDWARE.
            </h2>

            <p className="proto-elem text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed font-sans">
              A lightweight, battery-efficient wearable prototype designed specifically to explore spatial obstacle perception for visually impaired people.
            </p>

            <div className="pt-2">
              <Link
                to="/prototype"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-sm font-semibold transition-all shadow-md active:scale-95 group w-fit"
              >
                <span>Full Hardware Breakdown</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Center Column: Macro Hardware Photo (4 cols) */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="proto-center-photo relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 aspect-[3/4] w-full max-w-sm">
              <img
                src="/assets/wearable-module.jpg"
                alt="Wearable prototype sensor unit"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-white/60 dark:border-zinc-800 shadow-md text-[11px] font-mono text-zinc-600 dark:text-zinc-300 flex items-center justify-between">
                <span>FORM: BELT-CLIP MODULE</span>
                <span className="font-bold text-zinc-950 dark:text-white">v1.0</span>
              </div>
            </div>
          </div>

          {/* Right Column (3 cols): Vertical Subsystem List with Minimal Cards */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4 h-full">
            <div className="proto-subsystem-list space-y-3.5">
              
              <div className="proto-subsystem-item p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-950 dark:text-white shrink-0 mt-0.5">
                  <Disc className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                    Sensor Module
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                    VL53L0X Time-of-Flight optical laser ranging up to 2.0m.
                  </p>
                </div>
              </div>

              <div className="proto-subsystem-item p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-950 dark:text-white shrink-0 mt-0.5">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                    Control Unit
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                    Arduino UNO core (future ESP32) with fail-safe edge loop.
                  </p>
                </div>
              </div>

              <div className="proto-subsystem-item p-3.5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-950 dark:text-white shrink-0 mt-0.5">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                    Vibration Actuators
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-snug">
                    Dual ERM motors providing progressive proximity pulses.
                  </p>
                </div>
              </div>

            </div>

            <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500 pt-4 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center justify-between">
              <span>SRM DTM PROJECT</span>
              <span>— 04</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};