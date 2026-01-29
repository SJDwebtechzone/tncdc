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
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
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
