/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          950: '#200307',
          900: '#360810',
          800: '#4A0E17',
          700: '#5E121E',
          600: '#7B1827',
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FAF6F0',
          200: '#F5EFEB',
          300: '#EBE2D5',
        },
        gold: {
          100: '#FDF8E8',
          200: '#F9ECC5',
          300: '#F3E5AB',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#AA771C',
          800: '#855810',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA771C 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, #F3E5AB 0%, #D4AF37 60%, #AA771C 100%)',
        'maroon-gradient': 'linear-gradient(180deg, #360810 0%, #4A0E17 50%, #360810 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(74, 14, 23, 0.85) 0%, rgba(54, 8, 16, 0.95) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.4)',
        'maroon-card': '0 10px 30px -5px rgba(32, 3, 7, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
