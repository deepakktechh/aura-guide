'use client';
import React, { useState } from 'react';
import { Sliders, CheckCircle2, AlertTriangle, AlertOctagon, RotateCcw, Activity } from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  const [distance, setDistance] = useState<number>(0.35);

  // States:
  // Safe: > 0.8m
  // Approaching: 0.3m <= distance <= 0.8m
  // Close: < 0.3m
  const isSafe = distance > 0.8;
  const isApproaching = distance >= 0.3 && distance <= 0.8;
  const isClose = distance < 0.3;

  const currentZone = isSafe ? 'safe' : isApproaching ? 'approaching' : 'close';

  return (
    <section id="simulator" className="py-16 sm:py-24 border-b border-aura-light-border/60 dark:border-aura-dark-border/40 bg-slate-50/50 dark:bg-aura-dark-bg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header with Simulation Notice */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-aura-dark-cyan/15 border border-cyan-500/30 text-xs font-mono font-bold text-aura-light-action dark:text-aura-dark-cyan uppercase tracking-wider">
              <span>Demo / Simulator</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>Simulation Mode</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text tracking-tight">
              Try it out in the browser.
            </h2>
            <p className="text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted">
              Adjust the simulated frontal obstacle distance below to see how the dual-motor tactile warning logic responds in real time.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-200/70 dark:bg-aura-dark-surface border border-slate-300 dark:border-aura-dark-border/80 text-[11px] font-mono text-aura-light-muted dark:text-aura-dark-muted max-w-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-cyan-600 dark:text-cyan-400">
              <Activity className="w-3.5 h-3.5" />
              <span>FRONTIER HARDWARE LOGIC</span>
            </div>
            <p className="leading-snug">
              This is a browser simulation of the Arduino firmware logic. Both motors vibrate simultaneously for frontal hazards.
            </p>
          </div>
        </div>

        {/* Interactive Simulator Card */}
        <div className="rounded-3xl bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border/80 p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Slider Control Header */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
              <label
                htmlFor="distance-slider"
                className="text-sm font-heading font-bold text-aura-light-text dark:text-aura-dark-text flex items-center gap-2"
              >
                <Sliders className="w-4 h-4 text-aura-light-action dark:text-aura-dark-cyan" />
                <span>Simulated Obstacle Distance:</span>
              </label>

              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-aura-dark-card border border-aura-light-border dark:border-aura-dark-border/80 font-mono text-lg font-bold text-aura-light-action dark:text-aura-dark-cyan shadow-inner">
                  {distance.toFixed(2)} m
                </span>
                <button
                  type="button"
                  onClick={() => setDistance(1.2)}
                  title="Reset distance to 1.20m"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-aura-dark-card border border-aura-light-border dark:border-aura-dark-border/80 text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Range Slider */}
            <div className="relative pt-2 pb-1">
              <input
                id="distance-slider"
                type="range"
                min="0.10"
                max="2.00"
                step="0.05"
                value={distance}
                onChange={(e) => setDistance(parseFloat(e.target.value))}
                aria-label="Simulated obstacle distance in meters"
                aria-valuenow={distance}
                aria-valuemin={0.1}
                aria-valuemax={2.0}
                className="w-full h-3 bg-slate-200 dark:bg-aura-dark-card rounded-lg appearance-none cursor-pointer accent-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-aura-light-muted dark:text-aura-dark-muted pt-2">
                <span className="text-red-500 font-semibold">0.10 m (Immediate Hazard)</span>
                <span className="text-amber-500 font-semibold">0.80 m (Approaching Threshold)</span>
                <span className="text-emerald-500 font-semibold">2.00 m (Safe Clear Zone)</span>
              </div>
            </div>
          </div>

          {/* Live Tactile Belt & Dual Motor Visualizer */}
          <div className="p-8 rounded-2xl bg-slate-100/80 dark:bg-aura-dark-card/50 border border-aura-light-border dark:border-aura-dark-border/60 flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Frontal Distance Wave Indicator */}
            <div className="text-center mb-6 space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-aura-light-muted dark:text-aura-dark-muted">
                Simulated Wearable Belt &amp; Haptic Actuators
              </span>
              <div className="text-xs text-aura-light-text dark:text-aura-dark-text font-medium">
                Obstacle estimated at <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400">{distance.toFixed(2)} m</span> ahead
              </div>
            </div>

            {/* Belt Graphic with Dual Motors */}
            <div className="w-full max-w-lg h-20 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-slate-300 dark:border-aura-dark-border flex items-center justify-between px-8 relative shadow-inner">
              
              {/* Left Motor (M1) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all ${
                  isClose
                    ? 'bg-red-500 text-white animate-vibrate-fast ring-4 ring-red-400/60 shadow-glow-red'
                    : isApproaching
                    ? 'bg-cyan-500 text-aura-dark-bg animate-vibrate-gentle ring-4 ring-cyan-400/40 shadow-glow-cyan'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  M1
                </div>
                <span className="text-[10px] font-mono text-aura-light-muted dark:text-aura-dark-muted">Left Motor</span>
              </div>

              {/* Central Sensor Module */}
              <div className="flex flex-col items-center gap-1">
                <div className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-cyan-400/50 text-cyan-400 font-mono text-xs font-bold flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>VL53L0X HUB</span>
                </div>
                <span className="text-[10px] font-mono text-aura-light-muted dark:text-aura-dark-muted">Forward Sensor</span>
              </div>

              {/* Right Motor (M2) */}
              <div className="flex flex-col items-center gap-1.5">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-xs transition-all ${
                  isClose
                    ? 'bg-red-500 text-white animate-vibrate-fast ring-4 ring-red-400/60 shadow-glow-red'
                    : isApproaching
                    ? 'bg-cyan-500 text-aura-dark-bg animate-vibrate-gentle ring-4 ring-cyan-400/40 shadow-glow-cyan'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}>
                  M2
                </div>
                <span className="text-[10px] font-mono text-aura-light-muted dark:text-aura-dark-muted">Right Motor</span>
              </div>
            </div>

            <p className="text-[11px] font-mono text-center text-aura-light-muted dark:text-aura-dark-muted mt-5">
              Notice: Both M1 and M2 vibrate together with identical intensity. The prototype currently shares a single frontal sensor stream.
            </p>
          </div>

          {/* Three Threshold State Cards (Safe / Approaching / Close) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Safe State */}
            <div className={`p-5 rounded-2xl border transition-all ${
              currentZone === 'safe'
                ? 'bg-emerald-500/10 border-emerald-500/60 shadow-md ring-1 ring-emerald-500/30'
                : 'bg-slate-100/60 dark:bg-aura-dark-card/40 border-aura-light-border/60 dark:border-aura-dark-border/40 opacity-70'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className={`w-4 h-4 ${currentZone === 'safe' ? 'text-emerald-500' : 'text-slate-400'}`} />
                  <span className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text">
                    Safe Zone
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                  &gt; 0.80 m
                </span>
              </div>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                <strong className="text-aura-light-text dark:text-aura-dark-text block mb-1">No vibration.</strong>
                Obstacles are sufficiently distant; navigation path is clear.
              </p>
            </div>

            {/* Approaching State */}
            <div className={`p-5 rounded-2xl border transition-all ${
              currentZone === 'approaching'
                ? 'bg-cyan-500/10 border-cyan-500/60 shadow-md ring-1 ring-cyan-500/30'
                : 'bg-slate-100/60 dark:bg-aura-dark-card/40 border-aura-light-border/60 dark:border-aura-dark-border/40 opacity-70'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className={`w-4 h-4 ${currentZone === 'approaching' ? 'text-cyan-500' : 'text-slate-400'}`} />
                  <span className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text">
                    Approaching
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400">
                  0.30 – 0.80 m
                </span>
              </div>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                <strong className="text-aura-light-text dark:text-aura-dark-text block mb-1">Gentle vibration.</strong>
                Object is in warning range; gentle synchronous pulses alert traveler.
              </p>
            </div>

            {/* Close State */}
            <div className={`p-5 rounded-2xl border transition-all ${
              currentZone === 'close'
                ? 'bg-red-500/10 border-red-500/60 shadow-md ring-1 ring-red-500/30'
                : 'bg-slate-100/60 dark:bg-aura-dark-card/40 border-aura-light-border/60 dark:border-aura-dark-border/40 opacity-70'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <AlertOctagon className={`w-4 h-4 ${currentZone === 'close' ? 'text-red-500' : 'text-slate-400'}`} />
                  <span className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text">
                    Close Proximity
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-red-600 dark:text-red-400">
                  &lt; 0.30 m
                </span>
              </div>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                <strong className="text-aura-light-text dark:text-aura-dark-text block mb-1">Strong vibration.</strong>
                Object is very close; continuous high-intensity pulses prompt stopping.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
