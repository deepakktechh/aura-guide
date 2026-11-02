'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { DemoDeviceProvider } from '@/context/DemoDeviceContext';
import { SmoothScrollProvider } from './SmoothScrollProvider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DemoDeviceProvider>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </DemoDeviceProvider>
    </ThemeProvider>
  );
}

