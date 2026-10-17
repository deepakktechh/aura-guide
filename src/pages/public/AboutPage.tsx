import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Heart,
  ShieldAlert,
  Lightbulb,
  CheckCircle,
  Users,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-aura-light-action dark:text-aura-dark-cyan font-bold">
          About AURA GUIDE
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text mt-2">
          Origin, Mission &amp; Ethical Framework
        </h1>
        <p className="mt-4 text-base text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
          Developed as part of the Design Thinking and Methodology (DTM) curriculum at SRM Institute of Science and
          Technology, Ramapuram, AURA GUIDE explores how simple tactile technology can enhance spatial independence.
        </p>
      </div>

      {/* Origin Story Bento */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase font-bold text-cyan-600 dark:text-cyan-400">
            The Project Origin
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Rooted in Human-Centered Design Thinking
          </h2>
          <p className="text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
            During our field observations and exploratory interviews with visually impaired individuals, a recurring
            safety pattern emerged: traditional white canes are unmatched for detecting surface drops, stairs, and low
            curbs, but leave the upper torso and head vulnerable to protruding objects.
          </p>
          <p className="text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
            Rather than attempting to build an overly complex, expensive, or battery-draining robotic system, our team
            focused on a fundamental question: <em>How might we provide an intuitive, hands-free tactile cue for frontal
            hazards without interfering with existing white cane navigation?</em>
          </p>
        </div>

        <div className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-xl space-y-4">
          <h3 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
            Design Thinking Methodology
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
              <span className="font-bold font-mono text-cyan-500">01</span>
              <div>
                <strong>Empathize:</strong> Consulted individuals with visual impairments to understand daily navigation
                frustrations and tactile perception preferences.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
              <span className="font-bold font-mono text-cyan-500">02</span>
              <div>
                <strong>Define:</strong> Focused specifically on chest-level forward hazard detection (60–150 cm)
                using silent vibration.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
              <span className="font-bold font-mono text-cyan-500">03</span>
              <div>
                <strong>Ideate &amp; Prototype:</strong> Constructed breadboard circuits with Arduino UNO R3, VL53L0X
                laser ToF, and dual coin motors.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-100 dark:bg-slate-800/50">
              <span className="font-bold font-mono text-cyan-500">04</span>
              <div>
                <strong>Test &amp; Refine:</strong> Evaluated response latencies, motor duty cycles, and mapped the
                connected Guardian Dashboard roadmap.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ethical Principles */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Core Principles &amp; Ethical Guardrails
          </h2>
          <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted mt-2">
            Every technical decision is guided by respect for wearer autonomy and factual transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard
            icon={<Users className="w-5 h-5 text-cyan-500" />}
            title="Dignity &amp; Agency"
            subtitle="Wearer retains total control"
          >
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              We reject pity-based narratives. Assistive technology should be empowering, discreet, and reliable. The
              wearer decides what alerts to receive and who has access.
            </p>
          </BentoCard>

          <BentoCard
            icon={<ShieldAlert className="w-5 h-5 text-emerald-500" />}
            title="Consent-First Guardian Privacy"
            subtitle="No covert surveillance"
          >
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              In future connected phases, location and health sharing will be strictly opt-in and revocable by the
              wearer at any moment. Background surveillance is prohibited.
            </p>
          </BentoCard>

          <BentoCard
            icon={<AlertTriangle className="w-5 h-5 text-amber-500" />}
            title="Transparent Limitations"
            subtitle="Honest safety boundaries"
          >
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              We explicitly state that the prototype does not replace canes, does not offer 360° hazard awareness, and
              does not guarantee accident prevention.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* Honest Limitations Callout */}
      <div className="p-6 rounded-card bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
          <div className="space-y-1 text-xs">
            <h4 className="font-heading font-bold text-sm">Important Engineering Transparency Note</h4>
            <p className="leading-relaxed">
              AURA GUIDE is an educational, proof-of-concept student prototype. It is not currently certified under medical
              device regulations, CE, FDA, or ISO assistive device standards. It must not be relied upon as the sole
              mobility aid in hazardous environments.
            </p>
          </div>
        </div>
      </div>

      {/* Next steps CTA */}
      <div className="flex justify-center gap-4">
        <Link to="/how-it-works">
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Explore How It Works
          </Button>
        </Link>
        <Link to="/team">
          <Button variant="secondary">Meet the Student Team</Button>
        </Link>
      </div>
    </div>
  );
};
