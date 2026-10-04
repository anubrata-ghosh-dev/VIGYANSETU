import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neel:    { DEFAULT: '#12264A', 700: '#1C2D4D', 500: '#3A4C68' },
        sagar:   { DEFAULT: '#0E7C86', 100: '#D3EDEF', 300: '#7FD0D6', 700: '#0B6670' },
        hawa:    '#EAF2F6',
        haldi:   { DEFAULT: '#F2A30F', 100: '#FDEFCB', 700: '#8A5A00' },
        sindoor: { DEFAULT: '#C8372D', 100: '#F9DCD9' },
        patta:   { DEFAULT: '#2E7D4F', 100: '#D9EEE1' },
        jamun:   { DEFAULT: '#6B3FA0', 100: '#E8DFF3' },
        // Backward compatibility aliases
        'vigyan-navy':       '#12264A',
        'vigyan-deepNavy':   '#0B1830',
        'vigyan-blue':       '#0E7C86',
        'vigyan-saffron':    '#F2A30F',
        'vigyan-green':      '#2E7D4F',
        'vigyan-background': '#EAF2F6',
        'vigyan-surface':    '#FFFFFF',
        'vigyan-border':     '#DDE6EC',
        'vigyan-muted':      '#3A4C68',
        'vigyan-body':       '#12264A',
        'vigyan-heading':    '#12264A',
        'vigyan-divider':    '#DDE6EC',
      },
      fontFamily: {
        sans:  ['var(--font-anek)', 'Anek Latin', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Source Serif 4', 'Georgia', 'serif'],
        mono:  ['var(--font-jetbrains)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        noto:  ['Noto Sans', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
        reading: '700px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '14px',
      },
      boxShadow: {
        float: '0 10px 30px rgba(18,38,74,0.16)',
      },
    },
  },
  plugins: [],
};

export default config;
