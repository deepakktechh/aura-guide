import React from 'react';
import { ProximityState } from '../../types/device';
import { Button } from '../ui/Button';
import { ShieldCheck, AlertTriangle, AlertCircle, EyeOff } from 'lucide-react';

interface FrontalDistanceGaugeProps {
  distanceCm: number;
  onDistanceChange: (val: number) => void;
  proximityCategory: ProximityState;
  onPresetSelect: (preset: 'safe' | 'approaching' | 'close' | 'offline') => void;
  thresholdApproaching: number;
  thresholdClose: number;
}

export const FrontalDistanceGauge: React.FC<FrontalDistanceGaugeProps> = ({
  distanceCm,
  onDistanceChange,
  proximityCategory,
  onPresetSelect,
  thresholdApproaching,
  thresholdClose,
}) => {
  const percent = Math.min(100, Math.max(0, (distanceCm / 200) * 100));

  return (
    <div className="space-y-6">
      {/* Readout card */}
      <div className="p-6 rounded-card bg-aura-light-surface/60 dark:bg-aura-dark-surface/70 border border-aura-light-border dark:border-aura-dark-border">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-aura-light-muted dark:text-aura-dark-muted">
              Live Sensor Proximity Reading
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-heading font-bold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text tracking-tight">
                {proximityCategory === 'offline' ? '— —' : distanceCm}
              </span>
              <span className="text-base font-semibold text-aura-light-muted dark:text-aura-dark-muted font-mono">
                {proximityCategory === 'offline' ? 'OFFLINE' : 'cm forward'}
              </span>
            </div>
          </div>

          {/* Status Indicator Chip */}
          <div className="flex items-center">
            {proximityCategory === 'safe' && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 font-semibold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>SAFE PATH (&gt; {thresholdApproaching} cm)</span>
              </div>
            )}
            {proximityCategory === 'approaching' && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 font-semibold text-sm">
                <AlertTriangle className="w-4 h-4" />
                <span>APPROACHING ({thresholdClose}–{thresholdApproaching} cm)</span>
              </div>
            )}
            {proximityCategory === 'close' && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 font-semibold text-sm animate-pulse">
                <AlertCircle className="w-4 h-4" />
                <span>CLOSE HAZARD (&lt; {thresholdClose} cm)</span>
              </div>
            )}
            {proximityCategory === 'offline' && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/30 text-slate-700 dark:text-slate-400 font-semibold text-sm">
                <EyeOff className="w-4 h-4" />
                <span>FEED UNAVAILABLE (SIMULATED OFFLINE)</span>
              </div>
            )}
          </div>
        </div>

        {/* Visual Progress / Distance bar */}
        <div className="space-y-2">
          <div className="relative h-4 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden border border-aura-light-border dark:border-aura-dark-border">
            {proximityCategory !== 'offline' && (
              <div
                className={`h-full transition-all duration-150 rounded-full ${
                  proximityCategory === 'close'
                    ? 'bg-rose-500'
                    : proximityCategory === 'approaching'
                    ? 'bg-amber-500'
                    : 'bg-emerald-500'
                }`}
                style={{ width: `${percent}%` }}
              />
            )}
          </div>

          {/* Scale labels */}
          <div className="flex justify-between text-[11px] font-mono text-aura-light-muted dark:text-aura-dark-muted px-1">
            <span>0 cm (Immediate Contact)</span>
            <span>60 cm (Close)</span>
            <span>150 cm (Approaching)</span>
            <span>200 cm (Clear)</span>
          </div>
        </div>

        {/* Distance Slider Control */}
        <div className="mt-6 pt-5 border-t border-aura-light-border/60 dark:border-aura-dark-border/40">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="distance-slider"
              className="text-xs font-semibold uppercase tracking-wider text-aura-light-text dark:text-aura-dark-text"
            >
              Interactive Distance Simulator
            </label>
            <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
              Slide to test warning threshold responses
            </span>
          </div>

          <input
            id="distance-slider"
            type="range"
            min="10"
            max="200"
            value={proximityCategory === 'offline' ? 0 : distanceCm}
            disabled={proximityCategory === 'offline'}
            onChange={(e) => onDistanceChange(Number(e.target.value))}
            aria-label="Simulated forward obstacle distance in centimeters"
            aria-valuemin={10}
            aria-valuemax={200}
            aria-valuenow={distanceCm}
            className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-aura-light-action dark:accent-aura-dark-cyan disabled:opacity-40 disabled:cursor-not-allowed"
          />
        </div>

        {/* Preset scenario shortcuts */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-aura-light-muted dark:text-aura-dark-muted mr-1">
            Test Presets:
          </span>
          <Button
            size="sm"
            variant={proximityCategory === 'safe' ? 'primary' : 'secondary'}
            onClick={() => onPresetSelect('safe')}
          >
            Clear Path (180 cm)
          </Button>
          <Button
            size="sm"
            variant={proximityCategory === 'approaching' ? 'primary' : 'secondary'}
            onClick={() => onPresetSelect('approaching')}
          >
            Approaching (95 cm)
          </Button>
          <Button
            size="sm"
            variant={proximityCategory === 'close' ? 'danger' : 'secondary'}
            onClick={() => onPresetSelect('close')}
          >
            Close Hazard (35 cm)
          </Button>
          <Button
            size="sm"
            variant={proximityCategory === 'offline' ? 'primary' : 'ghost'}
            onClick={() => onPresetSelect('offline')}
          >
            Simulate Offline
          </Button>
        </div>
      </div>
    </div>
  );
};
