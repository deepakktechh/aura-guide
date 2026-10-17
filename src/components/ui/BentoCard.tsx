import React from 'react';

interface BentoCardProps {
  title?: string;
  subtitle?: string;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  title,
  subtitle,
  badge,
  icon,
  headerAction,
  children,
  className = '',
  elevated = false,
}) => {
  return (
    <div
      className={`rounded-card transition-all duration-200 border ${
        elevated
          ? 'bg-aura-light-surface dark:bg-aura-dark-surface border-aura-light-border/80 dark:border-aura-dark-border shadow-aura-elevated'
          : 'bg-aura-light-card/80 dark:bg-aura-dark-card/90 border-aura-light-border dark:border-aura-dark-border/70 shadow-aura-card'
      } p-5 sm:p-6 ${className}`}
    >
      {(title || subtitle || icon || headerAction || badge) && (
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="p-2.5 rounded-control bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border/80 text-aura-light-action dark:text-aura-dark-cyan">
                {icon}
              </div>
            )}
            <div>
              <div className="flex items-center gap-2">
                {title && <h3 className="font-heading font-semibold text-lg text-aura-light-text dark:text-aura-dark-text tracking-tight">{title}</h3>}
                {badge}
              </div>
              {subtitle && <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {headerAction && <div className="flex-shrink-0">{headerAction}</div>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};
