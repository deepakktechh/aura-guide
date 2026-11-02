# AURA GUIDE — Spatial Awareness Attachment for the Visually Impaired

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![React 18](https://img.shields.io/badge/Frontend-React%2018%20%7C%20TypeScript%205.5-61dafb.svg?style=flat-square)](https://react.dev/)
[![Styling: Tailwind CSS](https://img.shields.io/badge/Styles-Tailwind%20CSS%203.4-38b2ac.svg?style=flat-square)](https://tailwindcss.com/)
[![Animation: GSAP](https://img.shields.io/badge/Motion-GSAP%20ScrollTrigger-88CE02.svg?style=flat-square)](https://greensock.com/scrolltrigger/)
[![Hardware: Arduino + VL53L0X](https://img.shields.io/badge/Hardware-Arduino%20UNO%20%7C%20VL53L0X%20ToF-00979D.svg?style=flat-square)](https://www.st.com/en/imaging-and-photonics-solutions/vl53l0x.html)
[![Accessibility: WCAG 2.2 AA](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-success.svg?style=flat-square)](https://www.w3.org/TR/WCAG22/)

**Feel the Space. Navigate with Confidence.**

*An offline-first, haptic wearable engineered to bridge the mobility blindspot for visually impaired individuals through millimeter-precision Time-of-Flight laser telemetry.*

[Explore Live Prototype](http://localhost:5173/) • [Guardian Dashboard Demo](http://localhost:5173/dashboard) • [Hardware Blueprint](#-hardware-architecture--specifications) • [Research Context](#-exploratory-research--ground-truth)

</div>

---

## 📌 Executive Summary

Standard white canes provide invaluable ground-plane tactile feedback, alerting users to drop-offs, curbs, and floor obstacles. However, they possess a critical physical blindspot: **they cannot detect mid-level, chest-height, and head-level hazards** — such as protruding air conditioning units, overhanging tree branches, open truck liftgates, and elevated signage.

**AURA GUIDE** is an ergonomic, clip-on spatial awareness attachment designed to complement traditional mobility aids. By pairing a 940nm Time-of-Flight (ToF) laser ranging sensor with an instantaneous, deterministic edge-computing feedback loop, AURA GUIDE transforms distance into progressive, intuitive bilateral tactile vibrations.

```
       [ 940nm VCSEL Laser Pulse ]
                    │
                    ▼
       [ VL53L0X ToF Sensor Cone (~25°) ]
                    │
                    ▼  (I2C Fast Mode @ 400kHz)
       [ ATmega328P Edge Controller ] ── Zero Cloud Latency (<15ms Loop)
                    │
                    ▼  (PWM Proportional Voltage)
       [ Dual Bilateral Haptic Actuators ] ── Progressive Tactile Rhythms
```

---

## 🔬 Exploratory Research & Problem Statement

Initial exploratory user research ($n = 10$) revealed recurring friction points in independent urban navigation:

* **60%** reported severe disorientation and obstacle anxiety in unfamiliar indoor environments.
* **50%** identified chest- and head-height obstacles as their leading source of collision injuries.
* **70%** expressed a strong preference for non-auditory, tactile-first warnings to preserve spatial acoustic perception.
* **80%** demanded 100% offline, fail-safe operation independent of cellular networks or cloud connectivity.

> **Important Assistive Disclaimer:** AURA GUIDE is engineered as a **secondary, complementary spatial aid**. It does not replace the white cane, guide dog, or formal Orientation & Mobility (O&M) training.

---

## ⚡ Technical Specifications

### Hardware Subsystems (Benchtop & Wearable Prototype)

| Component | Technical Specification | Functional Role |
| :--- | :--- | :--- |
| **Primary Sensor** | STMicroelectronics VL53L0X | 940nm VCSEL Time-of-Flight infrared distance ranging (0.05m to 2.0m range, ~25° Field of View). Unaffected by surface color or ambient reflectivity. |
| **Edge Compute** | Arduino UNO R3 (Microchip ATmega328P @ 16 MHz) | Deterministic real-time sampling loop, digital filtering, and PWM haptic curve generation. 100% offline. |
| **Haptic Actuators** | Dual 1027 Coin-Type ERM Vibration Motors | Bilateral tactile feedback. Vibrates synchronously with frequency and amplitude inversely proportional to distance. |
| **Driver Stage** | Dual NPN Transistor Drivers (2N2222) + 1N4001 Flyback Diodes | Inductive kickback protection with isolated microcontroller GPIO logic. |
| **Power Budget** | 5V DC via regulated power rail / 3.7V LiPo with boost regulator | Continuous operational draw: ~95mA idle, ~180mA peak under active dual vibration. |
| **Edge Latency** | $< 15\text{ ms}$ closed-loop execution | Real-time response at typical pedestrian walking velocity (1.2–1.4 m/s). |

---

## 🎛️ Tactile Calibration & Distance Zones

The microcontroller categorizes frontal space into three deterministic threshold zones:

```
[Wearer] ──0.0m────────────0.3m──────────────0.8m──────────────1.8m───────>
             │    HAZARD     │   APPROACHING   │     SAFE      │
             │   (Rapid 6Hz) │    (Pulse 2Hz)  │   (Silent)    │
```

1. **Safe Zone ($> 0.8\text{m}$ to $2.0\text{m}$):**
   * *Haptic State:* Idle (0% duty cycle).
   * *Status:* Clear forward trajectory.
2. **Approaching Zone ($0.3\text{m} - 0.8\text{m}$):**
   * *Haptic State:* Moderate rhythmic pulsing ($120\text{ms}$ pulse @ $2.5\text{Hz}$).
   * *Status:* Non-urgent spatial cue notifying wearer of impending obstacle.
3. **Hazard Proximity Zone ($< 0.3\text{m}$):**
   * *Haptic State:* High-frequency, intense continuous vibration ($80\text{ms}$ pulse @ $6.0\text{Hz}$).
   * *Status:* Immediate stop / pivot tactile signal.

---

## 💻 Web Architecture & Guardian Simulation

This repository includes the complete AURA GUIDE digital ecosystem:

* **Minimal DTC Product Showcase:** Designed with inspiration from clean Scandinavian and Apple-grade industrial product design, featuring high-contrast typography, floating pill technical callouts, and responsive interactive hardware gauges.
* **GSAP ScrollTrigger Sensory Pipeline:** An interactive, scroll-pinned presentation scrubbing across the four hardware phases (**Detect → Process → Feel → Confidence**).
* **Guardian Dashboard (Demo & Architecture):** A prototype telemetry interface designed for authorized caregivers and guardians:
  * Simulated real-time frontal proximity radar.
  * Live alert stream with simulated incident severity levels.
  * Battery health monitoring and telemetry logs.
  * Remote feedback parameter tuning (demo mode).
* **Accessibility-First Engineering (WCAG 2.2 AA):**
  * Full keyboard accessibility with high-visibility focus indicators.
  * High-contrast mode toggle (`localStorage` persisted).
  * Reduced-motion query detection (`prefers-reduced-motion`) disabling intense animations for vestibular safety.
  * Semantic landmark markup and ARIA live regions for screen readers.

---

## 📁 Repository Structure

```
aura-guide/
├── public/
│   └── assets/                     # High-resolution prototype and hardware photography
│       ├── arduino-uno.jpg
│       ├── belt-hero.jpg
│       ├── cane-traveler.jpg
│       ├── prototype-breadboard.jpg
│       ├── vibration-motors.jpg
│       ├── vl53l0x-sensor.jpg
│       └── wearable-module.jpg
├── src/
│   ├── components/
│   │   ├── device/                 # Hardware diagrams, distance gauges & motor visualizers
│   │   ├── home/                   # Showcase components, editorial sections & GSAP scroll story
│   │   │   ├── CinematicScrollStory.tsx
│   │   │   ├── MasterChallenge.tsx
│   │   │   ├── MasterHero.tsx
│   │   │   ├── MasterHowItWorks.tsx
│   │   │   ├── MasterIdea.tsx
│   │   │   ├── MasterPrototype.tsx
│   │   │   └── MasterVision.tsx
│   │   ├── layout/                 # Minimalist Navbar, Footer, and DashboardLayout
│   │   └── ui/                     # Accessible badges, buttons, modals, and bento cards
│   ├── context/                    # ThemeContext (Light/Dark/High-Contrast) & DemoDeviceContext
│   ├── data/                       # Telemetry fixtures, device specs, and simulation providers
│   ├── pages/
│   │   ├── dashboard/              # Guardian Dashboard overview, telemetry, and settings
│   │   └── public/                 # Home, About, How It Works, Prototype, Roadmap, Team
│   ├── App.tsx                     # React Router configuration
│   └── main.tsx                    # React DOM entry point
├── AURA_GUIDE.md                   # Master PRD, Safety Boundaries & Build Playbook
├── tailwind.config.js              # Custom design tokens, typography, and contrast themes
├── vite.config.ts                  # Vite build configuration
└── package.json                    # Project dependencies and scripts
```

---

## 🚀 Getting Started

### Prerequisites

* **Node.js:** v18.0.0 or higher
* **npm:** v9.0.0 or higher

### Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/deepakktechh/aura-guide.git
   cd aura-guide
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   * Public Product Showcase: `http://localhost:5173/`
   * Guardian Dashboard Demo: `http://localhost:5173/dashboard`

5. **Typecheck and Production Build:**
   ```bash
   npm run build
   ```

---

## 🗺️ Project Roadmap

- [x] **Phase 0:** Research analysis, baseline breadboard circuit (Arduino UNO + VL53L0X + Dual ERMs), and minimal web showcase.
- [x] **Phase 1:** Motion-scrolling interactive sensory pipeline and simulated Guardian Dashboard architecture.
- [ ] **Phase 2:** Hardware migration to **ESP32-WROOM-32** with integrated BLE/Wi-Fi telemetry.
- [ ] **Phase 3:** Custom CAD 3D-printed enclosure with magnetic quick-release belt clip.
- [ ] **Phase 4:** End-to-end encrypted MQTT telemetry syncing with caregiver mobile companion app.
- [ ] **Phase 5:** Multi-sensor spatial expansion (secondary downward ToF sensor for curb drop-off detection).

---

## 👥 Academic & Project Context

* **Project:** Spatial Awareness Attachment for the Visually Impaired
* **Product:** AURA GUIDE
* **Course:** Design Thinking and Methodology (DTM)
* **Department:** Department of Computer Science and Engineering (CSE Core-N)
* **Institution:** SRM Institute of Science and Technology, Ramapuram, Chennai, India

---

## 📄 License

This project is open-source and distributed under the [MIT License](LICENSE).

<div align="center">
<sub>Crafted with human-centered empathy, assistive engineering, and accessible design principles.</sub>
</div>
