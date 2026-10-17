import {
  DeviceDataProvider,
  DeviceStatus,
  ObstacleEvent,
  DeviceLocation,
  DeviceAlert,
  DeviceConfiguration,
} from '../../types/device';
import {
  INITIAL_DEMO_STATUS,
  INITIAL_DEMO_CONFIG,
  INITIAL_DEMO_LOCATION,
  INITIAL_DEMO_ALERTS,
  INITIAL_OBSTACLE_EVENTS,
} from '../demo/fixtures';

export class DemoProvider implements DeviceDataProvider {
  private status: DeviceStatus = { ...INITIAL_DEMO_STATUS };
  private config: DeviceConfiguration = { ...INITIAL_DEMO_CONFIG };
  private location: DeviceLocation = { ...INITIAL_DEMO_LOCATION };
  private alerts: DeviceAlert[] = [...INITIAL_DEMO_ALERTS];
  private events: ObstacleEvent[] = [...INITIAL_OBSTACLE_EVENTS];
  private statusListeners: Array<(status: DeviceStatus) => void> = [];

  async getStatus(_deviceId: string): Promise<DeviceStatus> {
    return { ...this.status, lastUpdated: new Date().toISOString() };
  }

  subscribeToStatus(_deviceId: string, onChange: (value: DeviceStatus) => void): () => void {
    this.statusListeners.push(onChange);
    onChange(this.status);
    return () => {
      this.statusListeners = this.statusListeners.filter((l) => l !== onChange);
    };
  }

  async getObstacleEvents(_deviceId: string): Promise<ObstacleEvent[]> {
    return [...this.events];
  }

  async getLocation(_deviceId: string): Promise<DeviceLocation | null> {
    return { ...this.location, lastFixTime: new Date().toISOString() };
  }

  async listAlerts(_deviceId: string): Promise<DeviceAlert[]> {
    return [...this.alerts];
  }

  async updateConfiguration(_deviceId: string, updates: Partial<DeviceConfiguration>): Promise<DeviceConfiguration> {
    this.config = { ...this.config, ...updates };
    return { ...this.config };
  }

  // Demo simulator helper to record user interaction events
  recordSimulatorEvent(distanceCm: number, category: 'safe' | 'approaching' | 'close' | 'offline') {
    const newEvent: ObstacleEvent = {
      id: `ev_${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      distanceCm,
      category,
      vibrationIntensity: category === 'close' ? 'HIGH' : category === 'approaching' ? 'MEDIUM' : 'LOW',
      durationMs: category === 'close' ? 1500 : category === 'approaching' ? 800 : 0,
    };
    this.events = [newEvent, ...this.events.slice(0, 19)];
  }

  addSimulatedSosAlert(): DeviceAlert {
    const sosAlert: DeviceAlert = {
      id: `sos_${Date.now()}`,
      timestamp: new Date().toISOString(),
      type: 'SOS_SIMULATION',
      severity: 'danger',
      title: '🚨 SIMULATED SOS TRIGGERED',
      message: 'Demo push-button simulation. NO alert was sent to emergency services or guardians.',
      isDemoOnly: true,
      acknowledged: false,
    };
    this.alerts = [sosAlert, ...this.alerts];
    return sosAlert;
  }
}

export const demoProviderInstance = new DemoProvider();
