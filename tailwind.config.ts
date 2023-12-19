import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundcolor: 'var(--backgroundcolor)',
        itembgcolor: 'var(--itembgcolor)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        leagueSpartan: ['League Spartan', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config