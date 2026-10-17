import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/demo/fixtures';
import { ChevronDown, HelpCircle, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export const FaqPage: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-mono uppercase tracking-wider text-aura-light-action dark:text-aura-dark-cyan font-bold">
          Questions &amp; Clarifications
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted max-w-xl mx-auto leading-relaxed">
          Clear answers about current prototype capabilities, sensory limitations, and the future connected roadmap.
        </p>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-card overflow-hidden border border-aura-light-border dark:border-aura-dark-border bg-aura-light-surface dark:bg-aura-dark-surface transition-colors"
            >
              <button
                onClick={() => toggleIndex(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-aura-light-action dark:text-aura-dark-cyan transition-transform duration-200 flex-shrink-0 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  className="px-6 pb-5 pt-1 text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed border-t border-aura-light-border/40 dark:border-aura-dark-border/40"
                >
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Honesty Callout */}
      <div className="p-6 rounded-card bg-cyan-500/10 border border-cyan-500/20 text-xs flex items-start gap-3">
        <HelpCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-heading font-bold text-sm text-cyan-900 dark:text-cyan-200">
            Have an unlisted question?
          </h4>
          <p className="text-cyan-800 dark:text-cyan-300 leading-relaxed">
            We are continuously updating this documentation as prototype tests advance. Reach out via our team page
            or test the interactive Guardian Dashboard to observe simulated sensor behavior.
          </p>
        </div>
      </div>

      {/* CTAs */}
      <div className="flex justify-center gap-4">
        <Link to="/dashboard">
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Try Demo Guardian Dashboard
          </Button>
        </Link>
        <Link to="/prototype">
          <Button variant="secondary">View Hardware Schematic</Button>
        </Link>
      </div>
    </div>
  );
};
