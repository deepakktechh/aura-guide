'use client';
import React from 'react';
import { MasterHero } from '../../components/home/MasterHero';
import { MasterChallenge } from '../../components/home/MasterChallenge';
import { MasterIdea } from '../../components/home/MasterIdea';
import { CinematicScrollStory } from '../../components/home/CinematicScrollStory';
import { MasterHowItWorks } from '../../components/home/MasterHowItWorks';
import { MasterPrototype } from '../../components/home/MasterPrototype';
import { MasterVision } from '../../components/home/MasterVision';
import { Reviews } from '../../components/home/Reviews';

export const HomePage: React.FC = () => {
  const handleScrollToDemo = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full space-y-0 selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950 snap-container">
      {/* 00. Hero: Minimal template with Parallax & Floating Motion */}
      <div className="snap-section">
        <MasterHero onScrollToDemo={handleScrollToDemo} />
      </div>

      {/* 01. The Challenge: "A world not designed for everyone." with Key Stats */}
      <div className="snap-section">
        <MasterChallenge />
      </div>

      {/* 02. The Idea: "Give a sixth sense to the real world." */}
      <div className="snap-section">
        <MasterIdea />
      </div>

      {/* 03. Motion Scrolling / Scroll-Triggered Story Experience */}
      <div className="snap-section">
        <CinematicScrollStory />
      </div>

      {/* 04. How It Works: Interactive Tactile Laboratory */}
      <div className="snap-section">
        <MasterHowItWorks />
      </div>

      {/* 05. The Prototype: Hardware Breakdown & Specifications */}
      <div className="snap-section">
        <MasterPrototype />
      </div>

      {/* 06. Our Vision: Inclusive Tomorrow */}
      <div className="snap-section">
        <MasterVision />
      </div>

      {/* 07. Reviews section */}
      <div className="snap-section">
        <Reviews />
      </div>
    </div>
  );
};
