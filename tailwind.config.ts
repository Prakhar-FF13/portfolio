import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundcolor: 'var(--backgroundcolor)',
        itembgcolor: 'var(--itembgcolor)',
        textcolormain: 'var(--textcolormain)',
        hellosvgcolor: 'var(--hellosvgcolor)',
        primarycolor1: 'var(--primarycolor1)',
        primarycolor2: 'var(--primarycolor2)',
        gradientcolor1: 'var(--gradientcolor1)',
        gradientcolor2: 'var(--gradientcolor2)',
        twittercolor: 'var(--twittercolor)',
        linkedincolor: 'var(--linkedincolor)',
        mailcolor: 'var(--mailcolor)',
        navbaractive: 'var(--navbaractive)',
        navbarhover: 'var(--navbarhover)',
        navbarnormal: 'var(--navbarnormal)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        leagueSpartan: ['League Spartan', 'sans-serif'],
      },
      screens: {
        miniscule: "100px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      }
    },
  },
  plugins: [],
} satisfies Config