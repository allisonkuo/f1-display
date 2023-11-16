import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'f1-red': '#EE0000',
        'f1-teal': '#00CCCC',
        'f1-dark-grey': '#343434',
        'f1-grey': '#424242',
        'f1-light-grey': '#D2D2D2',
        'gradient-dark-red': '#3B0101',
      },
      fontFamily: {
        'display': ['var(--font-bungee)'],
        sans: ['var(--font-montserrat)', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['11px', '1rem'],
        'year': ['125px', '125px'],
      },
    },
  },
  plugins: [],
}
export default config
