'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Minimal 3‑D review section that appears at the bottom of the page.
 * It animates with a subtle pop‑up when the user scrolls into view.
 */
export const Reviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.review-card',
        { opacity: 0, y: 40, rotateY: -15, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Sample static reviews – replace with real data later.
  const reviews = [
    { author: 'Anjali Patel', text: 'AURA GUIDE changed how I navigate the city – effortless and safe.' },
    { author: 'Rohit Kumar', text: 'The haptic feedback feels natural, and the battery lasts all day.' },
    { author: 'Lina Chen', text: 'Sleek design, minimal UI – love the minimal 3‑D look!' },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full py-12 bg-zinc-50 dark:bg-zinc-900 text-center"
    >
      <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200">
        <span className="inline-block transform-gpu rotate-6 mr-2" role="img" aria-label="star">
          {/* Minimal 3‑D star icon */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-amber-500"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </span>
        What Users Say
      </h2>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3 px-4">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="review-card p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md transition-transform duration-300"
          >
            <p className="italic text-zinc-700 dark:text-zinc-300 mb-2">"{rev.text}"</p>
            <p className="font-semibold text-zinc-900 dark:text-zinc-100">- {rev.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

