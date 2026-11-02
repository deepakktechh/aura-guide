'use client';
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  maxWidth = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative w-full ${maxWidthStyles[maxWidth]} rounded-feature bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-2xl p-6 z-10`}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h2 id="modal-title" className="font-heading font-semibold text-xl text-aura-light-text dark:text-aura-dark-text">
              {title}
            </h2>
            {description && <p className="text-sm text-aura-light-muted dark:text-aura-dark-muted mt-1">{description}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-aura-light-muted dark:text-aura-dark-muted hover:text-aura-light-text dark:hover:text-aura-dark-text hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-2 text-aura-light-text dark:text-aura-dark-text">{children}</div>

        {footer && <div className="mt-6 pt-4 border-t border-aura-light-border dark:border-aura-dark-border flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  );
};
