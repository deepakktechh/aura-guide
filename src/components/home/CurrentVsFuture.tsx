import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles, Cpu, Layers } from 'lucide-react';

export const CurrentVsFuture: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-aura-light-border/60 dark:border-aura-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              <span className="w-4 h-0.5 bg-cyan-500" />
              <span>Current &amp; Future</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text tracking-tight">
              From prototype to possibility.
            </h2>
          </div>
          <div className="space-y-2">
            <p className="text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted max-w-md leading-relaxed">
              AURA GUIDE is an early-stage prototype with an honest, evidence-grounded path toward an ergonomic, reliable assistive aid.
            </p>
            <Link
              to="/roadmap"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Two-Column Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Current Prototype */}
          <div className="p-8 rounded-3xl bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border/80 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-aura-light-action dark:text-aura-dark-cyan" />
                  <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
                    Current Prototype
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
                  WHAT IT DOES NOW
                </span>
              </div>

              <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                A functioning benchtop validation unit proving that time-of-flight proximity detection can directly drive haptic tactile warnings.
              </p>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-aura-light-text dark:text-aura-dark-text">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>One forward-facing VL53L0X ToF laser distance sensor</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Arduino UNO R3 handling signal processing and thresholding</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Two vibration motors pulsing simultaneously for frontal alerts</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Breadboard circuit with NPN transistor motor-driver buffers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Detects obstacles within ~2 meters in a forward cone</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-aura-light-border/40 dark:border-aura-dark-border/40 flex items-center justify-between text-[11px] font-mono text-aura-light-muted dark:text-aura-dark-muted">
              <span>Status: Operational Bench Prototype</span>
              <span className="text-cyan-600 dark:text-cyan-400">Phase 1 Verified</span>
            </div>
          </div>

          {/* Card 2: Future Development Plans */}
          <div className="p-8 rounded-3xl bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border/80 shadow-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-teal-600 dark:text-aura-dark-teal" />
                  <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
                    Future Plans
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30">
                  WHERE WE'RE HEADED
                </span>
              </div>

              <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                Iterating toward an ergonomic, comfortable wearable belt with refined electronics, custom PCB miniaturization, and user validation.
              </p>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-aura-light-text dark:text-aura-dark-text">
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Custom compact PCB replacing breadboard and jumper wires</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Lightweight, ergonomic 3D-molded belt clip enclosure</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Microcontroller transition to ESP32 for low-power IoT features</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Customizable haptic vibration profiles and sensitivity settings</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>Collaborative testing and feedback with visually impaired users</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-aura-light-border/40 dark:border-aura-dark-border/40 flex items-center justify-between text-[11px] font-mono text-aura-light-muted dark:text-aura-dark-muted">
              <span>Next Milestone: Miniaturized PCB v1.0</span>
              <span className="text-teal-600 dark:text-teal-400">Phase 2 Target</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
