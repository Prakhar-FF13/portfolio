import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundcolor: 'var(--backgroundcolor)',
        itembgcolor: 'var(--itembgcolor)',
      }
    },
  },
  plugins: [],
} satisfies Config