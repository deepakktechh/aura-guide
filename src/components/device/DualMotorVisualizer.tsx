import React from 'react';
import { ProximityState } from '../../types/device';
import { Activity, AlertTriangle, ShieldCheck, WifiOff } from 'lucide-react';

interface DualMotorVisualizerProps {
  proximityCategory: ProximityState;
  dutyCycle: number; // 0 to 100%
  distanceCm: number;
}

export const DualMotorVisualizer: React.FC<DualMotorVisualizerProps> = ({
  proximityCategory,
  dutyCycle,
  distanceCm,
}) => {
  const isVibrating = proximityCategory === 'approaching' || proximityCategory === 'close';

  const categoryColor = {
    safe: 'text-emerald-500 border-emerald-500/40 bg-emerald-500/10',
    approaching: 'text-amber-500 border-amber-500/40 bg-amber-500/10',
    close: 'text-rose-500 border-rose-500/40 bg-rose-500/10',
    offline: 'text-slate-400 border-slate-500/40 bg-slate-500/10',
  }[proximityCategory];

  const categoryTitle = {
    safe: 'Safe — Motors Idle',
    approaching: 'Approaching — Gentle Synchronized Pulse',
    close: 'Close Hazard — Maximum Synchronized Pulse',
    offline: 'No Sensor Feed — Motors Disabled',
  }[proximityCategory];

  return (
    <div className="rounded-card p-5 bg-aura-light-surface/70 dark:bg-aura-dark-surface/80 border border-aura-light-border dark:border-aura-dark-border">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-aura-light-action dark:text-aura-dark-cyan" />
            <h4 className="font-heading font-semibold text-base text-aura-light-text dark:text-aura-dark-text">
              Dual-Motor Haptic Feedback Simulation
            </h4>
          </div>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-0.5">
            Synchronous tactile actuation for forward obstacle distance
          </p>
        </div>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${categoryColor}`}>
          {proximityCategory === 'safe' && <ShieldCheck className="w-3.5 h-3.5" />}
          {proximityCategory === 'approaching' && <AlertTriangle className="w-3.5 h-3.5" />}
          {proximityCategory === 'close' && <AlertTriangle className="w-3.5 h-3.5 animate-bounce" />}
          {proximityCategory === 'offline' && <WifiOff className="w-3.5 h-3.5" />}
          <span>{categoryTitle}</span>
        </div>
      </div>

      {/* Belt diagram with dual motors */}
      <div className="relative py-6 px-4 bg-slate-100 dark:bg-[#0b1b2d] rounded-feature border border-aura-light-border/60 dark:border-aura-dark-border/40 flex flex-col items-center">
        {/* Central VL53L0X ToF Forward Sensor */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-[10px] uppercase font-bold tracking-wider text-aura-light-muted dark:text-aura-dark-muted mb-1.5 flex items-center gap-1">
            <span>Single Forward Sensor (VL53L0X ToF)</span>
          </div>
          <div className="relative">
            <div className="w-24 h-10 rounded-lg bg-aura-dark-surface border-2 border-aura-dark-cyan flex items-center justify-center shadow-glow-cyan text-white text-xs font-mono font-bold">
              {proximityCategory === 'offline' ? 'OFFLINE' : `${distanceCm} cm`}
            </div>
            {/* Forward beam visualization */}
            {proximityCategory !== 'offline' && (
              <div
                className={`absolute left-1/2 -top-6 -translate-x-1/2 w-16 h-6 border-t-2 border-dashed ${
                  proximityCategory === 'close'
                    ? 'border-rose-500'
                    : proximityCategory === 'approaching'
                    ? 'border-amber-500'
                    : 'border-emerald-500'
                } opacity-70`}
              />
            )}
          </div>
        </div>

        {/* Wearable belt strap outline */}
        <div className="w-full max-w-md relative flex items-center justify-between px-6 py-4 rounded-full bg-slate-200 dark:bg-aura-dark-card border-2 border-slate-300 dark:border-aura-dark-border">
          {/* Left Motor Unit */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              {isVibrating && (
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-60 bg-aura-dark-cyan"
                  style={{ animationDuration: proximityCategory === 'close' ? '0.4s' : '0.8s' }}
                />
              )}
              <div
                className={`w-14 h-14 rounded-full flex flex-col items-center justify-center font-mono font-bold text-xs transition-all duration-300 z-10 ${
                  proximityCategory === 'close'
                    ? 'bg-rose-500 text-white shadow-glow-red scale-105'
                    : proximityCategory === 'approaching'
                    ? 'bg-amber-500 text-white shadow-glow-amber'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>MOTOR</span>
                <span className="text-[10px]">LEFT</span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-aura-light-muted dark:text-aura-dark-muted mt-1.5">
              {dutyCycle}% PWM
            </span>
          </div>

          {/* Sync indicator */}
          <div className="flex flex-col items-center px-4 text-center">
            <span className="text-[11px] font-bold tracking-wider uppercase text-aura-light-action dark:text-aura-dark-cyan">
              Pulsing In Sync
            </span>
            <div className="flex items-center gap-1.5 text-aura-light-muted dark:text-aura-dark-muted text-[10px] mt-0.5">
              <span>◄</span>
              <span className="font-mono">Both Actuate</span>
              <span>►</span>
            </div>
          </div>

          {/* Right Motor Unit */}
          <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              {isVibrating && (
                <div
                  className="absolute inset-0 rounded-full animate-ping opacity-60 bg-aura-dark-cyan"
                  style={{ animationDuration: proximityCategory === 'close' ? '0.4s' : '0.8s' }}
                />
              )}
              <div
                className={`w-14 h-14 rounded-full flex flex-col items-center justify-center font-mono font-bold text-xs transition-all duration-300 z-10 ${
                  proximityCategory === 'close'
                    ? 'bg-rose-500 text-white shadow-glow-red scale-105'
                    : proximityCategory === 'approaching'
                    ? 'bg-amber-500 text-white shadow-glow-amber'
                    : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span>MOTOR</span>
                <span className="text-[10px]">RIGHT</span>
              </div>
            </div>
            <span className="text-[10px] font-medium text-aura-light-muted dark:text-aura-dark-muted mt-1.5">
              {dutyCycle}% PWM
            </span>
          </div>
        </div>

        {/* Critical hardware distinction badge */}
        <div className="mt-4 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-center">
          <p className="text-[11px] text-blue-900 dark:text-blue-200">
            <strong>Hardware Fact:</strong> The two physical motors vibrate together to signal closeness. They do
            <strong> not</strong> provide directional left vs. right obstacle steering.
          </p>
        </div>
      </div>
    </div>
  );
};
