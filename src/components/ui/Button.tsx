import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-control';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 min-h-[36px]',
    md: 'text-sm px-4 py-2.5 gap-2 min-h-[44px]',
    lg: 'text-base px-6 py-3 gap-2.5 min-h-[48px]',
  };

  const variantStyles = {
    primary:
      'bg-aura-light-action dark:bg-aura-dark-cyan text-white dark:text-aura-dark-bg font-semibold hover:opacity-95 shadow-sm hover:shadow-glow-cyan active:scale-[0.98] focus-visible:ring-aura-light-focus dark:focus-visible:ring-aura-dark-focus',
    secondary:
      'bg-aura-light-card dark:bg-aura-dark-card text-aura-light-text dark:text-aura-dark-text border border-aura-light-border dark:border-aura-dark-border hover:bg-slate-200/50 dark:hover:bg-slate-700/40 active:scale-[0.98]',
    ghost:
      'text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text hover:bg-slate-200/40 dark:hover:bg-slate-800/40',
    danger:
      'bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow-sm hover:shadow-glow-red active:scale-[0.98]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};
