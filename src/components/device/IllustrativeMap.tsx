'use client';
import React, { useState } from 'react';
import { DeviceLocation } from '../../types/device';
import { MapPin, Navigation, ShieldAlert, Crosshair, AlertOctagon } from 'lucide-react';
import { Button } from '../ui/Button';

interface IllustrativeMapProps {
  location: DeviceLocation;
}

export const IllustrativeMap: React.FC<IllustrativeMapProps> = ({ location }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showRadar, setShowRadar] = useState<boolean>(true);

  return (
    <div className="relative rounded-card overflow-hidden border border-aura-light-border dark:border-aura-dark-border bg-slate-900 text-slate-100">
      {/* Prominent Demo Watermark Header Banner */}
      <div className="bg-amber-500/20 border-b border-amber-500/40 px-4 py-2 flex items-center justify-between text-amber-300 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <AlertOctagon className="w-4 h-4 flex-shrink-0" />
          <span>ILLUSTRATIVE DEMO MAP — NOT A PERSON’S LIVE LOCATION</span>
        </div>
        <span className="hidden sm:inline-block font-mono text-[10px] bg-amber-500/30 px-2 py-0.5 rounded">
          GPS NOT INSTALLED IN CURRENT PROTOTYPE
        </span>
      </div>

      {/* Map Viewport Area */}
      <div className="relative h-[380px] w-full bg-[#0a1626] overflow-hidden flex items-center justify-center">
        {/* Subtle coordinate grid lines */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #36D6E9 1px, transparent 1px), linear-gradient(to bottom, #36D6E9 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Diagonal Watermark Repeated */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10 rotate-[-15deg]">
          <span className="text-4xl sm:text-6xl font-heading font-black tracking-widest text-cyan-400">
            FICTIONAL DEMO SIMULATION
          </span>
        </div>

        {/* Illustrative Campus Geometry */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
          viewBox="0 0 600 400"
        >
          {/* Fictional campus roads and building footprints */}
          <path
            d="M 50,200 L 550,200 M 300,50 L 300,350 M 150,100 L 450,300"
            stroke="#1f3b58"
            strokeWidth="8"
            fill="none"
          />
          <path
            d="M 50,200 L 550,200 M 300,50 L 300,350"
            stroke="#36D6E9"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
            opacity="0.4"
          />
          {/* Academic Block 1 */}
          <rect x="180" y="110" width="90" height="60" rx="6" fill="#142b43" stroke="#345069" strokeWidth="2" />
          <text x="225" y="145" fill="#8da4be" fontSize="10" textAnchor="middle" fontFamily="sans-serif">
            Block 1 (CSE)
          </text>

          {/* Academic Block 2 */}
          <rect x="330" y="230" width="100" height="70" rx="6" fill="#142b43" stroke="#345069" strokeWidth="2" />
          <text x="380" y="270" fill="#8da4be" fontSize="10" textAnchor="middle" fontFamily="sans-serif">
            Library & Tech
          </text>

          {/* Central Lawn Circle */}
          <circle cx="300" cy="200" r="45" fill="#0c2d3a" stroke="#14b8a6" strokeWidth="1.5" strokeDasharray="3 3" />

          {/* Radar circle effect around simulated wearable position */}
          {showRadar && (
            <>
              <circle cx="300" cy="200" r="30" fill="none" stroke="#36D6E9" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="10;70" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="300" cy="200" r="50" fill="none" stroke="#36D6E9" strokeWidth="0.5" opacity="0.3" />
            </>
          )}

          {/* Wearable Location Pin */}
          <g transform="translate(300, 200)">
            <circle cx="0" cy="0" r="10" fill="#36D6E9" />
            <circle cx="0" cy="0" r="4" fill="#071321" />
            <path d="M 0,-10 L 0,-22" stroke="#36D6E9" strokeWidth="2" />
          </g>
        </svg>

        {/* On-Map Floating Overlay Card */}
        <div className="absolute top-4 left-4 max-w-xs p-3 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 text-xs shadow-xl pointer-events-auto">
          <div className="flex items-center gap-1.5 font-semibold text-cyan-300 mb-1">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Simulated Device Telemetry</span>
          </div>
          <p className="text-[11px] text-slate-300 font-mono">
            Lat: {location.lat.toFixed(4)}° N, Lng: {location.lng.toFixed(4)}° E
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            Area: {location.areaLabel}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-emerald-400">
            <span>Accuracy: ±{location.accuracyM} m</span>
            <span className="font-mono">SIM-FIX</span>
          </div>
        </div>

        {/* Map Control Buttons */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 pointer-events-auto">
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.6, z + 0.2))}
            aria-label="Zoom in"
            className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center font-bold text-sm shadow"
          >
            +
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.2))}
            aria-label="Zoom out"
            className="w-8 h-8 rounded-lg bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-white flex items-center justify-center font-bold text-sm shadow"
          >
            −
          </button>
          <button
            onClick={() => setShowRadar((r) => !r)}
            aria-label="Toggle radar pulse"
            title="Toggle radar"
            className={`w-8 h-8 rounded-lg border flex items-center justify-center text-xs shadow ${
              showRadar
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                : 'bg-slate-800/90 border-slate-700 text-slate-400'
            }`}
          >
            <Crosshair className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Map Footer Privacy & Ethical Note */}
      <div className="p-4 bg-slate-900 border-t border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          <span>
            <strong>Consent &amp; Privacy Architecture:</strong> In future Phase 2 live deployments, location tracking
            will be opt-in, strictly encrypted, and under wearer revocation control at all times.
          </span>
        </div>
        <div className="flex-shrink-0">
          <Button
            size="sm"
            variant="ghost"
            className="text-cyan-400 hover:text-cyan-300"
            onClick={() => alert('Demo simulated coordinate refreshed.')}
          >
            <Navigation className="w-3.5 h-3.5 mr-1" />
            Refresh Simulated Fix
          </Button>
        </div>
      </div>
    </div>
  );
};
