import React from 'react';
import { Cpu, Zap, Activity, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const HardwareDiagram: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Current Breadboard Prototype Block Diagram */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                Current Working Architecture
              </span>
              <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
                Single-Sensor Frontal Feedback Loop
              </h3>
            </div>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
              Verified classroom breadboard prototype implemented at SRM IST Ramapuram
            </p>
          </div>
        </div>

        {/* Visual Flow diagram */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Step 1: Forward Sensor */}
          <div className="p-4 rounded-xl bg-aura-light-card dark:bg-aura-dark-card border border-aura-light-border dark:border-aura-dark-border flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-aura-light-action dark:text-aura-dark-cyan border border-cyan-500/30 flex items-center justify-center mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              1. Front Proximity
            </span>
            <h4 className="font-heading font-semibold text-sm text-aura-light-text dark:text-aura-dark-text mt-1">
              VL53L0X ToF Sensor
            </h4>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1.5">
              Centrally mounted 940nm laser rangefinder measures forward distance up to 200 cm via I2C bus.
            </p>
          </div>

          {/* Connection arrow 1 */}
          <div className="hidden md:flex justify-center text-aura-light-muted dark:text-aura-dark-muted">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono text-cyan-500">I2C (SDA/SCL)</span>
              <ArrowRight className="w-6 h-6 text-aura-light-action dark:text-aura-dark-cyan" />
            </div>
          </div>

          {/* Step 2: Controller */}
          <div className="p-4 rounded-xl bg-aura-light-card dark:bg-aura-dark-card border border-aura-light-border dark:border-aura-dark-border flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 flex items-center justify-center mb-3">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              2. Logic &amp; PWM
            </span>
            <h4 className="font-heading font-semibold text-sm text-aura-light-text dark:text-aura-dark-text mt-1">
              Arduino UNO R3
            </h4>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1.5">
              Calculates threshold zones: Safe (&gt;150 cm), Approaching (60–150 cm), Close (&lt;60 cm).
            </p>
          </div>

          {/* Connection arrow 2 */}
          <div className="hidden md:flex justify-center text-aura-light-muted dark:text-aura-dark-muted">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono text-cyan-500">PWM Gate</span>
              <ArrowRight className="w-6 h-6 text-aura-light-action dark:text-aura-dark-cyan" />
            </div>
          </div>

          {/* Step 3: Dual Actuators */}
          <div className="p-4 rounded-xl bg-aura-light-card dark:bg-aura-dark-card border border-aura-light-border dark:border-aura-dark-border flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center justify-center mb-3">
              <Activity className="w-6 h-6" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              3. Tactile Cues
            </span>
            <h4 className="font-heading font-semibold text-sm text-aura-light-text dark:text-aura-dark-text mt-1">
              2× Vibration Motors
            </h4>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1.5">
              Transistor-driven motors pulse synchronously with intensity proportional to forward closeness.
            </p>
          </div>
        </div>

        {/* Protection Circuit Callout */}
        <div className="mt-6 p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-aura-light-border/80 dark:border-aura-dark-border/60 text-xs">
          <div className="flex items-center gap-2 font-semibold text-aura-light-text dark:text-aura-dark-text mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Driver Isolation &amp; Flyback Diode Safety Circuit</span>
          </div>
          <p className="text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
            Because vibration motors are inductive loads, the prototype employs NPN switching transistors driven from
            Arduino PWM pins, paired with 1N4007 flyback diodes across motor terminals to prevent reverse voltage spikes
            from damaging the microcontroller logic.
          </p>
        </div>
      </div>

      {/* Comparison: Current Prototype vs Phase 2 Planned */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border">
        <h4 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text mb-4">
          Hardware Comparison: Current Prototype vs. Future Phase 2
        </h4>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted uppercase font-mono tracking-wider">
                <th className="py-2.5 px-3">Subsystem</th>
                <th className="py-2.5 px-3">Current Breadboard Prototype</th>
                <th className="py-2.5 px-3">Phase 2 Planned Connected Belt</th>
                <th className="py-2.5 px-3">Safety &amp; Verification Note</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-aura-light-border/60 dark:divide-aura-dark-border/40 text-aura-light-text dark:text-aura-dark-text">
              <tr>
                <td className="py-3 px-3 font-semibold">Microcontroller</td>
                <td className="py-3 px-3">Arduino UNO R3 (ATmega328P)</td>
                <td className="py-3 px-3 text-cyan-600 dark:text-cyan-400 font-semibold">
                  ESP32 (Dual-Core 240MHz + Wi-Fi/BLE)
                </td>
                <td className="py-3 px-3 text-aura-light-muted dark:text-aura-dark-muted">
                  Current UNO operates completely offline without telemetry.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold">Proximity Sensing</td>
                <td className="py-3 px-3">1× Frontal VL53L0X ToF (up to 200 cm)</td>
                <td className="py-3 px-3">VL53L0X + optional secondary angles</td>
                <td className="py-3 px-3 text-aura-light-muted dark:text-aura-dark-muted">
                  Detection is strictly forward-facing; no side hazard sensing yet.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold">Haptic Feedback</td>
                <td className="py-3 px-3">2× Motors pulsing in sync</td>
                <td className="py-3 px-3">Independent L/R haptic drivers (DRV2605L)</td>
                <td className="py-3 px-3 text-aura-light-muted dark:text-aura-dark-muted">
                  Current motors do not indicate left vs right object locations.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold">Location &amp; GPS</td>
                <td className="py-3 px-3 text-rose-500 font-semibold">None (Simulated in UI)</td>
                <td className="py-3 px-3">Neo-6M GPS module with consent opt-in</td>
                <td className="py-3 px-3 text-aura-light-muted dark:text-aura-dark-muted">
                  Live coordinates never published without explicit wearer agreement.
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold">Emergency SOS</td>
                <td className="py-3 px-3 text-rose-500 font-semibold">None (Simulation only)</td>
                <td className="py-3 px-3">Debounced tactile button + cloud dispatch</td>
                <td className="py-3 px-3 text-aura-light-muted dark:text-aura-dark-muted">
                  Never claim emergency services are dispatched from the demo.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
