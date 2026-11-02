'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  ease?: string;
  start?: string;
}

/**
 * Hook for smooth, cinematic scroll reveal animations on child elements
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  selector: string,
  options: RevealOptions = {}
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const {
      y = 36,
      opacity = 0,
      duration = 0.85,
      delay = 0,
      stagger = 0.12,
      ease = 'power3.out',
      start = 'top 85%',
    } = options;

    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector);
      if (!elements || elements.length === 0) return;

      gsap.fromTo(
        elements,
        {
          opacity,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selector, options]);

  return containerRef;
}

/**
 * Hook for subtle cursor-following 3D magnetic/tilt effect
 */
export function useCardTilt<T extends HTMLElement = HTMLDivElement>(maxRotation = 8) {
  const cardRef = useRef<T>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let bounds: DOMRect;

    const onMouseEnter = () => {
      bounds = card.getBoundingClientRect();
      gsap.to(card, {
        scale: 1.02,
        duration: 0.35,
        ease: 'power2.out',
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = (mouseX / bounds.width - 0.5) * 2;
      const yPct = (mouseY / bounds.height - 0.5) * 2;

      gsap.to(card, {
        rotateY: xPct * maxRotation,
        rotateX: -yPct * maxRotation,
        transformPerspective: 1000,
        duration: 0.4,
        ease: 'power1.out',
      });
    };

    const onMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', onMouseEnter);
      card.removeEventListener('mousemove', onMouseMove);
      card.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [maxRotation]);

  return cardRef;
}
