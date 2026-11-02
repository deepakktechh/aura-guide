'use client';
import React from 'react';
import { Link } from '@/components/common/CompatLink';
import { ArrowRight, Play, Radar, Activity, UserCheck, Sparkles } from 'lucide-react';

interface HeroEditorialProps {
  onScrollToDemo?: () => void;
}

export const HeroEditorial: React.FC<HeroEditorialProps> = ({ onScrollToDemo }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 border-b border-aura-light-border/60 dark:border-aura-dark-border/40">
      {/* Subtle radial ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-aura-dark-cyan/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Typography & Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Overline Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-aura-dark-surface/80 border border-slate-300 dark:border-aura-dark-border/80 text-aura-light-muted dark:text-aura-dark-muted text-xs font-mono tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-aura-light-action dark:bg-aura-dark-cyan animate-ping" />
              <span>Assistive tech for a more independent tomorrow</span>
            </div>

            {/* Giant Editorial Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl xl:text-7xl text-aura-light-text dark:text-aura-dark-text tracking-tight leading-[1.08]">
                Feel the space.
                <span className="block text-aura-light-action dark:text-aura-dark-cyan">
                  Navigate with confidence.
                </span>
              </h1>
            </div>

            {/* Body paragraph */}
            <p className="text-base sm:text-lg text-aura-light-muted dark:text-aura-dark-muted max-w-xl leading-relaxed">
              A wearable spatial awareness system that uses forward-distance sensing and tactile feedback to help you move through the world with greater confidence and independence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/prototype"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-aura-light-action dark:bg-aura-dark-cyan text-white dark:text-aura-dark-bg font-semibold text-sm hover:brightness-110 active:scale-[0.98] transition-all shadow-glow-cyan"
              >
                <span>Explore the Prototype</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {onScrollToDemo ? (
                <button
                  type="button"
                  onClick={onScrollToDemo}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-200/80 dark:bg-aura-dark-surface border border-slate-300 dark:border-aura-dark-border text-aura-light-text dark:text-aura-dark-text font-medium text-sm hover:bg-slate-300/60 dark:hover:bg-aura-dark-card transition-all"
                >
                  <Play className="w-4 h-4 text-aura-light-action dark:text-aura-dark-cyan fill-current" />
                  <span>Try Simulator</span>
                </button>
              ) : (
                <a
                  href="#simulator"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-200/80 dark:bg-aura-dark-surface border border-slate-300 dark:border-aura-dark-border text-aura-light-text dark:text-aura-dark-text font-medium text-sm hover:bg-slate-300/60 dark:hover:bg-aura-dark-card transition-all"
                >
                  <Play className="w-4 h-4 text-aura-light-action dark:text-aura-dark-cyan fill-current" />
                  <span>Try Simulator</span>
                </a>
              )}
            </div>

            {/* Micro Feature Indicators */}
            <div className="pt-8 border-t border-aura-light-border/60 dark:border-aura-dark-border/40 grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-aura-dark-cyan/10 flex items-center justify-center text-aura-light-action dark:text-aura-dark-cyan">
                  <Radar className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text font-semibold">
                  Senses
                </div>
                <div className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
                  What's ahead
                </div>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-aura-dark-teal/10 flex items-center justify-center text-teal-600 dark:text-aura-dark-teal">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text font-semibold">
                  Tactile
                </div>
                <div className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
                  Dual-motor cues
                </div>
              </div>

              <div className="space-y-1">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-aura-dark-cyan/10 flex items-center justify-center text-aura-light-action dark:text-aura-dark-cyan">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text font-semibold">
                  Greater
                </div>
                <div className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
                  Confidence
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Belt Visual with Concentric Sonar Waves (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-aura-light-border dark:border-aura-dark-border/80 bg-aura-light-surface dark:bg-aura-dark-surface shadow-2xl">
              
              {/* Product Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src="/assets/belt-hero.jpg"
                  alt="Aura Guide wearable belt concept with central forward-facing VL53L0X time-of-flight sensor"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Simulated Frontal ToF Sonar Waves Emanating from the Sensor Clip */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
                  <div className="relative w-48 h-48 -mr-16">
                    {/* Concentric expanding wave rings */}
                    <div className="absolute inset-0 rounded-full border border-cyan-400/60 animate-sonar" />
                    <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-sonar-delay-1" />
                    <div className="absolute inset-0 rounded-full border border-cyan-300/40 animate-sonar-delay-2" />
                  </div>
                </div>

                {/* Dark gradient overlay at bottom for readable caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-aura-dark-bg/95 via-aura-dark-bg/60 to-transparent p-5 pt-12 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-aura-dark-text leading-snug">
                        Detects obstacles ahead using a forward-facing ToF sensor.
                      </p>
                      <p className="text-[11px] font-mono text-aura-dark-cyan mt-1">
                        0.2 – 2.0 m range (VL53L0X)
                      </p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded text-[10px] font-mono bg-aura-dark-card/90 border border-aura-dark-border/80 text-aura-dark-muted">
                      PROTOTYPE CONCEPT
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical footnote */}
              <div className="px-5 py-3 bg-slate-100/90 dark:bg-aura-dark-card/60 border-t border-aura-light-border/60 dark:border-aura-dark-border/60 flex items-center justify-between text-[11px] text-aura-light-muted dark:text-aura-dark-muted">
                <span>Belt-mounted wearable concept</span>
                <span className="font-mono text-cyan-600 dark:text-cyan-400">Non-commercial research</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
