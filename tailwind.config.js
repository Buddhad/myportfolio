/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f7f7f5',
          100: '#eeeae3',
          200: '#d9d3c8',
          300: '#b8b0a0',
          400: '#8f8674',
          500: '#6b6354',
          600: '#4d4639',
          700: '#36312a',
          800: '#232019',
          900: '#16140f',
          950: '#0c0b08',
        },
        accent: {
          50: '#fef9ee',
          100: '#fbf0cc',
          200: '#f7de8f',
          300: '#f0c74a',
          400: '#ebb226',
          500: '#d99216',
          600: '#bc6f12',
          700: '#975213',
          800: '#7c4217',
          900: '#693817',
          950: '#3d1d09',
        },
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
};
