'use client';
import React from 'react';
import { Link } from '@/components/common/CompatLink';
import { HARDWARE_COMPONENTS } from '../../data/demo/fixtures';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import { Cpu, AlertTriangle, ShieldCheck, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export const PrototypePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-aura-light-action dark:text-aura-dark-cyan font-bold">
          Hardware Engineering
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text mt-2">
          Classroom Prototype &amp; BOM
        </h1>
        <p className="mt-4 text-base text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
          Detailed bill of materials, circuit topology, and physical breadboard implementation built for our Design
          Thinking and Methodology demonstration.
        </p>
      </div>

      {/* Classroom Breadboard Visual Card */}
      <div className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
              Lab Implementation
            </span>
            <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
              Current Breadboard Assembly
            </h2>
            <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              The physical prototype consists of an Arduino UNO R3 connected via breadboard jumper wires to an I2C
              VL53L0X breakout board, driving two 3V ERM coin vibration motors via 2N2222 NPN switching transistors and
              flyback suppression diodes.
            </p>
            <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-xs text-aura-light-muted dark:text-aura-dark-muted">
              <strong>Asset Note:</strong> High-resolution classroom laboratory photos and breadboard bench photographs
              can be imported into <code className="text-cyan-500 font-mono">/public/assets/</code> upon request.
            </div>
          </div>

          {/* Graphical Representation of the Breadboard Setup */}
          <div className="w-full md:w-80 p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 text-white flex flex-col items-center justify-center text-center shadow-2xl">
            <Cpu className="w-14 h-14 text-cyan-400 mb-3" />
            <span className="font-heading font-bold text-base">SRM IST Prototype Rig</span>
            <span className="text-[11px] font-mono text-slate-400 mt-1">Arduino UNO R3 + VL53L0X</span>
            <div className="mt-4 pt-3 border-t border-slate-800 w-full flex items-center justify-around text-[10px] text-cyan-300 font-mono">
              <span>5V USB Supply</span>
              <span>•</span>
              <span>I2C 400kHz</span>
              <span>•</span>
              <span>PWM Motor Out</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bill of Materials (BOM) Table */}
      <div className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
              Hardware Components &amp; Bill of Materials
            </h3>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
              Active components in the current prototype versus future Phase 2 additions.
            </p>
          </div>
          <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
            {HARDWARE_COMPONENTS.length} Modules Tracked
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted font-mono uppercase">
                <th className="py-3 px-3">Module Name</th>
                <th className="py-3 px-3">Functional Role</th>
                <th className="py-3 px-3">Technical Purpose</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-aura-light-border/60 dark:divide-aura-dark-border/40 text-aura-light-text dark:text-aura-dark-text">
              {HARDWARE_COMPONENTS.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 px-3 font-semibold text-aura-light-text dark:text-aura-dark-text">
                    {item.component}
                  </td>
                  <td className="py-3.5 px-3 text-cyan-600 dark:text-cyan-400 font-medium">{item.role}</td>
                  <td className="py-3.5 px-3 text-aura-light-muted dark:text-aura-dark-muted">{item.purpose}</td>
                  <td className="py-3.5 px-3">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold ${
                        item.status.includes('Verified')
                          ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                          : 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Strengths and Known Limitations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-card bg-emerald-500/5 border border-emerald-500/20 space-y-3">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-base">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="font-heading">Current Prototype Strengths</h3>
          </div>
          <ul className="space-y-2 text-xs text-aura-light-text dark:text-aura-dark-text leading-relaxed">
            <li>• Rapid 30ms response latency prevents perceptible delay between sensor reading and vibration cue.</li>
            <li>• ToF laser accurately detects dark clothing, glass, and mirrors where ultrasound would reflect erratically.</li>
            <li>• Zero network overhead: obstacle detection operates independently of Wi-Fi or cellular connections.</li>
            <li>• Dual motors distribute mechanical vibration comfortably across the belt without localized skin numbness.</li>
          </ul>
        </div>

        <div className="p-6 rounded-card bg-amber-500/5 border border-amber-500/20 space-y-3">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-base">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-heading">Known Limitations &amp; Next Steps</h3>
          </div>
          <ul className="space-y-2 text-xs text-aura-light-text dark:text-aura-dark-text leading-relaxed">
            <li>• 25° narrow field of view does not detect peripheral obstacles off-axis from wearer's forward direction.</li>
            <li>• Current Arduino UNO R3 form factor is too bulky for everyday all-day wearable concealment.</li>
            <li>• No onboard wireless chip or battery fuel gauge circuit is present on the current breadboard.</li>
            <li>• Both motors vibrate in sync; directional left versus right navigation cues are not supported.</li>
          </ul>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="flex justify-center gap-4">
        <Link to="/research">
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Review Survey &amp; Research Data
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="secondary">Launch Simulation Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};
