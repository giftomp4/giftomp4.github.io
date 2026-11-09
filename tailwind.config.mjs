/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'honey-gold': '#ECB051',
        'sand-cream': '#F2E2CA',
        'royal-blue': '#166BF3',
        'royal-blue-hover': '#0F52BA',
        'ice-blue': '#E1E8F4',
        'midnight-slate': '#0B1528',
        'dark-card': '#13223E',
        'dark-workspace': '#182B4E',
        'canvas-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'royal': '0 20px 50px -12px rgba(22, 107, 243, 0.22)',
        'honey': '0 16px 40px -10px rgba(236, 176, 81, 0.35)',
        'workspace': '0 24px 60px -15px rgba(11, 21, 40, 0.14)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(22, 107, 243, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(22, 107, 243, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 3.4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.4s infinite',
        'shimmer': 'shimmer 3s ease infinite',
      },
    },
  },
  plugins: [],
};
