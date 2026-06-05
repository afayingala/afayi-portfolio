/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas:   '#0D0D0D',
        surface:  '#141414',
        surface2: '#1A1A1A',
        edge:     '#2A2A2A',
        ink:      '#F5F0E8',
        muted:    '#7A7A7A',
        gold:     '#C9A96E',
        gold2:    '#8B7355',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
