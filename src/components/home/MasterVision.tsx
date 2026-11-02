'use client';
import React from 'react';
import { UserCheck, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from '@/components/common/CompatLink';

export const MasterVision: React.FC = () => {
  const highlights = [
    {
      title: 'Greater Independence',
      desc: 'Hands-free confidence in dynamic settings',
      icon: <UserCheck className="w-4 h-4 text-zinc-950 dark:text-white" />,
    },
    {
      title: 'Safer Environments',
      desc: 'Tactile warnings for head/chest hazards',
      icon: <Shield className="w-4 h-4 text-zinc-950 dark:text-white" />,
    },
    {
      title: 'Open Inclusive Tech',
      desc: 'Affordable, reproducible assistive hardware',
      icon: <Globe className="w-4 h-4 text-zinc-950 dark:text-white" />,
    },
  ];

  return (
    <section className="bg-white dark:bg-[#121417] text-zinc-900 dark:text-white py-20 lg:py-28 border-b border-zinc-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 cols): Overline, Headline, Narrative & Trio of Badges */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-300 w-fit">
              <span className="font-bold text-zinc-950 dark:text-white">05</span>
              <span>/ OUR VISION</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-950 dark:text-white uppercase leading-[1.02]">
              TOWARDS A MORE INCLUSIVE TOMORROW.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed font-sans">
              Aura Guide is a step toward an ecosystem where visually impaired individuals can move through unfamiliar spaces with dignity, self-assurance, and tactile awareness.
            </p>

            {/* Trio of Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {highlights.map((item) => (
                <div key={item.title} className="p-3.5 rounded-2xl bg-[#F7F3F6] dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 space-y-2">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-zinc-950 dark:text-white block leading-snug">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5 leading-snug">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/roadmap"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-sm font-semibold transition-all shadow-md active:scale-95 group w-fit"
              >
                <span>Explore Project Roadmap</span>
                <div className="w-6 h-6 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column (6 cols): Skyline Photo with Minimal Floating Badge */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 aspect-[4/3]">
                <img
                  src="/assets/vision-horizon.jpg"
                  alt="Person looking toward city skyline at dawn"
                  className="w-full h-full object-cover object-center"
                />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border border-white/60 dark:border-zinc-800 shadow-lg text-xs flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-zinc-400 block">DESTINATION</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">Accessible urban navigation for all</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 font-mono text-[11px] font-bold text-zinc-800 dark:text-zinc-200">
                    05
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
