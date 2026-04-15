/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary:      'var(--bg-primary)',
          secondary:    'var(--bg-secondary)',
          tertiary:     'var(--bg-tertiary)',
          card:         'var(--bg-card)',
          'card-hover': 'var(--bg-card-hover)',
        },
        accent: {
          primary:            'var(--accent-primary)',
          'primary-hover':    'var(--accent-primary-hover)',
          'primary-subtle':   'var(--accent-primary-subtle)',
          'primary-muted':    'var(--accent-primary-muted)',
          secondary:          'var(--accent-secondary)',
          'secondary-hover':  'var(--accent-secondary-hover)',
          'secondary-subtle': 'var(--accent-secondary-subtle)',
        },
        text: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary:  'var(--text-tertiary)',
          inverse:   'var(--text-inverse)',
          ai:        'var(--text-ai)',
        },
        border: {
          default: 'var(--border-default)',
          strong:  'var(--border-strong)',
          focus:   'var(--border-focus)',
          ai:      'var(--border-ai)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
        mono:    ['var(--font-mono)'],
        serif:   ['var(--font-serif)'],
      },
      borderRadius: {
        sm:   'var(--radius-sm)',
        md:   'var(--radius-md)',
        lg:   'var(--radius-lg)',
        xl:   'var(--radius-xl)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card:         'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        modal:        'var(--shadow-modal)',
        prompt:       'var(--shadow-prompt)',
      },
      maxWidth: {
        content:  '720px',
        platform: '1280px',
      },
    },
  },
  plugins: [],
};
