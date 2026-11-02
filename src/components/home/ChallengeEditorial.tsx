import React from 'react';
import { Eye, ShieldAlert, Sparkles, Compass } from 'lucide-react';

export const ChallengeEditorial: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-b border-aura-light-border/60 dark:border-aura-dark-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              <span className="w-4 h-0.5 bg-cyan-500" />
              <span>The Challenge</span>
            </div>

            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text tracking-tight leading-tight">
              Everyday environments can be unpredictable.
            </h2>

            <p className="text-base sm:text-lg text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              For people with visual impairments, navigating new or familiar spaces can come with uncertainty — from low barriers and curbs to waist-height protruding obstacles that fall outside a white cane’s ground arc.
            </p>

            <p className="text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              AURA GUIDE does not replace the white cane or mobility training. Instead, it aims to explore a quiet, supplementary layer of spatial awareness through simple, intuitive tactile warnings felt through a wearable belt.
            </p>

            {/* Exploratory survey insight box */}
            <div className="p-5 rounded-2xl bg-slate-100/90 dark:bg-aura-dark-surface/90 border border-aura-light-border dark:border-aura-dark-border/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-semibold uppercase">
                  Exploratory User Research · 10 Respondents
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-aura-dark-card text-aura-light-muted dark:text-aura-dark-muted">
                  SURVEY FINDING
                </span>
              </div>
              <p className="text-xs sm:text-sm text-aura-light-text dark:text-aura-dark-text leading-relaxed">
                90% of surveyed respondents expressed interest in wearable assistive tech, noting that unexpected mid-level obstacles (scaffolding, hanging branches, open car trunks) are among the most stressful navigation hazards.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Photo with Overlay (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-aura-light-border dark:border-aura-dark-border/80 shadow-xl bg-slate-900 group">
              <img
                src="/assets/cane-traveler.jpg"
                alt="Person walking with white cane in modern architecture"
                className="w-full aspect-[3/4] object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />

              {/* Editorial floating note card on the image */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-aura-dark-bg/90 backdrop-blur-md border border-aura-dark-border/60 text-white space-y-1.5 shadow-lg">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Obstacles aren't always at ground level.</span>
                </div>
                <p className="text-xs text-aura-dark-muted leading-snug">
                  From mid-height barriers to unexpected obstructions, multi-level awareness helps build confident, independent travel.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
