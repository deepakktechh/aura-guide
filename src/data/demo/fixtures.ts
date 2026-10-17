import { DeviceStatus, DeviceLocation, DeviceAlert, ObstacleEvent, DeviceConfiguration } from '../../types/device';

export const INITIAL_DEMO_STATUS: DeviceStatus = {
  deviceId: 'aura_demo_01',
  name: 'AURA Prototype Belt (Demo Unit)',
  isOnline: true,
  batteryLevel: 82, // clearly labeled simulated value
  lastUpdated: new Date().toISOString(),
  sourceMode: 'demo',
  firmwareVersion: 'v0.9.2-simulated',
  hardwareModel: 'Arduino UNO R3 (Prototype)',
};

export const INITIAL_DEMO_CONFIG: DeviceConfiguration = {
  warningThresholdApproachingCm: 150,
  warningThresholdCloseCm: 60,
  vibrationIntensity: 'HIGH',
  audioChimesEnabled: false,
  offlineSimulation: false,
};

export const INITIAL_DEMO_LOCATION: DeviceLocation = {
  lat: 13.0336,
  lng: 80.1784,
  accuracyM: 4.8,
  lastFixTime: new Date().toISOString(),
  isFictionalDemo: true,
  areaLabel: 'SRM IST Ramapuram Campus (Illustrative simulation only)',
};

export const INITIAL_DEMO_ALERTS: DeviceAlert[] = [
  {
    id: 'alt_01',
    timestamp: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    type: 'PROXIMITY_ALERT',
    severity: 'warning',
    title: 'Approaching Object Detected',
    message: 'Frontal proximity reached 85 cm. Both haptic motors activated at medium intensity.',
    isDemoOnly: true,
    acknowledged: true,
  },
  {
    id: 'alt_02',
    timestamp: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    type: 'PROXIMITY_ALERT',
    severity: 'danger',
    title: 'Close Obstacle Hazard',
    message: 'Obstacle detected within 38 cm. Both vibration motors pulsed at high intensity.',
    isDemoOnly: true,
    acknowledged: false,
  },
  {
    id: 'alt_03',
    timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(),
    type: 'LOW_BATTERY',
    severity: 'info',
    title: 'Simulated Battery Health',
    message: 'Battery level at 82%. Estimated simulation runtime: 4.5 hours.',
    isDemoOnly: true,
    acknowledged: true,
  },
];

export const INITIAL_OBSTACLE_EVENTS: ObstacleEvent[] = [
  { id: 'ev_01', timestamp: '08:00', distanceCm: 165, category: 'safe', vibrationIntensity: 'LOW', durationMs: 0 },
  { id: 'ev_02', timestamp: '09:00', distanceCm: 110, category: 'approaching', vibrationIntensity: 'MEDIUM', durationMs: 820 },
  { id: 'ev_03', timestamp: '10:00', distanceCm: 45, category: 'close', vibrationIntensity: 'HIGH', durationMs: 1400 },
  { id: 'ev_04', timestamp: '11:00', distanceCm: 140, category: 'approaching', vibrationIntensity: 'MEDIUM', durationMs: 650 },
  { id: 'ev_05', timestamp: '12:00', distanceCm: 32, category: 'close', vibrationIntensity: 'HIGH', durationMs: 1950 },
  { id: 'ev_06', timestamp: '13:00', distanceCm: 175, category: 'safe', vibrationIntensity: 'LOW', durationMs: 0 },
  { id: 'ev_07', timestamp: '14:00', distanceCm: 92, category: 'approaching', vibrationIntensity: 'MEDIUM', durationMs: 780 },
  { id: 'ev_08', timestamp: '15:00', distanceCm: 48, category: 'close', vibrationIntensity: 'HIGH', durationMs: 1620 },
  { id: 'ev_09', timestamp: '16:00', distanceCm: 125, category: 'approaching', vibrationIntensity: 'MEDIUM', durationMs: 840 },
  { id: 'ev_10', timestamp: '17:00', distanceCm: 180, category: 'safe', vibrationIntensity: 'LOW', durationMs: 0 },
  { id: 'ev_11', timestamp: '18:00', distanceCm: 55, category: 'close', vibrationIntensity: 'HIGH', durationMs: 1510 },
];

export const HOURLY_ANALYTICS_DATA = [
  { hour: '08:00', safe: 18, approaching: 4, close: 1, total: 23 },
  { hour: '09:00', safe: 14, approaching: 7, close: 3, total: 24 },
  { hour: '10:00', safe: 9, approaching: 12, close: 6, total: 27 },
  { hour: '11:00', safe: 15, approaching: 8, close: 4, total: 27 },
  { hour: '12:00', safe: 12, approaching: 11, close: 8, total: 31 },
  { hour: '13:00', safe: 20, approaching: 3, close: 1, total: 24 },
  { hour: '14:00', safe: 13, approaching: 9, close: 5, total: 27 },
  { hour: '15:00', safe: 8, approaching: 14, close: 9, total: 31 },
  { hour: '16:00', safe: 11, approaching: 10, close: 4, total: 25 },
  { hour: '17:00', safe: 16, approaching: 6, close: 2, total: 24 },
  { hour: '18:00', safe: 7, approaching: 13, close: 8, total: 28 },
];

export const RESEARCH_STATS = [
  {
    percentage: 60,
    headline: 'Navigation Incidents',
    description: 'Reported a navigation incident or disorientation when walking through unfamiliar or indoor buildings.',
    context: 'Survey n = 10',
  },
  {
    percentage: 50,
    headline: 'Head & Chest Hazards',
    description: 'Identified elevated, chest-level, or hanging obstacles as their primary physical hazard not detected by white canes.',
    context: 'Survey n = 10',
  },
  {
    percentage: 70,
    headline: 'Tactile + Audio Cues',
    description: 'Expressed preference for dual feedback cues combining silent haptic vibrations with optional discrete audio tones.',
    context: 'Survey n = 10',
  },
  {
    percentage: 80,
    headline: 'Offline Reliability',
    description: 'Rated local, offline obstacle detection as critical — wearable must never fail if Wi-Fi or cellular disconnects.',
    context: 'Survey n = 10',
  },
  {
    percentage: 90,
    headline: 'Future AI Object Recognition',
    description: 'Expressed strong interest in future intelligent object identification (doors, signs, stairs) if privacy is preserved.',
    context: 'Survey n = 10',
  },
];

export const TEAM_MEMBERS = [
  {
    name: 'Ishan Arabab',
    regNo: 'RA2511003020809',
    role: 'Hardware Prototyping & Sensor Integration',
    dept: 'CSE Core-N',
  },
  {
    name: 'Karan Saini',
    regNo: 'RA2511003020811',
    role: 'Circuit Architecture & Haptic Motor Control',
    dept: 'CSE Core-N',
  },
  {
    name: 'Deepak Sharma',
    regNo: 'RA2511003020827',
    role: 'System Integration, Software & Accessible UI',
    dept: 'CSE Core-N',
  },
  {
    name: 'Sreenik Dutta',
    regNo: 'RA2511003020830',
    role: 'User Research & Mobility Usability Testing',
    dept: 'CSE Core-N',
  },
];

export const HARDWARE_COMPONENTS = [
  {
    component: 'Arduino UNO R3',
    role: 'Core Microcontroller',
    purpose: 'Processes I2C sensor distance readouts and modulates PWM motor drivers.',
    status: 'Verified in Prototype',
  },
  {
    component: 'VL53L0X Time-of-Flight (ToF)',
    role: 'Laser Proximity Sensor',
    purpose: 'Centrally mounted forward sensor measuring distance up to 200 cm via 940nm photon flight.',
    status: 'Verified in Prototype',
  },
  {
    component: '2× Coin Vibration Motors',
    role: 'Tactile Haptic Feedback',
    purpose: 'Left & right mounted motors pulsing in unison with intensity proportional to forward hazard proximity.',
    status: 'Verified in Prototype',
  },
  {
    component: 'NPN Transistors & Diodes',
    role: 'Motor Switching & Flyback Protection',
    purpose: 'Isolates Arduino GPIO pins and protects microcontroller from inductive voltage spikes.',
    status: 'Verified in Prototype',
  },
  {
    component: 'ESP32 Wi-Fi & Bluetooth SoC',
    role: 'IoT Microcontroller',
    purpose: 'Enables authenticated guardian telemetry and telemetry streaming over TLS.',
    status: 'Phase 2 Roadmap',
  },
  {
    component: 'Neo-6M GPS Module',
    role: 'Outdoor Satellite Geolocation',
    purpose: 'Reads NMEA coordinates for consent-based guardian tracking and emergency location.',
    status: 'Phase 2 Roadmap',
  },
  {
    component: 'Hardware SOS Tactile Button',
    role: 'Emergency Dispatch Cue',
    purpose: 'Physical push button triggering high-priority emergency notifications to authorized guardians.',
    status: 'Phase 2 Roadmap',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Does AURA GUIDE replace a white cane or guide dog?',
    a: 'No. AURA GUIDE is strictly designed to complement traditional mobility aids, never replace them. White canes detect ground-level drop-offs, texture changes, and kerbs. AURA GUIDE focuses on upward frontal chest-height obstacles that a cane may miss.',
  },
  {
    q: 'Does the prototype detect whether an obstacle is on the left or the right?',
    a: 'No. The current prototype features a single forward-facing VL53L0X Time-of-Flight sensor. While there are two motors positioned on the belt for balanced physical perception, both motors activate in unison to indicate frontal distance. They do not localize left versus right hazards.',
  },
  {
    q: 'Is live GPS tracking and emergency SOS dispatch active today?',
    a: 'No. The current breadboard prototype uses an offline Arduino UNO R3 without network or GPS hardware. The Guardian Dashboard in this demonstration runs in an interactive Simulation/Demo Mode. Connected IoT telemetry is planned for Phase 2 using the ESP32 platform.',
  },
  {
    q: 'How does the device communicate proximity to the wearer?',
    a: 'Through tactile vibrations that scale with closeness. Beyond 150 cm is considered clear (Safe). Between 60 cm and 150 cm, the motors produce a gentle alert pulse (Approaching). Under 60 cm, the motors deliver high-frequency vibrations (Close Hazard).',
  },
  {
    q: 'Can the device operate without an internet connection?',
    a: 'Yes. Immediate obstacle detection and haptic safety cues are entirely self-contained and run locally on the microcontroller with zero cloud dependencies or latency.',
  },
  {
    q: 'Is AURA GUIDE commercially certified or available for sale?',
    a: 'No. AURA GUIDE is an academic engineering research prototype developed at SRM Institute of Science and Technology, Ramapuram. It is not a certified medical device and is not available for purchase.',
  },
];
