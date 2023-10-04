import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'blue': '#7573E4',
      'blue-dark':'#220083',
      'purple': '#9272EE',
      'gray': '#727272',
      'gray-light': '#d3dce6',
      'gray-dark':'#1F1F22',
      'gray-purple': '#3B3B4F',
      'offshade-purple': '#5B5B9B',
      'offwhite': '#D9D9D9',
      'offblack': '#232324',
      'white': '#FFFFFF',
      'transparent':'transparent',
    },
    extend: {
      backgroundImage: {
        'eeaobanner': "url('/images/Banners/mainbanner.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
