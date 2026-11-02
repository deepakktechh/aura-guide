import React from 'react';
import { ArrowRight, Cpu, Radio, Zap } from 'lucide-react';

export const HowItWorksPipeline: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'VL53L0X Sensor',
      subtitle: 'Time-of-Flight Laser Sensor',
      description: 'Measures the distance of frontal obstacles up to ~2 meters with millimeter-grade light pulse timing.',
      image: '/assets/vl53l0x-sensor.jpg',
      badge: 'INPUT SENSOR',
    },
    {
      num: '2',
      title: 'Arduino UNO R3',
      subtitle: 'Microcontroller Logic',
      description: 'Processes proximity readings over I2C and calculates haptic frequency and pulse intensity.',
      image: '/assets/arduino-uno.jpg',
      badge: 'PROCESSING',
    },
    {
      num: '3',
      title: 'Two Vibration Motors',
      subtitle: 'Belt-Mounted Haptics',
      description: 'Vibrate together simultaneously, increasing in pulse rate as obstacles draw closer ahead.',
      image: '/assets/vibration-motors.jpg',
      badge: 'TACTILE OUTPUT',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 border-b border-aura-light-border/60 dark:border-aura-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              <span className="w-4 h-0.5 bg-cyan-500" />
              <span>How It Works</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text tracking-tight">
              Simple components. Meaningful impact.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted max-w-md leading-relaxed">
            AURA GUIDE uses a single forward-facing distance sensor. When an obstacle is detected in range, both vibration motors activate together to communicate distance through touch.
          </p>
        </div>

        {/* 3-Step Card Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative rounded-2xl bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border/80 overflow-hidden shadow-lg hover:border-cyan-500/60 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-square overflow-hidden bg-slate-900 border-b border-aura-light-border/60 dark:border-aura-dark-border/60">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-cyan-500 text-aura-dark-bg font-heading font-bold flex items-center justify-center text-sm shadow-md">
                  {step.num}
                </div>
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-aura-dark-bg/80 backdrop-blur-sm text-cyan-400 border border-cyan-500/30">
                  {step.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-700 dark:text-cyan-400/90 font-medium mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-aura-light-border/40 dark:border-aura-dark-border/40 text-[11px] font-mono text-aura-light-muted dark:text-aura-dark-muted flex items-center justify-between">
                  <span>Step 0{step.num} of 03</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Verified Hardware</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
