/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(0, 217, 255, 0.6) 0%, rgba(157, 78, 221, 0) 100%)",
        'cosmic-glow': "radial-gradient(circle, rgba(0, 217, 255, 0.15) 0%, rgba(123, 44, 191, 0.1) 50%, transparent 100%)"
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(0, 217, 255, 0.08)',
        'glass-sm': '5px 5px 20px 0px rgba(0, 217, 255, 0.4)',
        'cosmic': '0 0 20px rgba(0, 217, 255, 0.3), 0 0 40px rgba(157, 78, 221, 0.2)',
      },
      keyframes:{
      'spin-reverse':{
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(-360deg)'}
      }
      },
      animation:{
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
      screens:{
        xs: '480px',
      }
    },
  },
  plugins: [],
};
