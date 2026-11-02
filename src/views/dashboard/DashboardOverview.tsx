'use client';
import React from 'react';
import { Link } from '@/components/common/CompatLink';
import { useDemoDevice } from '../../context/DemoDeviceContext';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { FrontalDistanceGauge } from '../../components/device/FrontalDistanceGauge';
import { DualMotorVisualizer } from '../../components/device/DualMotorVisualizer';
import {
  Activity,
  Battery,
  Wifi,
  WifiOff,
  Bell,
  Clock,
  ArrowRight,
  RotateCcw,
  Sliders,
  MapPin,
  AlertTriangle,
  Radio,
} from 'lucide-react';

export const DashboardOverview: React.FC = () => {
  const {
    status,
    config,
    distanceCm,
    setDistanceCm,
    proximityCategory,
    vibrationDutyCycle,
    events,
    alerts,
    setPreset,
    resetDemoDefaults,
  } = useDemoDevice();

  return (
    <div className="space-y-6">
      {/* Top Banner / Device Headline */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="demo">Demo Simulation</Badge>
            <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
              ID: {status.deviceId}
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            {status.name}
          </h1>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Hardware: {status.hardwareModel} • Firmware: {status.firmwareVersion}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            size="sm"
            variant="secondary"
            onClick={resetDemoDefaults}
            icon={<RotateCcw className="w-3.5 h-3.5" />}
          >
            Reset Simulator
          </Button>
          <Link to="/dashboard/settings">
            <Button size="sm" variant="secondary" icon={<Sliders className="w-3.5 h-3.5" />}>
              Configure
            </Button>
          </Link>
        </div>
      </div>

      {/* Bento Grid Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Connection Status */}
        <BentoCard
          icon={
            config.offlineSimulation ? (
              <WifiOff className="w-5 h-5 text-slate-400" />
            ) : (
              <Wifi className="w-5 h-5 text-emerald-500" />
            )
          }
          title="Telemetry State"
          subtitle="Simulated link"
        >
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
              {config.offlineSimulation ? 'Offline' : 'Online'}
            </span>
            <Badge variant={config.offlineSimulation ? 'offline' : 'safe'}>
              {config.offlineSimulation ? 'Sim-Cut' : 'Active'}
            </Badge>
          </div>
          <p className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted mt-2">
            Heartbeat: {config.offlineSimulation ? 'No feed' : '30s simulated poll'}
          </p>
        </BentoCard>

        {/* Stat 2: Battery Level */}
        <BentoCard
          icon={<Battery className="w-5 h-5 text-cyan-500" />}
          title="Battery Health"
          subtitle="Sample reading"
        >
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
              {status.batteryLevel}%
            </span>
            <Badge variant="demo">Demo Data</Badge>
          </div>
          <p className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted mt-2">
            Estimated 4.5 hrs runtime (Not hardware measured)
          </p>
        </BentoCard>

        {/* Stat 3: Proximity Category */}
        <BentoCard
          icon={<Activity className="w-5 h-5 text-amber-500" />}
          title="Hazard State"
          subtitle="Forward ToF cone"
        >
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-heading font-bold text-2xl capitalize text-aura-light-text dark:text-aura-dark-text">
              {proximityCategory}
            </span>
            <Badge
              variant={
                proximityCategory === 'close'
                  ? 'danger'
                  : proximityCategory === 'approaching'
                  ? 'warning'
                  : proximityCategory === 'offline'
                  ? 'offline'
                  : 'safe'
              }
            >
              {proximityCategory}
            </Badge>
          </div>
          <p className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted mt-2">
            {config.offlineSimulation ? (
              <span>
                <strong className="text-rose-500 dark:text-rose-400 block font-medium">
                  Sensor Offline — Feed Unavailable
                </strong>
                {distanceCm > 0 && (
                  <span className="block text-[10px] opacity-75 mt-0.5">
                    Last recorded (stale): {distanceCm} cm
                  </span>
                )}
              </span>
            ) : (
              <span>{distanceCm} cm frontal distance</span>
            )}
          </p>
        </BentoCard>

        {/* Stat 4: Haptic Feedback Output */}
        <BentoCard
          icon={<Radio className="w-5 h-5 text-cyan-400" />}
          title="Motor Duty Cycle"
          subtitle="Both motors in sync"
        >
          <div className="mt-2 flex items-baseline justify-between">
            <span className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
              {vibrationDutyCycle}%
            </span>
            <span className="text-xs font-mono text-cyan-500">PWM Level</span>
          </div>
          <p className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted mt-2">
            Intensity preset: {config.vibrationIntensity}
          </p>
        </BentoCard>
      </div>

      {/* Main Interactive Proximity Simulator */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
            Forward Proximity Telemetry &amp; Actuator Response
          </h2>
          <Link
            to="/dashboard/monitor"
            className="text-xs text-aura-light-action dark:text-aura-dark-cyan hover:underline font-semibold flex items-center gap-1"
          >
            <span>Full-Screen Monitor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <FrontalDistanceGauge
          distanceCm={distanceCm}
          onDistanceChange={setDistanceCm}
          proximityCategory={proximityCategory}
          onPresetSelect={setPreset}
          thresholdApproaching={config.warningThresholdApproachingCm}
          thresholdClose={config.warningThresholdCloseCm}
        />
      </div>

      {/* Dual Motor Haptic Visualizer */}
      <DualMotorVisualizer
        proximityCategory={proximityCategory}
        dutyCycle={vibrationDutyCycle}
        distanceCm={distanceCm}
      />

      {/* Two-column bottom modules: Recent Events + Guardian Notice */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Events List */}
        <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-aura-light-action dark:text-aura-dark-cyan" />
              <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
                Recent Simulated Obstacle Events
              </h3>
            </div>
            <Link
              to="/dashboard/analytics"
              className="text-xs text-aura-light-action dark:text-aura-dark-cyan hover:underline"
            >
              View Analytics
            </Link>
          </div>

          <div className="space-y-2 text-xs">
            {events.slice(0, 5).map((ev) => (
              <div
                key={ev.id}
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 border border-aura-light-border/60 dark:border-aura-dark-border/40 flex items-center justify-between"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      ev.category === 'close'
                        ? 'bg-rose-500'
                        : ev.category === 'approaching'
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                  />
                  <div>
                    <span className="font-semibold text-aura-light-text dark:text-aura-dark-text capitalize">
                      {ev.category} Zone
                    </span>
                    <span className="text-[11px] text-aura-light-muted dark:text-aura-dark-muted ml-2 font-mono">
                      {ev.distanceCm} cm
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-[11px] text-aura-light-muted dark:text-aura-dark-muted">
                    {ev.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guardian Safety & Consent Card */}
        <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Phase 2 Guardian Authorization Notice</span>
            </div>
            <h3 className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
              Respecting Wearer Privacy &amp; Consent
            </h3>
            <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-2 leading-relaxed">
              In this MVP milestone, all metrics and alerts are simulated locally in your browser. When Phase 2 IoT
              connectivity is integrated with ESP32 hardware, guardian monitoring will require cryptographic device
              pairing and explicit, revocable consent from the wearer.
            </p>
          </div>

          <div className="pt-4 border-t border-aura-light-border dark:border-aura-dark-border flex flex-wrap gap-3">
            <Link to="/dashboard/location">
              <Button size="sm" variant="secondary" icon={<MapPin className="w-3.5 h-3.5" />}>
                View Illustrative Map
              </Button>
            </Link>
            <Link to="/dashboard/alerts">
              <Button size="sm" variant="secondary" icon={<Bell className="w-3.5 h-3.5" />}>
                Alerts &amp; SOS Center
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
