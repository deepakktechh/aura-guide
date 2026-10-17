import React, { useState } from 'react';
import { useDemoDevice } from '../../context/DemoDeviceContext';
import { FrontalDistanceGauge } from '../../components/device/FrontalDistanceGauge';
import { DualMotorVisualizer } from '../../components/device/DualMotorVisualizer';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  Activity,
  Terminal,
  Volume2,
  VolumeX,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  Zap,
} from 'lucide-react';

export const LiveMonitor: React.FC = () => {
  const {
    distanceCm,
    setDistanceCm,
    proximityCategory,
    vibrationDutyCycle,
    config,
    updateConfig,
    setPreset,
    events,
  } = useDemoDevice();

  const [simulatedAudio, setSimulatedAudio] = useState<boolean>(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="demo">Interactive Telemetry Feed</Badge>
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
              Single VL53L0X Time-of-Flight Channel
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Forward Sensor &amp; Actuator Live Monitor
          </h1>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Simulates onboard I2C distance acquisition and synchronous dual-motor pulse-width modulation in real time.
          </p>
        </div>

        {/* Audio Cue Simulation Toggle */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant={simulatedAudio ? 'primary' : 'secondary'}
            onClick={() => setSimulatedAudio(!simulatedAudio)}
            icon={simulatedAudio ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          >
            {simulatedAudio ? 'Audio Cue Active (Sim)' : 'Audio Cue Muted'}
          </Button>
        </div>
      </div>

      {simulatedAudio && (
        <div className="p-3.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-800 dark:text-cyan-300 flex items-center gap-2">
          <Volume2 className="w-4 h-4 flex-shrink-0" />
          <span>
            <strong>Audio Cue Simulated:</strong> Discrete periodic tones would accompany haptic pulses in future
            add-ons. In this demo, audio remains non-intrusive.
          </span>
        </div>
      )}

      {/* Main Proximity Gauge & Slider */}
      <FrontalDistanceGauge
        distanceCm={distanceCm}
        onDistanceChange={setDistanceCm}
        proximityCategory={proximityCategory}
        onPresetSelect={setPreset}
        thresholdApproaching={config.warningThresholdApproachingCm}
        thresholdClose={config.warningThresholdCloseCm}
      />

      {/* Synchronous Dual Motor Visualizer */}
      <DualMotorVisualizer
        proximityCategory={proximityCategory}
        dutyCycle={vibrationDutyCycle}
        distanceCm={distanceCm}
      />

      {/* Diagnostic Terminal Stream */}
      <div className="rounded-card overflow-hidden border border-slate-700 bg-slate-950 text-slate-200">
        <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="font-bold text-cyan-400">Simulated I2C Bus &amp; PWM Log Stream</span>
          </div>
          <span className="text-[10px] text-slate-400">Rate: ~30Hz frame emulation</span>
        </div>

        <div className="p-4 font-mono text-xs space-y-1.5 max-h-56 overflow-y-auto">
          <p className="text-slate-500 text-[11px]">--- Simulation Stream Initialized [I2C Address: 0x29] ---</p>
          <p className="text-emerald-400">
            [SYS] VL53L0X calibrated. Range profile: High Speed (30ms). Offset: calibrated.
          </p>
          <p className="text-cyan-300">
            [I2C] Current Reading: {distanceCm} cm | Status: {proximityCategory.toUpperCase()} | Motor PWM:{' '}
            {vibrationDutyCycle}% (Sync Ch1 &amp; Ch2)
          </p>
          {events.slice(0, 6).map((ev, i) => (
            <p key={i} className="text-slate-400 text-[11px]">
              [{ev.timestamp}] ZONE_UPDATE &gt; dist={ev.distanceCm}cm state={ev.category.toUpperCase()} duty=
              {ev.vibrationIntensity}
            </p>
          ))}
          {config.offlineSimulation && (
            <p className="text-rose-400 font-bold">
              [ALERT] Sensor timeout on I2C line. Feed unavailable. Motors forced to 0% duty cycle.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
