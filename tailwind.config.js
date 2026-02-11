export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.015em',
      },
      colors: {
        marina: {
          50: '#f2f7fb',
          100: '#dbeaf7',
          200: '#bcd8f0',
          400: '#5a92d3',
          500: '#3566b8',
          600: '#2b5699'
        },
        navy: {
          50: '#e7eefb',
          100: '#cfdff6',
          300: '#5a6b8a',
          700: '#14213d',
          900: '#081027'
        }
      },
      boxShadow: {
        premium: '0 12px 30px rgba(8,16,39,0.08)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
}
