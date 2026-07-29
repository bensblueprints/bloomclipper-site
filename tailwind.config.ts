import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0611',
        panel: '#120b1d',
        panel2: '#1a1029',
        pink: {
          DEFAULT: '#ff2e88',
          soft: '#ff6bb0',
        },
        violet: {
          DEFAULT: '#8b5cf6',
          soft: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'bloom-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(255,46,136,0.22) 0%, rgba(139,92,246,0.12) 45%, rgba(10,6,17,0) 80%)',
        'bloom-line': 'linear-gradient(90deg, #ff2e88 0%, #8b5cf6 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,46,136,0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
