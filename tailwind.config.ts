import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        msm: {
          // Core palette extracted from logo columns
          slate:       '#3d4f6b', // primary  — darkest column
          'slate-dark':'#2e3c52', // deeper hover / footer accent
          'slate-mid': '#4a5f7d', // intermediate step
          steel:       '#5a7080', // secondary — middle column
          'steel-mid': '#6a8090', // intermediate step
          mist:        '#8ca5b5', // tertiary  — lightest column
          'mist-light':'#a8bfcc', // tint for subtle backgrounds

          // Warm accent — used sparingly for CTAs, hover states, active indicators
          gold:        '#b8922a',
          'gold-dark': '#9a7820',
          'gold-light':'#d4a83a',

          // Neutral backgrounds
          cream:       '#f8f6f2', // warm off-white, primary light background
          parchment:   '#f2ede6', // slightly warmer, alternate section bg

          // Text
          ink:         '#1a1f2e', // near-black body text on light backgrounds
        },
      },

      fontFamily: {
        serif: ['var(--font-dm-serif)', 'Georgia', 'Times New Roman', 'serif'],
        sans:  ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },

      fontSize: {
        // Display sizes for DM Serif Display headings
        'display-2xl': ['5rem',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl':  ['4rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-lg':  ['3.25rem', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-md':  ['2.5rem',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm':  ['2rem',    { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        // Pull quote size
        'pullquote':   ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
      },

      letterSpacing: {
        'nav':   '0.12em',
        'label': '0.08em',
        'tag':   '0.06em',
      },

      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '26':  '6.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '18px': '18px',
      },

      maxWidth: {
        'reading':   '68ch',  // optimal line length for editorial prose
        'container': '1280px',
        'wide':      '1440px',
      },

      borderRadius: {
        'none': '0',
        DEFAULT: '2px',
        'sm':   '2px',
        'md':   '4px',
        'lg':   '6px',
        'full': '9999px',
      },

      boxShadow: {
        'card':   '0 2px 16px 0 rgba(29, 39, 59, 0.08)',
        'card-lg':'0 4px 32px 0 rgba(29, 39, 59, 0.12)',
        'gold':   '0 0 0 2px #b8922a',
      },

      transitionTimingFunction: {
        'msm': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
        '450': '450ms',
      },

      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fade-in 0.4s ease forwards',
      },

      typography: (theme: (arg: string) => string) => ({
        msm: {
          css: {
            '--tw-prose-body':         theme('colors.msm.ink'),
            '--tw-prose-headings':     theme('colors.msm.slate'),
            '--tw-prose-lead':         theme('colors.msm.steel'),
            '--tw-prose-links':        theme('colors.msm.gold'),
            '--tw-prose-bold':         theme('colors.msm.ink'),
            '--tw-prose-counters':     theme('colors.msm.steel'),
            '--tw-prose-bullets':      theme('colors.msm.mist'),
            '--tw-prose-hr':           theme('colors.msm.mist'),
            '--tw-prose-quotes':       theme('colors.msm.slate'),
            '--tw-prose-quote-borders':theme('colors.msm.gold'),
            '--tw-prose-captions':     theme('colors.msm.steel'),
            '--tw-prose-code':         theme('colors.msm.slate'),
            '--tw-prose-th-borders':   theme('colors.msm.mist'),
            '--tw-prose-td-borders':   theme('colors.msm.mist / 0.5'),
            fontFamily: theme('fontFamily.sans'),
            h1: { fontFamily: theme('fontFamily.serif') },
            h2: { fontFamily: theme('fontFamily.serif') },
            h3: { fontFamily: theme('fontFamily.serif') },
            h4: { fontFamily: theme('fontFamily.serif') },
            'a:hover': { color: theme('colors.msm.gold-dark') },
          },
        },
      }),
    },
  },

  plugins: [typography],
}

export default config
