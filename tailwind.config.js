/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazir', 'sans-serif'], // متن اصلی
        heading: ['Yekan', 'sans-serif'], // عناوین و دکمه‌ها
      },
    },
  },
  plugins: [],
};
