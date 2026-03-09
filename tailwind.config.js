/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#011336',
          dark: '#000d26',
          light: '#0a2a6e',
        },
        coral: {
          DEFAULT: '#FF784F',
          dark: '#e05c33',
          light: '#ff9b80',
        },
        ash: '#BFC0B3',
        khaki: '#ABA39A',
        cream: '#FDFCF3',
        warm: {
          50: '#FDFCF3',
          100: '#F5F2E8',
          200: '#EDE8D8',
          300: '#DDD5C0',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        script: ['Dancing Script', 'cursive'],
        body: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
