'use client';
import React from 'react';
import { Link } from '@/components/common/CompatLink';
import { RESEARCH_STATS } from '../../data/demo/fixtures';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import { BarChart3, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ResearchPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-aura-light-action dark:text-aura-dark-cyan font-bold">
          Exploratory User Research
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text mt-2">
          Survey Findings &amp; User Need Discovery
        </h1>
        <p className="mt-4 text-base text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
          Initial exploratory survey conducted with ten visually impaired respondents ($n = 10$) to guide the design
          of tactile cues, feedback preferences, and offline autonomy requirements.
        </p>
      </div>

      {/* Mandatory Statistical Scope Warning Banner */}
      <div className="p-6 rounded-card bg-blue-500/10 border border-blue-500/20 text-xs">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-heading font-bold text-sm text-blue-900 dark:text-blue-200">
              Methodological Disclaimer &amp; Sample Size Disclosure
            </h4>
            <p className="text-blue-800 dark:text-blue-300 leading-relaxed">
              These percentages represent an initial qualitative exploratory survey of ten individuals ($n = 10$).
              They provide formative design inspiration and must not be interpreted as statistically significant
              population data or clinical efficacy claims. Device performance testing with target wearers requires formal
              institutional ethics clearance and will follow in subsequent project phases.
            </p>
          </div>
        </div>
      </div>

      {/* Statistical Survey Results Breakdown */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
            Exploratory Survey Responses ($n = 10$)
          </h2>
          <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
            DTM Academic Study
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {RESEARCH_STATS.map((stat, idx) => (
            <BentoCard key={idx} className="space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="font-heading font-extrabold text-5xl text-aura-light-action dark:text-aura-dark-cyan">
                  {stat.percentage}%
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-aura-light-muted dark:text-aura-dark-muted">
                  {Math.round((stat.percentage / 100) * 10)} of 10 respondents
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
                  {stat.headline}
                </h3>
                <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-aura-light-action to-cyan-400 dark:from-aura-dark-cyan dark:to-teal-300 rounded-full"
                  style={{ width: `${stat.percentage}%` }}
                />
              </div>
            </BentoCard>
          ))}
        </div>
      </div>

      {/* Qualitative Insights */}
      <div className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-4">
        <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
          Key Takeaways Shaping the AURA GUIDE Architecture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs text-aura-light-muted dark:text-aura-dark-muted">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 space-y-2">
            <h4 className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text">
              1. Audio Masking Caution
            </h4>
            <p>
              Respondents warned that headphones or loud audio cues block environmental awareness (footsteps, sirens,
              traffic). Tactile belt vibration was strongly preferred as the primary cue.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 space-y-2">
            <h4 className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text">
              2. Absolute Offline Requirement
            </h4>
            <p>
              80% insisted that detection must not falter in basements, concrete stairwells, or subway stations where
              mobile data drops. All proximity safety logic must execute locally.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/50 space-y-2">
            <h4 className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text">
              3. Cane Ergonomics
            </h4>
            <p>
              The attachment must not occupy the hands or wrist, preserving natural white cane sweep rhythms and
              tactile feedback transmitted through the cane tip.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="flex justify-center gap-4">
        <Link to="/roadmap">
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            See Future Integration Roadmap
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="secondary">Test Interactive Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};
