'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Sparkles, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Scene {
  num: string;
  stage: string;
  heading: string;
  caption: string;
  image: string;
  techDetail: string;
  badge: string;
}

const SCENES: Scene[] = [
  {
    num: '01',
    stage: 'Detect',
    heading: 'Awareness begins ahead.',
    caption: 'One forward-facing VL53L0X Time-of-Flight sensor measures obstacle distance up to ~2 meters by pulsing microscopic infrared photons.',
    image: '/assets/belt-hero.jpg',
    techDetail: 'Field of view: ~25° frontal cone · ToF millimetric measurement',
    badge: 'INPUT PHASE',
  },
  {
    num: '02',
    stage: 'Process',
    heading: 'Distance becomes information.',
    caption: 'The Arduino UNO R3 calculates proximity thresholds over I2C, determining the haptic feedback frequency and duration in real time.',
    image: '/assets/arduino-uno.jpg',
    techDetail: 'ATmega328P logic · 3 safety threshold zones (>0.8m, 0.3-0.8m, <0.3m)',
    badge: 'LOGIC PHASE',
  },
  {
    num: '03',
    stage: 'Feel',
    heading: 'Information you can feel.',
    caption: 'Two belt-mounted vibration motors activate together with synchronized pulses, vibrating faster and stronger as the object nears.',
    image: '/assets/vibration-motors.jpg',
    techDetail: 'Dual ERM coin motors · Synchronous bilateral tactile pulse',
    badge: 'TACTILE OUTPUT',
  },
  {
    num: '04',
    stage: 'Confidence',
    heading: 'From proximity to freedom.',
    caption: 'A wearable attachment that supplements white canes and guide dogs, providing intuitive tactile awareness for mid-level hazards.',
    image: '/assets/prototype-breadboard.jpg',
    techDetail: 'Working benchtop prototype · Wearable belt proof of concept',
    badge: 'SYSTEM INTEGRATION',
  },
];

export const CinematicScrollStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current || !trackRef.current) return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>('.story-panel');
      const totalPanels = panels.length;

      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          start: 'top top',
          end: () => `+=${containerRef.current?.offsetWidth || 2400}`,
          onUpdate: (self) => {
            const step = Math.round(self.progress * (totalPanels - 1));
            setActiveStep(step);
          },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#F7F3F6] dark:bg-[#0c0e10] border-b border-zinc-200/60 dark:border-white/10 overflow-hidden transition-colors duration-200"
    >
      {/* Section Intro Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-300">
              <span className="font-bold text-zinc-950 dark:text-white">MOTION SCROLL</span>
              <span>/ SENSORY PIPELINE</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-zinc-950 dark:text-white tracking-tight uppercase leading-[1.02]">
              FROM SURROUNDINGS TO SELF-ASSURANCE.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md leading-relaxed">
            Scroll down to scrub through the 4-stage pipeline that transforms raw distance reflections into intuitive tactile sensations.
          </p>
        </div>

        {/* Step progress pills for desktop */}
        <div className="hidden lg:flex items-center gap-2.5 mt-8 pt-6 border-t border-zinc-200/60 dark:border-white/10">
          {SCENES.map((scene, idx) => (
            <button
              key={scene.num}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeStep === idx
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-md'
                  : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-zinc-400'
              }`}
            >
              <span>{scene.num}</span>
              <span>{scene.stage}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Horizontal Story Track (pinned on desktop, stacked on mobile) */}
      <div className="w-full overflow-hidden pb-16 lg:pb-20">
        <div
          ref={trackRef}
          className="flex flex-col md:flex-row md:flex-nowrap md:overflow-x-auto lg:overflow-visible w-full lg:w-[400%] snap-x-mandatory lg:snap-none pb-4 lg:pb-0"
        >
          {SCENES.map((scene) => (
            <div
              key={scene.num}
              className="story-panel w-full md:w-[85vw] lg:w-screen flex-shrink-0 px-3 sm:px-6 lg:px-12 py-4 sm:py-6 flex items-center justify-center snap-x-center lg:snap-align-none"
            >
              <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 shadow-xl">
                
                {/* Visual Representation with Live Graphic Overlay */}
                <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800 aspect-[16/10]">
                  <img
                    src={scene.image}
                    alt={scene.heading}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Contextual Visual FX per Stage */}
                  {scene.stage === 'Detect' && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                      <div className="relative w-40 h-40">
                        <div className="absolute inset-0 rounded-full border-2 border-white/80 animate-sonar" />
                        <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-sonar-delay-1" />
                      </div>
                    </div>
                  )}

                  {scene.stage === 'Feel' && (
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-around px-16">
                      <div className="w-20 h-20 rounded-full border-2 border-white/80 animate-haptic-pulse" />
                      <div className="w-20 h-20 rounded-full border-2 border-white/80 animate-haptic-pulse" />
                    </div>
                  )}

                  {/* Technical pill overlay */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-zinc-950/85 text-white backdrop-blur-md border border-white/20 text-xs font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span>{scene.badge}</span>
                  </div>

                  <div className="absolute bottom-4 inset-x-4 px-4 py-2.5 rounded-xl bg-zinc-950/90 text-white backdrop-blur-md border border-white/20 text-xs font-mono flex items-center justify-between">
                    <span className="truncate pr-2">{scene.techDetail}</span>
                    <span className="font-bold text-amber-400 shrink-0">{scene.num} / 04</span>
                  </div>
                </div>

                {/* Narrative Text */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-950 dark:text-white font-mono text-xs font-bold">
                      STAGE {scene.num}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      {scene.stage}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-zinc-950 dark:text-white tracking-tight uppercase leading-snug">
                    {scene.heading}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                    {scene.caption}
                  </p>

                  <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800 flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    <Activity className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                    <span>Shared frontal proximity cue · Millimeter precision</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
