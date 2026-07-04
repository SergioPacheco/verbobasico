/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spain-red': '#DC2626',
        'spain-red-dark': '#B91C1C',
        'spain-yellow': '#FBBF24',
        'spain-yellow-dark': '#D97706',
        'success': '#10B981',
        'success-light': '#D1FAE5',
        'error': '#EF4444',
        'error-light': '#FEE2E2',
      },
    },
  },
  plugins: [],
}
