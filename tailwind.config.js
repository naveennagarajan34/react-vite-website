/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#FDFBF7',
        card: '#FFFFFF',
        chip: '#F9F6F0',
        charcoal: {
          DEFAULT: '#333333',
          dark: '#1F2421',
          black: '#1A1A1A',
          muted: '#555555',
        },
        champagne: {
          DEFAULT: '#D4AF37',
          light: '#E6D3A3',
          deep: '#8C6A16',
          muted: '#A88127',
        },
        gold: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#E6D3A3',
          300: '#D4AF37',
          400: '#A88127',
          500: '#8C6A16',
          600: '#75560F',
          700: '#5E4409',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 12px 32px rgba(0, 0, 0, 0.06)',
        'luxury-sm': '0 4px 16px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
