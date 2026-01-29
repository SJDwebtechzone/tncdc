/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff5733",
        secondary: "#c70039",
        "bg-coral": "rgba(255, 127, 80, 0.1)",
        "bg-pink": "rgba(255, 192, 203, 0.1)",
        "bg-primary-opacity": "rgba(255, 87, 51, 0.1)",
        "bg-secondary-opacity": "rgba(199, 0, 57, 0.1)",
      },
      fontFamily: {
        sans: ['Euclid Circular A', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-infinite': 'scroll-infinite 40s linear infinite',
        'marquee-gradient': 'marquee-gradient 30s linear infinite',
      },
      keyframes: {
        'scroll-infinite': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-gradient': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
