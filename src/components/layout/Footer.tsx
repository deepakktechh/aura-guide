import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ShieldCheck, Heart, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-aura-light-border dark:border-aura-dark-border bg-aura-light-card/40 dark:bg-aura-dark-card/40 text-aura-light-muted dark:text-aura-dark-muted transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-aura-light-action dark:bg-aura-dark-cyan text-aura-dark-bg flex items-center justify-center font-bold">
                <Compass className="w-4 h-4 text-aura-dark-bg" />
              </div>
              <span className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
                AURA GUIDE
              </span>
            </Link>
            <p className="text-xs leading-relaxed">
              <strong>Spatial Awareness Attachment for the Visually Impaired.</strong> A haptic-first wearable prototype
              providing intuitive tactile warnings for frontal obstacles.
            </p>
            <p className="text-[11px] italic text-aura-light-action dark:text-aura-dark-cyan">
              “Feel the Space. Navigate with Confidence.”
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text font-mono">
              Project Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  Home &amp; Showcase
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  About &amp; Mission
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/prototype" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  Hardware &amp; Prototype
                </Link>
              </li>
            </ul>
          </div>

          {/* Research & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text font-mono">
              Research &amp; Specs
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/research" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  Exploratory Survey (n = 10)
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  ESP32 &amp; IoT Roadmap
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  Student Team &amp; Faculty
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-aura-light-text dark:hover:text-aura-dark-text transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Academic & Institution */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text font-mono">
              Academic Context
            </h4>
            <div className="text-xs space-y-1.5">
              <p className="font-semibold text-aura-light-text dark:text-aura-dark-text">
                SRM Institute of Science and Technology
              </p>
              <p>Ramapuram Campus, Chennai</p>
              <p>Department of Computer Science &amp; Engineering (CSE Core-N)</p>
              <p className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted">
                Design Thinking &amp; Methodology (DTM) Project
              </p>
              <div className="pt-2">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-1.5 text-xs text-aura-light-action dark:text-aura-dark-cyan hover:underline font-semibold"
                >
                  <span>Launch Demo Dashboard</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Safety & Honest Disclaimer Banner */}
        <div className="mt-10 pt-6 border-t border-aura-light-border/60 dark:border-aura-dark-border/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-2.5 max-w-3xl">
            <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <p className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              <strong>Academic Research Disclaimer:</strong> AURA GUIDE is an early student engineering prototype developed
              for educational purposes. It is not a certified medical device and does not claim to prevent accidents or
              replace white canes, guide animals, or professional orientation-and-mobility training.
            </p>
          </div>
          <div className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted flex items-center gap-1 flex-shrink-0">
            <span>Built with care for accessibility</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>2026 SRM IST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
