/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#113953',
      'purple': '#292945',
      'black': '#0F0F0F',
      'white': '#F2F2F2',
      'gold': '#D3A222',
    },
    fontFamily: {
      sans: ['Oxygen', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'grid-lines': "url('/src/includes/images/grid-lines.svg')",
        'smoke': "url('/src/home/images/Smoke.svg')",
        'gears': "url('/src/home/images/Gears_White_1.svg')",
        'hourglass': "url('/src/home/images/Hourglass_White_1.svg')",
        'lightbulb': "url('/src/home/images/Lightbulb_White_1.svg')",
        'money': "url('/src/home/images/Money_White_1.svg')",
        'whiteFade': "linear-gradient(0deg, rgba(242,242,242,.95) 0%, rgba(242,242,242,0) 100%)",
      },
      spacing: {
        '128': '32rem',
        '150': '47.5rem',
      },
      animation: {
        'scrollRight': 'scrollRight 1s linear infinite',
        'scrollLeft': 'scrollLeft 1s linear infinite',
      },
      keyframes: {
        scrollRight: {
          to: { transform: 'translateX(-300px)' }
        },
        scrollLeft: {
          to: { transform: 'translateX(300px)' }
        }
      },
    },
  },
  plugins: [],
}
