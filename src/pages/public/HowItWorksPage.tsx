import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HardwareDiagram } from '../../components/device/HardwareDiagram';
import { DualMotorVisualizer } from '../../components/device/DualMotorVisualizer';
import { Button } from '../../components/ui/Button';
import { Zap, Activity, Cpu, ArrowRight, Info, ShieldAlert } from 'lucide-react';

export const HowItWorksPage: React.FC = () => {
  const [testDistance, setTestDistance] = useState<number>(85);

  const getCategory = (dist: number) => {
    if (dist > 150) return 'safe';
    if (dist >= 60) return 'approaching';
    return 'close';
  };

  const getDutyCycle = (dist: number) => {
    if (dist > 150) return 0;
    if (dist < 60) return 100;
    const ratio = (150 - dist) / 90;
    return Math.round(30 + ratio * 40);
  };

  const currentCategory = getCategory(testDistance);
  const currentDutyCycle = getDutyCycle(testDistance);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-aura-light-action dark:text-aura-dark-cyan font-bold">
          System Architecture
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text mt-2">
          How AURA GUIDE Works
        </h1>
        <p className="mt-4 text-base text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
          From photon emission to tactile skin perception. Explore the full technical sensing loop powering our
          classroom prototype.
        </p>
      </div>

      {/* Interactive Micro-Simulator on this page */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
              1. Interactive Feedback Loop Preview
            </h2>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-0.5">
              Adjust the forward obstacle distance slider to see how the single sensor controls both motors simultaneously.
            </p>
          </div>
          <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-500 border border-cyan-500/30">
            {testDistance} cm
          </span>
        </div>

        <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-6">
          <input
            type="range"
            min="10"
            max="200"
            value={testDistance}
            onChange={(e) => setTestDistance(Number(e.target.value))}
            aria-label="Interactive test slider for forward obstacle distance"
            className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />

          <DualMotorVisualizer
            proximityCategory={currentCategory}
            dutyCycle={currentDutyCycle}
            distanceCm={testDistance}
          />
        </div>
      </div>

      {/* Full Hardware Block Diagram */}
      <section className="space-y-6">
        <div>
          <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
            2. Detailed Schematic &amp; Hardware Circuitry
          </h2>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Exact electrical wiring connecting the sensor, controller, and actuator drivers.
          </p>
        </div>

        <HardwareDiagram />
      </section>

      {/* Sensing Technology Deep-Dive: ToF vs Ultrasonic */}
      <div className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-6">
        <div className="flex items-center gap-2">
          <Info className="w-5 h-5 text-aura-light-action dark:text-aura-dark-cyan" />
          <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
            Why Time-of-Flight (ToF) Instead of Ultrasonic?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-aura-light-muted dark:text-aura-dark-muted">
          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-aura-light-border dark:border-aura-dark-border space-y-2">
            <h4 className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text text-emerald-600 dark:text-emerald-400">
              VL53L0X Time-of-Flight Laser (Chosen)
            </h4>
            <p>
              Uses a 940nm VCSEL invisible laser to calculate the exact round-trip flight time of light photons.
            </p>
            <ul className="list-disc list-inside space-y-1 pt-1 text-aura-light-text dark:text-aura-dark-text">
              <li>Unaffected by target color or surface reflectivity.</li>
              <li>Narrow beam cone prevents false triggers from side walls.</li>
              <li>Millimeter-level precision with fast 30ms sampling rate.</li>
              <li>Compact surface-mount profile fits neatly on a belt buckle.</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-aura-light-border dark:border-aura-dark-border space-y-2">
            <h4 className="font-heading font-bold text-sm text-aura-light-text dark:text-aura-dark-text text-slate-500">
              HC-SR04 Ultrasonic Sonar (Earlier Concept)
            </h4>
            <p>
              Emits 40kHz acoustic sound waves and measures echo reflection time.
            </p>
            <ul className="list-disc list-inside space-y-1 pt-1">
              <li>Sound waves absorb easily on soft clothing or fabrics.</li>
              <li>Wide 15° cone bounces off irrelevant peripheral obstacles.</li>
              <li>Bulky dual transducer barrels protrude from the body.</li>
              <li>Higher latency when operating in noisy environments.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation CTA */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/prototype">
          <Button variant="primary" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
            Inspect Prototype Components
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="secondary">Open Guardian Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};
