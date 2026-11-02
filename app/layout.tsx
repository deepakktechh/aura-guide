import type { Metadata } from 'next';
import '@/index.css';
import { Providers } from '@/components/common/Providers';

export const metadata: Metadata = {
  title: 'AURA GUIDE | Wearable Spatial Awareness System',
  description: 'An offline-first, haptic wearable engineered to detect mid-level obstacles through millimetric Time-of-Flight laser telemetry.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-aura-light-bg text-aura-light-text dark:bg-aura-dark-bg dark:text-aura-dark-text font-sans antialiased selection:bg-zinc-950 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950"
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

