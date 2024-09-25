/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'double-bubble': "url('../public/images/double-bubble-outline.png')",
        'double-bubble-dark': "url('../public/images/double-bubble-outline-dark.png')",
      },
      animation: {
        flow: 'flow 60s linear infinite',
      },
      keyframes: {
        flow: {
          '0%': {
            'background-position': '0 0',
          },
          '100%': {
            'background-position': '-100% 100%',
          },
        },
      },
    },
  },
  plugins: [],
};
