/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        /* Premium AI conference palette */
        primary: '#020617',
        secondary: '#0B1120',
        accent: '#6366F1',
        'accent-glow': '#22D3EE',
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
        /* Legacy aliases for gradual migration */
        navy: { DEFAULT: '#0f172a', deep: '#020617', light: '#1e293b' },
      },
      boxShadow: {
        'glow': '0 0 60px rgba(99, 102, 241, 0.25)',
        'glow-cyan': '0 0 50px rgba(34, 211, 238, 0.2)',
        'glow-lg': '0 0 80px rgba(99, 102, 241, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 8px 40px rgba(99, 102, 241, 0.12)',
        'glass': '0 0 0 1px rgba(255,255,255,0.06), 0 0 40px rgba(0,0,0,0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'grid-pulse': 'grid-pulse 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'grid-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
