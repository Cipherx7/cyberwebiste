// import type { Config } from 'tailwindcss'

// const config: Config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}'
//   ],
//   darkMode: ['class', "data-theme='dark'"],
//   theme: {
//     extend: {
//       colors: {
//         primary: 'rgb(var(--color-primary) / <alpha-value>)',
//         secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
//         secondaryHover: 'rgb(var(--color-secondary-hover) / <alpha-value>)',
//         textLight: 'rgb(var(--color-text-light) / <alpha-value>)',
//         target: 'rgb(var(--color-target) / <alpha-value>)'
//       }
//     },
//     screens: {
//       md: { max: '865px' },
//       sm: { max: '670px' }
//     }
//   },
//   plugins: []
// }
// export default config
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class', "data-theme='dark'"],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a', // Cyber Black
        secondary: '#1a1a1a', // Cyber Gray
        secondaryHover: '#2a2a2a',
        textLight: '#e5e5e5',
        target: '#facc15', // Neon Yellow
        accent: '#00f0ff', // Neon Blue
        'cyber-dark': '#050505',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'cyber-grid': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
    },
    // Removed custom screens to use default mobile-first breakpoints
  },
  plugins: []
}

export default config
