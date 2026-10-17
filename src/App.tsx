import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DemoDeviceProvider } from './context/DemoDeviceContext';

// Layouts
import { PublicLayout } from './components/layout/PublicLayout';
import { DashboardLayout } from './components/layout/DashboardLayout';

// Public Pages (P1 - P8)
import { HomePage } from './pages/public/HomePage';
import { AboutPage } from './pages/public/AboutPage';
import { HowItWorksPage } from './pages/public/HowItWorksPage';
import { PrototypePage } from './pages/public/PrototypePage';
import { ResearchPage } from './pages/public/ResearchPage';
import { RoadmapPage } from './pages/public/RoadmapPage';
import { TeamPage } from './pages/public/TeamPage';
import { FaqPage } from './pages/public/FaqPage';

// Dashboard Screens (D1 - D7)
import { DashboardOverview } from './pages/dashboard/DashboardOverview';
import { LiveMonitor } from './pages/dashboard/LiveMonitor';
import { AnalyticsPage } from './pages/dashboard/AnalyticsPage';
import { AlertsSosPage } from './pages/dashboard/AlertsSosPage';
import { LocationPage } from './pages/dashboard/LocationPage';
import { DeviceSettingsPage } from './pages/dashboard/DeviceSettingsPage';
import { PreferencesPage } from './pages/dashboard/PreferencesPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DemoDeviceProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Marketing & Academic Website Routes (P1 - P8) */}
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="how-it-works" element={<HowItWorksPage />} />
              <Route path="prototype" element={<PrototypePage />} />
              <Route path="research" element={<ResearchPage />} />
              <Route path="roadmap" element={<RoadmapPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="faq" element={<FaqPage />} />
            </Route>

            {/* Interactive Guardian Dashboard Sandbox Routes (D1 - D7) */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="monitor" element={<LiveMonitor />} />
              <Route path="analytics" element={<AnalyticsPage />} />
              <Route path="alerts" element={<AlertsSosPage />} />
              <Route path="location" element={<LocationPage />} />
              <Route path="settings" element={<DeviceSettingsPage />} />
              <Route path="preferences" element={<PreferencesPage />} />
            </Route>

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </DemoDeviceProvider>
    </ThemeProvider>
  );
};

export default App;
