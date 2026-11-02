'use client';
import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import {
  Sun,
  Moon,
  Laptop,
  Eye,
  Sliders,
  Keyboard,
  Lock,
  CheckCircle2,
  Accessibility,
} from 'lucide-react';

export const PreferencesPage: React.FC = () => {
  const { theme, setTheme, highContrast, setHighContrast } = useTheme();

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="neutral">Interface Settings</Badge>
            <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
              WCAG 2.2 AA Conformance
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Account &amp; Accessibility Preferences
          </h1>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Customize visual theme contrast, motor feedback preferences, and assistive navigation options.
          </p>
        </div>
      </div>

      {/* Theme Selection Section */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-4">
        <div>
          <h2 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
            Color Palette &amp; Contrast Theme
          </h2>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
            Choose your preferred lighting mode. Selections are stored locally in your browser.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button
            type="button"
            onClick={() => setTheme('dark')}
            className={`p-4 rounded-xl border flex flex-col items-center text-center gap-2 transition-all ${
              theme === 'dark'
                ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 ring-2 ring-cyan-400'
                : 'bg-slate-100 dark:bg-slate-800/60 border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted'
            }`}
          >
            <Moon className="w-6 h-6 text-cyan-400" />
            <span className="font-bold text-sm">Dark Theme</span>
            <span className="text-[11px] opacity-80">Futuristic deep navy (#071321)</span>
          </button>

          <button
            type="button"
            onClick={() => setTheme('light')}
            className={`p-4 rounded-xl border flex flex-col items-center text-center gap-2 transition-all ${
              theme === 'light'
                ? 'bg-cyan-500/10 border-cyan-600 text-cyan-800 ring-2 ring-cyan-600'
                : 'bg-slate-100 dark:bg-slate-800/60 border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted'
            }`}
          >
            <Sun className="w-6 h-6 text-amber-500" />
            <span className="font-bold text-sm">Light Theme</span>
            <span className="text-[11px] opacity-80">High-clarity soft white (#F5F9FC)</span>
          </button>

          <button
            type="button"
            onClick={() => setTheme('system')}
            className={`p-4 rounded-xl border flex flex-col items-center text-center gap-2 transition-all ${
              theme === 'system'
                ? 'bg-cyan-500/10 border-cyan-400 text-cyan-300 ring-2 ring-cyan-400'
                : 'bg-slate-100 dark:bg-slate-800/60 border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted'
            }`}
          >
            <Laptop className="w-6 h-6 text-slate-400" />
            <span className="font-bold text-sm">System Default</span>
            <span className="text-[11px] opacity-80">Matches operating system mode</span>
          </button>
        </div>
      </div>

      {/* Accessibility Controls */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-5">
        <div className="flex items-center gap-2">
          <Accessibility className="w-5 h-5 text-aura-light-action dark:text-aura-dark-cyan" />
          <h2 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
            Assistive Technology &amp; Usability Options
          </h2>
        </div>

        <div className="space-y-4 text-xs">
          {/* High Contrast Toggle */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50">
            <div>
              <span className="font-bold block text-sm">Enhanced Border Contrast</span>
              <span className="text-aura-light-muted dark:text-aura-dark-muted">
                Increases contrast of UI card borders and focus rings to &gt;7:1 for low-vision readability.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setHighContrast(!highContrast)}
              className={`w-12 h-6 rounded-full transition-colors relative ${
                highContrast ? 'bg-cyan-500' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                  highContrast ? 'left-6.5 translate-x-6' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          {/* Reduced Motion indicator */}
          <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm">prefers-reduced-motion Honored</span>
              <span className="text-aura-light-muted dark:text-aura-dark-muted">
                When your operating system requests reduced motion, decorative animations and pulsating indicators are
                automatically disabled across the dashboard.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Helper */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-4">
        <div className="flex items-center gap-2">
          <Keyboard className="w-5 h-5 text-aura-light-action dark:text-aura-dark-cyan" />
          <h2 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
            Keyboard Navigation Quick Reference
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-between">
            <span className="text-aura-light-text dark:text-aura-dark-text">Navigate Controls</span>
            <kbd className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              Tab / Shift+Tab
            </kbd>
          </div>
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-between">
            <span className="text-aura-light-text dark:text-aura-dark-text">Adjust Distance Slider</span>
            <kbd className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              Left / Right Arrows
            </kbd>
          </div>
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-between">
            <span className="text-aura-light-text dark:text-aura-dark-text">Activate Buttons</span>
            <kbd className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              Enter / Space
            </kbd>
          </div>
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50 flex items-center justify-between">
            <span className="text-aura-light-text dark:text-aura-dark-text">Close Dialogs &amp; Modals</span>
            <kbd className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
              Escape
            </kbd>
          </div>
        </div>
      </div>

      {/* Planned Guardian Account Authentication Banner */}
      <div className="p-6 rounded-card bg-slate-100 dark:bg-slate-800/60 border border-slate-300 dark:border-slate-700 space-y-3">
        <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-wider font-mono">
          <Lock className="w-4 h-4" />
          <span>Guardian Authentication (Phase 2 Roadmap)</span>
        </div>
        <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
          Encrypted Multi-Factor Sign-In
        </h3>
        <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
          Production guardian authentication will leverage Firebase Auth or OAuth2 with mandatory end-to-end device
          pairing. In this MVP demo sandbox, private accounts are bypassed so judges, faculty, and testers can explore
          simulated telemetry without registration friction.
        </p>
      </div>
    </div>
  );
};
