'use client';
import React, { useState } from 'react';
import { Link } from '@/components/common/CompatLink';
import { ArrowRight, Check, Send } from 'lucide-react';

export const VisionBanner: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-slate-900 border border-aura-light-border dark:border-aura-dark-border/80 shadow-2xl relative grid grid-cols-1 lg:grid-cols-12">
          
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between space-y-8 relative z-10 bg-gradient-to-r from-slate-950 via-slate-900 to-transparent">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                <span>A More Independent Tomorrow</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                Small technology.
                <span className="block text-cyan-400">A bigger, brighter world.</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed">
                AURA GUIDE is a step toward more accessible environments and greater confidence for people with visual impairments. Designed with dignity, transparency, and human-centered feedback.
              </p>
            </div>

            {/* Newsletter / Project updates form */}
            <div className="space-y-3 pt-4">
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-sm">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you for your interest! You'll receive prototype milestone updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email for research updates"
                    className="px-4 py-3 rounded-full bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 flex-1"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-slate-950 font-semibold text-xs sm:text-sm hover:brightness-110 active:scale-95 transition-all shadow-glow-cyan shrink-0"
                  >
                    <span>Get Updates</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-400 font-mono">
                Academic research prototype · Non-commercial updates only
              </p>
            </div>
          </div>

          {/* Image Column (5 cols) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src="/assets/vision-horizon.jpg"
              alt="Person looking toward an expansive horizon at dawn"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            {/* Soft gradient blend */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-slate-900/30 to-slate-900 lg:to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
