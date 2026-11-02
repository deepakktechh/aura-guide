'use client';
import React from 'react';
import { Link } from '@/components/common/CompatLink';
import {
  CheckCircle2,
  Clock,
  Sparkles,
  Cpu,
  Radio,
  Eye,
  ShieldAlert,
  ArrowRight,
  Battery,
} from 'lucide-react';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';

export const RoadmapPage: React.FC = () => {
  const roadmapPhases = [
    {
      phase: 'Phase 1: Now',
      status: 'Current Working Prototype',
      statusColor: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
      title: 'Breadboard Proximity & Synchronized Haptics',
      description:
        'Functional bench prototype validating forward rangefinding via VL53L0X ToF and synchronous dual-motor tactile actuation driven by an Arduino UNO R3.',
      deliverables: [
        'Single forward-facing VL53L0X I2C integration (up to 200 cm)',
        'Dual coin vibration motor driver with flyback diode protection',
        'PWM-based proportional haptic frequency & duty cycle logic',
        'Interactive web Guardian Dashboard simulation environment',
      ],
    },
    {
      phase: 'Phase 2: Next',
      status: 'Engineering Refinement',
      statusColor: 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/30',
      title: 'Wearable Ergonomics & Power Subsystem',
      description:
        'Transitioning from lab breadboard to a wearable waist belt attachment with custom 3D-printed enclosure and calibrated battery monitoring.',
      deliverables: [
        'CAD design & 3D printing of ergonomic buckle sensor mount',
        'LiPo 3.7V battery pack integration with TP4056 charging circuit',
        'ADC resistor divider for calibrated battery percentage reporting',
        'Tactile belt strap adjustment and comfort evaluation',
      ],
    },
    {
      phase: 'Phase 3: Connected IoT',
      status: 'Phase 2 Master Scope',
      statusColor: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
      title: 'ESP32 Wireless Telemetry & Guardian Sync',
      description:
        'Upgrading to an ESP32 dual-core microcontroller to enable encrypted telemetry, optional consent-based GPS tracking, and a physical emergency SOS button.',
      deliverables: [
        'ESP32 firmware architecture with TLS/HTTPS or MQTT telemetry',
        'Neo-6M GPS integration with consent-based sharing controls',
        'Hardware debounced SOS button triggering Guardian alerts',
        'Live Guardian Dashboard data provider with authenticated role access',
      ],
    },
    {
      phase: 'Phase 4: Exploratory',
      status: 'Future Research Horizon',
      statusColor: 'bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/30',
      title: 'Multi-Sensor Coverage & Edge AI Assistance',
      description:
        'Exploratory advanced enhancements subject to user feedback, battery trade-offs, and ethical privacy evaluations.',
      deliverables: [
        'Multi-ToF sensor array for 180° true left/right hazard localization',
        'Bone-conduction directional audio tones to supplement haptics',
        'Low-power TinyML computer vision for door, stair, and obstacle classification',
        'Progressive Web App (PWA) with offline caching and guardian push alerts',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-aura-light-action dark:text-aura-dark-cyan font-bold">
          Development Roadmap
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text mt-2">
          From Breadboard to Connected Wearable
        </h1>
        <p className="mt-4 text-base text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
          A phased, disciplined path from our current classroom Arduino prototype to an encrypted, consent-based
          guardian ecosystem.
        </p>
      </div>

      {/* Timeline cards */}
      <div className="space-y-8">
        {roadmapPhases.map((phase, idx) => (
          <div
            key={idx}
            className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-md hover:border-aura-light-action/50 dark:hover:border-aura-dark-cyan/50 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <span className="font-mono text-xs font-bold text-aura-light-action dark:text-aura-dark-cyan uppercase tracking-wider">
                {phase.phase}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${phase.statusColor}`}
              >
                {phase.status}
              </span>
            </div>

            <h3 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text mb-2">
              {phase.title}
            </h3>

            <p className="text-sm text-aura-light-muted dark:text-aura-dark-muted mb-6 leading-relaxed">
              {phase.description}
            </p>

            <div className="pt-4 border-t border-aura-light-border/60 dark:border-aura-dark-border/40">
              <h4 className="text-xs font-bold uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text font-mono mb-3">
                Key Milestone Deliverables
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-aura-light-text dark:text-aura-dark-text">
                {phase.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Roadmap Governance Callout */}
      <div className="p-6 rounded-card bg-slate-100 dark:bg-slate-800/60 border border-aura-light-border dark:border-aura-dark-border text-xs leading-relaxed text-aura-light-muted dark:text-aura-dark-muted">
        <h4 className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text mb-1">
          Engineering Governance Note
        </h4>
        <p>
          Each phase requires dedicated user approval and rigorous bench testing before advancing. Real IoT telemetry
          or physical SOS triggers will only be marked <strong>“LIVE VERIFIED”</strong> once the physical ESP32
          hardware is configured and validated.
        </p>
      </div>

      {/* Navigation CTA */}
      <div className="flex justify-center gap-4">
        <Link to="/dashboard">
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Launch Simulation Dashboard
          </Button>
        </Link>
        <Link to="/team">
          <Button variant="secondary">Contact Project Team</Button>
        </Link>
      </div>
    </div>
  );
};
