/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velvet Plum & Warm Mulberry palette
        plum: {
          950: '#1A081C',
          900: '#240D26', // Deep Blackened Plum (Background)
          800: '#37173B', // Warm Mulberry (Card Canvas)
          700: '#4B1E51',
          600: '#63266B',
          500: '#7D2E87',
        },
        // Mapping maroon to Velvet Plum for seamless backward compatibility
        maroon: {
          950: '#1A081C',
          900: '#240D26', // Deep Blackened Plum
          800: '#37173B', // Warm Mulberry
          700: '#4B1E51',
          600: '#63266B',
        },
        // Silky Soft Rose Ivory
        ivory: {
          50: '#FFFFFF',
          100: '#FAF4F8', // Primary Text: #FAF4F8
          200: '#F5EAF1',
          300: '#EAD9E4',
        },
        // Polished Rose Gold palette
        rosegold: {
          50: '#FFF8F5',
          100: '#FDF0EB',
          200: '#F9DFD5',
          300: '#F5C7B8', // Text Highlight: #F5C7B8
          400: '#EFBDB0',
          500: '#E8B4A2', // Accents & Borders: #E8B4A2
          600: '#D39885',
          700: '#BA7E6C',
          800: '#9C6150',
          900: '#7D4536',
        },
        // Mapping gold to Polished Rose Gold
        gold: {
          50: '#FFF8F5',
          100: '#FDF0EB',
          200: '#F9DFD5',
          300: '#F5C7B8', // Secondary Text: #F5C7B8
          400: '#EFBDB0',
          500: '#E8B4A2', // Accents & Borders: #E8B4A2
          600: '#D39885',
          700: '#BA7E6C',
          800: '#9C6150',
          900: '#7D4536',
        }
      },
      fontFamily: {
        cinzel: ['"Cinzel Decorative"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #FDF0EB 0%, #E8B4A2 50%, #BA7E6C 100%)',
        'rose-shimmer': 'linear-gradient(135deg, #FDF0EB 0%, #E8B4A2 50%, #BA7E6C 100%)',
        'gold-radial': 'radial-gradient(ellipse at center, #FDF0EB 0%, #E8B4A2 60%, #9C6150 100%)',
        'maroon-gradient': 'linear-gradient(180deg, #240D26 0%, #37173B 50%, #240D26 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(55, 23, 59, 0.95) 0%, rgba(36, 13, 38, 0.98) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(232, 180, 162, 0.28)',
        'gold-glow-lg': '0 0 40px rgba(232, 180, 162, 0.45)',
        'maroon-card': '0 10px 30px -5px rgba(26, 8, 28, 0.7)',
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
