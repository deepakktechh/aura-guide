import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import {
  Sun,
  Moon,
  Laptop,
  Menu,
  X,
  Compass,
  LayoutDashboard,
  ShieldAlert,
} from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Prototype', path: '/prototype' },
    { label: 'Research', path: '/research' },
    { label: 'Roadmap', path: '/roadmap' },
    { label: 'Team', path: '/team' },
    { label: 'FAQ', path: '/faq' },
  ];

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else if (theme === 'light') setTheme('system');
    else setTheme('dark');
  };

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-aura-light-surface/90 dark:bg-aura-dark-surface/90 border-b border-aura-light-border dark:border-aura-dark-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          to="/"
          aria-label="Aura Guide home"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aura-light-focus dark:focus-visible:ring-aura-dark-focus rounded-lg px-1 py-1"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-aura-light-action to-cyan-400 dark:from-aura-dark-cyan dark:to-teal-300 flex items-center justify-center text-aura-dark-bg font-bold shadow-sm group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 text-aura-dark-bg" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-aura-light-text dark:text-aura-dark-text group-hover:text-aura-light-action dark:group-hover:text-aura-dark-cyan transition-colors">
              AURA GUIDE
            </span>
            <span className="text-[9px] uppercase tracking-wider text-aura-light-muted dark:text-aura-dark-muted font-medium hidden sm:inline">
              Spatial Awareness Prototype
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-control transition-colors ${
                isCurrent(link.path)
                  ? 'text-aura-light-action dark:text-aura-dark-cyan bg-cyan-500/10 font-semibold'
                  : 'text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text hover:bg-slate-200/40 dark:hover:bg-slate-800/40'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2.5">
          {/* Accessible Theme Toggle */}
          <button
            onClick={cycleTheme}
            aria-label={`Theme: current mode ${theme}. Click to switch.`}
            title={`Mode: ${theme} (Click to toggle)`}
            className="p-2 rounded-control border border-aura-light-border dark:border-aura-dark-border text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text bg-aura-light-card/60 dark:bg-aura-dark-card/60 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors flex items-center gap-1.5 text-xs"
          >
            {theme === 'dark' && <Moon className="w-4 h-4 text-cyan-300" />}
            {theme === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
            {theme === 'system' && <Laptop className="w-4 h-4 text-slate-400" />}
            <span className="capitalize hidden md:inline text-[11px] font-mono">{theme}</span>
          </button>

          {/* Explore Dashboard CTA */}
          <Link to="/dashboard" className="hidden sm:inline-flex">
            <Button size="sm" variant="primary" icon={<LayoutDashboard className="w-4 h-4" />}>
              Explore Dashboard
            </Button>
          </Link>

          {/* Mobile & Tablet Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
            className="lg:hidden p-2 rounded-lg text-aura-light-text dark:text-aura-dark-text hover:bg-slate-200/50 dark:hover:bg-slate-700/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aura-light-focus dark:focus-visible:ring-aura-dark-focus"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-aura-light-border dark:border-aura-dark-border bg-aura-light-surface dark:bg-aura-dark-surface px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isCurrent(link.path)
                    ? 'text-aura-light-action dark:text-aura-dark-cyan bg-cyan-500/10 font-bold'
                    : 'text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-4 border-t border-aura-light-border dark:border-aura-dark-border flex flex-col gap-2">
            <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button size="md" variant="primary" className="w-full" icon={<LayoutDashboard className="w-4 h-4" />}>
                Explore Guardian Dashboard (Demo)
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-1 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Simulated Prototype Mode</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
