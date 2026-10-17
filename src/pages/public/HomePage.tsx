import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Zap,
  Cpu,
  Activity,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  BarChart,
  Eye,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { BentoCard } from '../../components/ui/BentoCard';
import { Badge } from '../../components/ui/Badge';
import { RESEARCH_STATS } from '../../data/demo/fixtures';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-aura-light-action dark:text-aura-dark-cyan" />
          <span>Assistive Technology Prototype · SRM IST CSE Core-N</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-aura-light-text dark:text-aura-dark-text tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Feel the Space.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-aura-light-action via-teal-500 to-cyan-400 dark:from-aura-dark-cyan dark:via-teal-300 dark:to-cyan-200">
            Navigate with Confidence.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-xl text-aura-light-muted dark:text-aura-dark-muted max-w-2xl mx-auto leading-relaxed">
          A prototype wearable belt providing intuitive tactile warnings for obstacles detected ahead. Designed to
          complement white canes with elevated frontal awareness.
        </p>

        {/* Hero CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/how-it-works">
            <Button size="lg" variant="secondary" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              See How It Works
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button
              size="lg"
              variant="primary"
              icon={<Zap className="w-5 h-5" />}
              className="shadow-glow-cyan"
            >
              Try Interactive Demo
            </Button>
          </Link>
        </div>

        <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-4">
          Non-medical research prototype · Designed to supplement mobility training
        </p>

        {/* 2. Conceptual Belt Illustration */}
        <div className="mt-12 max-w-3xl mx-auto p-8 rounded-feature bg-gradient-to-b from-aura-light-card to-aura-light-surface dark:from-aura-dark-card dark:to-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-aura-light-muted dark:text-aura-dark-muted mb-6">
            <span className="font-mono uppercase font-bold text-cyan-600 dark:text-cyan-400">
              Prototype Form Factor Concept
            </span>
            <Badge variant="demo">Interactive Simulation</Badge>
          </div>

          {/* Interactive tactile arc visualizer */}
          <div className="relative py-12 flex flex-col items-center justify-center">
            {/* Frontal laser beam cone */}
            <div className="w-48 h-24 border-t-2 border-l-2 border-r-2 border-dashed border-cyan-400/50 rounded-t-full mb-2 flex items-center justify-center">
              <span className="text-[11px] font-mono font-semibold text-cyan-500">
                Frontal Cone (VL53L0X)
              </span>
            </div>

            {/* Ergonomic belt harness representation */}
            <div className="w-full max-w-md h-14 rounded-full bg-slate-300 dark:bg-slate-800 border-2 border-cyan-500/40 flex items-center justify-between px-6 shadow-glow-cyan">
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-aura-dark-bg font-bold flex items-center justify-center text-xs">
                M1
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-aura-light-text dark:text-aura-dark-text">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>CENTRAL SENSOR HUB</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-cyan-500 text-aura-dark-bg font-bold flex items-center justify-center text-xs">
                M2
              </div>
            </div>

            <p className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted mt-4">
              Dual motors (M1 &amp; M2) vibrate together to indicate frontal proximity distance.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Problem Statement & Research Survey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-bold">
            The Mobility Challenge
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-aura-light-text dark:text-aura-dark-text mt-2">
            Ground-level canes miss chest-height obstacles.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted">
            While white canes provide essential ground topography and drop-off cues, head-height hazards like open
            windows, tree branches, and signboards remain difficult to detect safely before contact.
          </p>
        </div>

        {/* Survey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESEARCH_STATS.slice(0, 3).map((stat, idx) => (
            <BentoCard key={idx} className="relative overflow-hidden">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-heading font-extrabold text-5xl text-aura-light-action dark:text-aura-dark-cyan">
                  {stat.percentage}%
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-aura-light-muted dark:text-aura-dark-muted">
                  {stat.context}
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text mb-2">
                {stat.headline}
              </h3>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
                {stat.description}
              </p>
            </BentoCard>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            to="/research"
            className="inline-flex items-center gap-1.5 text-xs text-aura-light-action dark:text-aura-dark-cyan hover:underline font-semibold"
          >
            <span>View full exploratory research findings (n=10)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 4. How It Works in 3 Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-feature bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-bold">
              Autonomous Loop
            </span>
            <h2 className="font-heading font-bold text-3xl text-aura-light-text dark:text-aura-dark-text mt-1">
              Sense. Decide. Feel.
            </h2>
            <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted mt-2">
              The wearable operates entirely offline with zero latency or cloud dependencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-5 rounded-card bg-aura-light-card/60 dark:bg-aura-dark-card/60 border border-aura-light-border dark:border-aura-dark-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyan-500 flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
                Sense: Laser Rangefinding
              </h3>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-2 leading-relaxed">
                A single forward-mounted VL53L0X Time-of-Flight sensor measures distance up to 200 cm via photon
                flight time, unaffected by surface color.
              </p>
            </div>

            <div className="p-5 rounded-card bg-aura-light-card/60 dark:bg-aura-dark-card/60 border border-aura-light-border dark:border-aura-dark-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
                Decide: Onboard Thresholds
              </h3>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-2 leading-relaxed">
                The microcontroller maps millimeter distance into discrete tactile warning zones: Safe (&gt;150 cm),
                Approaching (60–150 cm), or Close Hazard (&lt;60 cm).
              </p>
            </div>

            <div className="p-5 rounded-card bg-aura-light-card/60 dark:bg-aura-dark-card/60 border border-aura-light-border dark:border-aura-dark-border flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
                Feel: Synchronous Haptics
              </h3>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-2 leading-relaxed">
                Both left and right coin vibration motors pulse together, increasing frequency and intensity as the
                hazard draws nearer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Benefits Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading font-bold text-3xl text-aura-light-text dark:text-aura-dark-text">
            Designed for Dignity &amp; Everyday Usability
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoCard
            icon={<ShieldCheck className="w-5 h-5 text-emerald-500" />}
            title="Hands-Free Wearable"
            subtitle="Ergonomic belt attachment"
          >
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              Fastens around the waist, keeping both hands completely free for a white cane, guide dog leash, or daily
              tasks.
            </p>
          </BentoCard>

          <BentoCard
            icon={<Activity className="w-5 h-5 text-cyan-500" />}
            title="Silent Haptic Cues"
            subtitle="Discreet tactile feedback"
          >
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              Vibration alerts do not mask vital environmental audio cues such as pedestrian signals, approaching
              traffic, or echoes.
            </p>
          </BentoCard>

          <BentoCard
            icon={<Cpu className="w-5 h-5 text-blue-500" />}
            title="100% Offline Sensing"
            subtitle="Zero cloud dependency"
          >
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              Primary obstacle proximity processing runs locally on the microcontroller, guaranteeing uninterrupted
              safety in offline areas.
            </p>
          </BentoCard>

          <BentoCard
            icon={<Compass className="w-5 h-5 text-amber-500" />}
            title="White Cane Synergy"
            subtitle="Multi-level awareness"
          >
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              Focuses specifically on chest-level obstacles, while the cane continues to monitor terrain and ground
              drop-offs.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* 6. Current Prototype vs Planned Phase 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
                Current Prototype vs. Phase 2 Roadmap
              </h2>
              <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
                Transparent distinction between what works on the breadboard today and what is scheduled for IoT
                connected development.
              </p>
            </div>
            <Link to="/roadmap">
              <Button size="sm" variant="secondary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                View Full Roadmap
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Working in Current Prototype</span>
              </div>
              <ul className="space-y-2 text-xs text-aura-light-text dark:text-aura-dark-text">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Arduino UNO R3 ATmega328P processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Single VL53L0X Time-of-Flight forward proximity sensing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Dual coin vibration motors pulsing together</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Transistor &amp; flyback diode inductive protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Interactive web Guardian Dashboard simulation</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-cyan-500/30 space-y-3">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Planned for Phase 2 Integration</span>
              </div>
              <ul className="space-y-2 text-xs text-aura-light-text dark:text-aura-dark-text">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>ESP32 Wi-Fi &amp; Bluetooth wireless telemetry</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Neo-6M GPS module for consent-based tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Dedicated physical hardware SOS emergency button</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Authenticated Guardian Dashboard sync (Firebase/MQTT)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>Calibrated ADC battery voltage telemetry</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Bottom Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 rounded-feature bg-gradient-to-r from-aura-light-action/10 via-cyan-500/10 to-teal-500/10 dark:from-aura-dark-cyan/15 dark:via-blue-600/15 dark:to-teal-400/15 border border-cyan-500/30 shadow-2xl">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-aura-light-text dark:text-aura-dark-text">
            Experience the Haptic Simulator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-aura-light-muted dark:text-aura-dark-muted max-w-xl mx-auto">
            Test how the wearable responds to forward obstacle distances in real-time. Slide the proximity gauge and
            observe dual-motor feedback responses.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link to="/dashboard">
              <Button size="lg" variant="primary" icon={<ExternalLink className="w-5 h-5" />}>
                Launch Demo Guardian Dashboard
              </Button>
            </Link>
            <Link to="/prototype">
              <Button size="lg" variant="secondary">
                Inspect Hardware Schematics
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
