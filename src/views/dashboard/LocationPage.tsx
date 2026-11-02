'use client';
import React from 'react';
import { useDemoDevice } from '../../context/DemoDeviceContext';
import { IllustrativeMap } from '../../components/device/IllustrativeMap';
import { Badge } from '../../components/ui/Badge';
import { BentoCard } from '../../components/ui/BentoCard';
import { MapPin, ShieldCheck, Lock, Satellite, EyeOff } from 'lucide-react';

export const LocationPage: React.FC = () => {
  const { location } = useDemoDevice();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-6 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="demo">Illustrative Map Simulation</Badge>
            <span className="text-xs font-mono text-aura-light-muted dark:text-aura-dark-muted">
              GPS Module Not Connected
            </span>
          </div>
          <h1 className="font-heading font-bold text-2xl sm:text-3xl text-aura-light-text dark:text-aura-dark-text">
            Simulated Location &amp; Geofence
          </h1>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            Visual mockup of consent-based guardian location tracking planned for Phase 2 hardware integration.
          </p>
        </div>
      </div>

      {/* Illustrative Interactive Map */}
      <IllustrativeMap location={location} />

      {/* Security, Consent & Privacy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BentoCard
          icon={<Lock className="w-5 h-5 text-cyan-500" />}
          title="Wearer Consent Opt-In"
          subtitle="Mandatory privacy rule"
        >
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
            Location telemetry will never transmit without explicit, informed opt-in from the wearer. The wearer may
            pause or revoke coordinate sharing at any time directly from their wearable.
          </p>
        </BentoCard>

        <BentoCard
          icon={<Satellite className="w-5 h-5 text-emerald-500" />}
          title="Hardware Requirements"
          subtitle="Phase 2 ESP32 + Neo-6M"
        >
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
            The current Arduino UNO R3 prototype contains zero GPS hardware. Live coordinates will only become
            available once an ESP32 and Neo-6M GPS receiver are physically mounted and verified.
          </p>
        </BentoCard>

        <BentoCard
          icon={<EyeOff className="w-5 h-5 text-amber-500" />}
          title="No Browser Snooping"
          subtitle="Strict ethical boundary"
        >
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
            This dashboard does not access your browser’s HTML5 Geolocation API. The coordinates displayed are static
            fictional test points centered around the SRM IST Ramapuram campus for demonstration.
          </p>
        </BentoCard>
      </div>
    </div>
  );
};
