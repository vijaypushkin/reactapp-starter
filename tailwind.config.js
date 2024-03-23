import {theme} from './src/utils/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ...theme.colors,
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        '2.5xl': '1.75rem', // 28px
      },
      spacing: {
        25: '6.25rem', // 100px
        30: '7.5rem', // 120px
      },
    },
  },
  plugins: [],
}

