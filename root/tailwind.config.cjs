/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#00d9ff',
          secondary: '#817df5',
          accent: '#c4fb10',
          neutral: '#ffffff',
          'base-100': '#000428',
          info: '#3ABFF8',
          success: '#34d399',
          warning: '#e68a00',
          error: '#f87171',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
