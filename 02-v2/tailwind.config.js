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
      'lightBlue1': '#D7E1E7',
      'lightBlue2': '#D1E0EA',
      'lightBlue3': '#ACBECA',
      'fadedBlack': 'rgba(0, 0, 0, 0.2)',
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
        'gears': "url('/src/home/images/Gears_White_1.png')",
        'hourglass': " url('/src/home/images/Hourglass_White_1.png')",
        'lightbulb': "url('/src/home/images/Lightbulb_White_1.png')",
        'money': "url('/src/home/images/Money_White_1.svg')",
        'whiteFade': "linear-gradient(0deg, rgba(242,242,242,.95) 0%, rgba(242,242,242,0) 100%)",
        'whiteFade2': "linear-gradient(0deg, rgba(242,242,242,1) 0%, rgba(242,242,242,1) 10%, rgba(242,242,242,0) 50%)",
        'blueFade': "linear-gradient(0deg, rgba(17,57,83,1) 0%, rgba(17,57,83,1) 10%, rgba(17,57,83,0) 50%)",
        'aboutHero': "url('/src/about/images/gearsOnPedestal.svg')",
        'hoverGradient': "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
        'popupGradient': "linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))"
      },
      spacing: {
        '120': '60vh',
        '128': '32rem',
        '150': '47.5rem',
        '160': '80vh',
        '200': '120vh',
      },
      animation: {
        'scrollRight': 'scrollRight 1s linear infinite',
        'scrollLeft': 'scrollLeft 1s linear infinite',
        'fadeInUp': 'fadeInUp 1s ease-in-out',
      },
      keyframes: {
        scrollRight: {
          to: { transform: 'translateX(-300px)' }
        },
        scrollLeft: {
          to: { transform: 'translateX(300px)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      dropShadow: {
        '3xl': '0 0 15px rgba(0, 0, 0, 0.80)',
      },
    },
  },
  plugins: [],
}
