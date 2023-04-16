/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-tablet': '960px',
        'custom-desktop': '1248px'
      },
      colors: {
        'custom-white': '#FFFFFF',
        'custom-purple': '#3F3CBB',
        'custom-midnight': '#121063',
        'custom-metal': '#565584',
        'custom-tahiti-blue': '#3AB7BF',
        'custom-cool-white': '#ECEBFF',
        'custom-bubble-gum': '#FF77E9',
        'custom-copper-rust': '#78DCCA',
      },
      boxShadow: {
        'custom-sm': '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
        'custom-lg': '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
      },
      fontSize: {
        'custom-xs': ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
        'custom-sm': ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
        'custom-lg': ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
        'custom-xl': ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
        'custom-2xl': ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
        'custom-3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
        'custom-4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
        'custom-5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }],
      }
    },
    fontFamily:{
      'satoshi': 'Satoshi, sans-serif',
      'inter' : 'Inter, sans-serif',
    }
  },
  plugins: [],
}

