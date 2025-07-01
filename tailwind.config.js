/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1992d4', // modern blue-teal
          dark: '#176ca6',
          light: '#e6f6fb',
        },
        accent: {
          DEFAULT: '#fbbf24', // soft gold
          dark: '#f59e0b',
        },
        neutral: {
          light: '#f8fafc', // very light gray
          dark: '#1e293b', // dark blue-gray
        },
      },
    },
  },
  plugins: [],
};
