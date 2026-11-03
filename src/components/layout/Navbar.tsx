'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '@/components/common/CompatLink';
import { useTheme } from '../../context/ThemeContext';
import {
  Sun,
  Moon,
  Menu,
  X,
  Heart,
  ShoppingBag,
  ArrowRight,
  LayoutDashboard,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Prototype', path: '/prototype' },
    { label: 'Vision', path: '/roadmap' },
    { label: 'Research', path: '/research' },
  ];

  // Track scroll progress for sleek motion indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isCurrent = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#F7F3F6]/90 dark:bg-[#0c0e10]/90 border-b border-zinc-200/70 dark:border-white/10 text-zinc-900 dark:text-white transition-colors duration-200">
      
      {/* Scroll-triggered progress line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-zinc-950 dark:bg-white transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
        
        {/* Brand Wordmark matching exact user logo specification */}
        <Link
          to="/"
          aria-label="Aura Guide home"
          className="flex items-center gap-2.5 group focus-visible:outline-none"
        >
          {/* Black circle with 8-tooth white cog/aperture icon matching user image */}
          <div className="w-8 h-8 rounded-full bg-zinc-950 dark:bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 6.5C8.962 6.5 6.5 8.962 6.5 12C6.5 15.038 8.962 17.5 12 17.5C15.038 17.5 17.5 15.038 17.5 12C17.5 8.962 15.038 6.5 12 6.5ZM12 9.2C10.4536 9.2 9.2 10.4536 9.2 12C9.2 13.5464 10.4536 14.8 12 14.8C13.5464 14.8 14.8 13.5464 14.8 12C14.8 10.4536 13.5464 9.2 12 9.2Z"
                className="fill-white dark:fill-zinc-950"
              />
              {/* 8 Cog Teeth */}
              <rect x="10.8" y="4.5" width="2.4" height="2.5" rx="0.4" className="fill-white dark:fill-zinc-950" />
              <rect x="10.8" y="17" width="2.4" height="2.5" rx="0.4" className="fill-white dark:fill-zinc-950" />
              <rect x="4.5" y="10.8" width="2.5" height="2.4" rx="0.4" className="fill-white dark:fill-zinc-950" />
              <rect x="17" y="10.8" width="2.5" height="2.4" rx="0.4" className="fill-white dark:fill-zinc-950" />
              <rect x="10.8" y="4.5" width="2.4" height="2.5" rx="0.4" transform="rotate(45 12 12)" className="fill-white dark:fill-zinc-950" />
              <rect x="10.8" y="17" width="2.4" height="2.5" rx="0.4" transform="rotate(45 12 12)" className="fill-white dark:fill-zinc-950" />
              <rect x="4.5" y="10.8" width="2.5" height="2.4" rx="0.4" transform="rotate(45 12 12)" className="fill-white dark:fill-zinc-950" />
              <rect x="17" y="10.8" width="2.5" height="2.4" rx="0.4" transform="rotate(45 12 12)" className="fill-white dark:fill-zinc-950" />
            </svg>
          </div>
          
          {/* Stacked Wordmark: AURA in bold black, GUIDE in grey */}
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-sm tracking-tight text-zinc-950 dark:text-white uppercase">
              AURA
            </span>
            <span className="font-heading font-medium text-[11px] tracking-wider text-zinc-400 dark:text-zinc-500 uppercase mt-0.5">
              GUIDE
            </span>
          </div>
        </Link>

        {/* Center Navigation Links matching minimalist aesthetic */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs lg:text-sm font-sans tracking-tight transition-colors ${
                isCurrent(link.path)
                  ? 'text-zinc-950 dark:text-white font-semibold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Icons matching reference template */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Wishlist / Save icon in circular button */}
          <Link
            to="/about"
            title="Saved features"
            aria-label="Features info"
            className="hidden sm:flex w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 transition-all shadow-sm"
          >
            <Heart className="w-4 h-4 stroke-[1.8]" />
          </Link>

          {/* Cart / Prototype Badge matching reference dark circle with count badge */}
          <Link
            to="/prototype"
            title="Prototype hardware specs"
            aria-label="Prototype hardware"
            className="hidden sm:flex relative w-9 h-9 rounded-full bg-zinc-900 dark:bg-zinc-800 text-white items-center justify-center hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-all shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.8]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 text-[10px] font-bold flex items-center justify-center shadow-xs">
              3
            </span>
          </Link>

          {/* Dark Minimal Pill Button: "Dashboard" / "Login" like reference */}
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 text-[11px] sm:text-xs font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 active:scale-95 transition-all shadow-sm whitespace-nowrap"
          >
            <span className="hidden xs:inline">Guardian Demo</span>
            <span className="xs:hidden">Demo</span>
          </Link>

          {/* Minimal Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="w-9 h-9 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-all shadow-sm ml-1"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-zinc-700" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 rounded-lg text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 ml-1"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-white/10 bg-[#F7F3F6] dark:bg-[#0c0e10] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                  isCurrent(link.path)
                    ? 'text-zinc-950 dark:text-white bg-black/5 dark:bg-white/10 font-bold'
                    : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-2">
            <Link
              to="/prototype"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-zinc-950 text-white font-medium text-xs"
            >
              <span>Explore Prototype</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full border border-zinc-300 dark:border-white/20 text-zinc-900 dark:text-white text-xs"
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Guardian Dashboard (Demo)</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
