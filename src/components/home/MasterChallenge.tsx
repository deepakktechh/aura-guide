import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, ShieldAlert } from 'lucide-react';

export const MasterChallenge: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#121417] text-zinc-900 dark:text-white py-20 lg:py-28 border-b border-zinc-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 cols): Overline, Minimal Headline, Narrative & Solid Black Pill */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-300">
              <span className="font-bold text-zinc-950 dark:text-white">01</span>
              <span>/ THE CHALLENGE</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-950 dark:text-white uppercase leading-[1.02]">
              A WORLD NOT DESIGNED FOR EVERYONE.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed font-sans">
              Navigating unfamiliar spaces remains a daily friction point for visually impaired individuals. Hanging hazards, chest-height obstructions, and crowded corridors often evade conventional cane sweeps.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F7F3F6] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <div className="text-2xl font-bold font-heading text-zinc-950 dark:text-white">
                  60%
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Report indoor disorientation in unfamiliar spaces (n=10)
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F3F6] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <div className="text-2xl font-bold font-heading text-zinc-950 dark:text-white">
                  50%
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Cite head- and chest-height obstacles as hardest to detect
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-sm font-semibold transition-all shadow-md active:scale-95 group w-fit"
              >
                <span>Read Exploratory Research</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols): Cane Traveler with Minimal Card Styling */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              {/* Image Frame with soft shadow */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 aspect-[4/5]">
                <img
                  src="/assets/cane-traveler.jpg"
                  alt="Visually impaired traveler with mobility cane"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Minimalist Floating Badge on Image */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border border-white/60 dark:border-zinc-800 shadow-lg text-xs flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-zinc-400 block">OBSERVATION</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">Complementing, never replacing, the white cane</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 font-mono text-[11px] font-bold text-zinc-800 dark:text-zinc-200">
                    01
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
