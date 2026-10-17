import React, { useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useDemoDevice } from '../../context/DemoDeviceContext';
import { useTheme } from '../../context/ThemeContext';
import {
  Compass,
  LayoutDashboard,
  Activity,
  BarChart3,
  BellRing,
  MapPin,
  Sliders,
  Settings,
  Sun,
  Moon,
  Laptop,
  ArrowLeft,
  RotateCcw,
  Battery,
  Wifi,
  WifiOff,
  Menu,
  X,
  AlertTriangle,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const DashboardLayout: React.FC = () => {
  const { status, config, resetDemoDefaults, alerts } = useDemoDevice();
  const { theme, setTheme } = useTheme();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Overview', path: '/dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
    { label: 'Live Monitor', path: '/dashboard/monitor', icon: <Activity className="w-4 h-4" /> },
    { label: 'Analytics', path: '/dashboard/analytics', icon: <BarChart3 className="w-4 h-4" /> },
    {
      label: 'Alerts & SOS',
      path: '/dashboard/alerts',
      icon: <BellRing className="w-4 h-4" />,
      badge: alerts.length > 0 ? alerts.length : undefined,
    },
    { label: 'Location Map', path: '/dashboard/location', icon: <MapPin className="w-4 h-4" /> },
    { label: 'Device Settings', path: '/dashboard/settings', icon: <Sliders className="w-4 h-4" /> },
    { label: 'Preferences', path: '/dashboard/preferences', icon: <Settings className="w-4 h-4" /> },
  ];

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  return (
    <div className="min-h-screen flex flex-col bg-aura-light-bg text-aura-light-text dark:bg-aura-dark-bg dark:text-aura-dark-text transition-colors">
      {/* Universal Demo Banner */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 text-white px-4 py-1.5 text-xs font-semibold flex items-center justify-between shadow-sm z-50">
        <div className="flex items-center gap-2">
          <Badge variant="demo" className="bg-white/20 text-white border-white/40">
            DEMO MODE
          </Badge>
          <span className="hidden sm:inline">
            Interactive Guardian Dashboard Simulation — No physical device connected. Values are generated locally.
          </span>
          <span className="sm:hidden">Demo Mode · Local Simulation</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={resetDemoDefaults}
            className="flex items-center gap-1 text-[11px] hover:underline bg-white/10 px-2 py-0.5 rounded text-white"
            title="Reset simulated device thresholds and distance"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo</span>
          </button>
          <Link to="/" className="flex items-center gap-1 text-[11px] hover:underline text-cyan-100">
            <ArrowLeft className="w-3 h-3" />
            <span className="hidden sm:inline">Exit to Website</span>
          </Link>
        </div>
      </div>

      {/* Main Dashboard Navigation Bar */}
      <header className="sticky top-0 z-40 bg-aura-light-surface/95 dark:bg-aura-dark-surface/95 border-b border-aura-light-border dark:border-aura-dark-border backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="lg:hidden p-1.5 rounded-lg text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text"
              aria-label="Toggle dashboard menu"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-aura-light-action dark:bg-aura-dark-cyan text-aura-dark-bg flex items-center justify-center font-bold">
                <Compass className="w-4 h-4 text-aura-dark-bg" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-sm sm:text-base text-aura-light-text dark:text-aura-dark-text">
                  Guardian Dashboard
                </span>
                <span className="text-[9px] uppercase tracking-wider text-cyan-600 dark:text-cyan-400 font-mono font-bold">
                  {status.name}
                </span>
              </div>
            </Link>
          </div>

          {/* Quick status telemetry pills */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Online/Offline status */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-aura-light-border dark:border-aura-dark-border text-xs">
              {config.offlineSimulation ? (
                <>
                  <WifiOff className="w-3.5 h-3.5 text-slate-400" />
                  <span className="font-mono text-slate-400 hidden sm:inline">Sim-Offline</span>
                </>
              ) : (
                <>
                  <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold hidden sm:inline">
                    Sim-Connected
                  </span>
                </>
              )}
            </div>

            {/* Simulated Battery status */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-aura-light-border dark:border-aura-dark-border text-xs font-mono">
              <Battery className="w-3.5 h-3.5 text-cyan-500" />
              <span>{status.batteryLevel}%</span>
              <span className="text-[10px] text-aura-light-muted dark:text-aura-dark-muted hidden md:inline">
                (Sample)
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              aria-label={`Theme: current mode ${theme}. Click to switch.`}
              className="p-1.5 rounded-lg border border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text bg-aura-light-card/60 dark:bg-aura-dark-card/60"
            >
              {theme === 'dark' && <Moon className="w-4 h-4 text-cyan-300" />}
              {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
              {theme === 'system' && <Laptop className="w-4 h-4 text-slate-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Layout Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full flex-grow flex gap-6">
        {/* Desktop Sidebar Navigation */}
        <aside className="hidden lg:block w-60 flex-shrink-0">
          <div className="sticky top-20 rounded-card p-3 bg-aura-light-surface/80 dark:bg-aura-dark-surface/90 border border-aura-light-border dark:border-aura-dark-border shadow-sm space-y-1">
            <div className="px-3 py-2 text-[11px] font-mono uppercase tracking-wider text-aura-light-muted dark:text-aura-dark-muted">
              Monitoring Rail
            </div>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/dashboard'}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-control text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-aura-light-action/10 dark:bg-aura-dark-cyan/15 text-aura-light-action dark:text-aura-dark-cyan font-bold border-l-2 border-aura-light-action dark:border-aura-dark-cyan'
                      : 'text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`
                }
              >
                <div className="flex items-center gap-2.5">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {item.badge !== undefined && (
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-500 text-white">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-4 mt-4 border-t border-aura-light-border dark:border-aura-dark-border px-3">
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] space-y-1">
                <span className="font-bold text-blue-900 dark:text-blue-300">Phase 2 Sandbox</span>
                <p className="text-aura-light-muted dark:text-aura-dark-muted text-[10px]">
                  ESP32 wireless telemetry and hardware push-to-alert are in development.
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Navigation Drawer */}
        {mobileSidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
            <div className="w-64 h-full bg-aura-light-surface dark:bg-aura-dark-surface p-4 border-r border-aura-light-border dark:border-aura-dark-border shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-aura-light-border dark:border-aura-dark-border mb-4">
                <span className="font-heading font-bold text-base text-aura-light-text dark:text-aura-dark-text">
                  Dashboard Navigation
                </span>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="p-1 rounded text-aura-light-muted dark:text-aura-dark-muted"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/dashboard'}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-aura-light-action/10 dark:bg-aura-dark-cyan/15 text-aura-light-action dark:text-aura-dark-cyan font-bold'
                          : 'text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text'
                      }`
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-500 text-white">
                        {item.badge}
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Main Dashboard Screen Viewport */}
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
