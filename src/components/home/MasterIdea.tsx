import React from 'react';
import { Eye, Cpu, Bell } from 'lucide-react';

export const MasterIdea: React.FC = () => {
  const pillars = [
    {
      title: 'Detect',
      subtitle: 'Frontal Proximity',
      desc: 'Sub-millimeter Time-of-Flight laser sensor tracks obstacles from 0.05m up to 2.0m.',
      icon: <Eye className="w-4 h-4 text-zinc-950 dark:text-white" />,
      tag: 'VL53L0X ToF',
    },
    {
      title: 'Process',
      subtitle: 'Zero-Latency Edge',
      desc: 'Onboard Arduino MCU calculates safe distance thresholds instantaneously without internet.',
      icon: <Cpu className="w-4 h-4 text-zinc-950 dark:text-white" />,
      tag: 'Fail-Safe Logic',
    },
    {
      title: 'Alert',
      subtitle: 'Tactile Haptics',
      desc: 'Dual synchronized ERM vibration motors provide intuitive haptic pulses proportional to distance.',
      icon: <Bell className="w-4 h-4 text-zinc-950 dark:text-white" />,
      tag: 'Dual Motors',
    },
  ];

  return (
    <section className="bg-[#F7F3F6] dark:bg-[#0c0e10] text-zinc-900 dark:text-white py-20 lg:py-28 border-b border-zinc-200/60 dark:border-white/10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (6 cols): Overline, Headline, Narrative & 3 Clean Minimal Cards */}
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-300">
              <span className="font-bold text-zinc-950 dark:text-white">02</span>
              <span>/ THE IDEA</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-950 dark:text-white uppercase leading-[1.02]">
              GIVE A SIXTH SENSE TO THE REAL WORLD.
            </h2>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed font-sans">
              Aura Guide translates invisible distances into intuitive, silent haptic vibrations — offering spatial clarity without distracting ambient auditory perception.
            </p>

            {/* 3 Clean Minimal Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-2.5 hover:border-zinc-400 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                      {pillar.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                      {pillar.subtitle}
                    </p>
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-snug">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column (6 cols): Macro Hardware Photo in Minimal Bezel */}
          <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 aspect-[3/4]">
                <img
                  src="/assets/wearable-module.jpg"
                  alt="Sleek wearable hardware module"
                  className="w-full h-full object-cover object-center"
                />

                {/* Minimalist Floating Badge on Image */}
                <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border border-white/60 dark:border-zinc-800 shadow-md text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                  <span>PROTOTYPE v1.0</span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border border-white/60 dark:border-zinc-800 shadow-lg text-xs flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-zinc-400 block">PHILOSOPHY</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">Simple. Intuitive. Empowering.</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 font-mono text-[11px] font-bold text-zinc-800 dark:text-zinc-200">
                    02
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
