'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import { DemoDeviceProvider } from '@/context/DemoDeviceContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DemoDeviceProvider>
        {children}
      </DemoDeviceProvider>
    </ThemeProvider>
  );
}

