# AURA GUIDE — Antigravity Master PRD & Build Playbook

> **Project:** Spatial Awareness Attachment for the Visually Impaired  
> **Product:** AURA GUIDE — Feel the Space. Navigate with Confidence.  
> **Version:** 2.0 — demo-first planning document  
> **Date:** 17 October 2026  
> **Primary environment:** Windows + Google Antigravity IDE  
> **Status:** APPROVED TO WRITE THIS SPECIFICATION ONLY. **NO APP CODE, HARDWARE FIRMWARE, LIVE SERVICES, OR DEPLOYMENT ARE AUTHORIZED BY THIS FILE.**

---

## START HERE — Important Instructions for the Antigravity AI Agent

**Read this complete file before touching any code.** Treat this as the project's master functional specification, interface brief, architecture guide, safety policy, and implementation roadmap.

### Your role

Act as a patient senior full-stack engineer, product designer, accessibility specialist, and embedded-systems mentor helping a **beginner** build AURA GUIDE one approved step at a time. Use plain English, short explanations, and exact Windows-oriented commands whenever the user approves an implementation step.

### NON-NEGOTIABLE approval protocol

1. **On first reading this file: do not create or modify any code.** Summarize the project, recommend the very first small task, list the files that *would* change, state commands *you would run*, then ask: **“May I start Phase 0?”**
2. **Wait for explicit approval for each phase or scoped subtask** (e.g. “Approve Phase 1: foundation”). A message such as “continue” approves only the next clearly described task, **not** all remaining phases.
3. Before edits: explain the proposed implementation, changed files, dependencies, anticipated outputs and any risks; request authorization.
4. After edits: list what changed, show verification results, describe how to run and inspect it locally, identify incomplete items, and **STOP** until another approval.
5. Do not autonomously install packages, run terminal commands, delete or overwrite user content, create accounts, read private credentials, connect cloud services, flash devices, modify hardware configurations, publish code, or deploy a site without task-specific permission. Do not request blanket terminal approval.
6. **Never claim live telemetry, GPS tracking, SOS dispatch, remote controls, AI vision, audio output or testing with visually impaired users exists until verifiably implemented.** Do not simulate a real emergency notification.
7. If an instruction conflicts with this file or the real hardware state, explain the conflict and request a decision; do not silently change the requirements.
8. Keep all prototypes reproducible: use small commits after user approval, short readable components, an `.env.example` without secrets, explanatory comments only where useful, and transparent mock-data labels.
9. The user may say **“STOP”** at any time. Stop modifications and show current work state.
10. After a serious failing test, **do not** claim the phase is done; report the failure, offer a minimal fix, and ask approval if beyond the existing scope.

> **First response the agent must give after reading this PRD:** “I understand the public site, demo Guardian Dashboard, and future ESP32 roadmap. No code has been generated. Proposed first task: Phase 0 project inspection/setup planning. May I start Phase 0?”

---

## 1. Project Overview & Ground Truth

### 1.1 Mission

AURA GUIDE is a proposed **haptic-first wearable spatial awareness attachment** for people with visual impairments. It aims to complement, not replace, established mobility tools and training. A forward-looking sensor estimates **frontal obstacle proximity** and produces tactile cues, with an accessible companion website to explain the project and a potential Phase 2 dashboard for authorized guardians.

### 1.2 What exists today vs. what is planned

| Capability | Current prototype / known state | Demo website | Planned Phase 2 integration |
|---|---|---|---|
| Microcontroller | **Arduino UNO R3** | Simulated device | **ESP32** with wireless connectivity |
| Distance sensor | **One centrally mounted VL53L0X ToF** | Simulated distance changes | VL53L0X sensor telemetry |
| Haptic feedback | **Two left/right-positioned vibration motors** | Visual animation of vibration | Real haptic motors |
| Detection direction | **One forward field of view**; not true left/right hazard localization | Clearly labeled frontal warning | Expand with extra sensing only after hardware changes |
| Battery percentage | Not verified as measured | Marked sample data | Battery measurement circuit and calibrated readings |
| Live Wi-Fi/Internet | Not part of described UNO prototype | Simulated connection states | ESP32 Wi-Fi + authenticated telemetry |
| GPS map | No GPS installed in current description | Sample **demo map**, or unavailable state | Neo-6M GPS module or confirmed alternative |
| SOS | No verified physical end-to-end SOS implementation | **SIMULATION ONLY; NO ALERT SENT** | Explicitly built, tested physical SOS system |
| Remote settings | Not verified on current Arduino setup | Changes demo preferences only | Validated, authenticated remote configuration |
| Audio alerts | Not confirmed in current hardware | Optional simulated UI control, clearly disabled when unsupported | Proposed future add-on |
| AI object recognition | Not present in current hardware | Roadmap only | Optional future, not promised |

**Technical truth:** With one forward-facing ToF sensor, **both haptic motors may activate together and vary intensity to indicate proximity**; their physical placement does **not** provide independent left-versus-right obstacle detection. The belt is not a replacement for a white cane, orientation skills, or professional mobility support. Limitations include field of view, occlusion, reflectivity, environmental conditions and reliability. Never promise accident prevention.

### 1.3 Who uses the website?

- **Visitor:** Learns what AURA GUIDE is, sees the prototype, survey findings, roadmap, team and contact options.
- **Demo visitor:** Opens a clearly watermarked **Simulation / Demo Mode** Guardian Dashboard and explores sensor and warning states with no real wearable connected.
- **Authorized guardian (future):** Authenticates, views devices shared with consent, receives verified status and events, and manages allowed settings.
- **Wearer (future):** Controls access, sharing, alerts and data retention; consent and dignity are central.
- **Developer/admin (future):** Tests device connectivity and diagnoses faults using appropriately restricted access.

### 1.4 Research context (source pitch deck; exploratory survey n = 10)

- 60% reported a navigation incident or disorientation in unfamiliar buildings.
- 50% identified head/chest-height obstacles as the largest challenge.
- 70% preferred combined haptic and audio alerts.
- 80% rated offline use important.
- 90% considered real-time AI recognition valuable.

These are **small exploratory survey results**, not population statistics or confirmed product performance. State `n = 10` and avoid generalizing to all visually impaired users. If data is shown in charts, label it **user research**, not **device testing**.

### 1.5 Project identity & assets

- Formal title: **Spatial Awareness Attachment for the Visually Impaired**
- Product name: **AURA GUIDE**
- Slogan: **Feel the Space. Navigate with Confidence.**
- Institutional context: SRM Institute of Science and Technology, Ramapuram; CSE Core-N; Design Thinking and Methodology.
- **Existing images:** Team photo, classroom breadboard prototype photo, and earlier presentation diagrams exist outside this MD. **Do not claim that these image files are in the Antigravity workspace unless the user copies them into `/public/assets/`**. Request those files at the relevant approval gate.
- Some older renders depict extra HC-SR04 sensors and a third motor. **Do not reuse those as current hardware schematics.**

---

## 2. Product Scope, MVP and Boundaries

### 2.1 Required product scope

Build **both**:

1. **Public AURA GUIDE website** — impressive, credible, responsive product showcase suitable for an academic demonstration and startup presentation.
2. **Protected Guardian Dashboard architecture** — begin with a genuinely interactive **demo mode**; add real authorization and connected functions in later, separately approved phases.

### 2.2 Demo-first MVP (first working milestone)

A local website that allows a visitor to:

- Browse attractive public pages and switch dark/light/system theme.
- Open Demo Dashboard with a prominent **DEMO MODE · NO DEVICE CONNECTED** label.
- Change a simulation slider for forward distance and watch the illustrated warning state update.
- View simulated device connectivity, battery, obstacle-event charts, mock alerts, and settings that only affect demo state.
- Switch between **Safe**, **Approaching**, **Close**, and **Offline** states.
- View an explicitly fictional map example or a tracking-unavailable state; never show it as a real person's position.
- Observe accessible, keyboard-usable interactions and responsive layouts.
- See clear current-vs-planned distinctions and honest user research disclaimers.

**Not included in the MVP:** real location transmission, hardware pairing, real SOS dispatch, background caregiver surveillance, production login, push notifications, database writes, remotely changing sensor thresholds, device OTA, and ESP32 firmware.

### 2.3 Success conditions for MVP

- Public pages and demo dashboard work on small phones, tablets and laptops.
- Every visible navigation item, CTA, setting and control has an intentional working action, including error/empty states.
- All metrics in demo are visibly simulated; a live/production state never silently falls back to fake data.
- Light/dark/system themes persist locally and retain legible contrast.
- Demo simulator updates warnings deterministically; no invented sensor reading is presented as hardware output.
- All routes have purposeful content; no lorem ipsum, dead buttons or empty placeholder charts in an approved finished phase.
- Loading, offline, no-data, error, and reduced-motion states are accounted for.

---

## 3. Tech Stack — Preserve Source PRD, Simplify First Build

### 3.1 Original PRD technology choices (retain these requirements)

| Layer | Requested technology | Decision |
|---|---|---|
| Hardware firmware | **ESP32 + C++ (Arduino framework) + VL53L0X + Neo-6M GPS + motors** | **Future hardware phase; do not code now** |
| Frontend | **React.js + Vite + Tailwind CSS** | Use for approved frontend phases |
| Maps | **React-Leaflet** | Integrate when map is needed and approved |
| Analytics | **Recharts** | Use for analytics visualization |
| Backend | **Node.js + Express.js** | Future phase; approved separately |
| Database | **Firebase Realtime Database** (preferred) **or MongoDB + WebSockets/Socket.io** | **Choose ONE path at integration gate**; Firebase is recommended, not required |
| Device protocol | **MQTT** or **REST with WebSockets** | Choose after ESP32/network architecture is agreed |

### 3.2 Recommended additions (not part of original PRD)

- **React Router** for page routing.
- **TypeScript** preferred for frontend models; keep beginner-friendly explanations. If the user insists on JavaScript, ask to change before generating code.
- **Lucide icons** for consistent simple icons; do not use icons without labels for important controls.
- **Firebase Authentication** *later*, if Firebase is chosen, plus least-privilege security rules.
- **React Context or lightweight state** for theme, demo state, and shared device state; avoid unnecessary state libraries initially.
- **ESLint + Prettier**, simple tests, and Git for quality control after user approval.
- **PWA** and install support as optional later work, not initial mandatory complexity.

### 3.3 Data-source contract — absolute requirement

Provide an explicit adapter / provider interface so UI components do not depend directly on simulated data:

```ts
// INTERFACE PROPOSAL ONLY — do not create a file until phase approval.
export type SourceMode = 'demo' | 'live';
export interface DeviceDataProvider {
  getStatus(deviceId: string): Promise<DeviceStatus>;
  subscribeToStatus(deviceId: string, onChange: (value: DeviceStatus) => void): () => void;
  getObstacleEvents(deviceId: string): Promise<ObstacleEvent[]>;
  getLocation(deviceId: string): Promise<DeviceLocation | null>;
  listAlerts(deviceId: string): Promise<DeviceAlert[]>;
  updateConfiguration(deviceId: string, config: DeviceConfiguration): Promise<void>;
}
```

The types above are a design sketch, not a drop-in implementation. Type definitions, authentication and error handling will be completed in an approved phase.

- `DemoProvider`: deterministic seeded in-memory sample data; optional browser-local demo preferences. Never calls emergency services.
- `LiveProvider`: authenticates and validates real API responses; no fabrication when unreachable.
- UI source badge: `DEMO` or `LIVE VERIFIED`; show stale data timestamp / disconnected status distinctly.
- Use named mock fixtures; **sample data must never be mislabeled as measured data**.
- Choose source mode explicitly; **never silently fall back from failing live data to demo data**.

### 3.4 API / hardware integration architecture (later)

```text
CURRENT MILESTONE (NO HARDWARE REQUIRED)
Visitor -> React/Vite UI -> DemoProvider -> simulated state & charts

LATER, ONLY AFTER APPROVAL:
Wearable (ESP32 + VL53L0X + GPS if installed)
  -> authenticated API/message channel
  -> Node/Express ingestion + validation (or approved Firebase path)
  -> Firebase Realtime DB  [OR approved alternate MongoDB + WebSockets]
  -> role-protected Guardian Dashboard
  -> optional opt-in notifications
```

A Wi-Fi ESP32 alone **does not** create location data. GPS requires installed functioning location hardware, connectivity and user consent. Browser geolocation is not a substitute for wearable GPS data.

---

## 4. Futuristic Visual Design System

### 4.1 Design direction

**Premium accessible futuristic technology — not a crowded sci-fi screen.** Use deep navy surfaces, electric cyan accents, bright clear text, subtle glow, tasteful glass-like panels and bento grids. Every text element must remain readable on both themes. Functional clarity beats animation.

### 4.2 Tokens (suggested starting values; inspect actual contrast)

| Design token | Dark theme | Light theme |
|---|---|---|
| Main background | `#071321` | `#F5F9FC` |
| Elevated surface | `#102238` | `#FFFFFF` |
| Raised / bento card | `#142B43` | `#EAF3F8` |
| Primary text | `#F2F8FF` | `#11283A` |
| Secondary text | `#B9CBDC` | `#40576B` |
| Cyan primary accent | `#36D6E9` | `#087C91` |
| Focus ring | High-visibility cyan or yellow | Deep blue or teal |
| Success / caution / danger | Accessible green / amber / red **plus icon and text** | Ditto |

Use CSS tokens/variables, not scattered hard-coded colors. Check contrast and interactive states; do not assume the listed pairs automatically satisfy every WCAG scenario. Avoid translucent text overlays where contrast drops.

### 4.3 Components

- Sticky compact navbar on public pages; logo and clear `Explore Dashboard` CTA.
- Responsive **bento-card** system for features, project milestones, and telemetry.
- Accessible theme toggle: **Light / Dark / System**, not a confusing unlabeled icon only.
- Meaningful charts with text summaries and accessible data alternatives.
- Monospace numeric readouts where useful, but body copy uses an easy-to-read sans-serif.
- Professional status labels: `SIMULATED`, `OFFLINE`, `CONNECTING`, `LIVE VERIFIED`, `STALE`.
- Skeletons only when actually loading; no random spinning indicators.
- Subtle scroll reveals / hover movement only when appropriate; honor `prefers-reduced-motion`.
- Preserve a clean mobile layout; no horizontal overflow, tiny controls or icon-only navigation.

### 4.4 Accessibility non-negotiables

- Work toward **WCAG 2.2 AA**: semantic landmarks, headings, logical focus order, visible focus, meaningful labels and sufficient contrast.
- All functions keyboard accessible, including simulator slider, theme controls and chart filters.
- Do not rely on color, sound, haptic animation or motion alone to communicate warning state.
- Provide alt text for informative photos; decorative visuals use empty alt text.
- Status changes announced via a restrained accessible live region; **avoid overwhelming screen readers with rapid distance changes**.
- Include reduced-motion handling and text size controls when useful.
- For a visual-impairment-related product, ensure the site itself works at high zoom and with assistive tech.
- No inaccessible autoplay audio, flashing alerts or high-frequency motion.

---

## 5. Public Website — Exact Page Blueprint

### Page P1 — Home `/`

**Goal:** Explain product in 5–10 seconds; route visitors to how it works and the demo.

Sections, in order:
1. **Hero:** AURA GUIDE — “Feel the Space. Navigate with Confidence.” Short statement: *A prototype wearable belt providing tactile warnings for obstacles detected ahead.* CTAs: `See How It Works`, `Try Interactive Demo`.
2. **Product visual:** User-supplied prototype image or a clearly labeled conceptual illustration. No generated image presented as real hardware.
3. **Problem:** A concise mobility challenge description; exploratory survey cards `60%`, `50%`, labeled `Research survey (n=10)`.
4. **How it works in 3 steps:** `Sense → Decide → Feel`, one front sensor, both motors.
5. **Key benefits:** Hands-free form, tactile-first experience, offline sensing concept, complements white cane.
6. **Feature differentiation:** `Available in prototype` vs `Phase 2 planned` side-by-side.
7. **Team/Research preview + footer:** Project origin and accessible links.

CTA behavior: Navigate to actual routes; avoid placeholder `href="#"`.

### Page P2 — About & Mission `/about`

Origin of the college prototype, inclusive design rationale, ethics, design-thinking process, honest limitations. Explain that the current device is not a certified safety system.

### Page P3 — How It Works `/how-it-works`

Diagram with **exact current hardware**: one forward VL53L0X → Arduino UNO → motor driver circuits → two motors activated together. Show safe/approaching/close logic **without claiming experimentally established thresholds**. Provide accessible explanation and future ESP32 comparison panel.

### Page P4 — Prototype & Hardware `/prototype`

- Classroom prototype photo with credit/description; label `breadboard prototype`.
- Components table: UNO R3, VL53L0X, two vibration motors, transistors, resistors, protective diodes, breadboard and wires; only show a battery/enclosure if actually supplied.
- Current strengths, known limitations and verified-vs-proposed distinctions.
- Additional visuals from pitch deck only after user imports them. Do not assume outdated diagram is correct.

### Page P5 — Impact & Research `/research`

Exploratory survey of ten respondents: 60% navigation incident/disorientation, 50% head/chest challenges, 70% combined alert preference, 80% offline importance. Charts need labels, sample size and limits. Link methodology/survey source only if provided. No made-up testimonials.

### Page P6 — Roadmap `/roadmap`

- **Now:** Breadboard sensing and two-motor haptic concept.
- **Next:** Improve physical belt ergonomics, validate sensing, measure battery and comfort, testing with appropriate guidance.
- **Phase 2:** ESP32, Wi-Fi telemetry, optional consent-based GPS, SOS workflow, guardian dashboard integration.
- **Exploratory:** Audio options, AI-assisted recognition, multi-sensor directional awareness, PWA enhancements.

### Page P7 — Team & Contact `/team`

Project contributors (supplied):

| Team member | Registration number |
|---|---|
| Ishan Arabab | RA2511003020809 |
| Karan Saini | RA2511003020811 |
| Deepak Sharma | RA2511003020827 |
| Sreenik Dutta | RA2511003020830 |

Faculty: Dr. ARUN A. School: SRM IST Ramapuram. A group photograph may show only three visible people; **do not infer identity from faces or claim the fourth person appears in the photo**. Do not publish direct contact information without the user's confirmation. If no contact address is supplied, hide the contact form rather than make a non-working submit button.

### Page P8 — FAQ `/faq`

Answer: Does it replace a white cane? Is location tracking live? Does it identify left vs right obstacles? Does it have audio/AI? How reliable is it? Is it currently for sale? Explain current proof-of-concept status.

---

## 6. Guardian Dashboard — Page-by-Page Blueprint

**Routing concept:** `/dashboard/*`. `Demo Dashboard` is publicly enterable as a sandbox only; real guardian routes require separate approved authentication implementation. Navigation items must not misleadingly imply production access controls exist.

### D1 — Overview `/dashboard`

- Demo watermark in navbar and each relevant data section.
- Greeting + connected device name such as `Aura Demo Unit`.
- Bento stats: simulated connection status, simulated battery %, last simulated event, proximity category.
- Main distance simulator (cm slider), warning state illustration, both-motor feedback visualization.
- Recent mock events, quick navigation to history, settings and roadmap.
- Empty/offline state and clear `Reset Demo` control.

### D2 — Live Monitor `/dashboard/monitor`

- Real-time **simulation** of a single forward-facing sensor; update based on local user interaction, not fake background telemetry.
- Numeric simulated distance in cm, progress/gauge, textual `SAFE / APPROACHING / CLOSE` states.
- Two motor icons that pulse **together**, intensity based on proximity. Never show L/R obstacle localization.
- Demo controls: manual distance slider and preset buttons `Clear Path`, `Approaching Object`, `Close Obstacle`, `Sensor Offline`.
- Demonstrate warning logic: **illustrative initial thresholds only**, configurable but not hardware-calibrated. Recommended demo defaults: `safe > 150 cm`, `approaching 60–150 cm`, `close < 60 cm`; boundary values handled deterministically. These are **UI simulation thresholds, not safety-certified distances**.
- Off state: display `No sensor feed`, not `No obstacle`.

### D3 — Analytics `/dashboard/analytics`

- Recharts line/bar charts with data labeled `Sample obstacle events` in demo mode.
- Hourly/daily toggle and meaningful date ranges.
- Events table as text alternative.
- Never equate threshold crossings to collisions or injuries.
- Data retention controls and export functionality only if actually implemented.

### D4 — Alerts & SOS `/dashboard/alerts`

- Mock event timeline, notification preferences, distinct SOS simulation card.
- `Simulate SOS` must open an explicit confirmation and permanently display **“DEMO ONLY — no message is sent to emergency services or guardians.”**
- Future real mode requires authenticated recipients, connectivity monitoring, retry/failure states and human confirmation; no claim of guaranteed dispatch.

### D5 — Location `/dashboard/location`

- Default view: `GPS is not installed/connected to this demo device` or a visibly watermarked **fictional illustrative map**, not a user-specific coordinate.
- React-Leaflet where appropriate; avoid loading unneeded map scripts on unrelated pages.
- Future consent-based guardian location, explicit sharing controls, timestamp and accuracy confidence.
- No automatic collection of browser position, no covert tracking, no precise location published to public routes.

### D6 — Device Settings `/dashboard/settings`

- Demo controls for simulated warning distance and simulated vibration intensity.
- Show that changes affect **demo behavior only**; no remote write to current Arduino prototype.
- Validate ranges; `Reset to Demo Defaults`, save confirmation, accessible explanations.
- Real implementation: authentication, authorization, audit trail, versioned acknowledgement, local fallback limits, anti-replay checks and safety review. **Do not permit unsafe settings solely because a cloud value exists.**

### D7 — Account & Accessibility `/dashboard/preferences`

- Theme (light/dark/system), larger text, reduced motion, keyboard help, notification preferences.
- In demo, no real guardian account; show `Sign in (planned)` only if meaningful or keep account view hidden.
- Later: consent management, wearer control over sharing, authorized guardians, device pairing, logout and data deletion requests.

---

## 7. Preserved Original PRD Features — Detailed Contracts

The following five features come from the uploaded Phase 2 PRD. They **remain in scope**, but are not claimed implemented.

### F1. Live System Health (Phase 2)

**Original intent:** ESP32 reports battery level, online/offline state, and last activity at about **30-second heartbeat** intervals using calibrated battery ADC readings. Frontend presents a battery indicator and `Last Active` timestamp.

**Guardrails:** Handle lost heartbeat, stale values, time skew, battery measurement calibration and device identity; don't show 85% sample battery as measured. Define a documented heartbeat timeout at integration time.

### F2. Real-time Location Tracking (Phase 2)

**Original intent:** ESP32 reads Neo-6M GPS NMEA data, sends latitude/longitude, renders it through React-Leaflet.

**Guardrails:** Must have a physical GPS module, fix quality, connection, consent, access control, retention and last-seen timestamps. Mark stale/no-fix information and disable public sharing by default.

### F3. SOS & Emergency Alerts (Phase 2)

**Original intent:** physical button triggers high-priority event, dashboard listens and displays visual/audio warning.

**Guardrails:** Debounce/confirm to prevent accidental activation, authenticate messages, log delivery state, verify recipient permission, test network outages and missed alerts; never represent a dashboard alarm as emergency service dispatch. Keep physical-hardware SOS separate from web simulation.

### F4. Remote Device Configuration (Phase 2)

**Original intent:** dashboard controls warning distance and motor intensity; ESP32 receives updates through chosen messaging/data path.

**Guardrails:** Restrict who can configure, validate bounds and physical constraints, show `requested` vs `applied` vs `rejected` status, require safe local fallback; no unverified unlimited cloud authority over a mobility safety cue.

### F5. Obstacle Analytics & Logs (Phase 2)

**Original intent:** timestamp/count threshold-crossing events and chart them with Recharts, e.g., events by hour.

**Guardrails:** Counts are **detections/events**, not real accidents or human safety outcomes. Use minimal data, configurable retention and opt-in if paired with location.

### 7.1 Original database example — retained verbatim, but illustrative ONLY

The source PRD proposed the following schema. Values are mock examples, including the coordinates; never treat them as a real wearer, an actual device or current live reading.

```json
{
  "device_id_123": {
    "status": {
      "isOnline": true,
      "batteryLevel": 85,
      "lastUpdated": "2026-10-17T18:00:00Z"
    },
    "location": {
      "lat": 13.0827,
      "lng": 80.2707
    },
    "alerts": {
      "sosActive": false,
      "lastSosTime": null
    },
    "configuration": {
      "warningDistanceCm": 120,
      "vibrationIntensity": "HIGH"
    },
    "analytics": {
      "obstaclesDetectedToday": 42
    }
  }
}
```

### 7.2 Future schema improvements to design at backend approval gate

Add as appropriate: `schemaVersion`, `mode`, `wearerId`, `guardianAccess`, `deviceModel`, `capabilities`, heartbeat/reported timestamp, last-known GPS `fixStatus/accuracyM`, typed `alertEvents`, `configVersion`, `configAcknowledgement`, event IDs and tenant-scoped access controls. These are proposals, **not permission to modify the original fields or build a database now**.

---

## 8. Security, Consent, and Responsible Monitoring

- Device location is extremely sensitive; collect only when the wearer knows, agrees and can revoke sharing.
- **Role-based access** and per-device authorization are required before any live dashboard for guardians. Demo does not need private accounts.
- Prevent ID enumeration; do not rely on a guessable `device_id_123` alone for access.
- Keep tokens/API secrets outside Git and frontend bundles; use example placeholder environment variables.
- Do not expose Firebase Admin credentials in browser code; server-only secrets remain server-side.
- Validate user inputs, sanitize displayed data, rate-limit APIs and document Firebase security rules if chosen.
- Use HTTPS/TLS for connected mode; authenticate ESP32 messages; avoid unauthenticated MQTT topics or open databases.
- Set explicit retention and delete/export paths before storing real location/SOS logs.
- Never run real SOS tests that alert third parties without specific informed consent and a test recipient.
- Explicitly label experimental sensing and known limitations on relevant screens.

---

## 9. Project Folder Plan (proposal, not authorization to create files)

```text
aura-guide/
├── README.md
├── AURA_GUIDE_ANTIGRAVITY_MASTER_PRD.md     <-- THIS FILE
├── .env.example
├── .gitignore
├── docs/
│   ├── decisions.md
│   ├── testing-checklist.md
│   └── integration-contracts.md
├── public/
│   └── assets/                      <-- import user-supplied photos with permission
├── src/
│   ├── app/                         <-- routing, providers and app shell
│   ├── pages/
│   │   ├── public/                  <-- Home, About, Research, Prototype, FAQ, Team
│   │   └── dashboard/               <-- Overview, Monitor, Analytics, Alerts, etc.
│   ├── components/
│   │   ├── ui/                      <-- Buttons, cards, nav, inputs, modal
│   │   ├── charts/
│   │   └── device/                  <-- Distance gauge, motor state, device cards
│   ├── data/
│   │   ├── demo/                    <-- clearly simulated fixtures
│   │   └── providers/               <-- DemoProvider / later LiveProvider
│   ├── hooks/
│   ├── styles/
│   └── types/
└── server/                           <-- DO NOT CREATE until backend approved
    └── (future Node/Express source)
```

The final directory layout may be refined after inspecting generated Vite structure. Do not invent folders purely to fill this tree.

---

## 10. Antigravity Beginner Workflow — Windows, from Zero

**Read this as an instructional playbook; none of these actions are authorized until the user approves the matching phase.**

### Phase 0 — Prepare environment & review plan (approval gate)

1. Install or open the **official Google Antigravity IDE** on Windows from `https://antigravity.google/download` if needed.
2. Install **Node.js LTS** from its official website if not installed. Confirm with PowerShell or the IDE terminal: `node -v` and `npm -v`.
3. Create a local folder named `aura-guide` in a known location; open it as an Antigravity project/workspace using `New Project` → `Add Folder` → `Create` (UI wording may differ by release).
4. Put this Markdown specification at the **workspace root** so the agent can read it.
5. In agent chat, type: **`Read AURA_GUIDE_ANTIGRAVITY_MASTER_PRD.md fully. Do not code. Explain the implementation plan and ask for Phase 0 approval.`**
6. Choose a **review-driven** agent/terminal permission setting where available; inspect each proposed change and terminal command before approving.
7. Discuss local folder, Node version, TypeScript choice and whether Git should be initialized; **do not install anything yet unless user approves**.

**Exit evidence:** Environment check + approved implementation outline + no surprise file modifications. **STOP and wait.**

### Phase 1 — Foundation (approval gate)

**After approved:** Initialize React + Vite + Tailwind, routing, base project scripts, shared tokens, responsive global layout, linting and theme state. Run dev server and show working light/dark/system theme shell.

**Check:** `npm run dev` succeeds; no runtime errors; nav links reach real shell pages; theme persists; responsive navbar works. **STOP.**

### Phase 2 — Public marketing website (approval gate)

**After approved:** Build P1–P8 pages in the order specified. Import authorized user-supplied photos into appropriate paths; provide accurate alt text; include real research disclaimers. No fake contact forms, sale claims or user testimonials.

**Check:** Every CTA works, text is not clipped on mobile, all assets load, current vs future claims are correct. **STOP.**

### Phase 3 — Demo Guardian Dashboard (approval gate)

**After approved:** Add separate dashboard shell, seeded DemoProvider, working bento stats, simulator, warnings, mock alert list, analytics chart, simulated settings, demo source badges, reset and offline/error views. Do **not** set up Firebase or ESP32.

**Check:** User can change simulated distance and see both motor states respond, chart/table stay consistent with the same demo data, simulated settings affect only simulator, offline state clearly states no sensing. **STOP.**

### Phase 4 — Polish, accessibility and usability (approval gate)

**After approved:** Check keyboard navigation, focus order, contrast, screen reader labels, 200–400% zoom, reduced motion, mobile responsive breakpoints, empty/loading states and automated audits where available. Fix documented issues within approval scope.

**Check:** Functional checklist complete; build/lint/tests pass; issues and limitations documented. **STOP.**

### Phase 5 — Backend/integration architecture (approval gate)

**ONLY WHEN USER REQUESTS:** Decide Firebase Realtime Database (default) vs MongoDB+Socket.io, REST/WebSockets vs MQTT, data model, API endpoints, authentication, per-device authorization, security/retention. Request credentials from user through safe configuration; never write them in chat or Git.

**Check:** Architecture approved, no secrets exposed, connection errors handled. **STOP.**

### Phase 6 — Hardware connection (approval gate)

**ONLY WHEN USER CONFIRMS HARDWARE CHANGE:** Confirm whether an ESP32, GPS module, power management and physical SOS are actually available. Make explicit wiring/pin-out and electrical review; never assume UNO wiring equals ESP32 wiring. Build and test telemetry against synthetic data first; then limited hardware test after approval. Keep safety-critical alert operation local, not dependent on Internet.

**Check:** Actual telemetry marked `LIVE VERIFIED` only after a real connection and validation. **STOP.**

### Phase 7 — Authentication, sharing & real alerts (approval gate)

**After approval:** Add secure login, wearer/guardian consent, device pairing, access revocation and verified alert delivery status. Test only in a controlled non-emergency environment.

**Check:** Unauthorized access rejected; wearer can revoke sharing; no SOS false claim. **STOP.**

### Phase 8 — Optional enhancements (separate approvals)

PWA, optional audio, extra directional sensors, AI recognition, consent-based caregiver sharing, richer analytics and deployment are each independent user decisions. Never add them as “quick extras.”

### Phase 9 — Deployment (separate explicit approval)

Only after local build is accepted: review hosting, environment variables, privacy policy, data retention, cost expectations, error logging, backup, domain name, and third-party data processors. Ask explicitly for **permission to publish** and which accounts/domain to use. Show actual result, costs, logs and rollback plan. **STOP.**

---

## 11. QA Acceptance Checklist (agent must report evidence, not just check boxes)

### Navigation & design

- [ ] Home, About, How It Works, Prototype, Research, Roadmap, Team and FAQ function.
- [ ] Dashboard overview, monitor, analytics, alerts, location, settings and preferences route correctly.
- [ ] Desktop/tablet/mobile layouts remain usable and without horizontal scrolling.
- [ ] Dark/light/system modes work; preferences persist.
- [ ] Buttons, navigation links, toggles and forms do what their labels promise.
- [ ] No unlicensed assets, broken icons, missing images, fake purchase buttons or unsupported copy.

### Device-data truthfulness

- [ ] `DEMO` label stays visible wherever simulated values appear.
- [ ] Both motor visuals activate together for frontal proximity warnings.
- [ ] Current UNO prototype is distinct from future ESP32-connected concept.
- [ ] Missing sensor data means `Unavailable/Offline`, **not** `Safe`.
- [ ] GPS/SOS/battery measurements are not misrepresented as current live functions.
- [ ] No silently substituted demo numbers if live feed fails.

### Accessibility & reliability

- [ ] Keyboard-only flow covers navigation, simulator, filters and settings.
- [ ] Correct headings, landmarks, field labels, alt text and visible focus.
- [ ] User can understand hazard states without color alone.
- [ ] Accessible chart summaries and data tables available.
- [ ] Screen-reader status update rate is limited.
- [ ] Reduced-motion preference honored.
- [ ] `npm run build` and agreed lint/test scripts pass.
- [ ] Source code is understandable, no plaintext secrets or public location leaks.

### User review

- [ ] Screenshots provided for mobile and desktop views.
- [ ] Changes and test results summarized in ordinary language.
- [ ] Outstanding issues documented without hiding failures.
- [ ] Agent asks next approval; no autonomous phase switching.

---

## 12. Suggested Git / Quality Conventions

- Prefer one feature/module per approval cycle; explain each commit before committing.
- Meaningful commit messages: `feat: add demo distance simulator`, `fix: clarify offline state`.
- User reviews new dependencies; avoid oversized UI frameworks just for appearance.
- Keep sensitive information out of repo using `.gitignore` and `.env.example`.
- Never push to GitHub or connect external account without authorization.
- Keep `docs/decisions.md` for architecture changes; this spec should remain the reference unless the user approves a revised version.

---

## 13. Copy-Paste Antigravity Prompts — Use One at a Time

The following commands are **prompts**, not automatic permission for later phases. They are deliberately scoped. Paste only the one you want to authorize after reviewing the plan.

**Prompt A — Read only, NO CODING**

```text
Read AURA_GUIDE_ANTIGRAVITY_MASTER_PRD.md fully. Do not edit or create files, run commands, install packages, or generate app code. Briefly summarize what exists now vs. what is proposed, state Phase 0 checks, list any missing info, and ask permission to start Phase 0.
```

**Prompt B — Approve only the frontend foundation**

```text
I approve Phase 1 only. Before changing files, list your intended files and commands. Implement the React + Vite + Tailwind foundation, routing shell, responsive futuristic design tokens, and working Light/Dark/System theme. Do not build the dashboard, set up backend/Firebase, or work on hardware. Run agreed checks, explain how to view locally, then STOP and ask for Phase 2 approval.
```

**Prompt C — Approve only public pages**

```text
I approve Phase 2 only. Build the AURA GUIDE public website pages exactly as specified, using user-provided images where available and a clear distinction between current hardware and future features. Keep research n=10 labels. Do not add fake testimonials, account integrations or backend. Test navigation and responsive layouts; show screenshots; STOP.
```

**Prompt D — Approve only interactive demo dashboard**

```text
I approve Phase 3 only. Add an interactive demo Guardian Dashboard with a separate DemoProvider; proximity slider, both-motor warning animation, demo charts, sample alerts, settings and offline states. Prominently show DEMO / NO DEVICE CONNECTED. Do not connect GPS, Firebase, ESP32 or emergency services. Verify accessibility and functionality; STOP.
```

**Prompt E — Review before next phase**

```text
Do not change code. Audit the last phase against Section 11 acceptance checklist, explain what works, what failed, and the three highest-impact improvements. Give the smallest recommended next task and ask for permission.
```

**Prompt F — Halt**

```text
STOP. Do not modify anything else. Summarize current files, last completed phase, uncommitted changes, open blockers, and the exact local steps required to resume later.
```

---

## 14. Decision Register — Ask When Relevant, Not All Upfront

| Decision | Current default | Ask before |
|---|---|---|
| Scope | Public website **and** dashboard | Changing either |
| Theme | Premium futuristic navy/cyan, dark/light/system | Redesigning |
| MVP data | Simulation only | Replacing with backend |
| Sensor logic | One front sensor, both motors together | Claiming side direction |
| Frontend | React/Vite/Tailwind + recommended TypeScript | Foundation implementation |
| Database | Firebase Realtime Database preferred; MongoDB alternative | Live backend phase |
| Protocol | MQTT **or** REST/WebSockets undecided | Firmware/API phase |
| Photos | User-supplied files, not embedded in this MD | Importing images into repo |
| Real user survey | n=10 exploratory | Claiming general effectiveness |
| Tracking/SOS | Demo-only / future | Any real implementation |
| Accounts/deployment | No accounts, no deployment yet | Auth/cloud/publish |

---

## 15. Sources & Document Provenance

1. **Primary source provided by user:** `aura_guide_ai_agent_prd.md` (Aura Guide Phase 2 PRD). The original five feature categories, proposed ESP32 stack, React/Vite/Tailwind stack, backend options and sample JSON schema are retained in this master specification.
2. **Additional user project context:** `Aura Guide — Spatial Awareness Wearable Product Pitch.pptx` and shared prototype information; used to distinguish the actual UNO prototype from proposed ESP32 hardware, and for exploratory survey summaries. **Re-check any revised user specifications before live integration.**
3. **Official Google Antigravity documentation** (installation, project creation, agent approval and rules): <https://www.antigravity.google/docs/getting-started?tab=ide>, <https://www.antigravity.google/docs/rules/> (checked 2026-10-17). UI labels may evolve.
4. **Accessibility reference:** W3C WCAG 2.2, <https://www.w3.org/TR/WCAG22/>. Audit actual implementation rather than assuming compliance from this document.

### Final instruction to the AI agent

**You have finished reading the specification. Do not build anything until the user grants explicit permission for the first scoped phase. Begin by asking to start Phase 0.**
