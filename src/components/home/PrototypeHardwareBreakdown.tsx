'use client';
import React, { useState } from 'react';
import { Link } from '@/components/common/CompatLink';
import { ArrowRight, Info, CheckCircle2 } from 'lucide-react';

interface Pin {
  id: string;
  name: string;
  subtitle: string;
  x: string; // percentage
  y: string;
  description: string;
  spec: string;
}

const PINS: Pin[] = [
  {
    id: 'sensor',
    name: 'VL53L0X Sensor',
    subtitle: 'Time-of-Flight Optical Breakout',
    x: '46%',
    y: '48%',
    description: 'Central forward-facing sensor measuring photon flight times for millimeter proximity detection up to 2m.',
    spec: 'I2C Interface · 940nm VCSEL laser · 25° FOV',
  },
  {
    id: 'mcu',
    name: 'Arduino UNO R3',
    subtitle: 'Microcontroller Core',
    x: '20%',
    y: '45%',
    description: 'Executes the proximity threshold algorithm, reads I2C distance, and modulates motor pulsing logic.',
    spec: 'ATmega328P · 16 MHz · 5V Logic',
  },
  {
    id: 'driver',
    name: 'Motor Driver Circuit',
    subtitle: 'NPN Transistor Switching',
    x: '71%',
    y: '50%',
    description: 'Protects the Arduino by isolating inductive kickback with flyback diodes and supplying safe drive current.',
    spec: 'Transistor switching + damping resistors',
  },
  {
    id: 'motors',
    name: 'Two Vibration Motors',
    subtitle: 'Haptic Feedback Actuators',
    x: '91%',
    y: '52%',
    description: 'Both motors vibrate synchronously in response to frontal obstacles, increasing in rate as distance shrinks.',
    spec: 'Coin ERM disc motors · Bilateral belt mount',
  },
];

export const PrototypeHardwareBreakdown: React.FC = () => {
  const [selectedPin, setSelectedPin] = useState<Pin>(PINS[0]);

  return (
    <section id="prototype" className="py-16 sm:py-24 border-b border-aura-light-border/60 dark:border-aura-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              <span className="w-4 h-0.5 bg-cyan-500" />
              <span>The Prototype</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text tracking-tight">
              Real hardware. Real progress.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted max-w-md leading-relaxed">
            A working prototype built with readily available, proven components. This benchtop version validates the core concept of forward-distance sensing and tactile feedback.
          </p>
        </div>

        {/* Interactive Annotated Hardware Stage */}
        <div className="rounded-3xl bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border/80 overflow-hidden shadow-2xl p-4 sm:p-8 space-y-6">
          
          {/* Main Photo with Interactive Hotspots */}
          <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-aura-light-border/60 dark:border-aura-dark-border/60 aspect-[16/9] max-h-[500px]">
            <img
              src="/assets/prototype-breadboard.jpg"
              alt="Authentic Aura Guide Arduino breadboard prototype assembly"
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle dark gradient overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none" />

            {/* Clickable Component Pins */}
            {PINS.map((pin) => {
              const isSelected = selectedPin.id === pin.id;
              return (
                <button
                  key={pin.id}
                  type="button"
                  onClick={() => setSelectedPin(pin)}
                  style={{ top: pin.y, left: pin.x }}
                  aria-label={`View details for ${pin.name}`}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group flex items-center justify-center transition-all ${
                    isSelected ? 'z-30 scale-125' : 'z-20 hover:scale-110'
                  }`}
                >
                  <span className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-mono font-bold text-xs shadow-lg transition-all ${
                    isSelected
                      ? 'bg-aura-dark-cyan text-aura-dark-bg ring-4 ring-cyan-400/40'
                      : 'bg-aura-dark-bg/90 text-white border border-cyan-400/60 hover:bg-cyan-500 hover:text-aura-dark-bg'
                  }`}>
                    {pin.id === 'sensor' && '1'}
                    {pin.id === 'mcu' && '2'}
                    {pin.id === 'driver' && '3'}
                    {pin.id === 'motors' && '4'}
                  </span>

                  {/* Pulsing ring around active pin */}
                  {isSelected && (
                    <span className="absolute inset-0 rounded-full border border-cyan-300 animate-ping pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Component Details Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-slate-100/80 dark:bg-aura-dark-card/60 border border-aura-light-border/80 dark:border-aura-dark-border/60">
            <div className="md:col-span-8 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-300">
                  SELECTED SUBSYSTEM
                </span>
                <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
                  {selectedPin.spec}
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
                {selectedPin.name} <span className="text-sm font-normal text-aura-light-muted dark:text-aura-dark-muted font-sans">— {selectedPin.subtitle}</span>
              </h3>
              <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                {selectedPin.description}
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <Link
                to="/prototype"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border text-aura-light-text dark:text-aura-dark-text text-xs font-semibold hover:border-cyan-500 transition-all shadow-sm"
              >
                <span>View Full Build Specs</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
