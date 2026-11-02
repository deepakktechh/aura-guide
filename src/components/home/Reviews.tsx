'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Reviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. 3D Pop-up icon entrance with elastic bounce
      if (iconRef.current) {
        gsap.fromTo(
          iconRef.current,
          {
            scale: 0,
            rotateY: -180,
            rotateX: 45,
            opacity: 0,
          },
          {
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'back.out(1.8)',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );

        // Continuous subtle 3D hovering rotation on the star badge
        gsap.to(iconRef.current, {
          rotateY: 15,
          rotateX: -10,
          y: -6,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // 2. Header and badge reveal
      gsap.fromTo(
        '.reviews-header-elem',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // 3. Staggered 3D card pop-up on scroll
      gsap.fromTo(
        '.review-card',
        {
          opacity: 0,
          y: 50,
          rotateX: 18,
          scale: 0.93,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.reviews-grid',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const reviews = [
    {
      author: 'Anjali Patel',
      role: 'Accessibility Advocate & Tester',
      institution: 'Chennai, India',
      text: 'AURA GUIDE changed how I navigate the city -- the bilateral haptic pulses feel completely natural and give confidence against low-hanging hazards.',
      rating: 5,
    },
    {
      author: 'Rohit Kumar',
      role: 'Participant, Exploratory Survey',
      institution: 'SRM Institute of Science & Technology',
      text: 'Having a completely offline device that does not rely on cellular signal or audio earbud occlusion makes traveling through busy train stations significantly safer.',
      rating: 5,
    },
    {
      author: 'Lina Chen',
      role: 'Assistive Tech Researcher',
      institution: 'Mobility Lab',
      text: 'The clean minimal aesthetic, lightweight belt clip, and sub-millimeter Time-of-Flight response provide an elegant complement to standard white canes.',
      rating: 5,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 bg-[#F7F3F6] dark:bg-[#0c0e10] border-t border-zinc-200/70 dark:border-white/10 transition-colors duration-200 overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-amber-100/30 via-purple-100/20 to-sky-100/30 dark:from-white/5 dark:via-transparent dark:to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Minimal 3D floating badge icon */}
        <div className="flex justify-center mb-5">
          <div
            ref={iconRef}
            style={{ perspective: 1000 }}
            className="w-16 h-16 rounded-3xl bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 dark:from-amber-400 dark:to-amber-600 shadow-[0_15px_30px_-8px_rgba(245,158,11,0.5)] p-0.5 flex items-center justify-center transform-gpu cursor-pointer transition-shadow hover:shadow-[0_20px_40px_-5px_rgba(245,158,11,0.65)]"
          >
            <div className="w-full h-full rounded-[22px] bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center border border-white/60 dark:border-white/20 shadow-inner">
              <Star className="w-7 h-7 text-white fill-white dark:text-amber-400 dark:fill-amber-400 drop-shadow-md" />
            </div>
          </div>
        </div>

        {/* Section Tag */}
        <div className="reviews-header-elem inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-mono text-zinc-600 dark:text-zinc-300 mb-4">
          <span className="font-bold text-zinc-950 dark:text-white">06</span>
          <span>/ COMMUNITY &amp; USER FEEDBACK</span>
        </div>

        {/* Section Heading */}
        <h2 className="reviews-header-elem font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-zinc-950 dark:text-white mb-4">
          WHAT TESTERS &amp; RESEARCHERS SAY.
        </h2>

        <p className="reviews-header-elem text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto font-sans mb-14">
          Real feedback from individuals, testers, and academic reviewers who experienced the AURA GUIDE prototype.
        </p>

        {/* 3D Staggered Review Cards Grid */}
        <div className="reviews-grid grid gap-6 md:grid-cols-3 text-left">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{ transformStyle: 'preserve-3d' }}
              className="review-card group relative p-6 sm:p-7 bg-white dark:bg-zinc-900/90 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Quote mark & Star rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-9 h-9 rounded-2xl bg-[#F7F3F6] dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                    <Quote className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-6 font-sans">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <p className="font-heading font-bold text-sm text-zinc-950 dark:text-white">
                  {rev.author}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                  {rev.role}
                </p>
                <p className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 mt-0.5">
                  {rev.institution}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
