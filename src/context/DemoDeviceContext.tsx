import React, { createContext, useContext, useState, useEffect, useMemo, useRef } from 'react';
import {
  DeviceStatus,
  DeviceConfiguration,
  DeviceAlert,
  ObstacleEvent,
  ProximityState,
  VibrationIntensity,
  DeviceLocation,
} from '../types/device';
import {
  INITIAL_DEMO_STATUS,
  INITIAL_DEMO_CONFIG,
  INITIAL_DEMO_LOCATION,
  INITIAL_DEMO_ALERTS,
  INITIAL_OBSTACLE_EVENTS,
} from '../data/demo/fixtures';
import { demoProviderInstance } from '../data/providers/DemoProvider';

interface DemoDeviceContextType {
  status: DeviceStatus;
  config: DeviceConfiguration;
  location: DeviceLocation;
  alerts: DeviceAlert[];
  events: ObstacleEvent[];
  distanceCm: number;
  setDistanceCm: (distance: number) => void;
  proximityCategory: ProximityState;
  vibrationDutyCycle: number; // 0 to 100%
  updateConfig: (newConfig: Partial<DeviceConfiguration>) => void;
  resetDemoDefaults: () => void;
  setPreset: (preset: 'safe' | 'approaching' | 'close' | 'offline') => void;
  triggerSosSimulation: () => void;
  dismissAlert: (alertId: string) => void;
  clearAllAlerts: () => void;
}

const DemoDeviceContext = createContext<DemoDeviceContextType | undefined>(undefined);

export const DemoDeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<DeviceStatus>(INITIAL_DEMO_STATUS);
  const [config, setConfig] = useState<DeviceConfiguration>(INITIAL_DEMO_CONFIG);
  const [location] = useState<DeviceLocation>(INITIAL_DEMO_LOCATION);
  const [alerts, setAlerts] = useState<DeviceAlert[]>(INITIAL_DEMO_ALERTS);
  const [events, setEvents] = useState<ObstacleEvent[]>(INITIAL_OBSTACLE_EVENTS);
  const [distanceCm, setDistanceCm] = useState<number>(105);

  // Compute category deterministically based on distance & config
  const proximityCategory: ProximityState = useMemo(() => {
    if (config.offlineSimulation) return 'offline';
    if (distanceCm > config.warningThresholdApproachingCm) return 'safe';
    if (distanceCm >= config.warningThresholdCloseCm) return 'approaching';
    return 'close';
  }, [distanceCm, config.warningThresholdApproachingCm, config.warningThresholdCloseCm, config.offlineSimulation]);

  // Compute duty cycle / vibration strength (both motors in unison)
  const vibrationDutyCycle = useMemo(() => {
    if (proximityCategory === 'offline' || proximityCategory === 'safe') return 0;
    const baseMultiplier = config.vibrationIntensity === 'HIGH' ? 1.0 : config.vibrationIntensity === 'MEDIUM' ? 0.75 : 0.5;
    if (proximityCategory === 'close') {
      return Math.round(100 * baseMultiplier);
    }
    // approaching: scale smoothly between 30% and 70%
    const span = config.warningThresholdApproachingCm - config.warningThresholdCloseCm;
    const offset = config.warningThresholdApproachingCm - distanceCm;
    const ratio = Math.max(0, Math.min(1, offset / (span || 1)));
    return Math.round((30 + ratio * 40) * baseMultiplier);
  }, [proximityCategory, distanceCm, config]);

  // Track previous category to record meaningful hazard transitions without flooding events
  const lastCategoryRef = useRef<ProximityState>(proximityCategory);

  // Log event only on meaningful hazard zone transitions (prevents slider event spam)
  useEffect(() => {
    const prevCategory = lastCategoryRef.current;

    if (proximityCategory !== prevCategory) {
      lastCategoryRef.current = proximityCategory;

      // Only log when entering active hazard zones (Approaching or Close Hazard)
      if (proximityCategory === 'approaching' || proximityCategory === 'close') {
        demoProviderInstance.recordSimulatorEvent(distanceCm, proximityCategory);
        setEvents((prev) => [
          {
            id: `ev_${Date.now()}`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            distanceCm,
            category: proximityCategory,
            vibrationIntensity: proximityCategory === 'close' ? 'HIGH' : 'MEDIUM',
            durationMs: proximityCategory === 'close' ? 1400 : 750,
          },
          ...prev.slice(0, 19),
        ]);
      }
    }
  }, [proximityCategory, distanceCm]);

  const updateConfig = (newConfig: Partial<DeviceConfiguration>) => {
    setConfig((prev) => ({ ...prev, ...newConfig }));
    if (newConfig.offlineSimulation !== undefined) {
      setStatus((prev) => ({
        ...prev,
        isOnline: !newConfig.offlineSimulation,
        lastUpdated: new Date().toISOString(),
      }));
    }
  };

  const resetDemoDefaults = () => {
    setConfig(INITIAL_DEMO_CONFIG);
    setDistanceCm(110);
    setStatus(INITIAL_DEMO_STATUS);
    lastCategoryRef.current = 'safe';
  };

  const setPreset = (preset: 'safe' | 'approaching' | 'close' | 'offline') => {
    if (preset === 'offline') {
      updateConfig({ offlineSimulation: true });
    } else {
      updateConfig({ offlineSimulation: false });
      if (preset === 'safe') setDistanceCm(180);
      if (preset === 'approaching') setDistanceCm(95);
      if (preset === 'close') setDistanceCm(35);
    }
  };

  const triggerSosSimulation = () => {
    const alert = demoProviderInstance.addSimulatedSosAlert();
    setAlerts((prev) => [alert, ...prev]);
  };

  const dismissAlert = (alertId: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== alertId));
  };

  const clearAllAlerts = () => {
    setAlerts([]);
  };

  return (
    <DemoDeviceContext.Provider
      value={{
        status,
        config,
        location,
        alerts,
        events,
        distanceCm,
        setDistanceCm,
        proximityCategory,
        vibrationDutyCycle,
        updateConfig,
        resetDemoDefaults,
        setPreset,
        triggerSosSimulation,
        dismissAlert,
        clearAllAlerts,
      }}
    >
      {children}
    </DemoDeviceContext.Provider>
  );
};

export const useDemoDevice = () => {
  const context = useContext(DemoDeviceContext);
  if (!context) {
    throw new Error('useDemoDevice must be used within a DemoDeviceProvider');
  }
  return context;
};
