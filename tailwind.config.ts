import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#616DF4',
      },
      boxShadow: {
        header: '0px 4px 12px 0px rgba(189, 189, 189, 0.25)',
        card: '0px 8px 16px 0px rgba(0, 0, 0, 0.10)',
      },
      screens: {
        xs: '478px',
      },
    },
  },
  plugins: [],
}
export default config
