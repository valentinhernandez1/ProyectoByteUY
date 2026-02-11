/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f5f9',
          100: '#e2e8f0',
          200: '#cbd5e1',
          300: '#94a3b8',
          400: '#64748b',
          500: '#475569',
          600: '#334155',
          700: '#1e293b',
          800: '#0f172a',
          900: '#0c1322',
        },
        accent: {
          DEFAULT: '#0ea5e9',
          light: '#38bdf8',
          dark: '#0284c7',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw + 1rem, 3.75rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.06)',
      },
    },
  },
  plugins: [],
}

