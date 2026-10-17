import React, { useState } from 'react';
import { useDemoDevice } from '../../context/DemoDeviceContext';
import { VibrationIntensity } from '../../types/device';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Sliders, RotateCcw, Save, ShieldAlert, CheckCircle2, Zap } from 'lucide-react';

export const DeviceSettingsPage: React.FC = () => {
  const { config, updateConfig, resetDemoDefaults } = useDemoDevice();

  const [approachingVal, setApproachingVal] = useState<number>(config.warningThresholdApproachingCm);
  const [closeVal, setCloseVal] = useState<number>(config.warningThresholdCloseCm);
  const [intensity, setIntensity] = useState<VibrationIntensity>(config.vibrationIntensity);
  const [offlineSim, setOfflineSim] = useState<boolean>(config.offlineSimulation);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  const handleSaveDemoSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (closeVal >= approachingVal) {
      alert('Validation Error: Close Hazard threshold must be strictly smaller than Approaching threshold.');
      return;
    }
    updateConfig({
      warningThresholdApproachingCm: approachingVal,
      warningThresholdCloseCm: closeVal,
      vibrationIntensity: intensity,
      offlineSimulation: offlineSim,
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  const handleReset = () => {
    resetDemoDefaults();
    setApproachingVal(150);
    setCloseVal(60);
    setIntensity('HIGH');
    setOfflineSim(false);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      {/* Header */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="demo">Demo Parameters</Badge>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
              Browser-Scoped State
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Simulated Device Configuration
          </h1>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Tune sensor distance thresholds and motor haptic intensity for this local demonstration session.
          </p>
        </div>

        <Button size="sm" variant="secondary" onClick={handleReset} icon={<RotateCcw className="w-3.5 h-3.5" />}>
          Reset Defaults
        </Button>
      </div>

      {/* Demo Scope Disclaimer */}
      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-heading font-bold text-sm">Demo Simulation Notice</h4>
          <p className="leading-relaxed">
            Changes made here apply directly to your browser simulation. They do not write over the air (OTA) to the
            physical Arduino breadboard, which runs autonomous firmware.
          </p>
        </div>
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSaveDemoSettings} className="space-y-6">
        <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-6">
          {/* Threshold 1: Approaching Distance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="approaching-threshold" className="font-semibold text-sm">
                Approaching Threshold (Gentle Vibration)
              </label>
              <span className="font-mono text-sm font-bold text-amber-600 dark:text-amber-400">
                {approachingVal} cm
              </span>
            </div>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
              Obstacles closer than this distance trigger the first gentle tactile pulse.
            </p>
            <input
              id="approaching-threshold"
              type="range"
              min="80"
              max="190"
              step="5"
              value={approachingVal}
              onChange={(e) => setApproachingVal(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Threshold 2: Close Hazard Distance */}
          <div className="space-y-2 pt-4 border-t border-aura-light-border dark:border-aura-dark-border">
            <div className="flex items-center justify-between">
              <label htmlFor="close-threshold" className="font-semibold text-sm">
                Close Hazard Threshold (Maximum Vibration)
              </label>
              <span className="font-mono text-sm font-bold text-rose-600 dark:text-rose-400">
                {closeVal} cm
              </span>
            </div>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
              Obstacles within this immediate range trigger intense, urgent pulses on both motors.
            </p>
            <input
              id="close-threshold"
              type="range"
              min="20"
              max="100"
              step="5"
              value={closeVal}
              onChange={(e) => setCloseVal(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />
          </div>

          {/* Setting 3: Haptic Duty Cycle Intensity */}
          <div className="space-y-3 pt-4 border-t border-aura-light-border dark:border-aura-dark-border">
            <label className="block font-semibold text-sm">Motor Vibration Strength Preset</label>
            <div className="grid grid-cols-3 gap-3">
              {(['LOW', 'MEDIUM', 'HIGH'] as VibrationIntensity[]).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setIntensity(level)}
                  className={`py-3 px-4 rounded-control text-xs font-bold border transition-all text-center ${
                    intensity === level
                      ? 'bg-cyan-500/15 border-cyan-500 text-cyan-600 dark:text-cyan-300 shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted hover:bg-slate-200/50'
                  }`}
                >
                  {level}
                  <span className="block text-[10px] font-normal opacity-80 mt-0.5">
                    {level === 'LOW' ? 'Gentle' : level === 'MEDIUM' ? 'Standard' : 'Strong'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Setting 4: Fault Simulation Toggle */}
          <div className="pt-4 border-t border-aura-light-border dark:border-aura-dark-border flex items-center justify-between">
            <div>
              <span className="font-semibold text-sm block">Simulate Sensor Offline Fault</span>
              <span className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
                Emulates a detached sensor wire or I2C bus communication timeout.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOfflineSim(!offlineSim)}
              className={`w-12 h-6 rounded-full transition-colors relative focus:outline-none ${
                offlineSim ? 'bg-rose-500' : 'bg-slate-300 dark:bg-slate-700'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full bg-white absolute top-0.5 transition-transform ${
                  offlineSim ? 'left-6.5 translate-x-6' : 'left-0.5'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-4">
          <Button type="submit" variant="primary" icon={<Save className="w-4 h-4" />}>
            Apply Settings in Demo
          </Button>

          {savedSuccess && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4" />
              <span>Demo settings saved successfully!</span>
            </span>
          )}
        </div>
      </form>
    </div>
  );
};
