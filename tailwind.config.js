/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#60A5FA', // blue-400
          DEFAULT: '#3B82F6', // blue-500
          dark: '#2563EB', // blue-600
        },
        secondary: {
          light: '#93C5FD', // blue-300
          DEFAULT: '#60A5FA', // blue-400
          dark: '#3B82F6', // blue-500
        },
        neutral: {
          light: '#F3F4F6', // gray-100
          DEFAULT: '#D1D5DB', // gray-300
          dark: '#4B5563', // gray-600
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
