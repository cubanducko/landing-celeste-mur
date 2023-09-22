import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#000',
          accent: '#91a36e',
          detail: '#91a36e',
        },
        secondary: {
          main: '#facd9d',
          accent: '#f5b17d',
        },
        typography: {
          main: 'rgb(51, 51, 51)',
          secondary: '#777',
        },
      },
    },
  },
  plugins: [],
}

export default config
