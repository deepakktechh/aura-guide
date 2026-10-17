import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'demo' | 'safe' | 'warning' | 'danger' | 'offline' | 'neutral';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  icon,
}) => {
  const variantStyles = {
    demo: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/30',
    safe: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
    warning: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-500/30',
    danger: 'bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/30',
    offline: 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/30',
    neutral: 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border-blue-500/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide border uppercase ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
};
