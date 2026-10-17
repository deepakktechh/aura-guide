/**
 * AURA GUIDE Data Source Contract
 * Enforces strict separation between simulated demo data and real verified telemetry.
 */

export type SourceMode = 'demo' | 'live';

export type ProximityState = 'safe' | 'approaching' | 'close' | 'offline';

export type VibrationIntensity = 'LOW' | 'MEDIUM' | 'HIGH';

export interface DeviceStatus {
  deviceId: string;
  name: string;
  isOnline: boolean;
  batteryLevel: number; // 0-100%
  lastUpdated: string;
  sourceMode: SourceMode;
  firmwareVersion: string;
  hardwareModel: 'Arduino UNO R3 (Prototype)' | 'ESP32 (Roadmap)';
}

export interface ObstacleEvent {
  id: string;
  timestamp: string;
  distanceCm: number;
  category: ProximityState;
  vibrationIntensity: VibrationIntensity;
  durationMs: number;
}

export interface DeviceLocation {
  lat: number;
  lng: number;
  accuracyM: number;
  lastFixTime: string;
  isFictionalDemo: boolean;
  areaLabel: string;
}

export interface DeviceAlert {
  id: string;
  timestamp: string;
  type: 'SOS_SIMULATION' | 'LOW_BATTERY' | 'PROXIMITY_ALERT' | 'SENSOR_DISCONNECTED';
  severity: 'info' | 'warning' | 'danger';
  title: string;
  message: string;
  isDemoOnly: boolean;
  acknowledged: boolean;
}

export interface DeviceConfiguration {
  warningThresholdApproachingCm: number; // e.g. 150
  warningThresholdCloseCm: number;       // e.g. 60
  vibrationIntensity: VibrationIntensity;
  audioChimesEnabled: boolean;
  offlineSimulation: boolean;
}

export interface DeviceDataProvider {
  getStatus(deviceId: string): Promise<DeviceStatus>;
  subscribeToStatus(deviceId: string, onChange: (value: DeviceStatus) => void): () => void;
  getObstacleEvents(deviceId: string): Promise<ObstacleEvent[]>;
  getLocation(deviceId: string): Promise<DeviceLocation | null>;
  listAlerts(deviceId: string): Promise<DeviceAlert[]>;
  updateConfiguration(deviceId: string, config: Partial<DeviceConfiguration>): Promise<DeviceConfiguration>;
}
