/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aura: {
          // Dark palette
          dark: {
            bg: '#071321',
            surface: '#102238',
            card: '#142B43',
            text: '#F2F8FF',
            muted: '#B9CBDC',
            border: '#345069',
            cyan: '#36D6E9',
            teal: '#14B8A6',
            focus: '#F9DF74',
          },
          // Light palette
          light: {
            bg: '#F7F3F6',
            surface: '#FFFFFF',
            card: '#FFFFFF',
            text: '#18181B',
            muted: '#71717A',
            border: '#E8E2E8',
            action: '#18181B',
            focus: '#18181B',
          },
          // Status indicators
          status: {
            safe: '#10B981',
            warning: '#F59E0B',
            danger: '#EF4444',
            safeLight: '#117C60',
            warningLight: '#B45309',
            dangerLight: '#B91C1C',
          }
        },
        lime: {
          DEFAULT: '#d2ee38',
          hover: '#bfdd25',
          deep: '#84a914',
          subtle: 'rgba(210, 238, 56, 0.15)',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'control': '10px',
        'card': '16px',
        'feature': '24px',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(54, 214, 233, 0.25)',
        'glow-amber': '0 0 25px -5px rgba(245, 158, 11, 0.3)',
        'glow-red': '0 0 25px -5px rgba(239, 68, 68, 0.35)',
        'aura-card': '0 4px 20px -2px rgba(7, 19, 33, 0.1)',
        'aura-elevated': '0 10px 30px -5px rgba(7, 19, 33, 0.2)',
      }
    },
  },
  plugins: [],
}
